"use strict";

const request = require('request-promise');
const messages = require('elasticio-node').messages;

const API_BASE_URI = 'https://direct.dnb.com/NewsAndMediaProduct/V3.0';

exports.process = processAction;

/**
 * Executes the action's logic by sending a request and emitting response to the platform.
 * The function returns a Promise sending a request and resolving the response as platform message.
 *
 * @param msg incoming messages which is empty for triggers
 * @param cfg object to retrieve triggers configuration values, such as apiKey and pet status
 * @returns promise resolving a message to be emitted to the platform
 */
function processAction(msg, cfg) {

    // access the value of fields defined in credentials section of component.json
	/* example username = P2000003D5720D6CA744D0E9EA844AA3 */
    const username = cfg.username;
	
	const password = cfg.password;
    // body contains the mapped data
    const body = msg.body;

    // access the value of the mapped value into dunsnumber field of the in-metadata
    const dunsnumber = body.dunsnumber;

	/* example DUNSNumber = 884114609 */
    if (!dunsnumber) {
        throw new Error('DUNSNumber is required');
    }

    const productText = '<soapenv:Envelope xmlns:new="http://services.dnb.com/NewsAndMediaProductServiceV2.0" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"><soapenv:Header><wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"><wsse:UsernameToken wsu:Id="UsernameToken-3" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"><wsse:Username>' + username + '</wsse:Username><wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + password + '</wsse:Password></wsse:UsernameToken></wsse:Security></soapenv:Header><soapenv:Body><new:OrderProductRequest ServiceVersionNumber="3.0"><TransactionDetail><ApplicationTransactionID>sample</ApplicationTransactionID></TransactionDetail><OrderProductRequestDetail><InquiryDetail><DUNSNumber>' + dunsnumber + '</DUNSNumber></InquiryDetail><ProductSpecification><DNBProductID>NEWS_MDA</DNBProductID></ProductSpecification><ArchiveDetail><ArchiveProductOptOutIndicator>false</ArchiveProductOptOutIndicator></ArchiveDetail><InquiryReferenceDetail><CustomerReferenceText>sample</CustomerReferenceText><CustomerBillingEndorsementText>sample</CustomerBillingEndorsementText></InquiryReferenceDetail></OrderProductRequestDetail></new:OrderProductRequest></soapenv:Body></soapenv:Envelope>';

	//var product = JSON.parse(productText);
	
    console.log('Get details by DUNSNumber');

    const requestOptions = {
        uri: 'https://direct.dnb.com/NewsAndMediaProduct/V3.0',
        headers: {
            'Content-Type': 'text/xml',
			'SOAPAction': 'http://services.dnb.com/NewsAndMediaProductService/V3.0/OrderProduct'
        },
        body: productText,
        json: false
    };

    // return the promise that sends a request
    return request.post(requestOptions)
        .then((response) => messages.newMessageWithBody(response));
		//.catch(function (err) {console.log(requestOptions); console.log(response)});
}