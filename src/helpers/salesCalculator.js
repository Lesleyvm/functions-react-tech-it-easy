import {bestSellingTv, inventory} from "../constants/inventory.js";

function salesCalculator() {
    let total = 0

    for (const tv of inventory) {
        total += tv.sold;
    }

    return total;
}

export default salesCalculator();