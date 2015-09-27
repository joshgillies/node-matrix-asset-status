# node-matrix-asset-status

Asset status helper for Squiz Matrix.

Extracted using the [SOAP API GetAllStatuses] function.

[![Build Status](https://travis-ci.org/joshgillies/node-matrix-asset-list.svg)](https://travis-ci.org/joshgillies/node-matrix-asset-list)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Usage

```js
var status = require('node-matrix-asset-status')
```

`node-matrix-asset-status` provides a simple querying interface which allows you to retrieve
asset status codes with the following:

```js
console.log(status('Live')) // 16
console.log(status('live')) // 16
```

In addition you can pass in a valid status code and get the status name back:

```js
console.log(status(16)) // 'Live'

```

## License

MIT

[SOAP API GetAllStatuses]: http://manuals.matrix.squizsuite.net/web-services/chapters/soap-api-asset-service#getallstatuses
