import React, {useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';

const tableDataBlog = [
    {title:'Cedric Kelly', subtitle:'Senior Javascript Developer',side:'Edinburgh',price:'25',amount:'$433,060', status:''},
    {title:'Ashton Cox', subtitle:'Junior Technical Author',side:'San Francisco',price:'33',amount:'$86,000', status:''},
    {title:'Brielle Williamson', subtitle:'	Integration Specialist',side:'New York',price:'40',amount:'$372,000', status:''},
    {title:'Tiger Nixon', subtitle:'System Architect',side:'Edinburgh',price:'61',amount:'$320,800', status:''},
    {title:'Airi Satou', subtitle:'Accountant',side:'Tokyo',price:'15',amount:'$162,700', status:''},
    {title:'Garrett Winters', subtitle:'Accountant',side:'Tokyo',price:'20',amount:'$170,750', status:''},
    {title:'Brielle Williamson', subtitle:'	Integration Specialist',side:'New York',price:'40',amount:'$372,000', status:''},
    {title:'Tiger Nixon', subtitle:'System Architect',side:'Edinburgh',price:'61',amount:'$320,800', status:''},
    
];

const SellBnbTable = () =>{
    const [data, setData] = useState(
		document.querySelectorAll("#sellbnbdata_wrapper tbody tr")
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
      setData(document.querySelectorAll("#sellbnbdata_wrapper tbody tr"));
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
                <div  id="sellbnbdata_wrapper" className="dataTables_wrapper no-footer">  
                    <table id="example" className="table dataTable shadow-hover display" style={{minWidth:"845px"}}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Trade</th>
                                <th>Side</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableDataBlog.map((item, ind)=>(
                                <tr key={ind}>
                                    <td>{item.title}</td>
                                    <td>{item.subtitle}</td>
                                    <td>{item.side}</td>
                                    <td>${item.price}</td>
                                    <td>{item.amount}</td>
                                    <td className="text-end">Active</td>
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
export default SellBnbTable;