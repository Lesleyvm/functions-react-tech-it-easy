import './App.css';
import salesCalculator from "./helpers/salesCalculator.js";
import stockCalculator from "./helpers/stockCalculator.js";
import toBeSoldCalculator from "./helpers/toBeSoldCalculator.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import priceGenerator from "./helpers/priceGenerator.js";
import generateTvName from "./helpers/generateTvName.js";
import sizeList from "./helpers/screenSizeGenerator.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";

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
                    <img className={"best-sold-image"} src={bestSellingTv.sourceImg} alt="image bestseller"/>
                    <article>
                        <h2>{generateTvName(bestSellingTv)}</h2>
                        <h2>{priceGenerator(bestSellingTv)}</h2>
                        <h4>{sizeList}</h4>
                        <ul className={"option-list"}>
                            <li className={"option-item"}><img className="icon" src={check} alt="icon"/>wifi</li>
                            <li className={"option-item"}><img className="icon" src={minus} alt="icon"/>speech</li>
                            <li className={"option-item"}><img className="icon" src={check} alt="icon"/>hdr</li>
                            <li className={"option-item"}><img className="icon" src={check} alt="icon"/>bluetooth</li>
                            <li className={"option-item"}><img className="icon" src={minus} alt="icon"/>ambilight</li>
                        </ul>
                    </article>
                </div>
            </section>
            <h2>Alle TVs</h2>
            <button type={"button"}>Meest verkocht eerst</button>
            <button type={"button"}>Goedkoopste eerst</button>
            <button type={"button"}>Meest geschikt voor sport eerst</button>
        </main>
    );
}

export default App
