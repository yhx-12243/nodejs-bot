const sleep = require('sleep-promise');

const utils = {

	decodeMessage(message) {
		return message.replace(/&#91;/gm, '[').replace(/&#93;/gm, ']').replace(/&amp;/gm, '&');
	},

	encodeMessage(message) {
		return message.replace(/&/gm, '&amp;').replace(/\[/gm, '&#91;').replace(/\]/gm, '&#93;');
	},
}

module.exports = utils;