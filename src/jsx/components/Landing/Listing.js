import React, { useEffect, useState, useRef, useContext } from "react";
import { Dropdown, Tab, Nav, Alert } from "react-bootstrap";
import { networks } from "../../../network";
import { Web3Context } from "../../../context/Web3Context";
import { Link } from "react-router-dom";
import { LandTable } from "./LandTable";
import { BorrowTable } from "./BorrowTable";

export const Listing = () => {
  return (
    <div className="row">
      <Tab.Container defaultActiveKey="Land">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header border-0">
                <h4 className="heading">Land & Borrow Assets</h4>
                <nav>
                  <Nav
                    className="order nav nav-tabs"
                    id="nav-tab-p2p"
                    role="tablist"
                  >
                    <Nav.Link as="button" eventKey="Land" type="button">
                      Land
                    </Nav.Link>
                    <Nav.Link as="button" eventKey="Borrow" type="button">
                      Borrow
                    </Nav.Link>
                  </Nav>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <Tab.Content>
                  <Tab.Pane eventKey="Land">
                    <LandTable />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Borrow">
                    <BorrowTable />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};
