import {bestSellingTv} from "../constants/inventory.js";

function salesCalculator() {
    let total = 0
    for (let i = 0; i < bestSellingTv.length; i++) {
       total += bestSellingTv.sold;
    }
    return total;
}
export default salesCalculator();