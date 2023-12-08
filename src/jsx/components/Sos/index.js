import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Select from "react-select";
import { Formik } from "formik";
import * as Yup from "yup";
import { Web3Context } from "../../../context/Web3Context";

const SosAlertComponent = () => {
  const actions = [
    { label: "Notify", value: "0" },
    { label: "Set Reminder", value: "1" },
    { label: "Transfer Token & Notify", value: "2" },
    { label: "Proof of Reserve", value: "3" },
  ];

  const { sosAlert, notifyFunction, por } = useContext(Web3Context);

  const sosSchema = Yup.object().shape({
    email: Yup.string().required("Please enter email!"),
    days: Yup.number().required("Please enter days!"),
    address: Yup.string().required("Please enter wallet address!"),
    message: Yup.string().required("Please enter message!"),
  });

  const [action, setAction] = useState(actions[0]);

  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="post-details">
                <h3 className="mb-2 text-black">SoS Alert</h3>

                <p>
                  This enables users to set up a comprehensive email alert
                  system for account activity monitoring. Users can configure
                  alerts and automatic token tranfer to be triggered when there
                  is no login activity detected for a specified period.
                </p>

                <div className="comment-respond" id="respond">
                  <Formik
                    initialValues={{
                      email: "",
                      days: 0,
                      address: "",
                      message: "",
                      percentage: 0,
                    }}
                    // validationSchema={sosSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                      console.log(values, "values");
                      setSubmitting(true);
                      const formValues = {
                        action: action,
                        email: values.email,
                        days: values.days,
                        address: values.address,
                        message: values.message,
                        percentage: values.percentage,
                      };

                      if (action.value == "0") {
                        await notifyFunction(formValues);
                      } else if (action.value == "3") {
                        await por(formValues.percentage);
                      } else {
                        await sosAlert(formValues);
                      }

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
                      <form
                        className="comment-form"
                        id="commentform"
                        onSubmit={handleSubmit}
                      >
                        <div className="row">
                          <div className="col-lg-8">
                            <label
                              htmlFor="text"
                              className="text-black font-w600"
                            >
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

                          <div className="row">
                            {action.value == "0" ? (
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
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                  />
                                </div>
                                <div
                                  id="val-username1-error"
                                  className="invalid-feedback animated fadeInUp"
                                  style={{ display: "block" }}
                                >
                                  {errors.email && errors.email}
                                </div>
                              </div>
                            ) : action.value == "1" ? (
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
                                      name="email"
                                      id="email"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.email}
                                    />
                                  </div>
                                  <div
                                    id="val-username1-error"
                                    className="invalid-feedback animated fadeInUp"
                                    style={{ display: "block" }}
                                  >
                                    {errors.email && errors.email}
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
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.days}
                                    />
                                  </div>
                                  <div
                                    id="val-username1-error"
                                    className="invalid-feedback animated fadeInUp"
                                    style={{ display: "block" }}
                                  >
                                    {errors.days && errors.days}
                                  </div>
                                </div>
                              </>
                            ) : action.value == "3" ? (
                              <div className="form-group mb-3">
                                <label
                                  htmlFor="Percentage"
                                  className="text-black font-w600"
                                >
                                  Percentage <span className="required">*</span>
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  name="percentage"
                                  id="percentage"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.percentage}
                                />
                              </div>
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
                                      name="email"
                                      id="email"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.email}
                                    />
                                  </div>
                                  <div
                                    id="val-username1-error"
                                    className="invalid-feedback animated fadeInUp"
                                    style={{ display: "block" }}
                                  >
                                    {errors.email && errors.email}
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
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.address}
                                    />
                                  </div>
                                  <div
                                    id="val-username1-error"
                                    className="invalid-feedback animated fadeInUp"
                                    style={{ display: "block" }}
                                  >
                                    {errors.address && errors.address}
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
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.days}
                                    />
                                  </div>
                                  <div
                                    id="val-username1-error"
                                    className="invalid-feedback animated fadeInUp"
                                    style={{ display: "block" }}
                                  >
                                    {errors.days && errors.days}
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
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                              />
                            </div>
                            <div
                              id="val-username1-error"
                              className="invalid-feedback animated fadeInUp"
                              style={{ display: "block" }}
                            >
                              {errors.message && errors.message}
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
                                disabled={isSubmitting}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SosAlertComponent;
