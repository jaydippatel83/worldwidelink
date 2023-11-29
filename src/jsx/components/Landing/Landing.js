import React, { useEffect, useState, useRef, useContext } from "react";
import { Dropdown, Tab, Nav, Alert } from "react-bootstrap";
import Select from "react-select";
import { Formik } from "formik";
import * as Yup from "yup";
import { Web3Context } from "../../../context/Web3Context";
import { ToastContainer } from "react-toastify";
import { Listing } from "./Listing";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

import ccipBnMAbi from "../../../abis/CCIPBnM.json";
import ccipLnMAbi from "../../../abis/CCIPLnM.json";
import { networks, chainsIds } from "../../../network";

const chains = [
  { value: "sepolia", label: "Sepolia testnet" },
  { value: "mumbai", label: "Mumbai testnet" },
];

const protocols = [
  { value: "1", label: "WWL" },
  { value: "2", label: "Compound" },
  { value: "3", label: "Aave" },
];

const supplyToken = [
  {
    value: "bnmToken",
    label: "CCIP-BnM",
  },
  {
    value: "lnmToken",
    label: "CCIP-LnM",
  },
];

const borrowTokens = [
  {
    value: "1",
    label: "WUSDC",
    ratio: "70%",
  },
  {
    value: "2",
    label: "WDAI",
    ratio: "80%",
  },
];

const supplySchema = Yup.object().shape({
  from: Yup.object().required("Please select from Chain!"),
  to: Yup.object().required("Please select to Chain!"),
  protocol: Yup.object().required("Please select Protocol!"),
  amount: Yup.number().required("Please enter Amount!"),
  token: Yup.object().required("Please select Token!"),
});

const borrowSchema = Yup.object().shape({
  amount: Yup.number().required("Please enter Amount!"),
  token: Yup.object().required("Please select Token!"),
});

const Landing = () => {
  const [toVal, setTo] = useState(chains[0]);
  const [fromVal, setFrom] = useState(chains[0]);
  const [protocolVal, setProtocol] = useState(protocols[0]);
  const [balance, setBalance] = useState(0);
  const [token, setToken] = useState(supplyToken[0]);

  const {
    supplyAsset,
    latestMessageId,
    borrowToken,
    collateralValue,
    getDepositsData,
    getBorrowData,
  } = useContext(Web3Context);

  useEffect(() => {
    getDepositsData();
    getBorrowData();
  }, []);

  useEffect(() => {
    getBalance();
  }, [token, fromVal]);

  const getBalance = async (address) => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const { chainId } = await provider.getNetwork();

    const network = networks[chainsIds[chainId]];

    const tokenContract = new ethers.Contract(
      network[token.value],
      token.value == "bnmToken" ? ccipBnMAbi : ccipLnMAbi,
      signer
    );

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    if (accounts[0]) {
      console.log(accounts[0]);
      const balance = await tokenContract.balanceOf(accounts[0]);
      const decimals = await tokenContract.decimals();
      setBalance(ethers.utils.formatUnits(balance, decimals));
    }
  };

  return (
    <div className="container">
      <ToastContainer />
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
                  to: chains[0],
                  protocol: protocols[0],
                  amount: "",
                  token: supplyToken[0],
                }}
                validationSchema={supplySchema}
                onSubmit={async (values, { setSubmitting }) => {
                  setSubmitting(true);
                  const formValues = {
                    from: values.from,
                    to: values.to,
                    amount: values.amount,
                    token: values.token,
                  };
                  // console.log(params, "params");
                  await supplyAsset(formValues);
                  setSubmitting(false);
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
                            onChange={(value) => {
                              setFieldValue("from", value);
                              setFrom(value);
                            }}
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
                        <label className="form-label">To</label>

                        <div className="form-group  mb-3">
                          <Select
                            className="custom-react-select"
                            defaultValue={chains[0]}
                            isSearchable={false}
                            id="to"
                            value={values.to}
                            onChange={(value) => {
                              setFieldValue("to", value);
                              setTo(value);
                            }}
                            options={chains}
                            onBlur={handleBlur}
                          />
                          <div
                            id="val-username1-error"
                            className="invalid-feedback animated fadeInUp"
                            style={{ display: "block" }}
                          >
                            {errors.to && errors.to}
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
                            onChange={(value) => {
                              setFieldValue("protocol", value);
                              setProtocol(value);
                            }}
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
                            <span>{balance}</span>
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
                            onClick={() => {
                              setFieldValue("amount", balance);
                            }}
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
                            value={values.token?.label}
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
                              const selectedToken = supplyToken.find(
                                (token) => token.value === eventKey
                              );
                              setFieldValue("token", selectedToken);
                              setToken(selectedToken);
                            }}
                            onBlur={handleBlur}
                          >
                            <Dropdown.Toggle className="btn btn-primary btn-outline-primary left-radius">
                              {values.token.label}
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="end">
                              {supplyToken.map((token) => {
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
                        {latestMessageId && (
                          <div className="d-flex flex-wrap justify-content-between mb-1">
                            <div>Message Id:</div>
                            <Link
                              style={{ overflowX: "scroll" }}
                              to={`https://ccip.chain.link/msg/${latestMessageId}`}
                            >
                              {`https://ccip.chain.link/msg/${latestMessageId}`}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn flex-fill btn-success py-2 fs-5 text-uppercase px-5"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Supply...." : " Supply"}
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
                  to: toVal,
                  protocol: protocolVal,
                  amount: "",
                  token: borrowTokens[0],
                }}
                validationSchema={borrowSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  setSubmitting(true);
                  const formData = {
                    to: toVal,
                    amount: values.amount,
                    token: values.token,
                  };
                  await borrowToken(formData);
                  setSubmitting(false);
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
                            defaultValue={toVal}
                            isSearchable={false}
                            id="to"
                            value={toVal}
                            options={chains}
                            onChange={(value) => {
                              setTo(value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <label className="form-label">Protocol</label>
                        <div className="form-group  mb-3">
                          <Select
                            options={protocolVal}
                            className="custom-react-select"
                            defaultValue={protocols[0]}
                            isSearchable={false}
                            value={protocolVal}
                            isDisabled={true}
                          />
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
                              const selectedToken = borrowTokens.find(
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
                              {borrowTokens.map((token) => {
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
                          <div>Collateral Percentage</div>
                          <div className="text-muted">{values.token.ratio}</div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">
                          <div>Collateral Value required</div>
                          <div className="text-muted">{collateralValue}</div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">
                          <div>Tokens</div>
                          <div className="text-muted">
                            {toVal.value == "mumbai"
                              ? `MATIC/${values.token.label}`
                              : `ETH/${values.token.label}`}
                          </div>
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
      <Listing />
    </div>
  );
};

export default Landing;
