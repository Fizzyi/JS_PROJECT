// 豆豆网
const CryptoJS = require('crypto-js');
const md5 = require('md5-node');


function K(e) {
    var l = md5("www.maomaozu.com".replace(/\./g, "_"));
    return l = 0 == e ? l.substring(0, 16) : l.substring(16, 32)
}

function encrypt(e, l) {
    return e = CryptoJS.enc.Utf8.parse(e),
        l = CryptoJS.enc.Utf8.parse(l),
        CryptoJS.AES.encrypt(l, e, {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            iv: e
        }).toString()
}

function decrypt(e, l) {
    e = CryptoJS.enc.Utf8.parse(e);
    var a = CryptoJS.AES.decrypt(l, e, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: e
    });
    return CryptoJS.enc.Utf8.stringify(a).toString()

}


function aes_encrypt(l) {
    return encrypt(K(0), l)
}

function aes_decrypt(e) {
    var l = K(0).split("").reverse().join("");
    return decrypt(l, e)
}


