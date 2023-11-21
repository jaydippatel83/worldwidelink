import React from 'react';

import DigitalChartIndex4 from './Index4/DigitalChartIndex4';
import BtcDigitalChartIndex4 from './Index4/BtcDigitalChartIndex4';
import CoinChartIndex4 from './Index4/CoinChartIndex4';

const Dashboard4 = () => {
    return(
        <>
            <div className="row">
                <div className="col-xl-12">

                </div>
                <div className="col-xl-6 col-xxl-6">	
                    <div className="card">
                        <div className="card-body d-flex align-items-center">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5566 23.893C21.1991 24.0359 20.8009 24.0359 20.4434 23.893L16.6064 22.3582L21 31.1454L25.3936 22.3582L21.5566 23.893Z" fill="#AC4CBC"></path>
                                <path d="M21 20.8846L26.2771 18.7739L21 10.3304L15.7229 18.7739L21 20.8846Z" fill="#AC4CBC"></path>
                                <path d="M21 0.00012207C9.40213 0.00012207 0.00012207 9.40213 0.00012207 21C0.00012207 32.5979 9.40213 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM29.8417 20.171L22.3417 35.171C21.9714 35.9121 21.0701 36.2124 20.3294 35.8421C20.0387 35.697 19.8034 35.4617 19.6583 35.171L12.1583 20.171C11.9253 19.7032 11.9519 19.1479 12.2284 18.7043L19.7284 6.70453C20.2269 6.00232 21.1996 5.83661 21.9018 6.33511C22.0451 6.43674 22.1701 6.56125 22.2717 6.70453L29.7712 18.7043C30.0482 19.1479 30.0747 19.7032 29.8417 20.171Z" fill="#AC4CBC"></path>
                            </svg>
                            <div className="ms-3">
                                <h2 className="text-black fs-20 mb-0 font-w600">Digital Cash</h2>
                                <span>ETH (USD) = $148.46 (<span className="text-danger">-12.24%</span>)</span>
                            </div>
                        </div>
                        {/* <div id="widget-chart1"></div> */}
                        <DigitalChartIndex4 />
                        <div className="card-footer">
                            <div className="row">
                                <div className="col text-center">
                                    <h5 className="font-weight-normal">1230</h5>
                                    <span>Type A</span>
                                </div>
                                <div className="col text-center">
                                    <h5 className="font-weight-normal">1230</h5>
                                    <span>Type A</span>
                                </div>
                                <div className="col text-center">
                                    <h5 className="font-weight-normal">1230</h5>
                                    <span>Type A</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-xxl-6">	
                    <div className="card">
                        <div className="card-body d-flex align-items-center">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.5 16.5002C28.4986 14.844 27.156 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.156 19.4985 28.4986 18.1559 28.5 16.5002Z" fill="#FFAB2D"></path>
                                <path d="M16.5002 28.5H25.5003C27.1569 28.5 28.5 27.157 28.5 25.5003C28.5 23.8432 27.1569 22.5001 25.5003 22.5001H16.5002V28.5Z" fill="#FFAB2D"></path>
                                <path d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9866 9.40762 32.5924 0.0133972 21 0.00012207ZM31.5002 25.4998C31.4961 28.8122 28.8122 31.4961 25.5003 31.4998V32.9998C25.5003 33.8284 24.8283 34.4999 24.0002 34.4999C23.1716 34.4999 22.5001 33.8284 22.5001 32.9998V31.4998H19.5004V32.9998C19.5004 33.8284 18.8284 34.4999 18.0003 34.4999C17.1717 34.4999 16.5002 33.8284 16.5002 32.9998V31.4998H12.0004C11.1718 31.4998 10.5003 30.8282 10.5003 30.0001C10.5003 29.1716 11.1718 28.5 12.0004 28.5H13.5V13.5H12.0004C11.1718 13.5 10.5003 12.8285 10.5003 11.9999C10.5003 11.1714 11.1718 10.4998 12.0004 10.4998H16.5002V9.00021C16.5002 8.17166 17.1717 7.50012 18.0003 7.50012C18.8288 7.50012 19.5004 8.17166 19.5004 9.00021V10.4998H22.5001V9.00021C22.5001 8.17166 23.1716 7.50012 24.0002 7.50012C24.8287 7.50012 25.5003 8.17166 25.5003 9.00021V10.4998C28.7998 10.4861 31.486 13.1494 31.5002 16.4489C31.5075 18.1962 30.7499 19.8593 29.4265 21C30.7375 22.128 31.4942 23.77 31.5002 25.4998Z" fill="#FFAB2D"></path>
                            </svg>
                            <div className="ms-3">
                                <h2 className="text-black fs-20 mb-0 font-w600">Digital Cash</h2>
                                <span>BTC (USD) = $45.81 (<span className="text-success">+12.24%</span>)</span>
                            </div>
                        </div>
                        {/* <div id="widget-chart2"></div> */}
                        <BtcDigitalChartIndex4 />
                        <div className="card-footer">
                            <div className="row">
                                <div className="col text-center">
                                    <h5 className="font-weight-normal">1230</h5>
                                    <span>Type A</span>
                                </div>
                                <div className="col text-center">
                                    <h5 className="font-weight-normal">1230</h5>
                                    <span>Type A</span>
                                </div>
                                <div className="col text-center">
                                    <h5 className="font-weight-normal">1230</h5>
                                    <span>Type A</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="card">
                        <div className="card-header pb-0 d-block d-sm-flex flex-wrap border-0 align-items-center">
                            <div className="">
                                <h4 className="heading mb-0">Coin Chart</h4>
                                <p className="mb-0 fs-16">Lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                        </div>
                        <div className="card-body pt-0">
                            {/* <div id="chartBarRunning" className="bar-chart"></div> */}
                            <CoinChartIndex4 />
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header d-block border-0 pb-0">
                            <h2 className="heading mb-0">Market Info</h2>
                            <p className="fs-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="card-body py-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex px-0 justify-content-between align-items-center">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.5566 23.893C21.1991 24.0359 20.8009 24.0359 20.4434 23.893L16.6064 22.3582L21 31.1454L25.3936 22.3582L21.5566 23.893Z" fill="#AC4CBC"></path>
                                        <path d="M21 20.8846L26.2771 18.7739L21 10.3304L15.7229 18.7739L21 20.8846Z" fill="#AC4CBC"></path>
                                        <path d="M21 0.00012207C9.40213 0.00012207 0.00012207 9.40213 0.00012207 21C0.00012207 32.5979 9.40213 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM29.8417 20.171L22.3417 35.171C21.9714 35.9121 21.0701 36.2124 20.3294 35.8421C20.0387 35.697 19.8034 35.4617 19.6583 35.171L12.1583 20.171C11.9253 19.7032 11.9519 19.1479 12.2284 18.7043L19.7284 6.70453C20.2269 6.00232 21.1996 5.83661 21.9018 6.33511C22.0451 6.43674 22.1701 6.56125 22.2717 6.70453L29.7712 18.7043C30.0482 19.1479 30.0747 19.7032 29.8417 20.171Z" fill="#AC4CBC"></path>
                                    </svg>
                                    <div className="w-100 ms-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="mb-0 text-black font-w600">ETH/USD</p>
                                            <span className="ms-auto fs-15 mb-0  text-black font-w600">$10,245.00</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-success tx-13"><i className="fa fa-caret-up me-1"></i>2.04%</span>
                                            <small className="text-muted ms-auto">340.5 USD</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex px-0 justify-content-between align-items-center">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM12.3281 19.4999H18.328C19.1566 19.4999 19.8281 20.1715 19.8281 21C19.8281 21.8286 19.1566 22.5001 18.328 22.5001H12.3281C11.4996 22.5001 10.828 21.8286 10.828 21C10.828 20.1715 11.5 19.4999 12.3281 19.4999ZM31.0841 17.3658L29.28 26.392C28.8552 28.4872 27.0155 29.9951 24.8777 30.0001H12.3281C11.4996 30.0001 10.828 29.3286 10.828 28.5C10.828 27.6715 11.5 26.9999 12.3281 26.9999H24.8777C25.5868 26.9981 26.197 26.4982 26.338 25.8033L28.1425 16.7772C28.3027 15.9715 27.7799 15.1887 26.9747 15.0285C26.8791 15.0097 26.782 15.0001 26.685 15.0001H15.3283C14.4998 15.0001 13.8282 14.3286 13.8282 13.5C13.8282 12.6715 14.4998 11.9999 15.3283 11.9999H26.685C29.1633 12.0009 31.1715 14.01 31.1711 16.4883C31.1711 16.7827 31.1418 17.0765 31.0841 17.3658Z" fill="#3693FF"></path>
                                    </svg>
                                    <div className="w-100 ms-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="mb-0 text-black font-w600">DASH/USD</p>
                                            <span className="ms-auto fs-15 mb-0  text-black font-w600">$7,245.00</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-danger tx-13"><i className="fa fa-caret-down me-1"></i>1.25%</span>
                                            <small className="text-muted ms-auto">300.5 USD</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex px-0 justify-content-between align-items-center">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.5 16.5002C28.4986 14.844 27.156 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.156 19.4985 28.4986 18.1559 28.5 16.5002Z" fill="#FFAB2D"></path>
                                        <path d="M16.5002 28.5H25.5003C27.1569 28.5 28.5 27.157 28.5 25.5003C28.5 23.8432 27.1569 22.5001 25.5003 22.5001H16.5002V28.5Z" fill="#FFAB2D"></path>
                                        <path d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9866 9.40762 32.5924 0.0133972 21 0.00012207ZM31.5002 25.4998C31.4961 28.8122 28.8122 31.4961 25.5003 31.4998V32.9998C25.5003 33.8284 24.8283 34.4999 24.0002 34.4999C23.1716 34.4999 22.5001 33.8284 22.5001 32.9998V31.4998H19.5004V32.9998C19.5004 33.8284 18.8284 34.4999 18.0003 34.4999C17.1717 34.4999 16.5002 33.8284 16.5002 32.9998V31.4998H12.0004C11.1718 31.4998 10.5003 30.8282 10.5003 30.0001C10.5003 29.1716 11.1718 28.5 12.0004 28.5H13.5V13.5H12.0004C11.1718 13.5 10.5003 12.8285 10.5003 11.9999C10.5003 11.1714 11.1718 10.4998 12.0004 10.4998H16.5002V9.00021C16.5002 8.17166 17.1717 7.50012 18.0003 7.50012C18.8288 7.50012 19.5004 8.17166 19.5004 9.00021V10.4998H22.5001V9.00021C22.5001 8.17166 23.1716 7.50012 24.0002 7.50012C24.8287 7.50012 25.5003 8.17166 25.5003 9.00021V10.4998C28.7998 10.4861 31.486 13.1494 31.5002 16.4489C31.5075 18.1962 30.7499 19.8593 29.4265 21C30.7375 22.128 31.4942 23.77 31.5002 25.4998Z" fill="#FFAB2D"></path>
                                    </svg>
                                    <div className="w-100 ms-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="mb-0 text-black font-w600">BTC/USD</p>
                                            <span className="ms-auto fs-15 mb-0  text-black font-w600">$10,245.00</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-success tx-13"><i className="fa fa-caret-up me-1"></i>2.04%</span>
                                            <small className="text-muted ms-auto">340.5 USD</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex px-0 justify-content-between align-items-center">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM26.9999 30.0001H22.5001V34.4999C22.5001 35.3285 21.8286 36 21 36C20.1714 36 19.4999 35.3285 19.4999 34.4999V30.0001H15.0001C14.1715 30.0006 13.4995 29.3295 13.4991 28.5009C13.4991 28.1599 13.6149 27.8289 13.8282 27.5625L23.8784 15.0001H15.0001C14.1715 15.0001 13.5 14.3286 13.5 13.5C13.5 12.6715 14.1715 11.9999 15.0001 11.9999H19.4999V7.50012C19.4999 6.67157 20.1714 6.00003 21 6.00003C21.8286 6.00003 22.5001 6.67203 22.5001 7.50012V11.9999H26.9999C27.8294 12.0013 28.5005 12.6747 28.4995 13.5037C28.4991 13.8429 28.3833 14.1725 28.1718 14.4375L18.1216 26.9999H26.9999C27.8285 26.9999 28.5 27.6719 28.5 28.5C28.5 29.3286 27.8285 30.0001 26.9999 30.0001Z" fill="#5B5D81"></path>
                                    </svg>
                                    <div className="w-100 ms-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="mb-0 text-black font-w600">BTC/USD</p>
                                            <span className="ms-auto fs-15 mb-0  text-black font-w600">$10,245.00</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-success tx-13"><i className="fa fa-caret-up me-1"></i>2.04%</span>
                                            <small className="text-muted ms-auto">340.5 USD</small>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer pt-0 pb-0 text-center">
                            <div className="row">
                                <div className="col-4 pt-3 pb-3 border-right">
                                    <h3 className="mb-1 text-primary">150</h3>
                                    <span>Projects</span>
                                </div>
                                <div className="col-4 pt-3 pb-3 border-right">
                                    <h3 className="mb-1 text-primary">140</h3>
                                    <span>Uploads</span>
                                </div>
                                <div className="col-4 pt-3 pb-3">
                                    <h3 className="mb-1 text-primary">45</h3>
                                    <span>Tasks</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard4;