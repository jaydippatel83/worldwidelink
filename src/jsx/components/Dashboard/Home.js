import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import coin from './../../../images/coin.png';

import Charts from './widgets/Charts';
import MarketInfo from './widgets/MarketInfo';
import CardSlider from './widgets/CardSlider';
import CardData from './widgets/CardData';
import TxTable from './widgets/TxTable';
import Converter from './widgets/Converter';
import EscrowTable from './widgets/EscrowTable';
import Airdrop from './widgets/Airdrop';
import { Web3Context } from '../../../context/Web3Context';
const Home = () => {
	const [isCssLoaded, setIsCssLoaded] = useState(false);
	const { changeBackground } = useContext(ThemeContext);
	const web3Context = useContext(Web3Context);
	const { address } = web3Context;
	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
		setTimeout(() => {
			setIsCssLoaded(true);
		}, 1000);
	}, []);
	return (
		<>
			{
				!isCssLoaded ?
					<div className="loader-wrapper">
						<div className="loader"></div>
					</div>
					:
					<div className="row">
						{/* <CardSlider /> */}
						<CardData />
						{/* <Charts /> */}
						<EscrowTable />
						{/* <TxTable /> */}
						<MarketInfo />
						<Converter />
						{
							address === process.env.REACT_APP_ADMIN && <Airdrop />
						}
					</div>
			}
		</>
	)
}
export default Home;