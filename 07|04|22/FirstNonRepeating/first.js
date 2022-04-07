function firstNonRepeatingLetter(str) {
    if (str == "") return ""
    let t = str.toLowerCase();
    for (let i = 0; i < t.length; i++) {
        if (t.indexOf(t[i]) === t.lastIndexOf(t[i])) {
            return str[i]
        }
    }
    return ''
}