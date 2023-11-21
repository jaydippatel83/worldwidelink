import React, {useEffect, useState, useRef } from 'react';
import {Dropdown, Tab, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

//import IntradayChart from './IntradayChart';
import OrderTab from './Future/OrderTab';
import TradeTab from './Future/TradeTab';

const IntradayChart = loadable(() =>
  pMinDelay(import("./IntradayChart"), 1000)
);
const tabDataBlog = [
    { Date:'2022/11/20', Trade:'BITCOIN',Status:'BUY', Price:'$20000', Amount:'$162,700' },
    { Date:'2022/11/22', Trade:'BTC',    Status:'SELL', Price:'$21000', Amount:'$320,800' },
    { Date:'2022/12/10', Trade:'BTCUSD',Status:'SELL', Price:'$23000', Amount:'$170,750' },
    { Date:'2022/12/25', Trade:'INR',Status:'BUY', Price:'$27000', Amount:'$86,000' },
    { Date:'2022/12/22', Trade:'SEN',Status:'SELL', Price:'$13000', Amount:'$372,000' },
    { Date:'2022/12/30', Trade:'USD',Status:'BUY', Price:'$16000', Amount:'$433,060' },   
];

const IntradayTrading = () =>{
    const [data, setData] = useState(
		document.querySelectorAll("#status_wrapper tbody tr")
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
      setData(document.querySelectorAll("#status_wrapper tbody tr"));
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
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header pb-0 d-block d-sm-flex flex-wrap border-0 align-items-center">
                            <div className="me-auto mb-3">
                                <h4 className="fs-20 text-black">Trading Chart</h4>
                                <p className="mb-0 fs-12">Lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                            <Link to={"#"} className="btn btn-primary light btn-rounded me-3  mb-3"><i className="las la-download scale5 me-2"></i>Get Report</Link>
                        </div>
                        <div className="card-body">
                            <div className="row sp20 mb-4 align-items-center">
                                <div className="col-xxl-8 d-flex flex-wrap justify-content-between align-items-center">
                                    <div className="px-2 info-group">
                                        <p className="fs-18 mb-1">Price</p>
                                        <h2 className="fs-28 font-w600 text-black">
                                            $17,741.55
                                        </h2>
                                    </div>
                                    <div className="px-2 info-group">
                                        <p className="fs-14 mb-1">35h% change</p>
                                        <h3 className="fs-20 font-w600 text-success">
                                            4.23%
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0 7L7.00001 -8.77983e-06L14 7H7.00001H0Z"
                                                    fill="#2BC155"
                                                />
                                            </svg>
                                        </h3>
                                    </div>
                                    <div className="px-2 info-group">
                                        <p className="fs-14 mb-1">Volume (24h)</p>
                                        <h3 className="fs-20 font-w600 text-black">
                                            $56.75B
                                        </h3>
                                    </div>
                                    <div className="px-2 info-group">
                                        <p className="fs-14 mb-1">Market Cap</p>
                                        <h3 className="fs-20 font-w600 text-black">
                                            $874.11B
                                        </h3>
                                    </div>
                                </div>
                                <div className="d-flex col-xxl-4 align-items-center mt-sm-0 mt-3 justify-content-center">
                                    <div className="fs-18 font-w600 me-4">
                                        <span className="text-success pe-3">BUY</span>
                                        <span className="text-black">$6,456</span>
                                    </div>
                                    <div className="fs-18 font-w600">
                                        <span className="text-danger pe-3">SELL</span>
                                        <span className="text-black">$8,123</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tradingview-widget-container">
                                {/* <div id="tradingview_85dc0" className="tranding-chart"></div> */}
                                <IntradayChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header border-0 pb-0">
                            <h4 className="heading">Margin Trade</h4>
                        </div>
                        <div className="card-body pt-4">
                            <form>
                                <div className="row g-3 mb-3">
                                    <div className="col-xl-12">
                                        <label className="form-label">From</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" />
                                            <button className="btn btn-outline-primary btn-outline-primary " type="button">Max</button>
                                            {/* <button className="btn btn-primary btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">USDT</button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><a className="dropdown-item" href="#!">BTC</a></li>
                                                <li><a className="dropdown-item" href="#!">ETH</a></li>
                                                <li><a className="dropdown-item" href="#!">BUSD</a></li>
                                                <li><a className="dropdown-item" href="#!">XRP</a></li>
                                                <li><a className="dropdown-item" href="#!">DOT</a></li>
                                                <li><a className="dropdown-item" href="#!">FIL</a></li>
                                                <li><a className="dropdown-item" href="#!">DOGE</a></li>
                                            </ul> */}
                                            <Dropdown className="d-flex">
                                                <Dropdown.Toggle  as="button" className="btn btn-primary btn-outline-primary left-radius">USDT</Dropdown.Toggle>
                                                <Dropdown.Menu align="end"> 
                                                    <Dropdown.Item>BTC</Dropdown.Item>
                                                    <Dropdown.Item>ETH</Dropdown.Item>
                                                    <Dropdown.Item>BUSD</Dropdown.Item>
                                                    <Dropdown.Item>XRP</Dropdown.Item>
                                                    <Dropdown.Item>DOT</Dropdown.Item>
                                                    <Dropdown.Item>FIL</Dropdown.Item>
                                                    <Dropdown.Item>DOGE</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <label className="form-label">Price</label><input type="text" className="form-control" />
                                    </div>
                                    <div className="col-xl-12">
                                        <label className="form-label">To</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" />
                                            {/* <button className="btn btn-primary btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">BTC</button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><a className="dropdown-item" href="#!">BTC</a></li>
                                                <li><a className="dropdown-item" href="#!">ETH</a></li>
                                                <li><a className="dropdown-item" href="#!">BUSD</a></li>
                                                <li><a className="dropdown-item" href="#!">XRP</a></li>
                                                <li><a className="dropdown-item" href="#!">DOT</a></li>
                                                <li><a className="dropdown-item" href="#!">FIL</a></li>
                                                <li><a className="dropdown-item" href="#!">DOGE</a></li>
                                            </ul> */}
                                            <Dropdown>
                                                <Dropdown.Toggle  className="btn btn-primary btn-outline-primary left-radius">BTC</Dropdown.Toggle>
                                                <Dropdown.Menu align="end"> 
                                                    <Dropdown.Item>BTC</Dropdown.Item>
                                                    <Dropdown.Item>ETH</Dropdown.Item>
                                                    <Dropdown.Item>BUSD</Dropdown.Item>
                                                    <Dropdown.Item>XRP</Dropdown.Item>
                                                    <Dropdown.Item>DOT</Dropdown.Item>
                                                    <Dropdown.Item>FIL</Dropdown.Item>
                                                    <Dropdown.Item>DOGE</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <label className="form-label">Expires in</label>
                                        <select className="form-control default-select" aria-label="Default select example">
                                            <option>1 Day</option><option value="1">2 Day</option>
                                            <option value="2">3 Day</option><option value="3">4 Day</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="d-flex flex-wrap justify-content-between mb-1"><div>Price</div><div className="text-muted"> 1 BST = 55409.56000000 NSE</div></div>
                                        <div className="d-flex flex-wrap justify-content-between"><div>Inverse Price</div><div className="text-muted"> 1 NSE = 0.00001804 NSE</div></div>
                                    </div>
                                </div>
                                <button type="submit" className="btn flex-fill btn-success py-2 fs-5 text-uppercase px-5">Place Order</button>
                            </form>
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
                                            <div id="status_wrapper" className="dataTables_wrapper no-footer">
                                                <table id="example" className="table display dataTable no-footer" style={{minWidth:"845px"}}>
                                                    <thead>
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>Trade</th>
                                                            <th>Status</th>
                                                            <th>Price</th>
                                                            <th>Amount</th>
                                                            <th className="text-end">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tabDataBlog.map((item, index)=>(
                                                            <tr key={index}>
                                                                <td>{item.Date}</td>
                                                                <td>{item.Trade}</td>
                                                                <td>{item.Status}</td>
                                                                <td>{item.Price}</td>
                                                                <td>{item.Amount}</td>
                                                                <td className="text-end">Trade</td>
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
export default IntradayTrading;