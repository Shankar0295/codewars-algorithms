function moveZeros(arr) {
    const res = arr.filter(item => item !== 0)
    const nonZero = arr.filter(item => item === 0)
    return [...res, ...nonZero]
}