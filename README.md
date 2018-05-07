# company-news-dnb-component-nodejs
> Dun & Bradstreet API Node.js component template for the [elastic.io platform](http://www.elastic.io "elastic.io platform")

This is a component for D&B Direct application programming interface that allows you to stream reliable, on-demand business information into enterprise-wide systems, such as Customer Relationship Management (CRM) systems, corporate intranets and web forms, and supply chain management systems or commercial software and web applications.

## Authentication

In order the platform to connect to the D&B Direct API, an account needs to be
created on that service. Below are the steps to do so. Once that is done, you
will provide a valid username and password to the elastic.io platform.
In a production system, the best practice is to create a dedicated
user for the elastic.io platform.  This user should have the minimum required
permissions.

1. You should get an account for the access to D&B Direct API.

   [Register for D&B Direct Access](https://developer.dnb.com/register-v2)
   You will get an email with provided credentials for access.

## Authentication on elastic.io

![Settings - Security credentials](https://user-images.githubusercontent.com/2870129/39698418-6b4efbde-51fd-11e8-9fec-616091eb5e36.JPG)

Fill in the following for your account at Settings - Security credentials - Dun & Bradstreet component (Node.js):
* **Name Your Credential**: Name to identify this account on elastic.io
* **Username**: Username used to login to D&B Direct API
* **Password**: Password used to login to D&B Direct API

# Actions

## Returns news items from D&B Direct API for a given D-U-N-S Number.

Select the component Dun & Bradstreet component (Node.js)

![Component Dun & Bradstreet component (Node.js)](https://user-images.githubusercontent.com/2870129/39698658-55204088-51fe-11e8-905f-15cea3a4a3bc.JPG)

Select the action **Returns news items for a given D-U-N-S Number** (it will be selected by default) and
then configure the following input DUNSNumber:

![Configuration of the DUNSNumber field](https://user-images.githubusercontent.com/2870129/39698703-8c9730b2-51fe-11e8-9907-ffc7c192be4b.JPG)