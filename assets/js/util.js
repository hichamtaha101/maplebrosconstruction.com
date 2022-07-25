/**
 * Test the String to see if it matches an email regex.
 *
 * @param {string} email	Email input value.
 * @returns {boolean} Whether the email provided is valid or not.
 */
export function testEmail( email ) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test( email.toLowerCase() );
}
