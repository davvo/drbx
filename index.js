'use strict'

const request = require('request')

function createReadStream(path, token) {
	return function () {
		let headers = {
			'Authorization': `Bearer ${token}`,
			'Dropbox-API-Arg': `{"path": "${path}"}`						
		}
		return request({
			method: 'post',
			url: 'https://content.dropboxapi.com/2/files/download',
			headers: headers
		})
	}
}

function createWriteStream(path, token) {
	return function (options) {
		options = options || {}

		let apiArgs = {
			path: path,
			mode: options.mode || 'add',
			mute: options.mute || false,
			autorename: options.autorename || false
		}

		let headers = {
			'Authorization': `Bearer ${token}`,
			'Dropbox-API-Arg': JSON.stringify(apiArgs),
			'Content-Type': options.contentType || 'application/octet-stream',
		}

		return request({
			method: 'post',
			url: 'https://content.dropboxapi.com/2/files/upload',
			headers: headers
		})		
	}
}


module.exports = function (options) {
	return {
		file: function (path) {
			return {
				createReadStream: createReadStream(path, options.token),
				createWriteStream: createWriteStream(path, options.token)
			}
		}
	}
}