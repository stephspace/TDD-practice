function caesarcipher(msg, key){
    const codeA = "A".codePointAt(0);
    const codeZ = "Z".codePointAt(0);

    let encryptMsg = "";

    for(let val of msg){
        let code = val.toUpperCase().codePointAt(0);

        if(code >= codeA && code <= codeZ){
            code -= codeA;

            code  = mod(code + key, 26);
            code += codeA;
        }
        if(val === val.toUpperCase())
            encryptMsg += String.fromCodePoint(code).toUpperCase();
        else
            encryptMsg += String.fromCodePoint(code).toLowerCase();
    }
    return encryptMsg;
}

function mod(n, p){
    let r = n % p;

    if(r < 0){
        r += p;
    }
    return r;
}

module.exports = caesarcipher;