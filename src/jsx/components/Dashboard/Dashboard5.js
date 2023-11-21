import React from 'react';
import {Link} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import Select from 'react-select';
import Index5CoinChart from './Index5/Index5CoinChart';

const tickerSlider = [
    {price:'65,123'},
    {price:'47,789'},
    {price:'23,998'},
    {price:'56,487'},
    {price:'23,998'},
    {price:'65,123'},
    {price:'56,487'},
    {price:'56,487'},
];

const options = [
    { value: '1', label: 'Bitcoin (BTC)' },
    { value: '2', label: 'Ethereum (ETH)' },
    { value: '3', label: 'EOS(EOS)' },
    { value: '4', label: 'Litecoin(LTC)' },
    { value: '5', label: 'XRP(XRP)' }
]
const options2 = [
    { value: '1', label: 'USD' },
    { value: '2', label: 'EUR' },
    { value: '3', label: 'GBP' },
    { value: '4', label: 'JPY' },
    { value: '5', label: 'HKD' },
    { value: '6', label: 'CNY' }
]
const options3 = [
    { value: '1', label : 'BTC/USD' },
    { value: '2',label : 'BTC/EURO' },
    { value: '3',label : 'BTC/GBP' },
]
const options4 = [
    { value: '1', label : 'Smin' },
    { value: '2',label : 'Dmin' },
    { value: '3',label : 'Jmin' },
]
const options5 = [
    { value: '1', label : 'Competition 1' },
    { value: '2',label : 'Competition 2' },
    { value: '3',label : 'Competition 3' } 
]

const sellTableData = [
    {},{},{},{},
    {},{},{},{},
];
const buyTableData = [
    {},{},{},{},
    {},{},{},{},
];

const Dashboard5 = () =>{
    return(
        <>
            <div className="row">
                <div className="col-xxl-12">
                    <div className="overflow-hidden bg-transparent dz-crypto-scroll shadow-none">
                        <div className="js-conveyor-example">
                             <ul className="crypto-list" id="crypto-webticker">
                                <Marquee
                                    speed = {80}
                                    loop = {0}
                                    pauseOnHover = {true}
                                >
                                    {tickerSlider.map((item, index)=>(
                                       
                                        <div className="card overflow-hidden " key={index}>
                                            <div className="card-body d-flex align-items-center">
                                                <div className="me-4">
                                                    <p className="mb-2 fs-13"><i className="fa fa-caret-up scale5 me-2 text-success" aria-hidden="true"></i>4%(30 days)</p>
                                                    <h4 className="heading mb-0">${item.price}</h4>
                                                </div>
                                                {
                                                    index === 0 ? 
                                                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M28.5 16.5002C28.4986 14.844 27.156 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.156 19.4985 28.4986 18.1559 28.5 16.5002Z" fill="#FFAB2D"/>
                                                            <path d="M16.5002 28.5H25.5003C27.1569 28.5 28.5 27.157 28.5 25.5003C28.5 23.8432 27.1569 22.5001 25.5003 22.5001H16.5002V28.5Z" fill="#FFAB2D"/>
                                                            <path d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9866 9.40762 32.5924 0.0133972 21 0.00012207ZM31.5002 25.4998C31.4961 28.8122 28.8122 31.4961 25.5003 31.4998V32.9998C25.5003 33.8284 24.8283 34.4999 24.0002 34.4999C23.1716 34.4999 22.5001 33.8284 22.5001 32.9998V31.4998H19.5004V32.9998C19.5004 33.8284 18.8284 34.4999 18.0003 34.4999C17.1717 34.4999 16.5002 33.8284 16.5002 32.9998V31.4998H12.0004C11.1718 31.4998 10.5003 30.8282 10.5003 30.0001C10.5003 29.1716 11.1718 28.5 12.0004 28.5H13.5V13.5H12.0004C11.1718 13.5 10.5003 12.8285 10.5003 11.9999C10.5003 11.1714 11.1718 10.4998 12.0004 10.4998H16.5002V9.00021C16.5002 8.17166 17.1717 7.50012 18.0003 7.50012C18.8288 7.50012 19.5004 8.17166 19.5004 9.00021V10.4998H22.5001V9.00021C22.5001 8.17166 23.1716 7.50012 24.0002 7.50012C24.8287 7.50012 25.5003 8.17166 25.5003 9.00021V10.4998C28.7998 10.4861 31.486 13.1494 31.5002 16.4489C31.5075 18.1962 30.7499 19.8593 29.4265 21C30.7375 22.128 31.4942 23.77 31.5002 25.4998Z" fill="#FFAB2D"/>
                                                        </svg>
                                                    :
                                                    
                                                    index === 1 ? 
                                                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM12.3281 19.4999H18.328C19.1566 19.4999 19.8281 20.1715 19.8281 21C19.8281 21.8286 19.1566 22.5001 18.328 22.5001H12.3281C11.4996 22.5001 10.828 21.8286 10.828 21C10.828 20.1715 11.5 19.4999 12.3281 19.4999ZM31.0841 17.3658L29.28 26.392C28.8552 28.4872 27.0155 29.9951 24.8777 30.0001H12.3281C11.4996 30.0001 10.828 29.3286 10.828 28.5C10.828 27.6715 11.5 26.9999 12.3281 26.9999H24.8777C25.5868 26.9981 26.197 26.4982 26.338 25.8033L28.1425 16.7772C28.3027 15.9715 27.7799 15.1887 26.9747 15.0285C26.8791 15.0097 26.782 15.0001 26.685 15.0001H15.3283C14.4998 15.0001 13.8282 14.3286 13.8282 13.5C13.8282 12.6715 14.4998 11.9999 15.3283 11.9999H26.685C29.1633 12.0009 31.1715 14.01 31.1711 16.4883C31.1711 16.7827 31.1418 17.0765 31.0841 17.3658Z" fill="#3693FF"/>
                                                        </svg>
                                                    :
                                                    
                                                    index === 2 ? 
                                                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM26.9999 30.0001H22.5001V34.4999C22.5001 35.3285 21.8286 36 21 36C20.1714 36 19.4999 35.3285 19.4999 34.4999V30.0001H15.0001C14.1715 30.0006 13.4995 29.3295 13.4991 28.5009C13.4991 28.1599 13.6149 27.8289 13.8282 27.5625L23.8784 15.0001H15.0001C14.1715 15.0001 13.5 14.3286 13.5 13.5C13.5 12.6715 14.1715 11.9999 15.0001 11.9999H19.4999V7.50012C19.4999 6.67157 20.1714 6.00003 21 6.00003C21.8286 6.00003 22.5001 6.67203 22.5001 7.50012V11.9999H26.9999C27.8294 12.0013 28.5005 12.6747 28.4995 13.5037C28.4991 13.8429 28.3833 14.1725 28.1718 14.4375L18.1216 26.9999H26.9999C27.8285 26.9999 28.5 27.6719 28.5 28.5C28.5 29.3286 27.8285 30.0001 26.9999 30.0001Z" fill="#5B5D81"/>
                                                        </svg>
                                                    :
                                                    
                                                    index === 3 ? 
                                                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21.5566 23.893C21.1991 24.0359 20.8009 24.0359 20.4434 23.893L16.6064 22.3582L21 31.1454L25.3936 22.3582L21.5566 23.893Z" fill="#AC4CBC"/>
                                                            <path d="M21 20.8846L26.2771 18.7739L21 10.3304L15.7229 18.7739L21 20.8846Z" fill="#AC4CBC"/>
                                                            <path d="M21 0.00012207C9.40213 0.00012207 0.00012207 9.40213 0.00012207 21C0.00012207 32.5979 9.40213 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM29.8417 20.171L22.3417 35.171C21.9714 35.9121 21.0701 36.2124 20.3294 35.8421C20.0387 35.697 19.8034 35.4617 19.6583 35.171L12.1583 20.171C11.9253 19.7032 11.9519 19.1479 12.2284 18.7043L19.7284 6.70453C20.2269 6.00232 21.1996 5.83661 21.9018 6.33511C22.0451 6.43674 22.1701 6.56125 22.2717 6.70453L29.7712 18.7043C30.0482 19.1479 30.0747 19.7032 29.8417 20.171Z" fill="#AC4CBC"/>
                                                        </svg>
                                                    :
                                                    index === 4 ? 
                                                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21.5566 23.893C21.1991 24.0359 20.8009 24.0359 20.4434 23.893L16.6064 22.3582L21 31.1454L25.3936 22.3582L21.5566 23.893Z" fill="#AC4CBC"/>
                                                            <path d="M21 20.8846L26.2771 18.7739L21 10.3304L15.7229 18.7739L21 20.8846Z" fill="#AC4CBC"/>
                                                            <path d="M21 0.00012207C9.40213 0.00012207 0.00012207 9.40213 0.00012207 21C0.00012207 32.5979 9.40213 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM29.8417 20.171L22.3417 35.171C21.9714 35.9121 21.0701 36.2124 20.3294 35.8421C20.0387 35.697 19.8034 35.4617 19.6583 35.171L12.1583 20.171C11.9253 19.7032 11.9519 19.1479 12.2284 18.7043L19.7284 6.70453C20.2269 6.00232 21.1996 5.83661 21.9018 6.33511C22.0451 6.43674 22.1701 6.56125 22.2717 6.70453L29.7712 18.7043C30.0482 19.1479 30.0747 19.7032 29.8417 20.171Z" fill="#AC4CBC"/>
                                                        </svg>
                                                    :
                                                    index === 5 ? 
                                                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM12.3281 19.4999H18.328C19.1566 19.4999 19.8281 20.1715 19.8281 21C19.8281 21.8286 19.1566 22.5001 18.328 22.5001H12.3281C11.4996 22.5001 10.828 21.8286 10.828 21C10.828 20.1715 11.5 19.4999 12.3281 19.4999ZM31.0841 17.3658L29.28 26.392C28.8552 28.4872 27.0155 29.9951 24.8777 30.0001H12.3281C11.4996 30.0001 10.828 29.3286 10.828 28.5C10.828 27.6715 11.5 26.9999 12.3281 26.9999H24.8777C25.5868 26.9981 26.197 26.4982 26.338 25.8033L28.1425 16.7772C28.3027 15.9715 27.7799 15.1887 26.9747 15.0285C26.8791 15.0097 26.782 15.0001 26.685 15.0001H15.3283C14.4998 15.0001 13.8282 14.3286 13.8282 13.5C13.8282 12.6715 14.4998 11.9999 15.3283 11.9999H26.685C29.1633 12.0009 31.1715 14.01 31.1711 16.4883C31.1711 16.7827 31.1418 17.0765 31.0841 17.3658Z" fill="#3693FF"/>
                                                        </svg>
                                                    :
                                                    index === 6 ? 
                                                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M28.5 16.5002C28.4986 14.844 27.156 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.156 19.4985 28.4986 18.1559 28.5 16.5002Z" fill="#FFAB2D"/>
                                                            <path d="M16.5002 28.5H25.5003C27.1569 28.5 28.5 27.157 28.5 25.5003C28.5 23.8432 27.1569 22.5001 25.5003 22.5001H16.5002V28.5Z" fill="#FFAB2D"/>
                                                            <path d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9866 9.40762 32.5924 0.0133972 21 0.00012207ZM31.5002 25.4998C31.4961 28.8122 28.8122 31.4961 25.5003 31.4998V32.9998C25.5003 33.8284 24.8283 34.4999 24.0002 34.4999C23.1716 34.4999 22.5001 33.8284 22.5001 32.9998V31.4998H19.5004V32.9998C19.5004 33.8284 18.8284 34.4999 18.0003 34.4999C17.1717 34.4999 16.5002 33.8284 16.5002 32.9998V31.4998H12.0004C11.1718 31.4998 10.5003 30.8282 10.5003 30.0001C10.5003 29.1716 11.1718 28.5 12.0004 28.5H13.5V13.5H12.0004C11.1718 13.5 10.5003 12.8285 10.5003 11.9999C10.5003 11.1714 11.1718 10.4998 12.0004 10.4998H16.5002V9.00021C16.5002 8.17166 17.1717 7.50012 18.0003 7.50012C18.8288 7.50012 19.5004 8.17166 19.5004 9.00021V10.4998H22.5001V9.00021C22.5001 8.17166 23.1716 7.50012 24.0002 7.50012C24.8287 7.50012 25.5003 8.17166 25.5003 9.00021V10.4998C28.7998 10.4861 31.486 13.1494 31.5002 16.4489C31.5075 18.1962 30.7499 19.8593 29.4265 21C30.7375 22.128 31.4942 23.77 31.5002 25.4998Z" fill="#FFAB2D"/>
                                                        </svg>
                                                    :
                                                    index === 7 ? 
                                                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM26.9999 30.0001H22.5001V34.4999C22.5001 35.3285 21.8286 36 21 36C20.1714 36 19.4999 35.3285 19.4999 34.4999V30.0001H15.0001C14.1715 30.0006 13.4995 29.3295 13.4991 28.5009C13.4991 28.1599 13.6149 27.8289 13.8282 27.5625L23.8784 15.0001H15.0001C14.1715 15.0001 13.5 14.3286 13.5 13.5C13.5 12.6715 14.1715 11.9999 15.0001 11.9999H19.4999V7.50012C19.4999 6.67157 20.1714 6.00003 21 6.00003C21.8286 6.00003 22.5001 6.67203 22.5001 7.50012V11.9999H26.9999C27.8294 12.0013 28.5005 12.6747 28.4995 13.5037C28.4991 13.8429 28.3833 14.1725 28.1718 14.4375L18.1216 26.9999H26.9999C27.8285 26.9999 28.5 27.6719 28.5 28.5C28.5 29.3286 27.8285 30.0001 26.9999 30.0001Z" fill="#5B5D81"/>
                                                        </svg>
                                                    :
                                                    ''
                                                }
                                            </div>
                                        </div>                                        
                                    ))}
                                </Marquee>                               
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-8 col-xl-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="heading mb-0">ETH/BTC</h4>
                            <ul className="box-controls pull-right">	
                                <li><Link to={"#"} className="box-btn-fullscreen"></Link></li>
                            </ul>
                        </div>
                        <div className="card-body">
                            {/* <div id="coin-chart"></div> */}
                            <Index5CoinChart />
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-6">
                    <div className="card">
                        <div className="card-header border-0">
                            <h4 className="heading mb-0">Currency Converter Calculator</h4>
                        </div>
                        <div className="card-body pt-0 custome-converter">
                            {/* <script src="https://cdn.jsdelivr.net/gh/coinponent/coinponent@1.2.6/dist/coinponent.js"></script> */}
                            {/* <coin-ponent className="btc-converts" shadow="none" decimals="4"></coin-ponent> */}
                            <div className="custome-converter-input">
                                <input type="text" className="form-control" placeholder="1" />
                            </div>
                            <div className="form-group custome-converter-select">                               
                                <Select 
                                    options={options} 
                                    defaultValue={options[0]}
                                    className="custom-react-select"
                                />
                            </div>            
                            <div className="custome-equal">            
                                <span>=</span>
                            </div>            
                            <div className="custome-converter-input style-1">
                                <input type="text" className="form-control" placeholder="$16,642.1500" />
                            </div>
                            <div className="form-group custome-converter-select">
                                <Select 
                                    options={options2}  
                                    className="custom-react-select"
                                    defaultValue={options2[0]}    
                                    isSearchable={false}
                                />
                            </div>
                            <div className="d-flex justify-content-between align-items-center custome-refresh">
                                <span><svg data-v-e9805d6a="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path data-v-e9805d6a="" fill="#B8C2CC" d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path> <path data-v-e9805d6a="" d="M0 0h24v24H0z" fill="none"></path></svg></span>
                                <span className="text-black"><svg className="me-1" data-v-14e1c52e="" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.15 12.64"><g data-v-14e1c52e="" data-name="Layer 2"><g data-v-14e1c52e="" data-name="Layer 1"><path data-v-14e1c52e="" fill="#fcf4a0" d="M6.58.75L.75 7.06h3.54l-1.95 4.83L8.4 5.24H4.57L6.58.75z"></path> <path data-v-14e1c52e="" d="M6.58.75l-2 4.49H8.4l-6.06 6.65 2-4.83H.75L6.58.75m0-.75a.67.67 0 0 0-.37.11.65.65 0 0 0-.21.13L.2 6.55a.75.75 0 0 0 .55 1.26h2.43l-1.54 3.8a.76.76 0 0 0 .3.92.8.8 0 0 0 .4.11.74.74 0 0 0 .55-.24L9 5.75a.75.75 0 0 0-.6-1.26H5.73L7.24 1.1a.68.68 0 0 0 .09-.35.75.75 0 0 0-.74-.75zm0 1.5z" fill="#f4a51f"></path></g></g></svg>
                                CryptoCoin
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-6">
                    <div className="card">
                        <div className="card-header border-0">
                            <h4 className="heading">Backest Conditions</h4>
                        </div>
                        <div className="card-body pt-0">
                            <form className="dash-form">
                                <div className="form-group mb-3">                                    
                                    <Select 
                                        options={options3}  
                                        className="custom-react-select"
                                        defaultValue={options3[0]}    
                                        isSearchable={false}
                                    />
                                </div>
                                <div className="form-group  mb-3">
                                    <Select 
                                        options={options4}  
                                        className="custom-react-select"
                                        defaultValue={options4[0]}    
                                        isSearchable={false}
                                    />                                    
                                </div>
                                <div className="form-group  mb-3">                                   
                                    <Select 
                                        options={options5}  
                                        className="custom-react-select"
                                        defaultValue={options5[0]}    
                                        isSearchable={false}
                                    />
                                </div>
                                <div className="row mb-3">
                                    <div className="col-6">										
                                        <div className="form-group mt-2">
                                            <label className="form-label">Exchange Fee (%):</label>
                                            <input type="text" className="form-control mb-2" placeholder="0.025" />
                                        </div>
                                    </div>
                                    <div className="col-6">										
                                        <div className="form-group mt-2">
                                            <label className="form-label">Open Balance (USD):</label>
                                            <input type="text" className="form-control mb-2" placeholder="10,000.00" />
                                        </div>
                                    </div>
                                    <div className="col-6">									
                                        <div className="form-group mt-2">
                                            <label className="form-label">Stop Loss (%):</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-6">									
                                        <div className="form-group mt-2">
                                            <label className="form-label">Take Profit (%):</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>								
                                <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                    <button type="submit" className="btn btn-danger">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="heading">Sell</h4>
                            <span>Total: 409.2820</span>
                        </div>
                        <div className="card-body pt-0 px-0">
                            <div className="table-responsive buy-sell-table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Pri./ BTC</th>
                                            <th>BTC Amount</th>
                                            <th>Total: (USD)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sellTableData.map((item, ind)=>(
                                            <tr key={ind}>
                                                <td>82.3</td><td><i className="fa-brands fa-bitcoin text-warning me-2"></i> 0.15</td><td>$ 134.7</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-6">
                    <div className="card sell-bg-tbl">
                        <div className="card-header">
                            <h4 className="heading">Buy</h4>
                            <span>Total: 409.2820</span>
                        </div>
                        <div className="card-body pt-0 px-0">
                            <div className="table-responsive buy-sell-table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Pri./ BTC</th>
                                            <th>BTC Amount</th>
                                            <th>Total: (USD)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {buyTableData.map((item, ind)=>(
                                            <tr key={ind}>
                                                <td>82.3</td>
                                                <td><i className="fa-brands fa-bitcoin text-warning me-2"></i> 0.15</td>
                                                <td>$ 134.7</td>
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
export default Dashboard5;