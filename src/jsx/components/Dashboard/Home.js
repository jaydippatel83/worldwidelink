import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
//import {NavLink} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Nav, Tab } from 'react-bootstrap';

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import BalanceCardSlider from './Dashboard/BalanceCardSlider';
//import MorrisDonught from './Dashboard/MorrisDonught';
import OrderForm from './Dashboard/OrderForm';
//import ServerStatusBar from './Dashboard/ServerStatusBar';
import { LtcIcon, BtcIcon, XtzIcon, EthIcon } from './SvgIcon';

//images
import coin from './../../../images/coin.png';
import metaverse from './../../../images/metaverse.png';
import WidgetChartIndex3 from './Index3/WidgetChartIndex3';
import {
	Row,
	Col,
	Card,
	Table,
	Badge,
	Dropdown,
	ProgressBar,
} from "react-bootstrap";

const DashboardComboChart = loadable(() =>
	pMinDelay(import("./Dashboard/DashboardComboChart"), 1000)
);
const AssetsChart = loadable(() =>
	pMinDelay(import("./Dashboard/AssetsChart"), 1000)
);

const ServerStatusBar = loadable(() =>
	pMinDelay(import("./Dashboard/ServerStatusBar"), 1000)
);


const pickerData = [
	{ fillcolor: 'var(--primary)', datatitle: 'XTZ(40%)', price: '763' },
	{ fillcolor: '#2A353A', datatitle: 'BTC(20%)', price: '321' },
	{ fillcolor: '#C0E192', datatitle: 'BNB(10%)', price: '69' },
	{ fillcolor: '#E085E4', datatitle: 'ETH(10%)', price: '154' },
];

const widgetChart = [
	{ id: 1, price: '$65,123', bgcolor: 'bg-warning' },
	{ id: 2, price: '$75,542', bgcolor: 'bg-secondary' },
	{ id: 3, price: '$40,742', bgcolor: 'bg-pink' },
	{ id: 4, price: '$71,321', bgcolor: 'bg-primary' },
];


const marketBlog = [
	{ icon: LtcIcon, classBg: 'bg-success', Name: 'LTC', },
	{ icon: BtcIcon, classBg: 'bg-warning', Name: 'BTC', },
	{ icon: XtzIcon, classBg: 'bg-primary', Name: 'XTZ', },
	{ icon: EthIcon, classBg: 'bg-pink', Name: 'ETH', },
	{ icon: XtzIcon, classBg: 'bg-primary', Name: 'XTZ', },
];

const listData = [
	{}, {}, {},
	{}, {}, {},
	{}, {}, {},
	{}, {},
];

const svg1 = (
	<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<rect x="0" y="0" width="24" height="24"></rect>
			<circle fill="#000000" cx="5" cy="12" r="2"></circle>
			<circle fill="#000000" cx="12" cy="12" r="2"></circle>
			<circle fill="#000000" cx="19" cy="12" r="2"></circle>
		</g>
	</svg>
);

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
						{widgetChart.map((item, ind) => (
							<div className="col-xl-3 col-lg-6 col-sm-6" key={ind}>
								<div className={`card card-box ${item.bgcolor}`}>
									<div className="card-header border-0 pb-0">
										<div className="chart-num-days">
											<p>
												<i className="fa-solid fa-sort-down me-2"></i>
												4%(30 days)
											</p>
											<h2 className="count-num text-white">{item.price}</h2>
										</div>
										{item.id === 1 ?
											<svg width="50" height="50" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M92.9644 53.8221C92.9599 48.4197 88.5804 44.0417 83.1795 44.0357H53.822V63.6069H83.1795C88.5804 63.6024 92.9599 59.2229 92.9644 53.8221Z" fill="#FFF" />
												<path d="M53.822 92.9645H83.1795C88.5834 92.9645 92.9644 88.5835 92.9644 83.1796C92.9644 77.7743 88.5834 73.3933 83.1795 73.3933H53.822V92.9645Z" fill="#FFF" />
												<path d="M68.5001 9.15527e-05C30.6687 9.15527e-05 0.00012207 30.6687 0.00012207 68.5001C0.00012207 106.332 30.6687 137 68.5001 137C106.332 137 137 106.332 137 68.5001C136.957 30.6866 106.314 0.0433939 68.5001 9.15527e-05V9.15527e-05ZM102.751 83.1781C102.737 93.9828 93.9829 102.737 83.1797 102.749V107.643C83.1797 110.345 80.9877 112.536 78.2865 112.536C75.5838 112.536 73.3933 110.345 73.3933 107.643V102.749H63.6084V107.643C63.6084 110.345 61.4164 112.536 58.7153 112.536C56.0126 112.536 53.8221 110.345 53.8221 107.643V102.749H39.144C36.4414 102.749 34.2509 100.559 34.2509 97.8577C34.2509 95.155 36.4414 92.9645 39.144 92.9645H44.0357V44.0357H39.144C36.4414 44.0357 34.2509 41.8452 34.2509 39.1425C34.2509 36.4399 36.4414 34.2493 39.144 34.2493H53.8221V29.3577C53.8221 26.655 56.0126 24.4645 58.7153 24.4645C61.4179 24.4645 63.6084 26.655 63.6084 29.3577V34.2493H73.3933V29.3577C73.3933 26.655 75.5838 24.4645 78.2865 24.4645C80.9891 24.4645 83.1797 26.655 83.1797 29.3577V34.2493C93.9426 34.2045 102.705 42.8919 102.751 53.6548C102.775 59.3543 100.304 64.7791 95.9867 68.5001C100.263 72.1793 102.731 77.5354 102.751 83.1781V83.1781Z" fill="#FFF" />
											</svg>

											: item.id === 2 ?
												<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px">
													<path fillRule="evenodd" fill="rgb(255, 255, 255)"
														d="M21.000,42.000 C9.402,42.000 -0.001,32.598 -0.001,21.000 C-0.001,9.402 9.402,-0.000 21.000,-0.000 C32.592,0.013 41.987,9.408 42.000,21.000 C42.000,32.598 32.598,42.000 21.000,42.000 ZM28.171,14.437 C28.383,14.172 28.499,13.843 28.499,13.504 C28.500,12.675 27.829,12.001 26.999,12.000 L22.499,12.000 L22.499,7.500 C22.499,6.672 21.828,6.000 21.000,6.000 C20.171,6.000 19.500,6.671 19.500,7.500 L19.500,12.000 L15.000,12.000 C14.171,12.000 13.499,12.671 13.499,13.500 C13.499,14.328 14.171,15.000 15.000,15.000 L23.878,15.000 L13.827,27.562 C13.615,27.829 13.499,28.160 13.499,28.501 C13.499,29.329 14.171,30.000 15.000,30.000 L19.500,30.000 L19.500,34.500 C19.500,35.328 20.171,36.000 21.000,36.000 C21.828,36.000 22.499,35.328 22.499,34.500 L22.499,30.000 L26.999,30.000 C27.828,30.000 28.500,29.328 28.500,28.500 C28.500,27.672 27.828,27.000 26.999,27.000 L18.121,27.000 L28.171,14.437 Z" />
												</svg>

												: item.id === 3 ?
													<svg width="50" height="50" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M70.3615 78.5206C69.1671 78.9977 67.8366 78.9977 66.6421 78.5206L53.8232 73.3927L68.5018 102.75L83.1804 73.3927L70.3615 78.5206Z" fill="#FFF" />
														<path d="M68.4982 68.5L88.0696 61.6503L68.4982 34.25L48.9268 61.6503L68.4982 68.5Z" fill="#FFF" />
														<path d="M68.5 0C30.6686 0 0 30.6686 0 68.5C0 106.331 30.6686 137 68.5 137C106.331 137 137 106.331 137 68.5C136.958 30.6865 106.313 0.0418093 68.5 0V0ZM97.3409 65.7958L72.8765 114.725C71.6685 117.142 68.7285 118.122 66.3125 116.914C65.3643 116.44 64.5968 115.673 64.1235 114.725L39.6591 65.7958C38.899 64.2698 38.9856 62.4586 39.8875 61.0117L64.3519 21.8692C65.978 19.5787 69.151 19.0381 71.4416 20.6642C71.9089 20.9957 72.3166 21.4019 72.6481 21.8692L97.111 61.0117C98.0144 62.4586 98.101 64.2698 97.3409 65.7958V65.7958Z" fill="#FFF" />
													</svg>
													: item.id === 4 ?
														<svg width="50" height="45" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M68.5 0C30.6686 0 0 30.6686 0 68.5C0 106.331 30.6686 137 68.5 137C106.331 137 137 106.331 137 68.5C136.958 30.6865 106.313 0.0418093 68.5 0ZM40.213 63.6068H59.7843C62.4869 63.6068 64.6774 65.7973 64.6774 68.5C64.6774 71.2027 62.4869 73.3932 59.7843 73.3932H40.213C37.5104 73.3932 35.3199 71.2027 35.3199 68.5C35.3199 65.7973 37.5119 63.6068 40.213 63.6068ZM101.393 56.6456L95.5088 86.0883C94.1231 92.9226 88.122 97.8411 81.1488 97.8576H40.213C37.5104 97.8576 35.3199 95.6671 35.3199 92.9644C35.3199 90.2617 37.5119 88.0712 40.213 88.0712H81.1488C83.4617 88.0652 85.4522 86.4347 85.9121 84.168L91.7982 54.7253C92.3208 52.0973 90.6156 49.544 87.9891 49.0214C87.677 48.9601 87.3605 48.9288 87.0439 48.9288H49.9994C47.2967 48.9288 45.1062 46.7383 45.1062 44.0356C45.1062 41.3329 47.2967 39.1424 49.9994 39.1424H87.0439C95.128 39.1454 101.679 45.699 101.677 53.7831C101.677 54.7433 101.582 55.7019 101.393 56.6456Z" fill="#FFF"></path>
														</svg>
														:

														''
										}
									</div>
									<div className="card-body p-0 custome-tooltip">
										{/* <div id="widgetChart3" className="chart-primary"></div> */}
										<WidgetChartIndex3 />
									</div>
								</div>
							</div>
						))}
						<Col lg={12}>
							<Card>
								<Card.Header>
									<Card.Title>Latest Transactions</Card.Title>
								</Card.Header>
								<Card.Body>
									<Table responsive>
										<thead>
											<tr>
												<th className="width80">
													<strong>#</strong>
												</th>
												<th>
													<strong>Tx Hash</strong>
												</th>
												<th>
													<strong>Address</strong>
												</th>
												<th>
													<strong>DATE</strong>
												</th>
												<th>
													<strong>STATUS</strong>
												</th>
												<th>
													<strong>Token</strong>
												</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<strong>01</strong>
												</td>
												<td>Mr. Bobby</td>
												<td>Dr. Jackson</td>
												<td>01 August 2022</td>
												<td>
													<span className="badge light badge-success">Successful</span>
												</td>
												<td>$21.56</td>
												<td>
													<Dropdown>
														<Dropdown.Toggle
															variant="success"
															className="light sharp i-false"
														>
															{svg1}
														</Dropdown.Toggle>
														<Dropdown.Menu>
															<Dropdown.Item>Edit</Dropdown.Item>
															<Dropdown.Item>Delete</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</td>
											</tr>
											<tr>
												<td>
													<strong>02</strong>
												</td>
												<td>Mr. Bobby</td>
												<td>Dr. Jackson</td>
												<td>01 August 2022</td>
												<td>
													<Badge bg="" className="light badge-danger">Canceled</Badge>
												</td>
												<td>$21.56</td>
												<td>
													<Dropdown>
														<Dropdown.Toggle
															variant="danger"
															className="light sharp i-false"
														>
															{svg1}
														</Dropdown.Toggle>
														<Dropdown.Menu>
															<Dropdown.Item>Edit</Dropdown.Item>
															<Dropdown.Item>Delete</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</td>
											</tr>
											<tr>
												<td>
													<strong>03</strong>
												</td>
												<td>Mr. Bobby</td>
												<td>Dr. Jackson</td>
												<td>01 August 2022</td>
												<td>
													<Badge bg="" className="badge-warning light">Pending</Badge>
												</td>
												<td>$21.56</td>
												<td>
													<Dropdown>
														<Dropdown.Toggle
															variant="warning"
															className="light sharp i-false"
														>
															{svg1}
														</Dropdown.Toggle>
														<Dropdown.Menu>
															<Dropdown.Item>Edit</Dropdown.Item>
															<Dropdown.Item>Delete</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</td>
											</tr>
										</tbody>
									</Table>
								</Card.Body>
							</Card>
						</Col>
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
								<div className="col-xl-12">
									<BalanceCardSlider />
								</div>
								<div className="col-xl-12">
									<div className="card">
										<div className="card-header border-0 align-items-start flex-wrap pb-0">
											<div>
												<h2 className="heading">Market Chart</h2>
												<div className="market-data">
													<div className="income data">
														<span>This Month</span>
														<h4>$29.999.00</h4>
													</div>
													<div className="price data">
														<span>Price</span>
														<h4>480 <sub>- 0,5%</sub></h4>
													</div>
													<div className="rate data">
														<span>Rate</span>
														<h4>-0.0662%/hr</h4>
													</div>
													<div className="volume data">
														<span>volume</span>
														<h4>175k</h4>
													</div>

												</div>
											</div>
											<Dropdown className="dropdown custom-dropdown">
												<Dropdown.Toggle as="div" className="btn sharp btn-primary tp-btn i-false">
													<svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.19995 10.001C5.19995 9.71197 5.14302 9.42576 5.03241 9.15872C4.9218 8.89169 4.75967 8.64905 4.55529 8.44467C4.35091 8.24029 4.10828 8.07816 3.84124 7.96755C3.5742 7.85694 3.28799 7.80001 2.99895 7.80001C2.70991 7.80001 2.4237 7.85694 2.15667 7.96755C1.88963 8.07816 1.64699 8.24029 1.44261 8.44467C1.23823 8.64905 1.0761 8.89169 0.965493 9.15872C0.854882 9.42576 0.797952 9.71197 0.797952 10.001C0.798085 10.5848 1.0301 11.1445 1.44296 11.5572C1.85582 11.9699 2.41571 12.2016 2.99945 12.2015C3.58319 12.2014 4.14297 11.9694 4.55565 11.5565C4.96832 11.1436 5.20008 10.5838 5.19995 10L5.19995 10.001ZM5.19995 3.00101C5.19995 2.71197 5.14302 2.42576 5.03241 2.15872C4.9218 1.89169 4.75967 1.64905 4.55529 1.44467C4.35091 1.24029 4.10828 1.07816 3.84124 0.967552C3.5742 0.856941 3.28799 0.800011 2.99895 0.800011C2.70991 0.800011 2.4237 0.856941 2.15667 0.967552C1.88963 1.07816 1.64699 1.24029 1.44261 1.44467C1.23823 1.64905 1.0761 1.89169 0.965493 2.15872C0.854883 2.42576 0.797953 2.71197 0.797953 3.00101C0.798085 3.58475 1.0301 4.14453 1.44296 4.55721C1.85582 4.96988 2.41571 5.20164 2.99945 5.20151C3.58319 5.20138 4.14297 4.96936 4.55565 4.5565C4.96832 4.14364 5.20008 3.58375 5.19995 3.00001L5.19995 3.00101ZM5.19995 17.001C5.19995 16.712 5.14302 16.4258 5.03241 16.1587C4.9218 15.8917 4.75967 15.6491 4.55529 15.4447C4.35091 15.2403 4.10828 15.0782 3.84124 14.9676C3.5742 14.8569 3.28799 14.8 2.99895 14.8C2.70991 14.8 2.4237 14.8569 2.15666 14.9676C1.88963 15.0782 1.64699 15.2403 1.44261 15.4447C1.23823 15.6491 1.0761 15.8917 0.965493 16.1587C0.854882 16.4258 0.797952 16.712 0.797952 17.001C0.798084 17.5848 1.0301 18.1445 1.44296 18.5572C1.85582 18.9699 2.41571 19.2016 2.99945 19.2015C3.58319 19.2014 4.14297 18.9694 4.55565 18.5565C4.96832 18.1436 5.20008 17.5838 5.19995 17L5.19995 17.001Z" fill="var(--primary)" />
													</svg>
												</Dropdown.Toggle>
												<Dropdown.Menu className="dropdown-menu dropdown-menu-end">
													<Dropdown.Item className="dropdown-item" href="javascript:void(0);">Option 1</Dropdown.Item>
													<Dropdown.Item className="dropdown-item" href="javascript:void(0);">Option 2</Dropdown.Item>
													<Dropdown.Item className="dropdown-item" href="javascript:void(0);">Option 3</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
										<div className="card-body">
											{/* <div id="tradingview_e8053" className="tranding-chart"></div> */}
											<DashboardComboChart />
										</div>
									</div>
								</div>
								<div className="col-xl-5 assets-al col-lg-12">
									<div className="card">
										<div className="card-header border-0 pb-0">
											<h2 className="heading">Assets Allocation</h2>
											<Dropdown className="dropdown custom-dropdown">
												<Dropdown.Toggle className="btn sharp btn-primary tp-btn i-false">
													<svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M5.19995 10.001C5.19995 9.71197 5.14302 9.42576 5.03241 9.15872C4.9218 8.89169 4.75967 8.64905 4.55529 8.44467C4.35091 8.24029 4.10828 8.07816 3.84124 7.96755C3.5742 7.85694 3.28799 7.80001 2.99895 7.80001C2.70991 7.80001 2.4237 7.85694 2.15667 7.96755C1.88963 8.07816 1.64699 8.24029 1.44261 8.44467C1.23823 8.64905 1.0761 8.89169 0.965493 9.15872C0.854882 9.42576 0.797952 9.71197 0.797952 10.001C0.798085 10.5848 1.0301 11.1445 1.44296 11.5572C1.85582 11.9699 2.41571 12.2016 2.99945 12.2015C3.58319 12.2014 4.14297 11.9694 4.55565 11.5565C4.96832 11.1436 5.20008 10.5838 5.19995 10L5.19995 10.001ZM5.19995 3.00101C5.19995 2.71197 5.14302 2.42576 5.03241 2.15872C4.9218 1.89169 4.75967 1.64905 4.55529 1.44467C4.35091 1.24029 4.10828 1.07816 3.84124 0.967552C3.5742 0.856941 3.28799 0.800011 2.99895 0.800011C2.70991 0.800011 2.4237 0.856941 2.15667 0.967552C1.88963 1.07816 1.64699 1.24029 1.44261 1.44467C1.23823 1.64905 1.0761 1.89169 0.965493 2.15872C0.854883 2.42576 0.797953 2.71197 0.797953 3.00101C0.798085 3.58475 1.0301 4.14453 1.44296 4.55721C1.85582 4.96988 2.41571 5.20164 2.99945 5.20151C3.58319 5.20138 4.14297 4.96936 4.55565 4.5565C4.96832 4.14364 5.20008 3.58375 5.19995 3.00001L5.19995 3.00101ZM5.19995 17.001C5.19995 16.712 5.14302 16.4258 5.03241 16.1587C4.9218 15.8917 4.75967 15.6491 4.55529 15.4447C4.35091 15.2403 4.10828 15.0782 3.84124 14.9676C3.5742 14.8569 3.28799 14.8 2.99895 14.8C2.70991 14.8 2.4237 14.8569 2.15666 14.9676C1.88963 15.0782 1.64699 15.2403 1.44261 15.4447C1.23823 15.6491 1.0761 15.8917 0.965493 16.1587C0.854882 16.4258 0.797952 16.712 0.797952 17.001C0.798084 17.5848 1.0301 18.1445 1.44296 18.5572C1.85582 18.9699 2.41571 19.2016 2.99945 19.2015C3.58319 19.2014 4.14297 18.9694 4.55565 18.5565C4.96832 18.1436 5.20008 17.5838 5.19995 17L5.19995 17.001Z" fill="var(--primary)" />
													</svg>
												</Dropdown.Toggle>
												<Dropdown.Menu className="dropdown-menu dropdown-menu-end" align="end">
													<Dropdown.Item >Option 1</Dropdown.Item>
													<Dropdown.Item >Option 2</Dropdown.Item>
													<Dropdown.Item >Option 3</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
										<div className="card-body text-center pt-0 pb-2">
											<div id="morris_donught" className="custome-donut">
												{/* <MorrisDonught /> */}
												<AssetsChart />
											</div>
											<div className="chart-items">
												<div className="row">
													<div className=" col-xl-12 col-sm-12">
														<div className="text-start">
															<span className="font-w600 mb-2 d-block text-secondary fs-14">Legend</span>
															{pickerData.map((data, ind) => (
																<div className="color-picker" key={ind}>
																	<span className="mb-0 col-6 fs-14">
																		<svg className="me-2" width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect width="14" height="14" rx="4" fill={data.fillcolor} />
																		</svg>
																		{data.datatitle}
																	</span>
																	<h5>${data.price}</h5>
																</div>
															))}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 market-previews col-sm-6">
									<div className="card">
										<div className="card-header border-0 pb-0">
											<div>
												<h2 className="heading">Market Previews</h2>
											</div>
										</div>
										<div className="card-body pt-0 px-0">
											{marketBlog.map((data, ind) => (
												<div className="previews-info-list" key={ind}>
													<div className="pre-icon">
														<span className={`icon-box icon-box-sm ${data.classBg}`}>
															{data.icon}
														</span>
														<div className="ms-2">
															<h6>{data.Name}/Year</h6>
															<span>March</span>
														</div>
													</div>
													<div className="count">
														<h6>120.45</h6>
														<span className={ind % 2 == 0 ? "text-success" : ""}>1,24%</span>
													</div>
												</div>
											))}

										</div>
									</div>
								</div>
								<div className="col-xl-3 col-sm-6">
									<div className="card bg-secondary email-susb">
										<div className="card-body text-center">
											<div className="">
												<img src={metaverse} alt="" />
											</div>
											<div className="toatal-email">
												<h3>7,642</h3>
												<h5>Total emails Subcriber</h5>
											</div>
											<Link to={"/exchange"} className="btn btn-primary email-btn">Buy Coin</Link>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4">
							<div className="row">
								<div className="col-xl-12 col-sm-6">
									<div className="card h-auto">
										<div className="card-body px-0 pt-1">
											<Tab.Container defaultActiveKey="Navbuy">
												<div className="">
													<div className="buy-sell">
														<Nav className="nav nav-tabs" eventKey="nav-tab2" role="tablist">
															<Nav.Link as="button" className="nav-link" eventKey="Navbuy" type="button">buy</Nav.Link>
															<Nav.Link as="button" className="nav-link" eventKey="Navsell" type="button">sell</Nav.Link>
														</Nav>
													</div>
													<Tab.Content  >
														<Tab.Pane eventKey="Navbuy" >
															<Tab.Container defaultActiveKey="Navbuymarket">
																<div className="limit-sell">
																	<Nav className="nav nav-tabs" id="nav-tab3" role="tablist">
																		<Nav.Link as="button" eventKey="Navbuymarket" type="button"  >market order</Nav.Link>
																		<Nav.Link as="button" eventKey="Navbuylimit" type="button" >limit order</Nav.Link>
																	</Nav>
																</div>
																<Tab.Content id="nav-tabContent1">
																	<Tab.Pane eventKey="Navbuymarket"></Tab.Pane>
																	<Tab.Pane eventKey="Navbuylimit"></Tab.Pane>
																</Tab.Content>
																<div className="sell-element">
																	<OrderForm />
																</div>
															</Tab.Container>
														</Tab.Pane>
														<Tab.Pane eventKey="Navsell">
															<Tab.Container defaultActiveKey="Navsellmarket">
																<div className="limit-sell">
																	<Nav className="nav nav-tabs">
																		<Nav.Link as="button" eventKey="Navsellmarket" type="button">market order</Nav.Link>
																		<Nav.Link as="button" eventKey="Navselllimit" type="button" >limit order</Nav.Link>
																	</Nav>
																</div>
																<Tab.Content id="nav-tabContent2">
																	<Tab.Pane id="Navsellmarket" ></Tab.Pane>
																	<Tab.Pane id="Navselllimit" ></Tab.Pane>
																</Tab.Content>
																<div className="sell-element">
																	<OrderForm />
																</div>
															</Tab.Container>
														</Tab.Pane>
													</Tab.Content>
												</div>
											</Tab.Container>
										</div>
									</div>
								</div>
								<div className="col-xl-12 col-sm-6">

									<div className="card">
										<div className="card-header py-2">
											<h2 className="heading">Order Book <span>(BTC/USDT)</span></h2>
										</div>
										<div className="card-body pt-0 pb-3 px-2">
											<Tab.Container defaultActiveKey="Openorder">
												<nav className="buy-sell style-1">
													<Nav className=" nav-tabs" id="nav-tab1" role="tablist">
														<Nav.Link as="button" className="nav-link " eventKey="Openorder" type="button" >Open Orders</Nav.Link>
														<Nav.Link as="button" className="nav-link" eventKey="Orderhistory" type="button" >Order History</Nav.Link>
													</Nav>
												</nav>
												<Tab.Content>
													<Tab.Pane eventKey="Openorder" >
														<div className="list-row-head">
															<span>Price</span>
															<span>Size</span>
															<span className="text-end">Total</span>
														</div>
														<div className="list-table danger">
															{listData.map((data, i) => (
																<div className="list-row" key={i}>
																	<span>19852.63</span>
																	<span>0.050300</span>
																	<span className="text-end">2.362877</span>
																	<div className="bg-layer"></div>
																</div>
															))}
														</div>
														<div className="list-bottom-info">
															<h6 className="text-danger mb-0">19858.19 <i className="fa-solid fa-caret-up"></i></h6>
														</div>
														<div className="list-table success">
															{listData.map((data, i) => (
																<div className="list-row" key={i}>
																	<span>19852.63</span>
																	<span>0.050300</span>
																	<span className="text-end">2.362877</span>
																	<div className="bg-layer"></div>
																</div>
															))}
														</div>
													</Tab.Pane>
													<Tab.Pane eventKey="Orderhistory" >
														<div className="list-row-head">
															<span>Price</span>
															<span>Size</span>
															<span className="text-end">Total</span>
														</div>
														<div className="list-table danger">
															{listData.map((data, i) => (
																<div className="list-row" key={i}>
																	<span>19852.63</span>
																	<span>0.050300</span>
																	<span className="text-end">2.362877</span>
																	<div className="bg-layer"></div>
																</div>
															))}
														</div>
														<div className="list-bottom-info">
															<h6 className="text-danger mb-0">19858.19 <i className="fa-solid fa-caret-up"></i></h6>
														</div>
														<div className="list-table success">
															{listData.map((data, i) => (
																<div className="list-row" key={i}>
																	<span>19852.63</span>
																	<span>0.050300</span>
																	<span className="text-end">2.362877</span>
																	<div className="bg-layer"></div>
																</div>
															))}
														</div>
													</Tab.Pane>
												</Tab.Content>
											</Tab.Container>
										</div>
									</div>
								</div>
								<div className="col-xl-12 col-sm-6 server-chart">
									<div className="card">
										<div className="card-header border-0 pb-0">
											<h2 className="heading mb-0">Server Status</h2>
										</div>
										<div className="card-body pt-0 custome-tooltip">
											<ServerStatusBar />
											<div className="d-flex server-status">
												<div>
													<span>Country</span>
													<h4 className="fs-14 mb-0">Indonesia</h4>
												</div>
												<div>
													<span>Domain</span>
													<h4 className="fs-14 mb-0">website.com</h4>
												</div>
												<div>
													<span><i className="fa-solid fa-caret-up text-secondary scale-2"></i></span>
													<h4 className="fs-14 mb-0">2.0 mbps</h4>
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