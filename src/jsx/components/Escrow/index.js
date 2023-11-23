import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import CreateAgreement from './CreateAgreement';
import Agreements from './Agreements';


const Escrow = () => {
    return (
        <div className='container'>
            <div className="card-body px-0 pt-1">
                <Tab.Container defaultActiveKey="Navbuy">
                    <div className="">
                        <div className="buy-sell">
                            <Nav className="nav nav-tabs" eventKey="nav-tab2" role="tablist" >
                                <Nav.Link as="button" className="" eventKey="Navbuy" type="button" style={{ textTransform: "none" }}>Create Agreement</Nav.Link>
                                <Nav.Link as="button" className="nav-link" eventKey="Navsell" type="button" style={{ textTransform: "none" }}>My Agreement</Nav.Link>
                            </Nav>
                        </div>
                        <Tab.Content  >
                            <Tab.Pane eventKey="Navbuy" >
                                <Tab.Container defaultActiveKey="Navbuymarket">

                                    <Tab.Content id="nav-tabContent1">
                                        <Tab.Pane eventKey="Navbuymarket"></Tab.Pane>
                                        <Tab.Pane eventKey="Navbuylimit"></Tab.Pane>
                                    </Tab.Content>
                                    <div className="sell-element">
                                        <CreateAgreement />
                                    </div>
                                </Tab.Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Navsell">
                                <Tab.Container defaultActiveKey="Navsellmarket">

                                    <Tab.Content id="nav-tabContent2">
                                        <Tab.Pane id="Navsellmarket" ></Tab.Pane>
                                        <Tab.Pane id="Navselllimit" ></Tab.Pane>
                                    </Tab.Content>
                                    <div className="sell-element">
                                        <Agreements />
                                       
                                    </div>
                                </Tab.Container>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
        </div >
    );
};

export default Escrow;