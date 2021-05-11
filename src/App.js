import AmountForm from "./components/amountForm/AmountForm";
import Payment from "./components/payment/Payment";
import arrow from "./left-arrow.svg"

function App() {
  return (
    <div className="App">
      <div className="nav">
        <img id="left-arrow" src={arrow} alt="arrow" />
        <h3 className="heading">Cash out</h3>
      </div>
      <Payment />
      <AmountForm />
    </div>
  );
}

export default App;
