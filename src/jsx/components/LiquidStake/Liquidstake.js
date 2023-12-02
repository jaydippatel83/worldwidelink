import React from "react";
import { Tab, Nav } from "react-bootstrap";
import LiquidStakeCards from "./LiquidStakeCards";
import LiquidUnstakeCards from "./LiquidUnstakeCards";

export const Liquidstake = () => {
    return (
        <div >

            <Tab.Container defaultActiveKey="stake">
                <div className="row">
                    <div className="col mb-0 justify-content-center align-items-center">
                        <div className="buy-sell">
                            <Nav className="nav nav-tabs" eventKey="nav-tab2" role="tablist" >
                                <Nav.Link as="button" className="" eventKey="stake" type="button" style={{ textTransform: "none" }}>Stack</Nav.Link>
                                <Nav.Link as="button" className="nav-link" eventKey="unstake" type="button" style={{ textTransform: "none" }}>Unstake</Nav.Link>
                            </Nav>
                        </div>
                        <Tab.Content className="">
                            <Tab.Pane eventKey="stake">
                                <LiquidStakeCards />
                            </Tab.Pane>
                            <Tab.Pane eventKey="unstake">
                                <LiquidUnstakeCards />
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </div>
            </Tab.Container>
        </div>

    );
};
