import React from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select'
import {Dropdown} from 'react-bootstrap';

import ExchangeLineChart from './Exchange/ExchangeLineChart';
import ExchangeLineChart2 from './Exchange/ExchangeLineChart2';
import LitecoinBarChart from './Exchange/LitecoinBarChart';
import TicketSoldChart from './Exchange/TicketSoldChart';


const options = [
    { value: '1', label: 'BTC' },
    { value: '2', label: 'Ethereum' },
    { value: '3', label: 'Ripple' },
    { value: '4', label: 'Bitcoin Cash' },
    { value: '5', label: 'Cardano' },
    { value: '6', label: 'Litecoin' },
    { value: '7', label: 'NEO' },
    { value: '8', label: 'Stellar' },
    { value: '9', label: 'EOS' },
    { value: '10', label: 'NEM' }
] 

const options2 = [
    {value:'1', label:'INR'},
    {value:'2', label:'POUND'},
    {value:'3', label:'USD'},
    {value:'4', label:'EURO'},
];

const chartGroup = [
    {title:'Bitcoin Sold', number:'123k', icon:'up', chartstatus:<ExchangeLineChart />},
    {title:'Amount Refund', number:'82k', icon:'down', chartstatus:<ExchangeLineChart2 />},
    {title:'Litecoin Sold', number:'259k', icon:'up', chartstatus: <LitecoinBarChart />},
];

const tableData = [
    {tabid:'#TCK-01-12344', maintitle:'BTC',  title:'Samanta William', mailid:'samantha@mail.com', price:'$75,00', status:'Paid'},
    {tabid:'#TCK-01-12345', maintitle:'XRP', title:'Tony Soap', mailid:'demo@mail.com', price:'$80,00', status:'Unpaid'},
    {tabid:'#TCK-01-12346', maintitle:'DOT', title:'Nela Vita', mailid:'nela@mail.com', price:'$84,00', status:'Pending'},
    {tabid:'#TCK-01-12347', maintitle:'ETH', title:'Nadia Edja', mailid:'edja@mail.com', price:'$90,00', status:'Paid'},
];

const Exchange = () =>{
    const checkboxFun = (type) => {
		setTimeout(() => {
			const checkbox = document.querySelectorAll('.exchange-history input');
			const motherCheckBox = document.querySelector('.sorting_select input');
			for (let i = 0; i < checkbox.length; i++) {
			    const element = checkbox[i]
				if (type === 'all') {
					if (motherCheckBox.checked) {
						element.checked = true
					} else {
						element.checked = false
					}
				} else {
					if (!element.checked) {
						motherCheckBox.checked = false
						break
					} else {
						motherCheckBox.checked = true
					}
				}
			}
		},200);
	}
    return(
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body pb-2">
                            <h1 className="text-center no-border font-w600 fs-60 mt-2"><span className="text-warning">Buy</span> and <span className="text-danger">Sell</span> Coins at the<br/> CryptoZone with no additional charges</h1>
                            <h4 className="text-center ">Trusted by millions user with over $1 Trillion in crypto transactions.</h4>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="text-center mt-3 row justify-content-center">
                                        <div className="col-xl-5">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <input type="text" className="form-control mb-3" name="value" placeholder="" defaultValue="18.1548" />
                                                </div>
                                                <div className="col-xl-6">
                                                    <Select 
                                                        className="custom-react-select mb-xl-0 mb-3" 
                                                        options={options}
                                                        defaultValue={options[0]}
                                                        isSearchable={false}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-xl-1">
                                            <div className="equalto">
                                                = 
                                            </div>
                                        </div>
                                        <div className="col-xl-5">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <input type="text" className="form-control mb-3" name="value" placeholder="" defaultValue="264.158" />
                                                </div>
                                                <div className="col-xl-6">                                                  
                                                    <Select 
                                                        className="custom-react-select mb-xl-0 mb-3" 
                                                        options={options2}
                                                        defaultValue={options2[0]}
                                                        isSearchable={false}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-4 mb-4">
                                        <Link to={"/p2p"} className="btn btn-warning mx-auto">EXCHANGE NOW</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="row">
                        {chartGroup.map((item, i)=>(
                            <div className="col-lg-6 col-xl-3 col-md-6" key={i}>
                                <div className="card overflow-hidden">
                                    <div className="card-body py-0 pt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4 className="fs-18 font-w400 mb-0">{item.title}</h4>
                                            <div className="d-flex align-items-center">
                                                <h2 className="count-num">{item.number}</h2>
                                                <span className={`fs-16 font-w500  ps-2 ${i===1 ? "text-danger" : "text-success"}`}>
                                                    <i className={`bi pe-2 bi-caret-${item.icon}-fill`}></i>
                                                </span>
                                            </div>
                                        </div>
                                        
                                            {item.chartstatus}
                                    </div>
                                </div>
                            </div>
                        ))}                        
                        <div className="col-lg-6 col-xl-3 col-md-6">
                            <div className="card overflow-hidden">
                                <div className="card-body py-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="me-3">
                                            <h2 className=" count-num mb-0">3468</h2>
                                            <h4 className="fs-18 font-w400 mb-0">Dash Sold</h4>
                                        </div>
                                        {/* <div id="ticketSold"></div> */}
                                        <TicketSoldChart />
                                    </div>
                                    <div className="progress mb-2" style={{height:"10px"}}>
                                        <div className="progress-bar bg-warning progress-animated" style={{width: "30%", height:"10px" }} >
                                        </div>
                                    </div>
                                    <p>30% than last month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="row">
                        <div className="col-xl-8 col-lg-12">
                            <div className="card">
                                <div className="card-header justify-content-between border-0">
                                    <h2 className="heading mb-0">Latest Sold Transaction</h2>
                                </div>
                                <div className="card-body px-0 py-0">
                                    <div className="table-responsive">
                                        <table className="exchange-history table-responsive table shadow-hover tickettable display mb-4 dataTablesCard dataTable no-footer" id="example6">
                                            <thead>
                                                <tr>
                                                    <th className="border-0 sorting_select">
                                                        <input type="checkbox" className="form-check-input" id="checkAll" required="" 
                                                            onClick={() => checkboxFun('all')}
                                                        />
                                                    </th>
                                                    <th className="fs-14 font-w600 border-0 ps-0">Currency</th>
                                                    <th className="fs-14 font-w600 border-0">Date</th>
                                                    <th className="fs-14 font-w600 border-0">Email</th>
                                                    <th className="fs-14 font-w600 border-0">Price</th>
                                                    <th className="fs-14 font-w600 border-0 text-end">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableData.map((data, ind)=>(                                                    
                                                    <tr key={ind}>
                                                        <td>
                                                            <div className="checkbox me-0 align-self-center">
                                                                <div className="custom-control custom-checkbox ">
                                                                    <input type="checkbox" className="form-check-input" id={`checkid${ind+1}`} required="" 
                                                                        onClick={() => checkboxFun()}
                                                                    />
                                                                    <label className="custom-control-label" htmlFor={`checkid${ind+1}`}></label>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="ps-0"> 
                                                            <span className="font-w600 fs-14"> {data.tabid} </span>
                                                            <h5 className="mb-0">{data.maintitle}</h5>
                                                        </td>
                                                        <td className="fs-14 font-w400">Jan 12, 2022</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <Link to={"/email-inbox"}>
                                                                    <div className="icon-box icon-box-sm bg-primary"> 
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.427 6L12.6 10.8C12.4335 10.9267 12.2312 10.9976 12.022 11.0026C11.8129 11.0077 11.6074 10.9465 11.435 10.828L5.573 6H18.427ZM19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.3L10.2 12.4C10.7159 12.7863 11.3435 12.9944 11.988 12.993C12.6551 12.992 13.3037 12.774 13.836 12.372L20 7.3V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18Z" fill="white"/>
                                                                        </svg>
                                                                    </div>
                                                                </Link>
                                                                <div className="ms-3">
                                                                    <h5 className="mb-0"><Link className="text-secondary" to={"/app-profile"}>{data.title}</Link></h5>
                                                                    <span className="fs-14 text-muted">{data.mailid}</span>
                                                                </div>
                                                            </div>	
                                                        </td>
                                                        <td>{data.price}</td>
                                                        <td className="text-end">
                                                            <span 
                                                                className={`font-w600 fs-14 text-white label ${ind===0 ? "label-success" : ind===1 ? "label-danger" : ind===2 ? "label-warning" : 'label-success'}`}>
                                                                {data.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="table-pagenation d-flex align-items-center justify-content-between mb-3">
                                        <p className="mb-0">Showing <span> 1-4 </span> from <span> 30 </span> data </p>
                                        <nav>
                                            <ul className="pagination pagination-gutter pagination-primary no-bg">
                                                <li className="page-item page-indicator">
                                                    <Link to={"#"} className="page-link">
                                                        <i className="fa-solid fa-angle-left"></i>
                                                    </Link>
                                                </li>
                                                <li className="page-item "><Link to={"#"} className="page-link">1</Link></li>
                                                <li className="page-item active"><Link to={"#"} className="page-link">2</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
                                                <li className="page-item page-indicator">
                                                    <Link to={"#"} className="page-link">
                                                        <i className="fa-solid fa-angle-right"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-header border-0 pb-0">
                                    <h4 className="heading mb-0">Buy Coin</h4>
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
                                                    <Dropdown.Toggle  className="btn-outline-primary left-radius">Mark</Dropdown.Toggle>
                                                    <Dropdown.Menu align="end"> 
                                                        <Dropdown.Item>Last</Dropdown.Item>
                                                        <Dropdown.Item>Mark</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Stop Loss" />                                                
                                                <Dropdown>
                                                    <Dropdown.Toggle  className=" btn-outline-primary left-radius">Mark</Dropdown.Toggle>
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
                                                <Dropdown.Toggle as="div"  className="btn btn-primary btn-outline-primary left-radius">Mark</Dropdown.Toggle>
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
                                        <div className="mt-4 d-flex justify-content-between">
                                            <Link to={"#"} className="btn btn-success py-2 text-uppercase">BUY</Link>
                                            <Link to={"#"} className="btn btn-danger py-2 text-uppercase">Sell</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Exchange;