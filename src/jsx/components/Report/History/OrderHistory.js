import React, {useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';

const tableData = [
    {title:'BTC/Bitcoin'},
    {title:'ETH/Ethereum'},
    {title:'BNB/BNB'},
    {title:'XRP/XRP'},
    {title:'DOGE/Dogecoin'},
    {title:'DOT/Polkadot'},
    {title:'TRX/TRON'},
    {title:'LTC/Litecoin'},
    {title:'SOL/Solana'},
    {title:'UNI/Uniswap'},
    {title:'AVAX/Avalanche'},
];

const OrderHistory = () =>{
    const [data, setData] = useState(
		document.querySelectorAll("#orderhistory_wrapper tbody tr")
	);
	const sort = 10;
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
      setData(document.querySelectorAll("#orderhistory_wrapper tbody tr"));
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
            <div id="orderhistory_wrapper"  className="table-responsive dataTablehistory">
                <div  className="dataTables_wrapper no-footer">   
                    <table id="example" className="table shadow-hover dataTable display" style={{minWidth:"845px"}}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Pair</th>
                                <th>Side</th>
                                <th>Order</th>
                                <th>Filled</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index)=>(
                                <tr key={index}>
                                    <td>2022-10-03 10:15</td>
                                    <td>{item.title}</td>
                                    <td>Buy</td>
                                    <td>Limit</td>
                                    <td>-</td>
                                    <td>100.00</td>
                                    <td>576.76</td>
                                    <td className="text-end">
                                        <div className="d-flex justify-content-end">
                                            <Link to={"#"} className="btn btn-primary shadow btn-xs sharp me-3"><i className="fas fa-pencil-alt"></i></Link>
                                            <Link to={"#"} className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></Link>
                                        </div>												
                                    </td>
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
                                to="/history"
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
                                        to="/history"
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
                                to="/history"
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
        </>
    )
}

export default OrderHistory;