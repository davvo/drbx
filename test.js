'use strict'

const fs = require('fs')

const drbx = require('.')({
	token: process.env.DROPBOX_ACCESS_TOKEN
})

let file = drbx.file('/test.js')

/*
fs.createReadStream('test.js').pipe(file.createWriteStream())
	.on('end', () => console.log("Done"))
	.on('error', err => console.error("Error:", err))
*/

file.createReadStream().pipe(fs.createWriteStream('myfile.js'))