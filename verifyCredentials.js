"use strict";

module.exports = verify;

/**
 * If required fields were filled, we can assume credentials are valid. Otherwise it is not valid.
 *
 * @param credentials object: Username and Password
 *
 * @returns true
 */
function verify(credentials) {

    // access the value of the apiKey field defined in credentials section of component.json
    const username = credentials.username;
	const password = credentials.password;

    if (!username) {
        throw new Error('Username is missing');
    }
	
    if (!password) {
        throw new Error('Password is missing');
    }

    // if required fields were filled, we can assume credentials are valid
    return true;
}