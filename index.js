'use strict'

const request = require('request')

module.exports = function (options) {
	let token = options.token

	return {
		upload: function (path, options) {
			options = options || {}
			let headers = {
				'Authorization': `Bearer ${token}`,
				'Dropbox-API-Arg': `{"path": "${path}"}`,
				'Content-Type': options.contentType || 'application/octet-stream'
			}
			return request({
				method: 'post',
				url: 'https://content.dropboxapi.com/2/files/upload',
				headers: headers
			})
		}
	}
}