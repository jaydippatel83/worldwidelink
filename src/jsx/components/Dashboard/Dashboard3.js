import React from 'react';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

//import { data } from '../../pages/WidgetBasic/ActiveUser';
//import WidgetChartIndex3 from './Index3/WidgetChartIndex3';
//import StockChartIndex3 from './Index3/StockChartIndex3';


const WidgetChartIndex3 = loadable(() =>
	pMinDelay(import("./Index3/WidgetChartIndex3"), 1000)
);
const StockChartIndex3 = loadable(() =>
	pMinDelay(import("./Index3/StockChartIndex3"), 1000)
);


const widgetChart = [
    {id:1, price:'$65,123', bgcolor:'bg-warning'},
    {id:2, price:'$75,542',bgcolor:'bg-secondary'},
    {id:3, price:'$40,742', bgcolor:'bg-pink'},
    {id:4, price:'$71,321', bgcolor:'bg-primary'},
];

const tableData = [
    {number: '55542545', title: '1.48586 BTC', time: '5m', status: 'Confirmed', statusColor:'label-success'},
    {number: '65432187', title: '2.12389 BTC', time: '4m', status: 'Unconfirmed', statusColor:'label-warning'},
    {number: '78954123', title: '3.65412 BTC', time: '6m', status: 'Canceled', statusColor:'label-danger'},
    {number: '55542545', title: '1.48586 BTC', time: '5m', status: 'Confirmed', statusColor:'label-success'},
    {number: '65432187', title: '2.12389 BTC', time: '4m', status: 'Unconfirmed', statusColor:'label-warning'},
    {number: '78954123', title: '3.65412 BTC', time: '6m', status: 'Canceled', statusColor:'label-danger'},
    {number: '55542545', title: '1.48586 BTC', time: '5m', status: 'Confirmed', statusColor:'label-success'},
    {number: '65432187', title: '2.12389 BTC', time: '4m', status: 'Unconfirmed', statusColor:'label-warning'},
    {number: '78954123', title: '3.65412 BTC', time: '6m', status: 'Canceled', statusColor:'label-danger'},
];

const Dashboard3 = () =>{
    return(
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="row">
                        {widgetChart.map((item, ind)=>(
                            <div className="col-xl-3 col-lg-6 col-sm-6" key={ind}>
                                <div className={`card card-box ${item.bgcolor}`}>
                                    <div className="card-header border-0 pb-0">
                                        <div className="chart-num-days">
                                            <p>
                                                <i className="fa-solid fa-sort-down me-2"></i>
                                                4%(30 days)
                                            </p>
                                            <h2 className="count-num text-white">{item.price}</h2>
                                        </div>
                                        {item.id === 1 ? 
                                            <svg width="50" height="50" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M92.9644 53.8221C92.9599 48.4197 88.5804 44.0417 83.1795 44.0357H53.822V63.6069H83.1795C88.5804 63.6024 92.9599 59.2229 92.9644 53.8221Z" fill="#FFF"/>
                                                <path d="M53.822 92.9645H83.1795C88.5834 92.9645 92.9644 88.5835 92.9644 83.1796C92.9644 77.7743 88.5834 73.3933 83.1795 73.3933H53.822V92.9645Z" fill="#FFF"/>
                                                <path d="M68.5001 9.15527e-05C30.6687 9.15527e-05 0.00012207 30.6687 0.00012207 68.5001C0.00012207 106.332 30.6687 137 68.5001 137C106.332 137 137 106.332 137 68.5001C136.957 30.6866 106.314 0.0433939 68.5001 9.15527e-05V9.15527e-05ZM102.751 83.1781C102.737 93.9828 93.9829 102.737 83.1797 102.749V107.643C83.1797 110.345 80.9877 112.536 78.2865 112.536C75.5838 112.536 73.3933 110.345 73.3933 107.643V102.749H63.6084V107.643C63.6084 110.345 61.4164 112.536 58.7153 112.536C56.0126 112.536 53.8221 110.345 53.8221 107.643V102.749H39.144C36.4414 102.749 34.2509 100.559 34.2509 97.8577C34.2509 95.155 36.4414 92.9645 39.144 92.9645H44.0357V44.0357H39.144C36.4414 44.0357 34.2509 41.8452 34.2509 39.1425C34.2509 36.4399 36.4414 34.2493 39.144 34.2493H53.8221V29.3577C53.8221 26.655 56.0126 24.4645 58.7153 24.4645C61.4179 24.4645 63.6084 26.655 63.6084 29.3577V34.2493H73.3933V29.3577C73.3933 26.655 75.5838 24.4645 78.2865 24.4645C80.9891 24.4645 83.1797 26.655 83.1797 29.3577V34.2493C93.9426 34.2045 102.705 42.8919 102.751 53.6548C102.775 59.3543 100.304 64.7791 95.9867 68.5001C100.263 72.1793 102.731 77.5354 102.751 83.1781V83.1781Z" fill="#FFF"/>
                                            </svg>
                                        
                                        : item.id === 2 ?
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="50px" height="50px">
                                                <path fillRule="evenodd"  fill="rgb(255, 255, 255)"
                                                d="M21.000,42.000 C9.402,42.000 -0.001,32.598 -0.001,21.000 C-0.001,9.402 9.402,-0.000 21.000,-0.000 C32.592,0.013 41.987,9.408 42.000,21.000 C42.000,32.598 32.598,42.000 21.000,42.000 ZM28.171,14.437 C28.383,14.172 28.499,13.843 28.499,13.504 C28.500,12.675 27.829,12.001 26.999,12.000 L22.499,12.000 L22.499,7.500 C22.499,6.672 21.828,6.000 21.000,6.000 C20.171,6.000 19.500,6.671 19.500,7.500 L19.500,12.000 L15.000,12.000 C14.171,12.000 13.499,12.671 13.499,13.500 C13.499,14.328 14.171,15.000 15.000,15.000 L23.878,15.000 L13.827,27.562 C13.615,27.829 13.499,28.160 13.499,28.501 C13.499,29.329 14.171,30.000 15.000,30.000 L19.500,30.000 L19.500,34.500 C19.500,35.328 20.171,36.000 21.000,36.000 C21.828,36.000 22.499,35.328 22.499,34.500 L22.499,30.000 L26.999,30.000 C27.828,30.000 28.500,29.328 28.500,28.500 C28.500,27.672 27.828,27.000 26.999,27.000 L18.121,27.000 L28.171,14.437 Z"/>
                                            </svg>
                                        
                                        : item.id === 3 ?
                                            <svg width="50" height="50" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M70.3615 78.5206C69.1671 78.9977 67.8366 78.9977 66.6421 78.5206L53.8232 73.3927L68.5018 102.75L83.1804 73.3927L70.3615 78.5206Z" fill="#FFF"/>
                                                <path d="M68.4982 68.5L88.0696 61.6503L68.4982 34.25L48.9268 61.6503L68.4982 68.5Z" fill="#FFF"/>
                                                <path d="M68.5 0C30.6686 0 0 30.6686 0 68.5C0 106.331 30.6686 137 68.5 137C106.331 137 137 106.331 137 68.5C136.958 30.6865 106.313 0.0418093 68.5 0V0ZM97.3409 65.7958L72.8765 114.725C71.6685 117.142 68.7285 118.122 66.3125 116.914C65.3643 116.44 64.5968 115.673 64.1235 114.725L39.6591 65.7958C38.899 64.2698 38.9856 62.4586 39.8875 61.0117L64.3519 21.8692C65.978 19.5787 69.151 19.0381 71.4416 20.6642C71.9089 20.9957 72.3166 21.4019 72.6481 21.8692L97.111 61.0117C98.0144 62.4586 98.101 64.2698 97.3409 65.7958V65.7958Z" fill="#FFF"/>
                                            </svg>
                                        : item.id === 4  ? 
                                            <svg width="50" height="45" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M68.5 0C30.6686 0 0 30.6686 0 68.5C0 106.331 30.6686 137 68.5 137C106.331 137 137 106.331 137 68.5C136.958 30.6865 106.313 0.0418093 68.5 0ZM40.213 63.6068H59.7843C62.4869 63.6068 64.6774 65.7973 64.6774 68.5C64.6774 71.2027 62.4869 73.3932 59.7843 73.3932H40.213C37.5104 73.3932 35.3199 71.2027 35.3199 68.5C35.3199 65.7973 37.5119 63.6068 40.213 63.6068ZM101.393 56.6456L95.5088 86.0883C94.1231 92.9226 88.122 97.8411 81.1488 97.8576H40.213C37.5104 97.8576 35.3199 95.6671 35.3199 92.9644C35.3199 90.2617 37.5119 88.0712 40.213 88.0712H81.1488C83.4617 88.0652 85.4522 86.4347 85.9121 84.168L91.7982 54.7253C92.3208 52.0973 90.6156 49.544 87.9891 49.0214C87.677 48.9601 87.3605 48.9288 87.0439 48.9288H49.9994C47.2967 48.9288 45.1062 46.7383 45.1062 44.0356C45.1062 41.3329 47.2967 39.1424 49.9994 39.1424H87.0439C95.128 39.1454 101.679 45.699 101.677 53.7831C101.677 54.7433 101.582 55.7019 101.393 56.6456Z" fill="#FFF"></path>
                                        </svg>
                                        :

                                        ''  
                                    }
                                    </div>
                                    <div className="card-body p-0 custome-tooltip">
                                        {/* <div id="widgetChart3" className="chart-primary"></div> */}
                                        <WidgetChartIndex3 />
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="d-flex align-items-center">
                                        <i className="fa-brands fa-bitcoin scale-2 text-warning"></i>
                                        <h4 className="heading ms-3 mb-0">BTCUSD Perennial</h4>
                                    </div>	
                                </div>
                                <div className="card-body pt-2"> 
                                    <div className="volume-list">
                                        <div>
                                            <h5>$9,125.00 USD</h5>
                                            <span className="text-danger">-12.04 <i className="fa-sharp fa-solid fa-chevron-down"></i></span>
                                        </div>
                                        <div>
                                            <span className="text-success">High</span>
                                            <h5>9,124.00 USD</h5>
                                        </div>	
                                        <div>
                                            <span className="text-danger">Low</span>
                                            <h5>9,124.00 USD</h5>
                                        </div>
                                        <div>
                                            <span className="text-success">24H Volume</span>
                                            <h5>2,124 USD</h5>
                                        </div>	
                                    </div>
                                    {/* <div id="btcStock"></div> */}
                                    <StockChartIndex3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="heading mb-0">Activity</h4>
                        </div>
                        <div className="card-body pt-0">
                            <div className="table-responsive">
                                <table className="table border-0 mb-0 activity-tbl">
                                    <thead>					
                                        <tr className="bg-pale-dark">
                                            <th>#</th>
                                            <th className="text-center">BTC</th>
                                            <th>Time</th>
                                            <th className="text-end">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((item, ind)=>(
                                            <tr key={ind}>
                                                <td>
                                                    <Link to={"#"} className="text-primary">{item.number}</Link>
                                                </td>
                                                <td className="text-nowrap">{item.title}</td>
                                                <td>
                                                    <span className="timeago text-nowrap">{item.time} ago</span>
                                                </td>
                                                <td className="text-end"><span className={`label ${item.statusColor}`}>{item.status}</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>                        

             </div>   
        </>
    )
}
export default Dashboard3;