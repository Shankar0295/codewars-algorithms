function pigIt(str) {
    str = str.split(' ')
    const res = str.map((item) => {
        return item.match(/[A-z]/gi) ? `${item.substr(1)}${item.substr(0, 1)}ay` : item
    })
    return res.join(' ')
}