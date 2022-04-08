function rgb(r, g, b) {
    var x;
    var y;
    var z;
    if (r >= 255) r = 255
    if (g >= 255) g = 255
    if (b >= 255) b = 255
    const red = r.toString(16)
    const green = g.toString(16)
    const blue = b.toString(16)
    if (r >= 0) {
        x = red.length == 1 ? '0' + red : red
    } else {
        x = '00'
    }
    if (g >= 0) {
        y = green.length == 1 ? '0' + green : green
    } else {
        y = '00'
    }
    if (b >= 0) {
        z = blue.length == 1 ? '0' + blue : blue
    } else {
        z = '00'
    }
    return (`${x}${y}${z}`).toUpperCase()
}