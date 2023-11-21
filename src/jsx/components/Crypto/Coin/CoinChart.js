import React from 'react';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import Select from 'react-select';

const BitCoinChart = loadable(() =>
	pMinDelay(import("./BitCoinChart"), 1000)
);

const options = [
    {value:'1', label:'USD ($ US Dollar)'},
    {value:'2', label:'BTC ($ US Dollar)'},
    {value:'3', label:'USD ($ US Dollar)'},
];

const CoinChart = () =>{
    return(
        <>
            <div className="card coin-content">		
                <div className="card-header border-0 flex-wrap">
                    <div className="mb-2">
                        <h4 className="heading m-0">Coin Chart</h4>
                        <span className="fs-16">Lorem ipsum dolor sit amet, consectetur</span>
                    </div>
                    <div className="dropdown bootstrap-select">
                        {/* <select className="image-select default-select dashboard-select" aria-label="Default" tabindex="0">
                            <option selected="">USD ($ US Dollar)</option>
                            <option value="1">BTC ($ US Dollar)</option>
                            <option value="2">USD ($ US Dollar)</option>
                        </select> */}
                        <Select 
                            className="custom-react-select mb-xl-0 mb-3" 
                            options={options}
                            defaultValue={options[0]}
                            isSearchable={false}
                        />
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="price-content">
                                <span className="fs-18 d-block mb-2">Price</span>
                                <h4 className="fs-20 font-w600">$9,542.39</h4>
                            </div>
                            <div className="price-content">
                                <span className="fs-14 d-block mb-2">24h% change</span>
                                <h4 className="font-w600 text-success">1.64%<i className="fa-solid fa-caret-up ms-1 text-success"></i></h4>
                            </div>
                            <div className="price-content">
                                <span className="fs-14 d-block mb-2">Volume (24h)</span>
                                <h4 className="font-w600">$47.22B</h4>
                            </div>
                            <div className="price-content">
                                <span className="fs-14 d-block mb-2">Market Cap</span>
                                <h4 className="font-w600">$219.24B</h4>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <h4 className="me-5 font-w600 mb-0"><span className="text-success me-2">BUY</span> $5,673</h4>
                            <h4 className="font-w600 mb-0"><span className="text-danger me-2">SELL</span> $5,982</h4>
                        </div>
                    </div>	
                    {/* <div id="bitcoinhChart"></div> */}
                    <BitCoinChart />
                </div>
            </div>
        </>
    )
}
export default CoinChart;