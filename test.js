'use strict'

const fs = require('fs'),

const drbx = require('.')({
	token: process.env.DROPBOX_ACCESS_TOKEN
})

let upstream = drbx.upload('/test.js')

fs.createReadStream('test.js').pipe(upstream)
	.on('end', () => console.log("Done"))
	.on('error', err => console.error("Error:", err))