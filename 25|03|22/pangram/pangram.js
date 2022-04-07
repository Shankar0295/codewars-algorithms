function isPangram(string) {
    const str = string.match(/[a-z]/gi)
    const result = [...new Set(str)]
    return (result.length >= 26) ? true : false
}