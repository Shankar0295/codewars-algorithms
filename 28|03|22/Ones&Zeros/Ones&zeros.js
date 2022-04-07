const binaryArrayToNumber = arr => {
    const binary = arr.join("")
    const result = parseInt(binary, 2)
    return result
};