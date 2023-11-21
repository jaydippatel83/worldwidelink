import React from 'react';
import {Tab, Nav} from 'react-bootstrap';

//Sell
import  SellBthTable from './SellBthTable';
import  SellEthTable from './SellEthTable';
import  SellBnbTable from './SellBnbTable';

const P2PSellTab = () =>{
    return(
        <>
            <Tab.Container defaultActiveKey="SellBTH">
                <div className="d-flex align-items-center justify-content-between">
                    <h4 className="heading">P2P: Sell</h4>                                                
                    <Nav className="order nav nav-tabs">
                        <Nav.Link as="button"  eventKey="SellBTH" type="button" >BTH</Nav.Link>
                        <Nav.Link as="button"  eventKey="SellETH" type="button" >ETH</Nav.Link>
                        <Nav.Link as="button"  eventKey="SellBNB" type="button" >BNB</Nav.Link>
                    </Nav>                                                
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="SellBTH">
                        <SellBthTable />
                    </Tab.Pane>
                    <Tab.Pane eventKey="SellETH">
                        <SellEthTable />    
                    </Tab.Pane>
                    <Tab.Pane eventKey="SellBNB">
                        <SellBnbTable />
                    </Tab.Pane>
                </Tab.Content>                    
            </Tab.Container>
        </>
    )
}
export default P2PSellTab;