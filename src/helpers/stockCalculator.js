import {inventory} from "../constants/inventory.js";

function stockCalculator() {
    let total = 0

    for (const tv of inventory) {
        total += tv.originalStock;
    }
    return total;
}

export default stockCalculator();

// function calculateInitialStock(productArray) {
//     let total = 0;
//
//     for (let i = 0; i < productArray.length; i++) {
//         total = total + productArray[i].originalStock;
//     }
//
//     return total;
// }
//
// export default calculateInitialStock;