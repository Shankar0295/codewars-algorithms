function domainName(str) {
    const res = str.replace('http://', '').replace('https://', '').replace('www.', '')
    return res.split('.')[0]
}