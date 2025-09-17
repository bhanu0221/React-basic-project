import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Cry.css';

function Cry() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const cryptoPrice = async () => {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,dogecoin,tether,solana,cardano,tron,";

        try {
            const response = await axios.get(url);
            const data = response.data;
            setCoins(data);
            setLoading(false);
            setError('');
        } catch (error) {
            console.error(error);
            setError("Error loading crypto prices.");
            setLoading(false);
        }
    };

    useEffect(() => {
        cryptoPrice();
        const interval = setInterval(cryptoPrice, 40000);
        return () => clearInterval(interval);
    }, []);

    return (
            <div id='container'>
                <h1 className='crypto'>crypto real-time Data</h1>
                <table id='tb'>
                    <thead>
                        <tr>
                            <th>
                                coin
                            </th>
                            <th>
                                Current Price
                            </th>
                            <th>
                                24th change
                            </th>
                        </tr>
                    </thead>

                    <tbody >
                        {loading ? (
                            <tr>
                                <td>
                                    Loading prices...
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td>
                                    {error}
                                </td>
                            </tr>
                        ) : (
                            coins.map((coin) => (
                                <tr key={coin.id}>
                                    <td id='info'>
                                        <img src={coin.image} alt="image" width="20" />
                                        {coin.name}
                                    </td>
                                    <td style={{ padding: "8px" }}>
                                        {coin.current_price.toLocaleString()}
                                    </td>
                                    <td style={{ padding: "8px", color: coin.price_change_percentage_24h >= 0 ? "green" : "red", }}>
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>  
    );
}

export default Cry;
