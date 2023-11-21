import React from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';


const buyData = [
    {price:'82.3', amount:'0.15', total:'$134,12'}, 
    {price:'82.3', amount:'0.15', total:'$134,12'}, 
    {price:'82.3', amount:'0.15', total:'$134,12'}, 
    {price:'82.3', amount:'0.15', total:'$134,12'}, 
    {price:'82.3', amount:'0.15', total:'$134,12'}, 
    {price:'82.3', amount:'0.15', total:'$134,12'}, 
    {price:'82.3', amount:'0.15', total:'$134,12'}, 
    {price:'82.3', amount:'0.15', total:'$134,12'}, 
    {price:'82.3', amount:'0.15', total:'$134,12'}, 
];


const CoinBuyTable = ({bgChange}) =>{
    return(
        <>
            <div className="card price-list">
                <div className="card-header border-0 pb-2">
                    <div className="chart-title">
                        <h4 className={`mb-0 text-${bgChange}`}>Buy Order</h4>
                    </div>
                    <Dropdown className="custom-dropdown mb-0">
                        <Dropdown.Toggle as="div" className={`btn sharp  tp-btn i-false btn-${bgChange}`}>
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
                <div className="card-body p-3 py-0">
                    <div className="table-responsive">
                        <table className={`table text-center order-tbl bg-${bgChange}-hover`}>
                            <thead>
                                <tr>
                                    <th className="text-left">Price</th>
                                    <th className="text-center">Amount</th>
                                    <th className="text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {buyData.map((item, index)=>(
                                    <tr key={index}>
                                        <td className="text-left">{item.price}</td>
                                        <td>{item.amount}</td>
                                        <td className="text-right">{item.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer text-center py-3 border-0">
                    <Link to={"#"} className="btn-link text-black">Show more <i className="fa fa-caret-right"></i></Link>
                </div>
            </div>
        </>
    )
}
export default CoinBuyTable;