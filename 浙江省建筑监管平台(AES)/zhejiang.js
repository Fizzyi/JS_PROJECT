const CryptoJS = require('crypto-js');

function main(q) {
    function parse(t) {
        for (var n = t.length, r = [], e = 0; e < n; e++)
            r[e >>> 2] |= (255 & t.charCodeAt(e)) << 24 - e % 4 * 8;
        return {
            'sigBytes':n,
            'words':r
        }
    }

    function a(t){
        var e = parse(t)
        var i = {'sigBytes':16,'words':[825373492,825373492,825377090,1128547654]}
        var r = {'sigBytes':16,'words':[1094861636,1162228018,859058482,859058482]}
        return CryptoJS.AES.encrypt(e, i, {
            iv: r,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).ciphertext.toString().toUpperCase()
    }

    console.log(a(q))
}

q = '91330782728893446K'
main(q)