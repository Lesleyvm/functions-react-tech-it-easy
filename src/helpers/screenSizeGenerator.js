function screenSizeGenerator(tv) {
    return `${tv.availableSizes} inch (${tv.availableSizes * 2,54} cm) | `
}

export default screenSizeGenerator;