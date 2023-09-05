import {bestSellingTv} from "../constants/inventory.js";

const sizeList = bestSellingTv.availableSizes.map((size) => {
    const cmSize = Math.round(size * 2.54);
    return `${size} inch (${cmSize} cm) | `
})

export default sizeList;