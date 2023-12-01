import React from "react";
import { Tab, Nav } from "react-bootstrap";
import LiquidStakeCards from "./LiquidStakeCards";
import LiquidUnstakeCards from "./LiquidUnstakeCards";

export const Liquidstake = () => {
    return (
        <div className="container-fluid  mb-0 d-flex justify-content-center align-items-center">
            <Tab.Container defaultActiveKey="stake">
                <div className="col-md-8">
                    <div>
                        <div className="card-body">
                            <Nav
                                className="nav nav-tabs justify-content-center"
                                id="nav-tab-p2p"
                                role="tablist"
                            >
                                <Nav.Item>
                                    <Nav.Link eventKey="stake" className="btn btn-outline-primary ">
                                        Stake
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="unstake" className="btn btn-outline-primary">
                                        Unstake
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="mt-4">
                                <Tab.Pane eventKey="stake">
                                    <LiquidStakeCards />
                                </Tab.Pane>
                                <Tab.Pane eventKey="unstake">
                                    <LiquidUnstakeCards />
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </div>
            </Tab.Container>
        </div>
    );
};
