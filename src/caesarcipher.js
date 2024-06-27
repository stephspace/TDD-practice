function caesarcipher(str, shift){
    return str.toUpperCase().replace(/[A-Z]/g, val => String.fromCharCode((val.charCodeAt(0) - 65 + shift) % 26 + 65)).toLowerCase();
}

module.exports = caesarcipher;