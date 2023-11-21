import React, {useEffect, useState, useRef } from 'react';
import {Dropdown, Tab, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

import OrderTab from './Future/OrderTab';
import TradeTab from './Future/TradeTab';


const BitCoinChart = loadable(() =>
	pMinDelay(import("./../Crypto/Coin/BitCoinChart"), 1000)
);

const tableData = [
    { price:'19972.43',Size: '0.0488',total:'6.8312',},
    { price:'20972.43',Size: '0.0588',total:'5.8312',},
    { price:'16572.43',Size: '0.0488',total:'7.8312',},
    { price:'20972.43',Size: '0.0114',total:'8.1212',},
    { price:'19972.43',Size: '0.0216',total:'6.9852',},
    { price:'20972.43',Size: '0.0325',total:'3.1232',},
    { price:'19972.43',Size: '0.0434',total:'4.8122',},
    { price:'20972.43',Size: '0.0543',total:'5.6542',},
    { price:'19972.43',Size: '0.0651',total:'4.1232',},
    { price:'20972.43',Size: '0.0762',total:'2.1232',},
    
];
const tabDataBlog = [
    { Name:"Tiger Nixon", Trade:"System Architect", Side:"Edinburgh", Number:"61", Date:"2022/04/25", Amount:"$320,800"},
    { Name:"Ashton Cox", Trade:"Junior Technical Author", Side:"San Francisco", Number:"66", Date:"2022/01/12", Amount:"$86,000"},
    { Name:"Brielle Williamson", Trade:"Integration Specialist", Side:"New York", Number:"71", Date:"2022/12/02", Amount:"$372,000"},
    { Name:"Cedric Kelly", Trade:"Senior Developer", Side:"Edinburgh", Number:"75", Date:"2022/05/29", Amount:"$433,060"},
    { Name:"Garrett Winters", Trade:"Accountant", Side:"Tokyo", Number:"63", Date:"2022/07/25", Amount:"$170,750"},
    { Name:"Tiger Nixon", Trade:"System Architect", Side:"Edinburgh", Number:"36", Date:"2022/12/25", Amount:"$170,750"},
];


const Future = () =>{
    const [data, setData] = useState(
		document.querySelectorAll("#future_wrapper tbody tr")
	);
	const sort = 6;
	const activePag = useRef(0);
	const [test, settest] = useState(0);

	// Active data
	const chageData = (frist, sec) => {
		for (var i = 0; i < data.length; ++i) {
			if (i >= frist && i < sec) {
				data[i].classList.remove("d-none");
			} else {
				data[i].classList.add("d-none");
			}
		}
	};
   // use effect
    useEffect(() => {
      setData(document.querySelectorAll("#future_wrapper tbody tr"));
      //chackboxFun();
	}, [test]);

  
   // Active pagginarion
    activePag.current === 0 && chageData(0, sort);
   // paggination
    let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   // Active paggination & chage data
	const onClick = (i) => {
		activePag.current = i;
		chageData(activePag.current * sort, (activePag.current + 1) * sort);
		settest(i);
	};
    return(
        <>
            <div className="row">
                <div className="col-xxl-8">
                    <div className="card">
                        <div className="card-header border-0 flex-wrap">
                            <div className="mb-2">
                                <h4 className="heading m-0">Future Chart</h4>
                                <span className="fs-16">Lorem ipsum dolor sit amet, consectetur</span>
                            </div>
                            <Dropdown className="custom-dropdown mb-0">
                                <Dropdown.Toggle as="div" className="btn sharp  tp-btn i-false btn-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect>
                                            <circle fill="#000000" cx="12" cy="5" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2">
                                            </circle><circle fill="#000000" cx="12" cy="19" r="2"></circle>
                                        </g>
                                    </svg>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end mb-0" align="end">
                                    <Dropdown.Item>Option 1</Dropdown.Item>
                                    <Dropdown.Item>Option 2</Dropdown.Item>
                                    <Dropdown.Item>Option 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="card-body pt-0">
                            {/* <div id="tradingview_85dc0" className=""></div>
                            <BitCoinChart /> */}
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
                </div>
                <div className="col-xxl-4">
                    <div className="card">
                        <div className="card-header border-0 pb-0">
                            <h4 className="heading mb-0">Future Trade</h4>
                        </div>
                        <div className="card-body pt-2">
                            <div className="d-flex align-items-center justify-content-between my-3">
                                <span className="small text-muted">Avbl Balance</span>
                                <span className="">210.800 USDT</span>
                            </div>
                            <form>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Price</span>
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text">USDT</span>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Size</span>
                                    <input type="text" className="form-control" />
                                    <Dropdown>
                                        <Dropdown.Toggle  className="btn btn-primary btn-outline-primary left-radius">USDT</Dropdown.Toggle>
                                        <Dropdown.Menu align="end"> 
                                            <Dropdown.Item>USDT</Dropdown.Item>
                                            <Dropdown.Item>BTC</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="mb-3 mt-4">
                                    <label className="form-label">TP/SL</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Take Profit" />
                                       
                                        <Dropdown>
                                            <Dropdown.Toggle  className="btn btn-primary btn-outline-primary left-radius">Mark</Dropdown.Toggle>
                                            <Dropdown.Menu align="end"> 
                                                <Dropdown.Item>Last</Dropdown.Item>
                                                <Dropdown.Item>Mark</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="input-group mb-3"><input type="text" className="form-control" placeholder="Stop Loss" />
                                        
                                        <Dropdown>
                                            <Dropdown.Toggle  className="btn btn-primary btn-outline-primary left-radius">Mark</Dropdown.Toggle>
                                            <Dropdown.Menu align="end"> 
                                                <Dropdown.Item>Last</Dropdown.Item>
                                                <Dropdown.Item>Mark</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Stop Price</span>
                                    <input type="text" className="form-control" />
                                   
                                    <Dropdown>
                                        <Dropdown.Toggle  className="btn btn-primary btn-outline-primary left-radius">Mark</Dropdown.Toggle>
                                        <Dropdown.Menu align="end"> 
                                            <Dropdown.Item>Limit</Dropdown.Item>
                                            <Dropdown.Item>Mark</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="d-flex justify-content-between flex-wrap">
                                    <div className="d-flex">
                                        <div className="">Cost</div>
                                        <div className="text-muted px-1"> 0.00 USDT</div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="">Max</div>
                                        <div className="text-muted px-1"> 6.00 USDT </div>
                                    </div>
                                </div>
                                <div className="mt-3 d-flex justify-content-between">
                                    <Link to={"#"} className="btn btn-success py-2 text-uppercase">BUY</Link>
                                    <Link to={"#"} className="btn btn-danger py-2 text-uppercase">Sell</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header border-0 pb-0">
                            <h4 className="heading mb-0">Order Book</h4>
                        </div>
                        <div className="card-body pt-2 pb-0">
                            <table className="table shadow-hover orderbookTable">
                                <thead>
                                    <tr>
                                        <th>Price(USDT)</th>
                                        <th>Size(USDT)</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data, index)=>(
                                        <tr key={index}>
                                            <td>
                                                <span className={`${ index % 2 === 0 ? "text-success": "text-danger"}`}>{data.price}</span>
                                            </td>
                                            <td>{data.Size}</td>
                                            <td>{data.total}</td>
                                        </tr>
                                     ))   
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="card">
                        <Tab.Container defaultActiveKey="All">
                            <div className="card-header border-0 pb-2 flex-wrap">
                                <h4 className="heading">Trade Status</h4>
                                <>
                                    <Nav className="order nav nav-tabs">
                                        <Nav.Link as="button"  eventKey="All"  type="button">Order</Nav.Link>
                                        <Nav.Link as="button"  eventKey="Order" type="button">Order History</Nav.Link>
                                        <Nav.Link as="button"  eventKey="Trade" type="button">Trade Histroy</Nav.Link>
                                    </Nav>
                                </>
                            </div>
                            <div className="card-body pt-0 pb-0">
                                <Tab.Content >
                                    <Tab.Pane  eventKey="All">
                                        <div className="table-responsive dataTabletrade ">
                                            <div id="future_wrapper" className="dataTables_wrapper no-footer">
                                                <table id="example" className="table display dataTable no-footer" style={{minWidth:"845px"}}>
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Trade</th>
                                                            <th>Side</th>
                                                            <th>Number</th>
                                                            <th>Date</th>
                                                            <th className="text-end">Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tabDataBlog.map((item, index)=>(
                                                            <tr key={index}>
                                                                <td>{item.Name}</td>
                                                                <td>{item.Trade}</td>
                                                                <td>{item.Side}</td>
                                                                <td>{item.Number}</td>
                                                                <td>{item.Date}</td>
                                                                <td className="text-end">{item.Amount}</td>
                                                            </tr>
                                                        ))}                                                        
                                                    </tbody>
                                                </table>
                                                <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
                                                    <div className="dataTables_info">
                                                        Showing {activePag.current * sort + 1} to{" "}
                                                        {data.length > (activePag.current + 1) * sort
                                                            ? (activePag.current + 1) * sort
                                                            : data.length}{" "}
                                                        of {data.length} entries
                                                    </div>
                                                    <div
                                                        className="dataTables_paginate paging_simple_numbers mb-0"
                                                        id="application-tbl1_paginate"
                                                    >
                                                        <Link
                                                            className="paginate_button previous "
                                                            to="/future"
                                                            onClick={() =>
                                                                activePag.current > 0 &&
                                                                onClick(activePag.current - 1)
                                                            }
                                                            >
                                                            <i className="fa fa-angle-double-left" ></i> 
                                                        </Link>
                                                        <span>
                                                            {paggination.map((number, i) => (
                                                                <Link
                                                                    key={i}
                                                                    to="/future"
                                                                    className={`paginate_button  ${
                                                                        activePag.current === i ? "current" : ""
                                                                    } `}
                                                                    onClick={() => onClick(i)}
                                                                >
                                                                    {number}
                                                                </Link>
                                                            ))}
                                                        </span>

                                                        <Link
                                                            className="paginate_button next"
                                                            to="/future"
                                                            onClick={() =>
                                                                activePag.current + 1 < paggination.length &&
                                                                onClick(activePag.current + 1)
                                                            }
                                                        >
                                                            <i className="fa fa-angle-double-right" ></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>                                                
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Order">
                                        <OrderTab />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Trade">
                                        <TradeTab />
                                    </Tab.Pane>                                
                                </Tab.Content>           
                            </div>
                        </Tab.Container>           
                    </div>           
                </div>           
            </div>
        </>
    )
}
export default Future;