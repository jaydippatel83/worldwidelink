import React,{useContext, useEffect, useReducer,  useState} from 'react';
import {Link} from 'react-router-dom';
//import {NavLink} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import {Dropdown, Nav, Tab} from 'react-bootstrap';

//Import Components
import { ThemeContext } from "../../../../context/ThemeContext";
import BalanceCardSlider from './../Dashboard/BalanceCardSlider';
import OrderForm from './../Dashboard/OrderForm';
import {LtcIcon, BtcIcon, XtzIcon, EthIcon} from './../SvgIcon';

//images
import coin from './../../../../images/coin.png';
import metaverse from './../../../../images/metaverse.png';


const DashboardComboChart = loadable(() =>
	pMinDelay(import("./../Dashboard/DashboardComboChart"), 1000)
);
const AssetsChart = loadable(() =>
	pMinDelay(import("./../Dashboard/AssetsChart"), 1000)
);

const ServerStatusBar = loadable(() =>
	pMinDelay(import("./../Dashboard/ServerStatusBar"), 1000)
);


const pickerData = [
	{fillcolor: 'var(--primary)', datatitle:'XTZ(40%)', price:'763'},
	{fillcolor: '#2A353A', datatitle:'BTC(20%)', price:'321'},
	{fillcolor: '#C0E192', datatitle:'BNB(10%)', price:'69'},
	{fillcolor: '#E085E4', datatitle:'ETH(10%)', price:'154'},
];


const marketBlog = [
	{icon: LtcIcon, classBg: 'bg-success', Name:'LTC', },
	{icon: BtcIcon, classBg: 'bg-warning', Name:'BTC', },
	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
	{icon: EthIcon, classBg: 'bg-pink', Name:'ETH', },
	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
];

const listData = [
	{},{},{},{},
	{},{},{},{},
	{},{},{},
];

const Theme7 = () => {	
	const { changeBackground,
		changePrimaryColor,
		chnageSidebarColor,
		changeNavigationHader,
		//chnageHaderColor
     } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
		changePrimaryColor("color_9");		
		chnageSidebarColor("color_9");
		changeNavigationHader("color_9");
		//chnageHaderColor("color_5");
	}, []);
	return(
		<>
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
												<path d="M5.19995 10.001C5.19995 9.71197 5.14302 9.42576 5.03241 9.15872C4.9218 8.89169 4.75967 8.64905 4.55529 8.44467C4.35091 8.24029 4.10828 8.07816 3.84124 7.96755C3.5742 7.85694 3.28799 7.80001 2.99895 7.80001C2.70991 7.80001 2.4237 7.85694 2.15667 7.96755C1.88963 8.07816 1.64699 8.24029 1.44261 8.44467C1.23823 8.64905 1.0761 8.89169 0.965493 9.15872C0.854882 9.42576 0.797952 9.71197 0.797952 10.001C0.798085 10.5848 1.0301 11.1445 1.44296 11.5572C1.85582 11.9699 2.41571 12.2016 2.99945 12.2015C3.58319 12.2014 4.14297 11.9694 4.55565 11.5565C4.96832 11.1436 5.20008 10.5838 5.19995 10L5.19995 10.001ZM5.19995 3.00101C5.19995 2.71197 5.14302 2.42576 5.03241 2.15872C4.9218 1.89169 4.75967 1.64905 4.55529 1.44467C4.35091 1.24029 4.10828 1.07816 3.84124 0.967552C3.5742 0.856941 3.28799 0.800011 2.99895 0.800011C2.70991 0.800011 2.4237 0.856941 2.15667 0.967552C1.88963 1.07816 1.64699 1.24029 1.44261 1.44467C1.23823 1.64905 1.0761 1.89169 0.965493 2.15872C0.854883 2.42576 0.797953 2.71197 0.797953 3.00101C0.798085 3.58475 1.0301 4.14453 1.44296 4.55721C1.85582 4.96988 2.41571 5.20164 2.99945 5.20151C3.58319 5.20138 4.14297 4.96936 4.55565 4.5565C4.96832 4.14364 5.20008 3.58375 5.19995 3.00001L5.19995 3.00101ZM5.19995 17.001C5.19995 16.712 5.14302 16.4258 5.03241 16.1587C4.9218 15.8917 4.75967 15.6491 4.55529 15.4447C4.35091 15.2403 4.10828 15.0782 3.84124 14.9676C3.5742 14.8569 3.28799 14.8 2.99895 14.8C2.70991 14.8 2.4237 14.8569 2.15666 14.9676C1.88963 15.0782 1.64699 15.2403 1.44261 15.4447C1.23823 15.6491 1.0761 15.8917 0.965493 16.1587C0.854882 16.4258 0.797952 16.712 0.797952 17.001C0.798084 17.5848 1.0301 18.1445 1.44296 18.5572C1.85582 18.9699 2.41571 19.2016 2.99945 19.2015C3.58319 19.2014 4.14297 18.9694 4.55565 18.5565C4.96832 18.1436 5.20008 17.5838 5.19995 17L5.19995 17.001Z" fill="var(--primary)"/>
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
												<path d="M5.19995 10.001C5.19995 9.71197 5.14302 9.42576 5.03241 9.15872C4.9218 8.89169 4.75967 8.64905 4.55529 8.44467C4.35091 8.24029 4.10828 8.07816 3.84124 7.96755C3.5742 7.85694 3.28799 7.80001 2.99895 7.80001C2.70991 7.80001 2.4237 7.85694 2.15667 7.96755C1.88963 8.07816 1.64699 8.24029 1.44261 8.44467C1.23823 8.64905 1.0761 8.89169 0.965493 9.15872C0.854882 9.42576 0.797952 9.71197 0.797952 10.001C0.798085 10.5848 1.0301 11.1445 1.44296 11.5572C1.85582 11.9699 2.41571 12.2016 2.99945 12.2015C3.58319 12.2014 4.14297 11.9694 4.55565 11.5565C4.96832 11.1436 5.20008 10.5838 5.19995 10L5.19995 10.001ZM5.19995 3.00101C5.19995 2.71197 5.14302 2.42576 5.03241 2.15872C4.9218 1.89169 4.75967 1.64905 4.55529 1.44467C4.35091 1.24029 4.10828 1.07816 3.84124 0.967552C3.5742 0.856941 3.28799 0.800011 2.99895 0.800011C2.70991 0.800011 2.4237 0.856941 2.15667 0.967552C1.88963 1.07816 1.64699 1.24029 1.44261 1.44467C1.23823 1.64905 1.0761 1.89169 0.965493 2.15872C0.854883 2.42576 0.797953 2.71197 0.797953 3.00101C0.798085 3.58475 1.0301 4.14453 1.44296 4.55721C1.85582 4.96988 2.41571 5.20164 2.99945 5.20151C3.58319 5.20138 4.14297 4.96936 4.55565 4.5565C4.96832 4.14364 5.20008 3.58375 5.19995 3.00001L5.19995 3.00101ZM5.19995 17.001C5.19995 16.712 5.14302 16.4258 5.03241 16.1587C4.9218 15.8917 4.75967 15.6491 4.55529 15.4447C4.35091 15.2403 4.10828 15.0782 3.84124 14.9676C3.5742 14.8569 3.28799 14.8 2.99895 14.8C2.70991 14.8 2.4237 14.8569 2.15666 14.9676C1.88963 15.0782 1.64699 15.2403 1.44261 15.4447C1.23823 15.6491 1.0761 15.8917 0.965493 16.1587C0.854882 16.4258 0.797952 16.712 0.797952 17.001C0.798084 17.5848 1.0301 18.1445 1.44296 18.5572C1.85582 18.9699 2.41571 19.2016 2.99945 19.2015C3.58319 19.2014 4.14297 18.9694 4.55565 18.5565C4.96832 18.1436 5.20008 17.5838 5.19995 17L5.19995 17.001Z" fill="var(--primary)"/>
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
													{pickerData.map((data,ind)=>(
														<div className="color-picker" key={ind}>
															<span className="mb-0 col-6 fs-14">
																<svg className="me-2" width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<rect width="14" height="14" rx="4" fill={data.fillcolor}/>
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
									{marketBlog.map((data, ind)=>(
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
												<span className={ind%2 == 0 ? "text-success" : ""}>1,24%</span>
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
													<Nav.Link as="button" className="nav-link" eventKey="Navsell"  type="button">sell</Nav.Link>
												</Nav>
											</div>
											<Tab.Content  >
												<Tab.Pane  eventKey="Navbuy" >
													<Tab.Container defaultActiveKey="Navbuymarket">
														<div className="limit-sell">
															<Nav  className="nav nav-tabs" id="nav-tab3" role="tablist">
																<Nav.Link as="button"  eventKey="Navbuymarket"  type="button"  >market order</Nav.Link>
																<Nav.Link as="button"  eventKey="Navbuylimit"  type="button" >limit order</Nav.Link>
															</Nav>
														</div>
														<Tab.Content  id="nav-tabContent1">
															<Tab.Pane  eventKey="Navbuymarket"></Tab.Pane>
															<Tab.Pane  eventKey="Navbuylimit"></Tab.Pane>
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
																<Nav.Link as="button" eventKey="Navsellmarket"  type="button">market order</Nav.Link>
																<Nav.Link as="button" eventKey="Navselllimit"  type="button" >limit order</Nav.Link>
															</Nav>
														</div>
														<Tab.Content id="nav-tabContent2">
															<Tab.Pane id="Navsellmarket" ></Tab.Pane>
															<Tab.Pane  id="Navselllimit" ></Tab.Pane>														
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
												<Nav.Link as="button"  className="nav-link " eventKey="Openorder"  type="button" >Open Orders</Nav.Link>
												<Nav.Link as="button" className="nav-link" eventKey="Orderhistory" type="button" >Order History</Nav.Link>
											</Nav>
										</nav>
										<Tab.Content>
											<Tab.Pane  eventKey="Openorder" >
												<div className="list-row-head">
													<span>Price</span>
													<span>Size</span>
													<span className="text-end">Total</span>
												</div>
												<div className="list-table danger">
													{listData.map((data, i)=>(
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
													{listData.map((data, i)=>(
														<div className="list-row" key={i}>
															<span>19852.63</span>
															<span>0.050300</span>
															<span className="text-end">2.362877</span>
															<div className="bg-layer"></div>
														</div>
													))}													
												</div>
											</Tab.Pane>
											<Tab.Pane  eventKey="Orderhistory" >
												<div className="list-row-head">
													<span>Price</span>
													<span>Size</span>
													<span className="text-end">Total</span>
												</div>
												<div className="list-table danger">
													{listData.map((data, i)=>(
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
													{listData.map((data, i)=>(
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
		</>
	)
}
export default Theme7;