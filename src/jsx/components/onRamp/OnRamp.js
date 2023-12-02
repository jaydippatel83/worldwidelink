import React, { useEffect } from 'react';
import { Transak } from '@transak/transak-sdk';
import MarketInfo from '../Dashboard/widgets/MarketInfo';
import Converter from '../Dashboard/widgets/Converter';

const OnRamp = () => {
    let transak = new Transak({
        apiKey: process.env.REACT_APP_transakt,
        environment: 'STAGING',
        exchangeScreenTitle: 'Buy / Sell Crypto',
        defaultFiatAmount: '500',
        defaultFiatCurrency: 'INR',
        countryCode: 'IN',
        excludeFiatCurrencies: 'GBP,EUR,USD,JPY,INR',
        defaultNetwork: 'polygon',
        network: 'polygon',
        networks: 'polygon,solana,ethereum,terra,mainnet',
        defaultPaymentMethod: 'credit_debit_card',
        defaultCryptoAmount: '1',
        cryptoCurrencyList: 'ETH,DAI,USDT,MATIC,USDC,BTC,SOL,LINK',
        themeColor: '9567ff',
        email: 'example@gmail.com',
        walletAddress: '',
        redirectURL: 'https://worldwidelink.vercel.app/',
    });


    useEffect(() => {
        transak.init();
        return () => {
            transak.close();
        };
    }, []);

    const handleOpen = () => {
        transak.init();
    }

    return (
        <div className='container mt-0'>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex  justify-content-between">
                        <h1> On / Off Ramp By Transak</h1>
                        <button onClick={handleOpen} className='btn btn-primary btn-lg'>Buy Crypto</button>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <MarketInfo />
                <Converter />
            </div>
        </div>
    );
};

export default OnRamp;