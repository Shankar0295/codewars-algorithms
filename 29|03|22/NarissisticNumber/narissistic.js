function narcissistic(num) {
    let pow = num.toString().split('').length
    let arr = num.toString().split('')
    const res = arr.reduce((acc, item) => {
        acc += parseInt(Math.pow(item, pow))
        return acc
    }, 0)
    if (res === num) {
        return true
    } else {
        return false
    }
}