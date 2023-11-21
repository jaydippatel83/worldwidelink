import React from 'react';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import Select from 'react-select';

//Import 
import {LtcIcon, BtcIcon, XtzIcon, EthIcon} from '../Dashboard/SvgIcon';

import MarketCardSlider from './Market/MarketCardSlider';

const  MarketAreaChart = loadable(() =>
	pMinDelay(import("./Market/MarketAreaChart"), 1000)
);


const marketBlog = [
	{icon: LtcIcon, classBg: 'bg-success', Name:'LTC', },
	{icon: BtcIcon, classBg: 'bg-warning', Name:'BTC', },
	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
	{icon: EthIcon, classBg: 'bg-pink', Name:'ETH', },
	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
];

const sellOrderTable = [
    {price:'33', amount:'0.32', total:'$ 33,568'},
    {price:'74', amount:'0.12', total:'$ 34,128'},
    {price:'41', amount:'0.22', total:'$ 26,568'},
    {price:'55', amount:'0.37', total:'$ 31,568'},
    {price:'42', amount:'0.11', total:'$ 19,999'},
    {price:'35', amount:'0.32', total:'$ 39,110'},
    {price:'33', amount:'0.35', total:'$ 20,321'},
];

const options = [
    { value: '1', label: 'This Month' },
    { value: '2', label: 'Weeks' },
    { value: '3', label: 'Today' },
]

const MarketWatch = () =>{
    return(
        <>
            <div className="row">
                <div className="col-xl-9 col-lg-12">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header border-0 d-block pb-0">
                                    <h2 className="heading">Market Chart</h2>
                                    <div className="d-flex justify-content-between">
                                        <div className="market-data">
                                            <div className="income data">
                                                <span>This Month</span>
                                                <h4>$29.999.00</h4>
                                            </div>
                                            <div className="price data">
                                                <span>Price</span>
                                                <h4 className="d-flex align-items-center">480 <span className="ms-2">- 0,5%</span></h4>
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
                                        <div className="d-flex align-items-center">
                                            <div className="dropdown bootstrap-select">
                                                {/* <select className="default-select form-control width-140" aria-label="Default" tabindex="0">
                                                    <option selected="">This Month</option>
                                                    <option value="1">Weeks</option>
                                                    <option value="2">Today</option>
                                                </select> */}
                                                <Select 
                                                    options={options}  
                                                    className="custom-react-select"
                                                    defaultValue={options[0]}    
                                                    isSearchable={false}
                                                />
                                            </div>
                                        </div>											
                                    </div>
                                </div>
                                <div className="card-body pt-0 custome-tooltip">
                                    <MarketAreaChart />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <MarketCardSlider />  
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-12">
                    <div className="row">
                        <div className="col-xl-12 col-lg-6">
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
                        <div className="col-xl-12 col-lg-6">
                            <div className="card bg-primary">
                                <div className="card-header border-0 pb-0">
                                    <div>
                                        <h2 className="heading mb-0 text-white">Sell Order</h2>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="table-responsive">
                                        <table className="table table-sell verticle-middle mb-0">
                                            <thead>
                                                <tr className="text-white">
                                                    <th scope="col">Price</th>
                                                    <th className="text-center" scope="col">Amount</th>
                                                    <th className="text-end" scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sellOrderTable.map((item, ind)=>(
                                                    <tr className="text-white" key={ind}>
                                                        <td>{item.price}</td>
                                                        <td className="text-center">{item.amount}</td>
                                                        <td className="text-end">{item.total}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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
export default MarketWatch;