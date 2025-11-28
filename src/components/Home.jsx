import { useState, useEffect } from "react";
import "./home.css";
import Cry from "./cry";

function CurrencyConverter() {


  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [rate, setRate] = useState(null);
  const [result, setResult] = useState(null);

  // Fetch exchange rate when currencies change
  useEffect(() => {
    const fetchRate = async () => {

      const url = `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.rates && data.rates[toCurrency]) {
          setRate(data.rates[toCurrency]);
        } else {
          setRate(null);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setRate(null);
      }
    };

    fetchRate();
  }, [fromCurrency, toCurrency]);

  // Convert when amount or rate changes
  useEffect(() => {
    if (rate) setResult((amount * rate).toFixed(2));
  }, [amount, rate]);

  return (
    <div className="full">
      <div className="container">
        <h2>💱 Currency Converter</h2>
        <div>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
            className="input"
            placeholder="Enter Amount"
          />
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}
            className="select"
          >
            <option>INR</option>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>  {/* Japanese Yen */}
            <option>AUD</option>  {/* Australian Dollar */}
            <option>CAD</option>  {/* Canadian Dollar */}
            <option>CNY</option>  {/* Chinese Yuan */}

          </select>


          <span className="to-text">To</span>

          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}
            className="select"
          >
            <option>USD</option>
            <option>INR</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
            <option>AUD</option>
            <option>CAD</option>
            <option>CNY</option>

          </select>

        </div>
        <h3>
          {rate
            ? `${amount} ${fromCurrency} = ${result} ${toCurrency}`
            : "Unable to fetch rate or you have choose the same currency in both. Try again or switch to another "}
        </h3>
      </div>

      <Cry /> {/* this is coming from Cry.jsx*/}
    </div>
  );
}

export default CurrencyConverter;