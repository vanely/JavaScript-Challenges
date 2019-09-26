/**
 * Given a valid(IPv4) IP address, return a defanged version of that IP address.
 * 
 * A defanged IP address replaces every period "." with "[.]".
 * 
 * @param {string} address
 * @return {string}
 */

const ip1 = "1.1.1.1";
const ip2 = "255.100.50.0";
const ip3 = "192.168.0.1";

const defangIPaddr = (address) => {
	try {
		if (address.split('.').length === 4) {
			return address.split('.').join('[.]');
		} else {
			throw 'Argument must be a valid IPv4 address';
		}
	} catch (e) {
		console.log(e);
	}
};

console.log(defangIPaddr(ip2));