function createPhoneNumber(arr) {
    let str1 = arr.slice(0, 3)
    let str2 = arr.slice(3, 6)
    let str3 = arr.slice(6, 10)
    return `(${str1.join('')}) ${str2.join('')}-${str3.join('')}`
}