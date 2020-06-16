// 华强电子网登陆

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"


function base64encode2(e) {
    var a, c, r, o, t, n;
    for (r = e.length,
             c = 0,
             a = ""; c < r; ) {
        if (o = 255 & e.charCodeAt(c++),
        c == r) {
            a += base64EncodeChars.charAt(o >> 2),
                a += base64EncodeChars.charAt((3 & o) << 4),
                a += "==";
            break
        }
        if (t = e.charCodeAt(c++),
        c == r) {
            a += base64EncodeChars.charAt(o >> 2),
                a += base64EncodeChars.charAt((3 & o) << 4 | (240 & t) >> 4),
                a += base64EncodeChars.charAt((15 & t) << 2),
                a += "=";
            break
        }
        n = e.charCodeAt(c++),
            a += base64EncodeChars.charAt(o >> 2),
            a += base64EncodeChars.charAt((3 & o) << 4 | (240 & t) >> 4),
            a += base64EncodeChars.charAt((15 & t) << 2 | (192 & n) >> 6),
            a += base64EncodeChars.charAt(63 & n)
    }
    return a
}

console.log(base64encode2('13635359875'))