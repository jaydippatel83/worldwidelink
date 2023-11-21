import React, {useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';

const tableDataBlog = [
    {price:'100.00'},    {price:'100.00'},    {price:'100.00'},
    {price:'100.00'},    {price:'100.00'},    {price:'100.00'},
    {price:'100.00'},    {price:'100.00'},    {price:'100.00'},
    {price:'100.00'},
];

const BuyBthTable = () =>{
    const [data, setData] = useState(
		document.querySelectorAll("#bthdata_wrapper tbody tr")
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
      setData(document.querySelectorAll("#bthdata_wrapper tbody tr"));
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
            <div className="table-responsive dataTablehistory">
                <div  id="bthdata_wrapper" className="dataTables_wrapper no-footer">  
                    <table id="example" className="table dataTable shadow-hover display" style={{minWidth:"845px"}}>
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
                            {tableDataBlog.map((data, ind)=>(
                                <tr key={ind}>
                                    <td>2022-10-03 16:24</td>
                                    <td>BTC/USDT</td>
                                    <td>Buy</td>
                                    <td>Limit</td>
                                    <td>-</td>
                                    <td>{data.price}</td>
                                    <td>576.76</td>
                                    <td>
                                        <div className=" text-end">
                                            <a href="#" className="btn btn-primary shadow btn-xs sharp me-3"><i className="fas fa-pencil-alt"></i></a>
                                            <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></a>
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
                                to="/p2p"
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
                                        to="/p2p"
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
                                to="/p2p"
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
export default BuyBthTable;