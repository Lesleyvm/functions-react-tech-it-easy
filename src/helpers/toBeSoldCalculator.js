import {inventory} from "../constants/inventory.js";

function toBeSoldCalculator() {
    let total = 0

    for (const tv of inventory) {
        const toSellItem = tv.originalStock - tv.sold;
        total += toSellItem;
    }
    return total;
}

export default toBeSoldCalculator();

// function calculateProductsToSell(productArray) {
//     const initialProducts = calculateInitialStock(productArray);
//     const soldProducts = calculateSoldProducts(productArray);
//     return initialProducts - soldProducts;
// }
//
// export default calculateProductsToSell;