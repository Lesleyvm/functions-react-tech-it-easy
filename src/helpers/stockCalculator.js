import {inventory} from "../constants/inventory.js";

function stockCalculator() {
    let total = 0

    for (const tv of inventory) {
        total += tv.originalStock;
    }
    return total;
}

export default stockCalculator();