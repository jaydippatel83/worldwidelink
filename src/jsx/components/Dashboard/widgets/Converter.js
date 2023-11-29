import axios from 'axios';
import React, { useEffect, useState } from 'react';
import coinGecko from '../../../../images/avatar/coingecko.png'

const options2 = [
    { value: '1', label: 'USD' },
    { value: '2', label: 'INR' },
    { value: '3', label: 'GBP' },
    { value: '4', label: 'JPY' },
    { value: '5', label: 'HKD' },
    { value: '6', label: 'CNY' }
]

const Converter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('bitcoin');
    const [toCurrency, setToCurrency] = useState('usd');
    const [result, setResult] = useState('');
    const [coinList, setCoinList] = useState([]);
    const API_KEY = process.env.REACT_APP_coingecko_api;


    useEffect(() => {
        const fetchCoinList = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    params: {
                        vs_currency: toCurrency,
                        order: 'market_cap_desc',
                        per_page: 50,
                        page: 1,
                        sparkline: false,
                    },
                    headers: {
                        'Authorization': `Apikey ${API_KEY}`
                    }
                });
                setCoinList(response.data);
            } catch (error) {
                console.error('Error fetching coin list:', error);
            }
        };

        fetchCoinList();
    }, []);


    const convert = () => {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`;

        axios.get(url, { headers: { 'Authorization': `Apikey ${API_KEY}` } })
            .then(response => {
                const rate = response.data[(fromCurrency).toLowerCase()][(toCurrency).toLowerCase()];
                const convertedResult = amount * rate;
                setResult(`${amount} ${fromCurrency.toUpperCase()} = ${convertedResult}  ${toCurrency.toUpperCase()}`);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div className="col-xxl-6 col-xl-6">
            <div className="card">
                <div className="card-header border-0">
                    <h4 className="heading mb-0">Crypto to Currency Converter</h4>
                </div>
                <div className="card-body pt-0 custome-converter">
                    <div className="custome-converter-input">
                        <input type="text" className="form-control" placeholder="1" onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div className="form-group custome-converter-select">

                        <select className="form-control form-control-lg" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                            {coinList.map((coin) => (
                                <option key={coin.id} value={coin.id}>
                                    <img alt={coin.id} src={coin.image} width={24} height={24} />
                                    {coin.symbol.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>
                    <div className="custome-equal">
                        <button onClick={convert} className='btn btn-primary'>Convert</button>
                    </div>
                    <div className="custome-converter-input style-1">
                        <input type="text" className="form-control" placeholder={`${result}`} />
                    </div>
                    <div className="form-group custome-converter-select">
                        <select className="form-control form-control-lg" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                            {options2.map((coin) => (
                                <option key={coin.label} value={coin.label}>
                                    {coin.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="d-flex justify-content-end align-items-center custome-refresh">
                        <span className='mr-1'><img src={coinGecko} width={24} height={24} alt='coingecko' /></span>
                        <span className="text-black">
                            Powered by <b>CoinGecko</b> API
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Converter;