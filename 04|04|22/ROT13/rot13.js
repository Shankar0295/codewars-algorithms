function rot13(str) {
    const alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM"
    return str.replace(/[a-z]/gi, text => alpha[alpha.indexOf(text) + 13])
}