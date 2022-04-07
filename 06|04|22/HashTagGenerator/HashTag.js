function generateHashtag(str) {
    const res = str.trim().split(' ');
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1)
    }
    const result = res.join('')
    if (result.length >= 140 || result == '') return false
    return `${'#'}${result}`
}