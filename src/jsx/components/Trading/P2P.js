import React, {useEffect, useState, useRef } from 'react';
//import {Link} from 'react-router-dom';
import {Nav, Tab} from 'react-bootstrap';
import Select from 'react-select';

//Buy
import BuyBthTable from './P2P/BuyBthTable';
import BuyEthTable from './P2P/BuyEthTable';
import BuyBnbTable from './P2P/BuyBnbTable';

import P2PSellTab from './P2P/P2PSellTab';

const options = [
    { value: '0', label: 'All Payments' },
    { value: '1', label: 'UPI' },
    { value: '2', label: 'IMPS' },
    { value: '3', label: 'RTGS' },
    { value: '4', label: 'Gpay' },
    { value: '5', label: 'Paytm' },
    { value: '6', label: 'Phonepay' },
    { value: '7', label: 'Mokwikbi' },
]
const options2 = [
    { value: '0', label: 'INR' },
    { value:"1", label:'JPY' },
    { value:"2", label:'KES' },
    { value:"3", label:'KHR' },
    { value:"4", label:'KWD' },
    { value:"5", label:'KZT' },
    { value:"6", label:'LAK' },
    { value:"7", label:'LBP' },
    { value:"8", label:'LKR' },
]

function P2P(){   
    return(
        <>
            <Tab.Container defaultActiveKey="Buy">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header border-0">
                                <h4 className="heading">Buy & Sell Bitcoin</h4>
                                <nav>
                                    <Nav className="order nav nav-tabs" id="nav-tab-p2p" role="tablist">
                                        <Nav.Link as="button"  eventKey="Buy"   type="button" >Buy</Nav.Link>
                                        <Nav.Link as="button"  eventKey="Sell"  type="button">Sell</Nav.Link>
                                    </Nav>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body pb-0">
                                <div className="d-flex flex-wrap">
                                    <div className="input-group custom-search-area width-300 mb-2">
                                        <input type="text" className="form-control" placeholder="Enter Amount" />
                                    </div>                                    
                                    <Select 
                                        options={options2} 
                                        defaultValue={options2[0]}
                                        className="custom-react-select ms-4 me-2"
                                    />
                                    <Select 
                                        options={options} 
                                        defaultValue={options[0]}
                                        className="custom-react-select ms-2"
                                    />
                                </div>
                            </div>
                            <div className="card-body">                                
                                <Tab.Content >
                                    <Tab.Pane eventKey="Buy">
                                        <Tab.Container defaultActiveKey="BTH">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h4 className="heading">P2P: Buy</h4>                                                
                                                <Nav className="order nav nav-tabs" >
                                                    <Nav.Link as="button"  eventKey="BTH" type="button" >BTH</Nav.Link>
                                                    <Nav.Link as="button"  eventKey="ETH" type="button" >ETH</Nav.Link>
                                                    <Nav.Link as="button"  eventKey="BNB" type="button" >BNB</Nav.Link>
                                                </Nav>                                                
                                            </div>
                                            <Tab.Content >
                                                <Tab.Pane eventKey="BTH">
                                                    <BuyBthTable />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="ETH">
                                                    <BuyEthTable />    
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="BNB">
                                                    <BuyBnbTable /> 
                                                </Tab.Pane>
                                            </Tab.Content>                    
                                        </Tab.Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Sell">
                                        <P2PSellTab />
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </div>
                    </div>   
                </div>    
            </Tab.Container>
        </>
    )
}
export default P2P;