import React from 'react';
import {Tab, Nav} from 'react-bootstrap';

import AllOrder from './History/AllOrder';
import OrderHistory from './History/OrderHistory';
import TradeHistory from './History/TradeHistory';

const History = () =>{
    return(
        <>
            <div className="row">
                <div className="col-xxl-12">
                    <div className="card">
                        <Tab.Container defaultActiveKey="All">
                            <div className="card-header border-0 pb-2 flex-wrap">        
                                <h4 className="heading me-2">Trade History</h4>
                                <nav>
                                    <Nav as="div" className="order nav nav-tabs" role="tablist">
                                        <Nav.Link as="button"  eventKey="All">Order</Nav.Link>
                                        <Nav.Link as="button"  eventKey="Nav-History" >Order History</Nav.Link>
                                        <Nav.Link as="button"  eventKey="Nav-Trade" >Trade Histroy</Nav.Link>
                                    </Nav>
                                </nav>
                                
                            </div>
                            <div className="card-body pt-2">
                                <Tab.Content >
                                    <Tab.Pane eventKey="All">
                                        <AllOrder />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Nav-History">
                                        <OrderHistory />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Nav-Trade">
                                        <TradeHistory />
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>
    )
}
export default History;
