import {bestSellingTv, inventory} from "../constants/inventory.js";

function salesCalculator() {
    let total = 0

    for (const tv of inventory) {
        total += tv.sold;
    }

    return total;
}

export default salesCalculator();

//
// function calculateSoldProducts(productArray) {
//     let total = 0;
//
//     for (let i = 0; i < productArray.length; i++) {
//         total = total + productArray[i].sold;
//     }
//
//     return total;
// }
//
// export default calculateSoldProducts;