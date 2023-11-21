import React from 'react';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import {Dropdown} from 'react-bootstrap';
import {
	Sparklines,
	SparklinesLine,	
  } from "react-sparklines";

import {LtcIcon, BtcIcon, XtzIcon, EthIcon} from './SvgIcon';
import Index2Slider from './Index2/Index2Slider';
//import MarketChart from './Index2/MarketChart';

const MarketChart = loadable(() =>
	pMinDelay(import("./Index2/MarketChart"), 1000)
);

const sampleData = [ 8,3,8,6,5,3,5,7,5];

const marketBlog = [
	{icon: LtcIcon, classBg: 'bg-success', Name:'LTC', },
	{icon: BtcIcon, classBg: 'bg-warning', Name:'BTC', },
	{icon: EthIcon, classBg: 'bg-pink', Name:'ETH', },
	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
];

const overviewData = [
	{id:1 ,title: 'ETH/USD', stroke: '#FD5353'},
	{id:2 ,title: 'BTC/USD', stroke: '#3AB67A'},
	{id:3 ,title: 'LTC/USD', stroke: '#FD5353'},
	{id:4 ,title: 'XRP/USD', stroke: '#FD5353'},
	{id:5 ,title: 'LTC/USD', stroke: '#3AB67A'},
	{id:6 ,title: 'XRP/USD', stroke: '#FD5353'},
];

const Dashboard2 = () => {
	return(
		<>
			<div className="row">
				<div className="col-xl-12">
					<div className="row main-card">
						<div className="col-xxl-9 col-lg-12">
							<Index2Slider />
							<div className="row">
								<div className="col-xl-12 wow fadeInUp" data-wow-delay="1.5s">
									<div className="card market_chart">
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
										<div className="card-body custome-tooltip pt-0">
											<div id="activity1"></div>
											<MarketChart />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xxl-3 col-lg-12">
							<div className="row">
								<div className="col-xxl-12 col-lg-6">
									<div className="card market-previews-2">
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
															<span>January</span>
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
								
								<div className="col-xxl-12 col-lg-6">
									<div className="card">
										<div className="card-header border-0">
											<h4 className="fs-20 font-w600 m-0">Market Overview</h4>	
										</div>
										<div className="card-body pt-0">
											{overviewData.map((item, index)=>(
												<div className="d-flex justify-content-between align-items-center market-preview-3" key={index}>
													<div className="d-flex align-items-center">
														<span>
															{ item.id === 1 ?  
																<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M21.6654 24.2783C21.2382 24.4206 20.7623 24.4206 20.3351 24.2783L15.7502 22.75L21.0002 31.5L26.2502 22.75L21.6654 24.2783Z" fill="#00ADA3"/>
																	<path d="M21.0002 21L26.2502 18.9001L21.0002 10.5L15.7502 18.9001L21.0002 21Z" fill="#00ADA3"/>
																	<path d="M21.0001 0C9.40216 0 0.00012207 9.40204 0.00012207 21C0.00012207 32.5979 9.40216 41.9999 21.0001 41.9999C32.598 41.9999 42.0001 32.5979 42.0001 21C41.9873 9.40753 32.5925 0.0128174 21.0001 0ZM29.8418 20.171L22.3418 35.171C21.9715 35.9121 21.0701 36.2124 20.3295 35.8421C20.0388 35.697 19.8035 35.4617 19.6584 35.171L12.1584 20.171C11.9254 19.7031 11.9519 19.1479 12.2284 18.7043L19.7284 6.70443C20.2269 6.00222 21.1997 5.8365 21.9019 6.33501C22.0452 6.43664 22.1701 6.56115 22.2718 6.70443L29.7713 18.7043C30.0483 19.1479 30.0748 19.7031 29.8418 20.171Z" fill="#00ADA3"/>
																</svg>
															: item.id === 2 ? 
																<svg width="42" height="42" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M37.3334 22.167C37.3318 20.2347 35.7654 18.6688 33.8336 18.6667H23.3334V25.6667H33.8336C35.7654 25.6651 37.3318 24.0987 37.3334 22.167Z" fill="#FFAB2D"/>
																	<path d="M23.3334 37.3333H33.8336C35.7664 37.3333 37.3334 35.7664 37.3334 33.8336C37.3334 31.9003 35.7664 30.3333 33.8336 30.3333H23.3334V37.3333Z" fill="#FFAB2D"/>
																	<path d="M28 0C12.5361 0 0 12.5361 0 28C0 43.4639 12.5361 56 28 56C43.4639 56 56 43.4639 56 28C55.9823 12.5434 43.4566 0.0177002 28 0ZM42.0003 33.9998C41.9948 38.4163 38.4163 41.9948 34.0004 41.9997V43.9998C34.0004 45.1046 33.1044 46 32.0003 46C30.8955 46 30.0001 45.1046 30.0001 43.9998V41.9997H26.0005V43.9998C26.0005 45.1046 25.1045 46 24.0003 46C22.8956 46 22.0002 45.1046 22.0002 43.9998V41.9997H16.0004C14.8957 41.9997 14.0003 41.1043 14.0003 40.0002C14.0003 38.8954 14.8957 38 16.0004 38H18V18H16.0004C14.8957 18 14.0003 17.1046 14.0003 15.9998C14.0003 14.8951 14.8957 13.9997 16.0004 13.9997H22.0002V12.0002C22.0002 10.8954 22.8956 10 24.0003 10C25.1051 10 26.0005 10.8954 26.0005 12.0002V13.9997H30.0001V12.0002C30.0001 10.8954 30.8955 10 32.0003 10C33.105 10 34.0004 10.8954 34.0004 12.0002V13.9997C38.3998 13.9814 41.9814 17.5324 42.0003 21.9319C42.0101 24.2616 40.9999 26.479 39.2354 28C40.9835 29.5039 41.9924 31.6933 42.0003 33.9998Z" fill="#FFAB2D"/>
																</svg>
															: item.id === 3 ? 
																<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M21.6654 24.2783C21.2382 24.4206 20.7623 24.4206 20.3351 24.2783L15.7502 22.75L21.0002 31.5L26.2502 22.75L21.6654 24.2783Z" fill="#00ADA3"/>
																	<path d="M21.0002 21L26.2502 18.9001L21.0002 10.5L15.7502 18.9001L21.0002 21Z" fill="#00ADA3"/>
																	<path d="M21.0001 0C9.40216 0 0.00012207 9.40204 0.00012207 21C0.00012207 32.5979 9.40216 41.9999 21.0001 41.9999C32.598 41.9999 42.0001 32.5979 42.0001 21C41.9873 9.40753 32.5925 0.0128174 21.0001 0ZM29.8418 20.171L22.3418 35.171C21.9715 35.9121 21.0701 36.2124 20.3295 35.8421C20.0388 35.697 19.8035 35.4617 19.6584 35.171L12.1584 20.171C11.9254 19.7031 11.9519 19.1479 12.2284 18.7043L19.7284 6.70443C20.2269 6.00222 21.1997 5.8365 21.9019 6.33501C22.0452 6.43664 22.1701 6.56115 22.2718 6.70443L29.7713 18.7043C30.0483 19.1479 30.0748 19.7031 29.8418 20.171Z" fill="#00ADA3"/>
																</svg>
															: item.id === 4 ? 
																<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M21 42C25.1534 42 29.2135 40.7685 32.667 38.4607C36.1204 36.1533 38.8121 32.8736 40.4014 29.0363C41.991 25.1991 42.4069 20.9767 41.5965 16.9031C40.7861 12.8295 38.7862 9.08765 35.8492 6.15073C32.9123 3.21383 29.1705 1.21378 25.0969 0.403488C21.0233 -0.406801 16.8009 0.00906789 12.9636 1.59851C9.12641 3.18795 5.84666 5.87957 3.53914 9.33302C1.23163 12.7864 0 16.8465 0 21C0 26.5695 2.21249 31.9109 6.15075 35.8492C10.089 39.7875 15.4305 42 21 42Z" fill="var(--primary)"/>
																	<path d="M28.6839 12.0562H31.8414L25.2751 18.6075C24.1339 19.7474 22.5869 20.3877 20.9739 20.3877C19.3608 20.3877 17.8138 19.7474 16.6726 18.6075L10.1251 12.0562H13.2789L18.2664 17.0325C18.9892 17.7545 19.9691 18.1601 20.9907 18.1601C22.0124 18.1601 22.9923 17.7545 23.7151 17.0325L28.6839 12.0562Z" fill="white"/>
																	<path d="M13.2639 30.2775H10.1251L16.7139 23.685C17.8551 22.5451 19.4021 21.9048 21.0151 21.9048C22.6281 21.9048 24.1752 22.5451 25.3164 23.685L31.9201 30.2775H28.7664L23.7414 25.26C23.0186 24.538 22.0386 24.1324 21.017 24.1324C19.9953 24.1324 19.0154 24.538 18.2926 25.26L13.2639 30.2775Z" fill="white"/>
																</svg>
															: item.id === 5 ?
																<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M21 0C9.40205 0 0 9.40205 0 21C0 32.5979 9.40205 42 21 42C32.5979 42 42 32.5979 42 21C41.9867 9.40754 32.5925 0.0132752 21 0ZM28.5 31.5002H16.5002C15.6716 31.5002 15.0001 30.8287 15.0001 30.0001C15.0001 29.9292 15.0051 29.8582 15.0152 29.7877L16.144 21.8844L13.8639 22.4548C13.7449 22.485 13.6226 22.5001 13.5 22.5001C12.6714 22.4992 12.0008 21.8272 12.0012 20.9986C12.0022 20.3111 12.47 19.7123 13.137 19.5448L16.6018 18.6787L18.0149 8.78727C18.1321 7.96695 18.892 7.39749 19.7123 7.51468C20.5326 7.63187 21.1021 8.39176 20.9849 9.21208L19.7443 17.8931L25.1364 16.545C25.9388 16.3404 26.755 16.8252 26.9592 17.6276C27.1638 18.4301 26.679 19.2463 25.8766 19.4509C25.872 19.4518 25.8674 19.4532 25.8628 19.4541L19.2857 21.0984L18.2287 28.5H28.5C29.3286 28.5 30.0001 29.1716 30.0001 30.0001C30.0001 30.8282 29.3286 31.5002 28.5 31.5002Z" fill="#374C98"/>
																</svg>
															: item.id === 6 ?
																<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M21 42C25.1534 42 29.2135 40.7685 32.667 38.4607C36.1204 36.1533 38.8121 32.8736 40.4014 29.0363C41.991 25.1991 42.4069 20.9767 41.5965 16.9031C40.7861 12.8295 38.7862 9.08765 35.8492 6.15073C32.9123 3.21383 29.1705 1.21378 25.0969 0.403488C21.0233 -0.406801 16.8009 0.00906789 12.9636 1.59851C9.12641 3.18795 5.84666 5.87957 3.53914 9.33302C1.23163 12.7864 0 16.8465 0 21C0 26.5695 2.21249 31.9109 6.15075 35.8492C10.089 39.7875 15.4305 42 21 42Z" fill="#23292F"/>
																	<path d="M28.6839 12.0562H31.8414L25.2751 18.6075C24.1339 19.7474 22.5869 20.3877 20.9739 20.3877C19.3608 20.3877 17.8138 19.7474 16.6726 18.6075L10.1251 12.0562H13.2789L18.2664 17.0325C18.9892 17.7545 19.9691 18.1601 20.9907 18.1601C22.0124 18.1601 22.9923 17.7545 23.7151 17.0325L28.6839 12.0562Z" fill="white"/>
																	<path d="M13.2639 30.2775H10.1251L16.7139 23.685C17.8551 22.5451 19.4021 21.9048 21.0151 21.9048C22.6281 21.9048 24.1752 22.5451 25.3164 23.685L31.9201 30.2775H28.7664L23.7414 25.26C23.0186 24.538 22.0386 24.1324 21.017 24.1324C19.9953 24.1324 19.0154 24.538 18.2926 25.26L13.2639 30.2775Z" fill="white"/>
																</svg>
															: '' 
															}

														</span>

														<div className="ms-3">
															<Link to={"#"}><h5 className="fs-14 font-w600 mb-0">{item.title}</h5></Link>
															<span className="fs-12 font-w400">January</span>
														</div>
													</div>	
													
													<div className="d-flex align-items-center">														
														
														<svg  width="50" height="20">
															<Sparklines data={sampleData}  >
																<SparklinesLine style={{ strokeWidth: 8, stroke: item.stroke, fill: "none" }}  />
															</Sparklines>		
														</svg>	
														
													</div>	
												</div>
											))}
											
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
export default Dashboard2;