import React from 'react';
import {Link} from 'react-router-dom';

const dailyReport = [
    {name:'ERC20', price:' 0.12',upprice:' 0.14',down:' 0.10', market:' 20,151,416	', change:'263%'},
    {name:'CTIC2', price:' 0.15',upprice:' 0.18',down:' 0.11', market:' 222,244	', change:'156.00 %'},
    {name:'CALC', price:' 0.17',upprice:' 0.14',down:' 0.25', market:' 44,597', change:'208.78 %'},
    {name:'EOT', price:' 0.14',upprice:' 0.15	',down:' 0.15', market:' 91,117,925', change:'156.04 %' },
    {name:'XSH', price:' 0.16',upprice:' 0.15	',down:' 0.13', market:' 96,859,631', change:'141.97 %'},
    {name:'XCT', price:' 0.16',upprice:' 0.22',down:' 0.35', market:' 10,592,274', change:'130.72 %'},
    {name:'FLASH', price:' 0.19',upprice:' 0.25',down:' 0.50', market:' 77,308,540', change:'133.81 %'},
    {name:'ADST', price:' 1.50	',upprice:' 2.18',down:' 0.70', market:' 34,959,392	', change:'150.80 %'},
];

const Reports = () =>{
    return(
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="heading mb-0">Daily Report</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table shadow-hover table-bordered tbl-report">
                                    <thead>
                                        <tr>
                                            <th className="text-center">#</th>
                                            <th>Name</th>
                                            <th className="text-end">Price</th>
                                            <th className="text-end">Up Price</th>
                                            <th className="text-end">Down Price</th>
                                            <th className="text-end">Mkt. Cap</th>
                                            <th className="text-end">Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dailyReport.map((item, ind)=>(
                                            <tr key={ind}>
                                                <td className="text-center">{ind+1}</td>
                                                <td><Link to={"#"} className="hover-primary">{item.name}</Link></td>
                                                <td className="text-end"><span>$</span> {item.price}</td>
                                                <td className="text-end"><span>$</span> {item.upprice}</td>
                                                <td className="text-end"><span>$</span> {item.down}</td>
                                                <td className="text-end"><span>$</span> {item.market}</td>
                                                <td className="text-end"><span className={`label ${ind%3===0 ? "label-danger" : "label-success"}`}>{item.change}</span></td>
                                            </tr>
                                        ))}                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
					<div className="row">
						<div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="heading mb-0">Top Gainers</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table shadow-hover table-bordered tbl-report">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">#</th>
                                                    <th>Name</th>
                                                    <th className="text-end">Price</th>
                                                    <th className="text-end">Mkt. Cap</th>
                                                    <th className="text-end">Change</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dailyReport.map((item, ind)=>(
                                                    <tr key={ind}>
                                                        <td className="text-center">{ind+1}</td>
                                                        <td><Link to={"#"} className="hover-primary">{item.name}</Link></td>
                                                        <td className="text-end"><span>$</span> {item.price}</td>
                                                        <td className="text-end"><span>$</span> {item.market}</td>
                                                        <td className="text-end"><span className="label label-success">{item.change}</span></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="heading mb-0">Top Loosers</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table shadow-hover table-bordered tbl-report">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">#</th>
                                                    <th>Name</th>
                                                    <th className="text-end">Price</th>
                                                    <th className="text-end">Mkt. Cap</th>
                                                    <th className="text-end">Change</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dailyReport.map((item, ind)=>(
                                                    <tr key={ind}>
                                                        <td className="text-center">{ind+1}</td>
                                                        <td><Link to={"#"} className="hover-primary">{item.name}</Link></td>
                                                        <td className="text-end"><span>$</span> {item.price}</td>
                                                        <td className="text-end"><span>$</span> {item.market}</td>
                                                        <td className="text-end"><span className="label label-danger">{item.change}</span></td>
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
export default Reports;