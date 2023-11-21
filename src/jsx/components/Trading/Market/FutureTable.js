import React, {useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';

const tableData = [
    { title1: 'BTC', title2:'Bitcoin',price: '$0.6932',change: '+22%', volume: '30,585.00', cap:'$96M'   },
    { title1: 'USDT', title2:'Perpetual',price: '$0.1478', change: '+11%', volume: '14,752.00', cap:'$9M'   },
    { title1: 'XRP', title2:'Ripplecoin',price: '$0.6258', change: '-11%', volume: '80,752.00', cap:'$22M'   },
    { title1: 'XMR', title2:'Monero',price: '$0.3685', change: '-8%', volume: '75,52.00', cap:'$30M'   },
    { title1: 'ZEC', title2:'ZCash', price: '$0.9632', change: '+9%', volume: '96,525.00', cap:'$18M' },
    { title1: 'ETH', title2:'Etherium Classic', price: '$0.6258', change: '+40%', volume: '80,752.00', cap:'$22M'  },
];    

const FutureTable = () =>{
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
            <div className="table-responsive dataTablemarket">
                <div  id="future_wrapper" className="dataTables_wrapper no-footer">   
                    <table  className="table dataTable  shadow-hover display" style={{minWidth:"845px"}}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Change</th>
                                <th className="text-center">24 High/24 Low</th>
                                <th className="text-center">24 Volume</th>
                                <th className="text-center">Market Cap</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index)=>(
                                <tr key={index}>
                                    <td>
                                        <Link to={"#"} className="market-title d-flex align-items-center">   
                                            <h5 className="mb-0 ms-2"> {item.title1}</h5>
                                            <span className="text-muted ms-2"> {item.title2}</span>
                                        </Link>
                                    </td>
                                    <td>{item.price}</td>
                                    <td className={`${index===2 || index===4 ? "text-danger" : "text-success"} `}>{item.change}</td>
                                    <td>30,585.00/21,250.00</td>
                                    <td>{item.volume}</td>
                                    <td>{item.cap}</td>
                                    <td className="text-end"><Link to={"#"}>Trade</Link></td>
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
                                to="/market"
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
                                        to="/market"
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
                                to="/market"
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

export default FutureTable;