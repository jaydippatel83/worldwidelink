import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const SosAlert = () => {
  const actions = [
    { label: "Sent Reminder", value: "1" },
    { label: "Transfer Token & Notify", value: "2" },
  ];

  const chains = [
    { value: "sepolia", label: "Sepolia testnet", chainId: 11155111 },
    { value: "mumbai", label: "Mumbai testnet", chainId: 80001 },
  ];

  const [action, setAction] = useState(actions[0]);
  const [from, setFrom] = useState(chains[0]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="post-details">
                <h3 className="mb-2 text-black">SoS Alert</h3>

                <p>
                  This enables users to set up a comprehensive email alert
                  system for account activity monitoring. Users can configure
                  alerts and automatic token tranfer to be triggered when there is no login activity
                  detected for a specified period.
                </p>

                <div className="comment-respond" id="respond">
                  <form
                    className="comment-form"
                    id="commentform"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="row">
                      <div className="col-lg-8">
                        <label htmlFor="text" className="text-black font-w600">
                          Actions <span className="required">*</span>
                        </label>

                        <div className="form-group  mb-3">
                          <Select
                            className="custom-react-select"
                            defaultValue={actions[0]}
                            isSearchable={false}
                            id="to"
                            onChange={(value) => {
                              setAction(value);
                            }}
                            options={actions}
                          />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <label htmlFor="text" className="text-black font-w600">
                          From <span className="required">*</span>
                        </label>

                        <div className="form-group  mb-3">
                          <Select
                            className="custom-react-select"
                            defaultValue={chains[0]}
                            isSearchable={false}
                            id="to"
                            onChange={(value) => {
                              setFrom(value);
                            }}
                            options={chains}
                          />
                        </div>
                      </div>
                      <div className="row">
                        {action.value == "1" ? (
                          <>
                            <div className="col-lg-6">
                              <div className="form-group mb-3">
                                <label
                                  htmlFor="email"
                                  className="text-black font-w600"
                                >
                                  Email <span className="required">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Email"
                                  placeholder="Email"
                                  name="Email"
                                  id="email"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group mb-3">
                                <label
                                  htmlFor="days"
                                  className="text-black font-w600"
                                >
                                  Days <span className="required">*</span>
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  name="days"
                                  id="days"
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="col-lg-4">
                              <div className="form-group mb-3">
                                <label
                                  htmlFor="email"
                                  className="text-black font-w600"
                                >
                                  Email <span className="required">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Email"
                                  placeholder="Email"
                                  name="Email"
                                  id="email"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group mb-3">
                                <label
                                  htmlFor="email"
                                  className="text-black font-w600"
                                >
                                  Wallet Address{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Address"
                                  name="address"
                                  id="address"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group mb-3">
                                <label
                                  htmlFor="days"
                                  className="text-black font-w600"
                                >
                                  Days <span className="required">*</span>
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  name="days"
                                  id="days"
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group mb-3">
                          <label
                            htmlFor="comment"
                            className="text-black font-w600"
                          >
                            Message
                          </label>
                          <textarea
                            rows={8}
                            className="form-control h-100"
                            name="message"
                            placeholder="Add message here...."
                            id="message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            value="Add Alert"
                            className="submit btn btn-primary"
                            id="submit"
                            name="submit"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SosAlert;
