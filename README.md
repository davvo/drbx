# drbx
Dropbox upload and download streams

##Install
```sh
$ npm install @davvo/drbx --save
````

##Examples
```sh
const fs = require('fs')

const drbx = require('@davvo/drbx')({
  token: '<dropbox-access-token>'
})

// Download
let remoteReadStream = drbx.file('giraffe.jpg').createReadStream()
let localWriteStream = fs.createWriteStream('/photos/zoo/giraffe.jpg')
remoteReadStream.pipe(localWriteStream)

// Upload
let localReadStream = fs.createReadStream('/photos/zoo/zebra.jpg')
let remoteWriteStream = drbx.file('zebra.jpg').createWriteStream()
localReadStream.pipe(remoteWriteStream)
```
