import './App.css';
import salesCalculator from "./helpers/salesCalculator.js";
import stockCalculator from "./helpers/stockCalculator.js";
import toBeSoldCalculator from "./helpers/toBeSoldCalculator.js";

function App() {

    return (
        <>
            <h1>Tech It Easy Dashboard</h1>
            <h2>Verkoopoverzicht</h2>
            <div className={"sold box"}>
                <p>Aantal verkochte producten</p>
                <p>{salesCalculator}</p>
            </div>
            <div className={"stock box"}>
                <p>Aantal ingekochte producten</p>
                <p>{stockCalculator}</p>
            </div>
            <div className={"toSell box"}>
                <p>Aantal te verkopen producten</p>
                <p>{toBeSoldCalculator}</p>
            </div>
            <h2>Best verkochte TV</h2>
        </>
    );
}

export default App
