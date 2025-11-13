import { useState, useEffect } from "react";
import "./home.css";
import Cry from "./cry";

function CurrencyConverter() {


  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
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
    <>
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
              <option>USD</option>
              <option>INR</option>
              <option>EUR</option>
              <option>GBP</option>  
              <option>JPY</option>  {/* Japanese Yen */}
              <option>AUD</option>  {/* Australian Dollar */}
              <option>CAD</option>  {/* Canadian Dollar */}
              <option>CHF</option>  {/* Swiss Franc */}
              <option>CNY</option>  {/* Chinese Yuan */}
              <option>NZD</option>  {/* New Zealand Dollar */}
              <option>ZAR</option>  {/* South African Rand */}
              <option>SGD</option>  {/* Singapore Dollar */}
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
              <option>CHF</option>  
              <option>CNY</option>  
              <option>NZD</option>  
              <option>ZAR</option>  
              <option>SGD</option>  
            </select>
            
          </div>
          <h3>
            {rate
              ? `${amount} ${fromCurrency} = ${result} ${toCurrency}`
              : "Unable to fetch rate. Try again or switch to another "}
          </h3>
        </div>

        <Cry /> {/* this is coming from Cry.jsx*/}
      </div>


      <footer style={{
        textAlign: "center",
        padding: "16px 0",
        width: "100%",
        fontSize: "16px",
        color: "white",
        backgroundColor: "rgb(41, 41, 42)",
      }}>

        <p>© 2025 All rights reserved.</p>
        <p>contact +91 9258597234 ,  Links are added for source code <a href=" https://github.com/bhanu0221" target="_blank" rel="noopener noreferrer"
          style={{ color: "#2980b9", marginLeft: "5px" }}>'GitHub link'</a>
          and you can also visit my profile <a href="https://www.linkedin.com/in/anup-shahi-50486530a" target="_blank" rel="noopener noreferrer"
            style={{ color: "#2980b9", marginLeft: "5px" }}>'LinkedIn link'</a></p>
      </footer>
    </>
  );
}

export default CurrencyConverter;