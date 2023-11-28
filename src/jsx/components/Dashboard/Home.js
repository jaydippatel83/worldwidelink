import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../../context/ThemeContext";
import coin from './../../../images/coin.png';


const Home = () => {
	const [isCssLoaded, setIsCssLoaded] = useState(false);
	const { changeBackground } = useContext(ThemeContext);
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
						<div className="col-xl-8">
							<div className="row">
								<div className="col-xl-12">
									<div className="card bubles">
										<div className="card-body">
											<div className="buy-coin  bubles-down">
												<div>
													<h2>Buy & Sell 100+ Coins Instantly</h2>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
													<Link to={"/exchange"} className="btn btn-primary">Buy Coin</Link>
												</div>
												<div className="coin-img">
													<img src={coin} className="img-fluid" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			}
		</>
	)
}
export default Home;