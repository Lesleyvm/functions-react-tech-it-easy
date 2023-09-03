import './App.css';
import salesCalculator from "./helpers/salesCalculator.js";
import stockCalculator from "./helpers/stockCalculator.js";
import toBeSoldCalculator from "./helpers/toBeSoldCalculator.js";

function App() {

    return (
        <main className={"page-container"}>
            <h1>Tech It Easy Dashboard</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className={"dashboard-container"}>
                    <article className={"dashboard-item items-sold"}>
                        <h3>Aantal verkochte producten</h3>
                        <h2>{salesCalculator}</h2>
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
        </main>
    );
}

export default App
