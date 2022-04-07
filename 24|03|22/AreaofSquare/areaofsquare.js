var isSquare = function (n) {
    let sq = Math.floor(Math.sqrt(n))
    if (sq * sq === n) {
        return true
    } else {
        return false
    }
}