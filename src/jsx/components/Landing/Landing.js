import React, { useEffect, useState, useRef } from "react";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import Select from "react-select";

const chains = [
  { value: "1", label: "Sepolia testnet" },
  { value: "2", label: "Mumbai testnet" },
];

const protocols = [
  { value: "1", label: "WWL" },
  { value: "2", label: "Compound" },
  { value: "3", label: "Aave" },
];

const tokens = [
  {
    value: "1",
    address: "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05",
    label: "CCIP-BnM",
  },
  {
    value: "2",
    address: "0x466D489b6d36E7E3b824ef491C225F5830E81cC1",
    label: "CCIP-LnM",
  },
];

const Landing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="heading">Supply Asset</h4>
            </div>
            <div className="card-body pt-4">
              <form>
                <div className="row g-3 mb-3">
                  <div className="col-xl-12">
                    <label className="form-label">From</label>

                    <div className="form-group  mb-3">
                      <Select
                        options={chains}
                        className="custom-react-select"
                        defaultValue={chains[0]}
                        isSearchable={false}
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <label className="form-label">Protocol</label>
                    <div className="form-group  mb-3">
                      <Select
                        options={protocols}
                        className="custom-react-select"
                        defaultValue={protocols[0]}
                        isSearchable={false}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <label className="form-label">Amount</label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <button
                        className="btn btn-outline-primary btn-outline-primary "
                        type="button"
                      >
                        Max
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <label className="form-label">Select Token</label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      {/* <button className="btn btn-primary btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">BTC</button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><a className="dropdown-item" href="#!">BTC</a></li>
                                                <li><a className="dropdown-item" href="#!">ETH</a></li>
                                                <li><a className="dropdown-item" href="#!">BUSD</a></li>
                                                <li><a className="dropdown-item" href="#!">XRP</a></li>
                                                <li><a className="dropdown-item" href="#!">DOT</a></li>
                                                <li><a className="dropdown-item" href="#!">FIL</a></li>
                                                <li><a className="dropdown-item" href="#!">DOGE</a></li>
                                            </ul> */}

                      <Dropdown>
                        <Dropdown.Toggle className="btn btn-primary btn-outline-primary left-radius">
                          {tokens[0].label}
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end">
                          {tokens.map((token) => {
                            return <Dropdown.Item>{token.label}</Dropdown.Item>;
                          })}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div>Collateral Value</div>
                      <div className="text-muted">
                        {" "}
                        0
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                      <div>Liquidation Point</div>
                      <div className="text-muted"> 0</div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                      <div>Borrow Capacity</div>
                      <div className="text-muted"> 0</div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                      <div>Available to Borrow</div>
                      <div className="text-muted">0</div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn flex-fill btn-success py-2 fs-5 text-uppercase px-5"
                >
                  Supply
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="heading">Borrow Asset</h4>
            </div>
            <div className="card-body pt-4">
              <form>
                <div className="row g-3 mb-3">
                  <div className="col-xl-12">
                    <label className="form-label">To</label>
                    <div className="form-group  mb-3">
                      <Select
                        options={chains}
                        className="custom-react-select"
                        defaultValue={chains[0]}
                        isSearchable={false}
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <label className="form-label">Protocol</label>
                    <div className="form-group  mb-3">
                      <Select
                        options={protocols}
                        className="custom-react-select"
                        defaultValue={protocols[0]}
                        isSearchable={false}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <label className="form-label">Amount</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-xl-12">
                    <label className="form-label">Select Token</label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      {/* <button className="btn btn-primary btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">BTC</button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><a className="dropdown-item" href="#!">BTC</a></li>
                                                <li><a className="dropdown-item" href="#!">ETH</a></li>
                                                <li><a className="dropdown-item" href="#!">BUSD</a></li>
                                                <li><a className="dropdown-item" href="#!">XRP</a></li>
                                                <li><a className="dropdown-item" href="#!">DOT</a></li>
                                                <li><a className="dropdown-item" href="#!">FIL</a></li>
                                                <li><a className="dropdown-item" href="#!">DOGE</a></li>
                                            </ul> */}

                      <Dropdown>
                        <Dropdown.Toggle className="btn btn-primary btn-outline-primary left-radius">
                          {tokens[0].label}
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end">
                          {tokens.map((token) => {
                            return <Dropdown.Item>{token.label}</Dropdown.Item>;
                          })}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div>Collateral Value</div>
                      <div className="text-muted">
                        {" "}
                        0
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                      <div>Liquidation Point</div>
                      <div className="text-muted"> 0</div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                      <div>Borrow Capacity</div>
                      <div className="text-muted"> 0</div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                      <div>Available to Borrow</div>
                      <div className="text-muted">0</div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn flex-fill btn-success py-2 fs-5 text-uppercase px-5"
                >
                 Borrow
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
