var CryptoJS = require("crypto-js");

var r = (new Date).getTime()
var o = "timestamp=".concat(r, "&secret=").concat("aHVheWluZ19zZWNyZXRfYXBp")
var sha256 = CryptoJS.SHA256(o)
var base64 = CryptoJS.enc.Base64.stringify(sha256)
var e = encodeURIComponent(base64)
console.log(e)