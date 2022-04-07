function findUniq(arr) {
    return +arr.filter(item => arr.indexOf(item) == arr.lastIndexOf(item))
}