import React, { useEffect, useState } from 'react';
import { ethers, Contract } from 'ethers';
import { multiChains, priceFeedABI, priceFeedAddress, priceFeedMatic, priceFeedMaticABI } from '../../../../config';
import btc from '../../../../images/coins/bitcoin.png';
import dai from '../../../../images/coins/dai.png';
import eth from '../../../../images/coins/eth.png';
import link from '../../../../images/coins/chainlink.png';
import coin from '../../../../images/coins/coin.png';
import polygon from '../../../../images/coins/polygon.png';
import { useContext } from 'react';
import { Web3Context } from '../../../../context/Web3Context';


const MarketInfo = () => {
    const web3Context = useContext(Web3Context);
    const { provider, signer } = web3Context;
    const [dataFeed, setDataFeed] = useState();
    const [netId, setNetId] = useState();
    const [feed, setFeed] = useState();
    const namesArray = [
        { name: 'BTC / USD', imagePath: btc },
        { name: 'DAI / USD', imagePath: dai },
        { name: 'ETH / USD', imagePath: eth },
        { name: 'LINK / USD', imagePath: link },
        { name: netId === 80001 ? 'LINK / MATIC' : 'LINK / ETH', imagePath: netId === 80001 ? polygon : eth },
        { name: 'USDC / USD', imagePath: coin },
        { name: netId === 80001 ? 'LINK / USD' : 'BTC / ETH', imagePath: netId === 80001 ? polygon : btc },
    ]
    useEffect(() => {
        contractCall();
    }, []);


    const contractCall = async () => {
        const { chainId } = await provider.getNetwork();
        setNetId(Number(chainId));

        const priceFeedContract = new Contract(
            Number(chainId) === 80001 ? priceFeedMatic : priceFeedAddress,
            Number(chainId) === 80001 ? priceFeedMaticABI : priceFeedABI,
            signer
        );
        console.log(priceFeedContract, "priceFeedContract");
        const dataFeedResult = await priceFeedContract.getLatestAnswers();
        setDataFeed([...dataFeedResult]);
    }


    useEffect(() => {
        formateValue();
    }, [dataFeed])

    const formateValue = () => {
        console.log(dataFeed, "dataFeed");
        const formattedData = dataFeed && dataFeed.map((value, index) => ({
            name: namesArray[index].name,
            image: namesArray[index].imagePath,
            value: Number(value) / 10 ** 8,
        }));
        setFeed(formattedData);
    }

    return (
        <div className="col-xl-6">
            <div className="card">
                <div className="card-header d-block border-0 pb-0">
                    <h2 className="heading mb-0">Market Info</h2>
                </div>
                <div className="card-body py-0">
                    <ul className="list-group list-group-flush">
                        {
                            feed && feed.map((coin, index) => {
                                return (
                                    <li key={index} className="list-group-item d-flex px-0 justify-content-between align-items-center">
                                        <div className="w-100 ms-3">

                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <img src={coin.image} width={35} height={35} alt={coin.name} />
                                                    <p className="mb-0 text-black font-w600  mx-2">{coin.name}</p>
                                                </div>
                                                <span className="ms-auto fs-15 mb-0  text-black font-w600">${coin.value.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default MarketInfo;