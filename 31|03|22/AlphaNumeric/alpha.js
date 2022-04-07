function alphanumeric(string) {
    let regex = /^[a-z0-9]+$/i
    return regex.test(string)
}