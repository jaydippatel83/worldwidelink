import React, { useEffect, useState, useRef } from "react";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import Select from "react-select";
import { Formik } from "formik";
import * as Yup from "yup";
import { networks } from "../../../network";

//Import
import { LtcIcon, BtcIcon, XtzIcon, EthIcon } from "../Dashboard/SvgIcon";

const chains = [
  { value: "sepolia", label: "Sepolia testnet" },
  { value: "mumbai", label: "Mumbai testnet" },
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
  {
    value: "3",
    address: "",
    label: "USDC",
  },
];

const supplySchema = Yup.object().shape({
  from: Yup.object().required("Please select from Chain!"),

  protocol: Yup.object().required("Please select Protocol!"),
  amount: Yup.number().required("Please enter Amount!"),
  token: Yup.object().required("Please select Token!"),
});

const borrowSchema = Yup.object().shape({
  to: Yup.object().required("Please select from Chain!"),
  protocol: Yup.object().required("Please select Protocol!"),
  amount: Yup.number().required("Please enter Amount!"),
  token: Yup.object().required("Please select Token!"),
});

const Landing = () => {
  return (
    <div className="container">
      {/* <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <div>
                <h2 className="heading">Market Previews</h2>
              </div>
            </div>
            <div className="card-body pt-0 px-0">
              {marketBlog.map((data, ind) => (
                <div className="previews-info-list" key={ind}>
                  <div className="pre-icon">
                    <span className={`icon-box icon-box-sm ${data.classBg}`}>
                      {data.icon}
                    </span>
                    <div className="ms-2">
                      <h6>{data.Name}/Year</h6>
                      <span>March</span>
                    </div>
                  </div>
                  <div className="count">
                    <h6>120.45</h6>
                    <span className={ind % 2 == 0 ? "text-success" : ""}>
                      1,24%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <div>
                <h2 className="heading">Market Previews</h2>
              </div>
            </div>
            <div className="card-body pt-0 px-0">
              {marketBlog.map((data, ind) => (
                <div className="previews-info-list" key={ind}>
                  <div className="pre-icon">
                    <span className={`icon-box icon-box-sm ${data.classBg}`}>
                      {data.icon}
                    </span>
                    <div className="ms-2">
                      <h6>{data.Name}/Year</h6>
                      <span>March</span>
                    </div>
                  </div>
                  <div className="count">
                    <h6>120.45</h6>
                    <span className={ind % 2 == 0 ? "text-success" : ""}>
                      1,24%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className="row">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="heading">Supply Asset</h4>
            </div>
            <div className="card-body pt-4">
              <Formik
                initialValues={{
                  from: chains[0],
                  protocol: protocols[0],
                  amount: "",
                  token: tokens[0],
                }}
                validationSchema={supplySchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values);
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 mb-3">
                      <div className="col-xl-12">
                        <label className="form-label">From</label>

                        <div className="form-group  mb-3">
                          <Select
                            className="custom-react-select"
                            defaultValue={chains[0]}
                            isSearchable={false}
                            id="from"
                            value={values.from}
                            onChange={(value) => setFieldValue("from", value)}
                            options={chains}
                            onBlur={handleBlur}
                          />
                          <div
                            id="val-username1-error"
                            className="invalid-feedback animated fadeInUp"
                            style={{ display: "block" }}
                          >
                            {errors.from && errors.from}
                          </div>
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
                            onChange={(value) =>
                              setFieldValue("protocol", value)
                            }
                            onBlur={handleBlur}
                            value={values.protocol}
                          />
                          <div
                            id="val-username1-error"
                            className="invalid-feedback animated fadeInUp"
                            style={{ display: "block" }}
                          >
                            {errors.protocol && errors.protocol}
                          </div>
                        </div>
                      </div>
                      <div className="sell-blance col-xl-6">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label text-primary">
                            Amount
                          </label>
                          <div className="form-label blance d-flex">
                            <span>Balance:&nbsp;</span>
                            <span>$3,123.9</span>
                          </div>
                        </div>

                        <div className="input-group" style={{ zIndex: "0" }}>
                          <input
                            id="amount"
                            className="form-control"
                            onChange={handleChange}
                            value={values.amount}
                          />
                          <button
                            className="btn btn-outline-primary btn-outline-primary "
                            type="button"
                          >
                            Max
                          </button>
                        </div>
                        <div
                          id="val-username1-error"
                          className="invalid-feedback animated fadeInUp"
                          style={{ display: "block" }}
                        >
                          {errors.amount && errors.amount}
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <label className="form-label">Select Token</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            value={values.token.label}
                          />
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

                          <Dropdown
                            onSelect={(eventKey) => {
                              const selectedToken = tokens.find(
                                (token) => token.value === eventKey
                              );
                              setFieldValue("token", selectedToken);
                            }}
                            onBlur={handleBlur}
                          >
                            <Dropdown.Toggle className="btn btn-primary btn-outline-primary left-radius">
                              {values.token.label}
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="end">
                              {tokens.map((token) => {
                                return (
                                  <Dropdown.Item eventKey={token.value}>
                                    {token.label}
                                  </Dropdown.Item>
                                );
                              })}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div
                          id="val-username1-error"
                          className="invalid-feedback animated fadeInUp"
                          style={{ display: "block" }}
                        >
                          {errors.token && errors.token}
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <div className="d-flex flex-wrap justify-content-between mb-1">
                          <div>Collateral Value</div>
                          <div className="text-muted"> 0</div>
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
                      disabled={isSubmitting}
                    >
                      Supply
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="heading">Borrow Asset</h4>
            </div>
            <div className="card-body pt-4">
              <Formik
                initialValues={{
                  from: chains[0],
                  protocol: protocols[0],
                  amount: "",
                  token: tokens[0],
                }}
                validationSchema={borrowSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values);
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 mb-3">
                      <div className="col-xl-12">
                        <label className="form-label">To</label>

                        <div className="form-group  mb-3">
                          <Select
                            className="custom-react-select"
                            defaultValue={chains[0]}
                            isSearchable={false}
                            id="from"
                            value={values.from}
                            onChange={(value) => setFieldValue("from", value)}
                            options={chains}
                            onBlur={handleBlur}
                          />
                          <div
                            id="val-username1-error"
                            className="invalid-feedback animated fadeInUp"
                            style={{ display: "block" }}
                          >
                            {errors.from && errors.from}
                          </div>
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
                            onChange={(value) =>
                              setFieldValue("protocol", value)
                            }
                            onBlur={handleBlur}
                            value={values.protocol}
                          />
                          <div
                            id="val-username1-error"
                            className="invalid-feedback animated fadeInUp"
                            style={{ display: "block" }}
                          >
                            {errors.protocol && errors.protocol}
                          </div>
                        </div>
                      </div>
                      <div className="sell-blance col-xl-6">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label text-primary">
                            Amount
                          </label>
                        </div>

                        <div className="input-group">
                          <input
                            id="amount"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.amount}
                          />
                        </div>
                        <div
                          id="val-username1-error"
                          className="invalid-feedback animated fadeInUp"
                          style={{ display: "block" }}
                        >
                          {errors.amount && errors.amount}
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <label className="form-label">Select Token</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            value={values.token.label}
                          />
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

                          <Dropdown
                            onSelect={(eventKey) => {
                              const selectedToken = tokens.find(
                                (token) => token.value === eventKey
                              );
                              setFieldValue("token", selectedToken);
                            }}
                            onBlur={handleBlur}
                          >
                            <Dropdown.Toggle className="btn btn-primary btn-outline-primary left-radius">
                              {values.token.label}
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="end">
                              {tokens.map((token) => {
                                return (
                                  <Dropdown.Item eventKey={token.value}>
                                    {token.label}
                                  </Dropdown.Item>
                                );
                              })}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div
                          id="val-username1-error"
                          className="invalid-feedback animated fadeInUp"
                          style={{ display: "block" }}
                        >
                          {errors.token && errors.token}
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <div className="d-flex flex-wrap justify-content-between mb-1">
                          <div>Collateral Value</div>
                          <div className="text-muted"> 0</div>
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
                      disabled={isSubmitting}
                    >
                      Borrow
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
