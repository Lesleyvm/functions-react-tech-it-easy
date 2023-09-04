import './App.css';
import salesCalculator from "./helpers/salesCalculator.js";
import stockCalculator from "./helpers/stockCalculator.js";
import toBeSoldCalculator from "./helpers/toBeSoldCalculator.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import generateProductName from "./helpers/generateProductName.js";
import priceGenerator from "./helpers/priceGenerator.js";
import screenSizeGenerator from "./helpers/screenSizeGenerator.js";

function App() {

    return (
        <main className={"page-container"}>
            <h1>Tech It Easy Dashboard</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className={"dashboard-container"}>
                    <article className={"dashboard-item items-sold"}>
                        <h3>Aantal verkochte producten</h3>
                        <h2>{salesCalculator(inventory)}</h2>
                    </article>
                    <article className={"dashboard-item items-stock"}>
                        <h3>Aantal ingekochte producten</h3>
                        <h2>{stockCalculator}</h2>
                    </article>
                    <article className={"dashboard-item items-to-sell"}>
                        <h3>Aantal te verkopen producten</h3>
                        <h2>{toBeSoldCalculator}</h2>
                    </article>
                </div>
            </section>
            <h2>Best Verkochte TV</h2>
            <section>
                <div className={"best-sold-container"}>
                    <span> image </span>
                    <article>
                        <h3>{generateProductName(bestSellingTv)}</h3>
                        <h2>{priceGenerator(bestSellingTv)}</h2>
                        <h2>{screenSizeGenerator(bestSellingTv)}</h2>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default App
