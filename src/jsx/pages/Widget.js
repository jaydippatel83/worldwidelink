import React, { Fragment } from "react";
// BS
import { Dropdown, Nav, Tab } from "react-bootstrap";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
// images
import avatar1 from "../../images/avatar/1.jpg";
import avatar2 from "../../images/avatar/2.jpg";
import avatar3 from "../../images/avatar/3.jpg";
import avatar4 from "../../images/avatar/4.jpg";
import bg1 from "../../images/big/img1.jpg";
import bg5 from "../../images/big/img5.jpg";
import profile from "../../images/profile/profile.png";
import DonutChart from "./WidgetBasic/DonutChart";
import ActiveUser from "./WidgetBasic/ActiveUser";
import AllSell1 from "./WidgetBasic/AllSell1";
import AllSell2 from "./WidgetBasic/AllSell2";
import BloodPressur from "./WidgetBasic/BloodPressure";
import Clolesterol from "./WidgetBasic/Clolesterol";
import FeeCollection from "./WidgetBasic/FeeCollection";
import GlucoseRate from "./WidgetBasic/GlucoseRate";
import HeartRate from "./WidgetBasic/HeartRate";
import LifeTimeEarning from "./WidgetBasic/LifeTimeEarning";
import MarketNow from "./WidgetBasic/MarketNow";
import NewStudent from "./WidgetBasic/NewStudent";
import PowerBar from "./WidgetBasic/PowerBar";
import PowerLine from "./WidgetBasic/PowerLine";
import SalesAnalysis from "./WidgetBasic/SalesAnalysis";
import TopProducts1 from "./WidgetBasic/TopProducts1";
import TopProducts2 from "./WidgetBasic/TopProducts2";
import TotalCourse from "./WidgetBasic/TotalCourse";
import TotalStudent from "./WidgetBasic/TotalStudent";
import ViewProject from "./WidgetBasic/ViewProject";
import VisitorActivity from "./WidgetBasic/VisitorActivity";
import WeeklySales1 from "./WidgetBasic/WeeklySales1";
import WeeklySales2 from "./WidgetBasic/WeeklySales2";
import Widget1 from "./WidgetBasic/Widget1";
import Widget2 from "./WidgetBasic/Widget2";
// Page titie
import PageTitle from "../layouts/PageTitle";

const Widget = () => {
  return (
    <Fragment>
      {/* <Ext /> */}
      <PageTitle
        activeMenu="Statistics"
        motherMenu="Widget"
        pageContent="Statistics"
      />
      <div className="row">
        <div className="col-xl-4  col-lg-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title">Timeline</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar
                style={{ height: "370px" }}
                id="DZ_W_TimeLine"
                className="widget-timeline dz-scroll height370 ps ps--active-y"
              >
                <ul className="timeline">
                  <li>
                    <div className="timeline-badge primary"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>10 minutes ago</span>
                      <h6 className="mb-0">
                        Youtube, a video-sharing website, goes live{" "}
                        <strong className="text-primary">$500</strong>.
                      </h6>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge info"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>20 minutes ago</span>
                      <h6 className="mb-0">
                        New order placed{" "}
                        <strong className="text-info">#XF-2356.</strong>
                      </h6>
                      <p className="mb-0">
                        Quisque a consequat ante Sit amet magna at volutapt...
                      </p>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge danger"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>30 minutes ago</span>
                      <h6 className="mb-0">
                        john just buy your product{" "}
                        <strong className="text-warning">Sell $250</strong>
                      </h6>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge success"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>15 minutes ago</span>
                      <h6 className="mb-0">
                        StumbleUpon is acquired by eBay.{" "}
                      </h6>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge warning"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>20 minutes ago</span>
                      <h6 className="mb-0">
                        Mashable, a news website and blog, goes live.
                      </h6>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge dark"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>20 minutes ago</span>
                      <h6 className="mb-0">
                        Mashable, a news website and blog, goes live.
                      </h6>
                    </Link>
                  </li>
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        <div className="col-xl-4  col-lg-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title">Timeline 2</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar
                style={{ height: "370px" }}
                id="DZ_W_TimeLine1"
                className="widget-timeline dz-scroll style-1 height370 ps ps--active-y"
              >
                <ul className="timeline">
                  <li>
                    <div className="timeline-badge primary"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>10 minutes ago</span>
                      <h6 className="mb-0">
                        Youtube, a video-sharing website, goes live{" "}
                        <strong className="text-primary">$500</strong>.
                      </h6>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge info"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>20 minutes ago</span>
                      <h6 className="mb-0">
                        New order placed{" "}
                        <strong className="text-info">#XF-2356.</strong>
                      </h6>
                      <p className="mb-0">
                        Quisque a consequat ante Sit amet magna at volutapt...
                      </p>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge danger"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>30 minutes ago</span>
                      <h6 className="mb-0">
                        john just buy your product{" "}
                        <strong className="text-warning">Sell $250</strong>
                      </h6>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge success"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>15 minutes ago</span>
                      <h6 className="mb-0">
                        StumbleUpon is acquired by eBay.{" "}
                      </h6>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge warning"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>20 minutes ago</span>
                      <h6 className="mb-0">
                        Mashable, a news website and blog, goes live.
                      </h6>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge dark"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>20 minutes ago</span>
                      <h6 className="mb-0">
                        Mashable, a news website and blog, goes live.
                      </h6>
                    </Link>
                  </li>
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        <div className="col-xl-4  col-lg-6">
          <div className="card">
            <div className="card-header  border-0 pb-0">
              <h4 className="card-title">Notifications</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar
                style={{ height: "370px" }}
                id="DZ_W_Todo1"
                className="widget-media dz-scroll ps ps--active-y"
              >
                <ul className="timeline">
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img  alt="" width="50" src={avatar1} />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">Dr sultads Send you Photo</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="primary light"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-info">KG</div>
                      <div className="media-body">
                        <h5 className="mb-1">Report created successfully</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant=" light"
                          className="i-false p-0 btn-info sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-success">
                        <i className="fa fa-home"></i>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">Reminder : Treatment Time!</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant=" light"
                          className=" i-false p-0 btn-success sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img  alt="" width="50" src={avatar1} />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">Dr sultads Send you Photo</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="primary light"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-danger">KG</div>
                      <div className="media-body">
                        <h5 className="mb-1">Resport created successfully</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          type="button"
                          className="btn btn-danger light sharp   i-false p-0 sharp "
                          data-toggle="dropdown"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-primary">
                        <i className="fa fa-home"></i>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">Reminder : Treatment Time!</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="primary light"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        <div className="col-xl-4  col-lg-6">
          <div className="card pb-0">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title">Notifications 2</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar
                style={{ height: "370px" }}
                id="DZ_W_Todo2"
                className="widget-media dz-scroll height370 ps ps--active-y"
              >
                <ul className="timeline">
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img  alt="" width="50" src={avatar1} />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">Dr sultads Send you Photo</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="primary light"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-info">KG</div>
                      <div className="media-body">
                        <h5 className="mb-1">
                          Resport created successfully{" "}
                          <span className="badge badge-warning">Warning</span>
                        </h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant=" light"
                          className=" btn-info i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-success">
                        <i className="fa fa-home"></i>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">Reminder : Treatment Time!</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant=" light"
                          className=" btn-success i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img  alt="" width="50" src={avatar1} />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">
                          Dr sultads Send you Photo{" "}
                          <span className="badge light badge-danger">
                            Danger
                          </span>
                        </h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="primary light"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-danger">KG</div>
                      <div className="media-body">
                        <h5 className="mb-1">
                          Resport created successfully{" "}
                          <span className="badge light badge-success">
                            Success
                          </span>
                        </h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant=" light"
                          className="btn-danger i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-primary">
                        <i className="fa fa-home"></i>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">
                          Reminder : Treatment Time!{" "}
                          <span className="badge light badge-success">
                            Success
                          </span>
                        </h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="primary light"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        <div className="col-xl-4  col-lg-6">
          <div className="card  pb-0">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title">Message</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar
                style={{ height: "370px" }}
                id="DZ_W_Todo3"
                className="widget-media dz-scroll height370 ps ps--active-y"
              >
                <ul className="timeline">
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img  alt="" width="50" src={avatar1} />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">
                          Alfie Mason{" "}
                          <small className="text-muted">29 July 2022</small>
                        </h5>
                        <p className="mb-1">
                          I shared this on my fb wall a few months back..
                        </p>
                        <Link
                          to="/widget-basic"
                          className="btn btn-primary btn-xxs shadow"
                        >
                          Reply
                        </Link>
                        <Link
                          to="/widget-basic"
                          className="btn btn-outline-danger btn-xxs ms-1"
                        >
                          Delete
                        </Link>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="primary light"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-info">KG</div>
                      <div className="media-body">
                        <h5 className="mb-1">
                          Jacob Tucker{" "}
                          <small className="text-muted">29 July 2022</small>
                        </h5>
                        <p className="mb-1">
                          I shared this on my fb wall a few months back..
                        </p>
                        <Link
                          to="/widget-basic"
                          className="btn btn-primary btn-xxs shadow"
                        >
                          Reply
                        </Link>
                        <Link
                          to="/widget-basic"
                          className="btn btn-outline-danger btn-xxs ms-1"
                        >
                          Delete
                        </Link>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant=" light"
                          className="btn-info i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-success">
                        <img  alt="" width="50" src={avatar2} />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">
                          Jack Ronan{" "}
                          <small className="text-muted">29 July 2022</small>
                        </h5>
                        <p className="mb-1">
                          I shared this on my fb wall a few months back..
                        </p>
                        <Link
                          to="/widget-basic"
                          className="btn btn-primary btn-xxs shadow"
                        >
                          Reply
                        </Link>
                        <Link
                          to="/widget-basic"
                          className="btn btn-outline-danger btn-xxs ms-1"
                        >
                          Delete
                        </Link>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant=" light"
                          className="btn-success i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img  alt="" width="50" src={avatar1} />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">
                          Noah Baldon{" "}
                          <small className="text-muted">29 July 2022</small>
                        </h5>
                        <p className="mb-1">
                          I shared this on my fb wall a few months back..
                        </p>
                        <Link
                          to="/widget-basic"
                          className="btn btn-primary btn-xxs shadow"
                        >
                          Reply
                        </Link>
                        <Link
                          to="/widget-basic"
                          className="btn btn-outline-danger btn-xxs ms-1"
                        >
                          Delete
                        </Link>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="primary light"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-danger">PU</div>
                      <div className="media-body">
                        <h5 className="mb-1">
                          Thomas Grady{" "}
                          <small className="text-muted">02:26 PM</small>
                        </h5>
                        <p className="mb-1">
                          I shared this on my fb wall a few months back..
                        </p>
                        <Link
                          to="/widget-basic"
                          className="btn btn-primary btn-xxs shadow"
                        >
                          Reply
                        </Link>
                        <Link
                          to="/widget-basic"
                          className="btn btn-outline-danger btn-xxs ms-1"
                        >
                          Delete
                        </Link>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant=" light"
                          className="btn-danger i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-primary">
                        <img  alt="" width="50" src={avatar3} />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">
                          Oscar Weston{" "}
                          <small className="text-muted">29 July 2022</small>
                        </h5>
                        <p className="mb-1">
                          I shared this on my fb wall a few months back..
                        </p>
                        <Link
                          to="/widget-basic"
                          className="btn btn-primary btn-xxs shadow"
                        >
                          Reply
                        </Link>
                        <Link
                          to="/widget-basic"
                          className="btn btn-outline-danger btn-xxs ms-1"
                        >
                          Delete
                        </Link>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="primary light"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        <div className="col-xl-4  col-lg-6">
          <div className="card  pb-0">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title">To Do List</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar
                style={{ height: "370px" }}
                id="DZ_W_Todo4"
                className="widget-media dz-scroll height370 ps ps--active-y"
              >
                <ul className="timeline">
                  <li>
                    <div className="timeline-panel">
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox1"
                          required=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox1"
                        ></label>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-0">Get up</h5>
                        <small className="text-muted">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="primary light"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="form-check custom-checkbox checkbox-warning check-lg me-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox2"
                          required=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox2"
                        ></label>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-0">Stand up</h5>
                        <small className="text-muted">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="primary light"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="form-check custom-checkbox checkbox-primary check-lg me-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox3"
                          required=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox3"
                        ></label>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-0">Don't give up the fight.</h5>
                        <small className="text-muted">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant=" light"
                          className="btn-info i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="form-check custom-checkbox checkbox-info check-lg me-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox4"
                          required=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox4"
                        ></label>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-0">Do something else</h5>
                        <small className="text-muted">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant=" light"
                          className="btn-danger i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox5"
                          required=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox5"
                        ></label>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-0">Get up</h5>
                        <small className="text-muted">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant=" light"
                          className="btn-success i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="form-check custom-checkbox checkbox-warning check-lg me-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheckBox6"
                          required=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheckBox6"
                        ></label>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-0">Stand up</h5>
                        <small className="text-muted">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="primary light"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>

        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card">
            <div className="card-body p-4">
              <div className="media ai-icon">
                <span className="me-3 bgl-primary text-primary">
                  <svg
                    id="icon-customers"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <div className="media-body">
                  <p className="mb-1">Patient</p>
                  <h4 className="mb-0">3280</h4>
                  <span className="badge badge-primary">+3.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card">
            <div className="card-body p-4">
              <div className="media ai-icon">
                <span className="me-3 bgl-warning text-warning">
                  <svg
                    id="icon-orders"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-file-text"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </span>
                <div className="media-body">
                  <p className="mb-1">Bills</p>
                  <h4 className="mb-0">2570</h4>
                  <span className="badge badge-warning">+3.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card">
            <div className="card-body  p-4">
              <div className="media ai-icon">
                <span className="me-3 bgl-danger text-danger">
                  <svg
                    id="icon-revenue"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-dollar-sign"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </span>
                <div className="media-body">
                  <p className="mb-1">Revenue</p>
                  <h4 className="mb-0">364.50K</h4>
                  <span className="badge badge-danger">-3.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card">
            <div className="card-body p-4">
              <div className="media ai-icon">
                <span className="me-3 bgl-success text-success">
                  <svg
                    id="icon-database-widget"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-database"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </span>
                <div className="media-body">
                  <p className="mb-1">Patient</p>
                  <h4 className="mb-0">364.50K</h4>
                  <span className="badge badge-success">-3.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-danger">
            <div className="card-body  p-4">
              <div className="media">
                <span className="me-3">
                  <i className="flaticon-381-calendar-1"></i>
                </span>
                <div className="media-body text-white text-end">
                  <p className="mb-1">Appointment</p>
                  <h3 className="text-white">76</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-success">
            <div className="card-body p-4">
              <div className="media">
                <span className="me-3">
                  <i className="flaticon-381-diamond"></i>
                </span>
                <div className="media-body text-white text-end">
                  <p className="mb-1">Earning</p>
                  <h3 className="text-white">$56K</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-info">
            <div className="card-body p-4">
              <div className="media">
                <span className="me-3">
                  <i className="flaticon-381-heart"></i>
                </span>
                <div className="media-body text-white text-end">
                  <p className="mb-1">Total Patient</p>
                  <h3 className="text-white">783K</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-primary">
            <div className="card-body p-4">
              <div className="media">
                <span className="me-3">
                  <i className="flaticon-381-user-7"></i>
                </span>
                <div className="media-body text-white text-end">
                  <p className="mb-1">Chef</p>
                  <h3 className="text-white">$76</h3>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-xl-3  col-lg-6 col-sm-6">
						<div className="card bg-info">
							<div className="card-body">	
								<div className="students d-flex align-items-center justify-content-between flex-wrap">
									<div>
										<h4>9,825</h4>
										<h5>Total Students</h5>
										<span>+0,5% than last month</span>
									</div>
									<div>
										<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M57.4998 47.5001C57.4998 48.1631 57.2364 48.799 56.7676 49.2678C56.2988 49.7367 55.6629 50.0001 54.9998 50.0001H24.9998C24.3368 50.0001 23.7009 49.7367 23.2321 49.2678C22.7632 48.799 22.4998 48.1631 22.4998 47.5001C22.4998 43.5218 24.0802 39.7065 26.8932 36.8935C29.7063 34.0804 33.5216 32.5001 37.4998 32.5001H42.4998C46.4781 32.5001 50.2934 34.0804 53.1064 36.8935C55.9195 39.7065 57.4998 43.5218 57.4998 47.5001ZM39.9998 10.0001C38.022 10.0001 36.0886 10.5866 34.4441 11.6854C32.7996 12.7842 31.5179 14.346 30.761 16.1732C30.0041 18.0005 29.8061 20.0112 30.192 21.951C30.5778 23.8908 31.5302 25.6726 32.9288 27.0711C34.3273 28.4697 36.1091 29.4221 38.0489 29.8079C39.9887 30.1938 41.9994 29.9957 43.8267 29.2389C45.6539 28.482 47.2157 27.2003 48.3145 25.5558C49.4133 23.9113 49.9998 21.9779 49.9998 20.0001C49.9998 17.3479 48.9463 14.8044 47.0709 12.929C45.1955 11.0536 42.652 10.0001 39.9998 10.0001ZM17.4998 10.0001C15.522 10.0001 13.5886 10.5866 11.9441 11.6854C10.2996 12.7842 9.0179 14.346 8.26102 16.1732C7.50415 18.0005 7.30611 20.0112 7.69197 21.951C8.07782 23.8908 9.03022 25.6726 10.4287 27.0711C11.8273 28.4697 13.6091 29.4221 15.5489 29.8079C17.4887 30.1938 19.4994 29.9957 21.3267 29.2389C23.1539 28.482 24.7157 27.2003 25.8145 25.5558C26.9133 23.9113 27.4998 21.9779 27.4998 20.0001C27.4998 17.3479 26.4463 14.8044 24.5709 12.929C22.6955 11.0536 20.152 10.0001 17.4998 10.0001ZM17.4998 47.5001C17.4961 44.8741 18.0135 42.2735 19.0219 39.8489C20.0304 37.4242 21.5099 35.2238 23.3748 33.3751C21.8487 32.7989 20.2311 32.5025 18.5998 32.5001H16.3998C12.7153 32.5067 9.18366 33.9733 6.57833 36.5786C3.97301 39.1839 2.50643 42.7156 2.49982 46.4001V47.5001C2.49982 48.1631 2.76321 48.799 3.23205 49.2678C3.70089 49.7367 4.33678 50.0001 4.99982 50.0001H17.9498C17.6588 49.1984 17.5066 48.3529 17.4998 47.5001Z" fill="white"/>
										</svg>
									</div>
								</div>
							</div>
						</div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="card bg-success overflow-hidden">
            <div className="card-body">	
              <div className="students d-flex align-items-center justify-content-between flex-wrap">
                <div>
                  <h4>653</h4>
                  <h5>Total Teachers</h5>
                  <span>-2% than last month</span>
                </div>
                <div>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <path d="M59.0284 17.8807L30.7862 3.81817C30.2918 3.57103 29.7082 3.57103 29.2138 3.81817L0.971632 17.8807C0.375968 18.1794 3.05176e-05 18.787 3.05176e-05 19.4531C3.05176e-05 20.1192 0.375968 20.7268 0.971632 21.0255L29.2138 35.088C29.461 35.2116 29.7305 35.2734 30 35.2734C30.2696 35.2734 30.5391 35.2116 30.7862 35.088L59.0284 21.0255C59.6241 20.7268 60 20.1192 60 19.4531C60 18.787 59.6241 18.1794 59.0284 17.8807Z" fill="white"/>
                    <path d="M56.4844 46.1441V26.2285L52.9688 27.9863V46.1441C50.9271 46.8722 49.4532 48.805 49.4532 51.0937V54.6093C49.4532 55.5809 50.2394 56.3671 51.211 56.3671H58.2422C59.2138 56.3671 60 55.5809 60 54.6093V51.0937C60 48.805 58.526 46.8722 56.4844 46.1441Z" fill="white"/>
                    <path d="M32.3587 38.2329C31.6308 38.5967 30.8154 38.789 30 38.789C29.1846 38.789 28.3692 38.5967 27.6414 38.2329L10.5469 29.7441V33.5156C10.5469 40.4147 19.1578 45.8203 30 45.8203C40.8422 45.8203 49.4532 40.4147 49.4532 33.5156V29.7441L32.3587 38.2329Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath >
                    <rect width="60" height="60" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="card">
            <div className="card-body">	
              <div className="students1 d-flex align-items-center justify-content-between flex-wrap">
                <div>
                  <h4>653</h4>
                  <h5>Events</h5>
                </div>
                <div>
                  <div className="d-inline-block position-relative donut-chart-sale mb-3">
                    {/* <span className="donut1" data-peity='{ "fill": ["rgb(59, 215, 225)", "rgba(245, 245, 245, 1"],   "innerRadius": 33, "radius": 10}'>5/7</span> */}
                    <DonutChart  value="62" backgroundColor="rgba(59, 215, 225,1)" backgroundColor2="rgba(245, 245, 245, 1)" />
                    <small>62%</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="card">
            <div className="card-body">	
              <div className="students1 d-flex align-items-center justify-content-between flex-wrap">
                <div>
                  <h4>456</h4>
                  <h5>Foods</h5>
                </div>
                <div>
                  <div className="d-inline-block position-relative donut-chart-sale mb-3">
                    {/* <span className="donut1" data-peity='{ "fill": ["rgb(255, 97, 117)", "rgba(245, 245, 245, 1"],   "innerRadius": 33, "radius": 10}'>5/8</span> */}
                    <DonutChart  value="38" backgroundColor="rgba(255, 97, 117,1)" backgroundColor2="rgba(245, 245, 245, 1)" />
                    <small>38%</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-primary">
            <div className="card-body  p-4">
              <div className="media">
                <span className="me-3">
                  <i className="la la-users"></i>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">Total Students</p>
                  <h3 className="text-white">3280</h3>
                  <div className="progress mb-2 bg-secondary">
                    <div
                      className="progress-bar progress-animated bg-white"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <small>80% Increase in 20 Days</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-warning">
            <div className="card-body p-4">
              <div className="media">
                <span className="me-3">
                  <i className="la la-user"></i>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">New Students</p>
                  <h3 className="text-white">245</h3>
                  <div className="progress mb-2 bg-primary">
                    <div
                      className="progress-bar progress-animated bg-white"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <small>50% Increase in 25 Days</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-secondary">
            <div className="card-body p-4">
              <div className="media">
                <span className="me-3">
                  <i className="la la-graduation-cap"></i>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">Total Course</p>
                  <h3 className="text-white">28</h3>
                  <div className="progress mb-2 bg-primary">
                    <div
                      className="progress-bar progress-animated bg-white"
                      style={{ width: "76%" }}
                    ></div>
                  </div>
                  <small>76% Increase in 20 Days</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3  col-lg-6 col-sm-6">
          <div className="widget-stat card bg-danger ">
            <div className="card-body p-4">
              <div className="media">
                <span className="me-3">
                  <i className="la la-dollar"></i>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">Fees Collect</p>
                  <h3 className="text-white">250$</h3>
                  <div className="progress mb-2 bg-secondary">
                    <div
                      className="progress-bar progress-animated bg-white"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                  <small>30% Increase in 30 Days</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-6 col-sm-6">
          <div className="widget-stat card">
            <div className="card-body p-4">
              <h4 className="card-title">Total Students</h4>
              <h3>3280</h3>
              <div className="progress mb-2">
                <div
                  className="progress-bar progress-animated bg-primary"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <small>80% Increase in 20 Days</small>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-sm-6">
          <div className="widget-stat card">
            <div className="card-body p-4">
              <h4 className="card-title">New Students</h4>
              <h3>245</h3>
              <div className="progress mb-2">
                <div
                  className="progress-bar progress-animated bg-warning"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <small>50% Increase in 25 Days</small>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-sm-6">
          <div className="widget-stat card">
            <div className="card-body p-4">
              <h4 className="card-title">Total Course</h4>
              <h3>28</h3>
              <div className="progress mb-2">
                <div
                  className="progress-bar progress-animated bg-red"
                  style={{ width: "76%" }}
                ></div>
              </div>
              <small>76% Increase in 20 Days</small>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-sm-6">
          <div className="widget-stat card">
            <div className="card-body p-4">
              <h4 className="card-title">Fees Collection</h4>
              <h3>25160$</h3>
              <div className="progress mb-2">
                <div
                  className="progress-bar progress-animated bg-success"
                  style={{ width: "30%" }}
                ></div>
              </div>

              <small>30% Increase in 30 Days</small>
            </div>
          </div>
        </div>

        <div className="col-xl-12 col-lg-12 col-sm-12">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="widget-stat card bg-primary">
                <div className="card-header border-0 pb-0">
                  <h3 className="card-title text-white">Total Students</h3>
                  <h5 className="text-white mb-0">
                    <i className="fa fa-caret-up"></i> 422
                  </h5>
                </div>
                <div className="card-body text-center">
                  <div className="ico-sparkline">
                    <TotalStudent />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="widget-stat card bg-warning overflow-hidden">
                <div className="card-header border-0 ">
                  <h3 className="card-title text-white">New Students</h3>
                  <h5 className="text-white mb-0">
                    <i className="fa fa-caret-up"></i> 357
                  </h5>
                </div>
                <div className="card-body text-center p-0">
                  <div className="ico-sparkline">
                    <NewStudent />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="widget-stat card bg-secondary">
                <div className="card-header pb-3 border-0 pb-0">
                  <h3 className="card-title text-white">Total Course</h3>
                  <h5 className="text-white mb-0">
                    <i className="fa fa-caret-up"></i> 547
                  </h5>
                </div>
                <div className="card-body p-0">
                  <div className="px-4">
                    <TotalCourse />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
              <div className="widget-stat card bg-danger overflow-hidden">
                <div className="card-header pb-3 border-0 pb-0">
                  <h3 className="card-title text-white">Fees Collection</h3>
                  <h5 className="text-white mb-0">
                    <i className="fa fa-caret-up"></i> 3280$
                  </h5>
                </div>
                <div className="card-body p-0">
                  <FeeCollection />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-12 col-sm-12">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h2 className="card-title">about me</h2>
            </div>
            <div className="card-body pb-0">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex px-0 justify-content-between">
                  <strong>Gender</strong>
                  <span className="mb-0">Male</span>
                </li>
                <li className="list-group-item d-flex px-0 justify-content-between">
                  <strong>Education</strong>
                  <span className="mb-0">PHD</span>
                </li>
                <li className="list-group-item d-flex px-0 justify-content-between">
                  <strong>Designation</strong>
                  <span className="mb-0">Se. Professor</span>
                </li>
                <li className="list-group-item d-flex px-0 justify-content-between">
                  <strong>Operation Done</strong>
                  <span className="mb-0">120</span>
                </li>
              </ul>
            </div>
            <div className="card-footer pt-0 pb-0 text-center">
              <div className="row">
                <div className="col-4 pt-3 pb-3 border-end">
                  <h3 className="mb-1 text-primary">150</h3>
                  <span>Projects</span>
                </div>
                <div className="col-4 pt-3 pb-3 border-end">
                  <h3 className="mb-1 text-primary">140</h3>
                  <span>Uploads</span>
                </div>
                <div className="col-4 pt-3 pb-3">
                  <h3 className="mb-1 text-primary">45</h3>
                  <span>Tasks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-8 col-xxl-8 col-lg-12 col-sm-12">
          <div id="user-activity" className="card">
            <Tab.Container defaultActiveKey="day">
              <div className="card-header border-0 pb-0 d-sm-flex d-block">
                <h4 className="card-title">Visitor Activity</h4>
                <div className="card-action mb-sm-0 my-2">
                  <Nav className="nav nav-tabs" role="tablist">
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link "
                        data-toggle="tab"
                        to="/widget-basic"
                        role="tab"
                        eventKey="day"
                      >
                        Day
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        data-toggle="tab"
                        to="/widget-basic"
                        role="tab"
                        eventKey="month"
                      >
                        Month
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        className="nav-link"
                        data-toggle="tab"
                        to="/widget-basic"
                        role="tab"
                        eventKey="year"
                      >
                        Year
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className="card-body">
                <Tab.Content className="tab-content" id="myTabContent">
                  <Tab.Pane eventKey="day" id="user" role="tabpanel">
                    <VisitorActivity dataActive={0} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="month" id="user" role="tabpanel">
                    <VisitorActivity dataActive={1} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="year" id="user" role="tabpanel">
                    <VisitorActivity dataActive={2} />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-sm-6">
          <div className="card overflow-hidden">
            <div className="card-body">
              <div className="text-center">
                <div className="profile-photo">
                  <img
                    src={profile}
                    width="100"
                    className="img-fluid rounded-circle"
                    alt=""
                  />
                </div>
                <h3 className="mt-4 mb-1">Deangelo Sena</h3>
                <p className="text-muted">Senior Manager</p>
                <Link
                  className="btn btn-outline-primary btn-rounded mt-3 px-5"
                  to="/widget-basic"
                >
                  Folllow
                </Link>
              </div>
            </div>

            <div className="card-footer pt-0 pb-0 text-center">
              <div className="row">
                <div className="col-4 pt-3 pb-3 border-end">
                  <h3 className="mb-1">150</h3>
                  <span>Follower</span>
                </div>
                <div className="col-4 pt-3 pb-3 border-end">
                  <h3 className="mb-1">140</h3>
                  <span>Place Stay</span>
                </div>
                <div className="col-4 pt-3 pb-3">
                  <h3 className="mb-1">45</h3>
                  <span>Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-sm-6">
          <div className="card active_users">
            <div className="card-header bg-primary border-0 d-block pb-0">
              <h4 className="card-title text-white">Active Users</h4>
                <ActiveUser />
            </div>
            <div className="card-body pt-0">
              <div className="list-group-flush mt-4">
                <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-1 font-weight-semi-bold border-top-0">
                  <p className="mb-0">Top Active Pages</p>
                  <p className="mb-0">Active Users</p>
                </div>
                <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-1">
                  <p className="mb-0">/bootstrap-themes/</p>
                  <p className="mb-0">3</p>
                </div>
                <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-1">
                  <p className="mb-0">/tags/html5/</p>
                  <p className="mb-0">3</p>
                </div>
                <div className="list-group-item bg-transparent d-xxl-flex justify-content-between px-0 py-1 d-none">
                  <p className="mb-0">/</p>
                  <p className="mb-0">2</p>
                </div>
                <div className="list-group-item bg-transparent d-xxl-flex justify-content-between px-0 py-1 d-none">
                  <p className="mb-0">/preview/falcon/dashboard/</p>
                  <p className="mb-0">2</p>
                </div>
                <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-1">
                  <p className="mb-0">/100-best-themes...all-time/</p>
                  <p className="mb-0">1</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-12 col-sm-12">
          <div className="card overflow-hidden">
            <div
              className="text-center p-3 overlay-box "
              style={{ backgroundImage: `url(${bg1})` }}
            >
              <div className="profile-photo">
                <img
                  src={profile}
                  width="100"
                  className="m-auto img-fluid rounded-circle d-block"
                  alt=""
                />
              </div>
              <h3 className="mt-3 mb-1 text-white">Deangelo Sena</h3>
              <p className="text-white mb-0">Senior Manager</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Patient Gender</span>{" "}
                <strong className="text-muted">Female </strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Years Old</span>{" "}
                <strong className="text-muted">Age: 24 </strong>
              </li>
			        {/* <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Patient Height</span>{" "}
                <strong className="text-muted">1.5 M </strong>
              </li> */}
            </ul>
            <div className="card-footer border-0 mt-0">
              <button className="btn btn-primary btn-lg btn-block">
                <i className="fa fa-bell-o"></i> Reminder Alarm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Recent Payments Queue</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive recentOrderTable">
              <table className="table verticle-middle table-responsive-md">
                <thead>
                  <tr>
                    <th scope="col">Ward No.</th>
                    <th scope="col">Patient</th>
                    <th scope="col">Dr Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Bills</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12</td>
                    <td>Mr. Bobby</td>
                    <td>Dr. Jackson</td>
                    <td>01 August 2022</td>
                    <td>
                      <span className="badge badge-rounded badge-primary">
                        Checkin
                      </span>
                    </td>
                    <td>$120</td>
                    <td>
                      <Dropdown className="dropdown custom-dropdown mb-0">
                        <Dropdown.Toggle
                          className="btn sharp btn-primary tp-btn i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="12" cy="5" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="19" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                          <Dropdown.Item className="dropdown-item">
                            Details
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item text-danger">
                            Cancel
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>10 </td>
                    <td>Mr. Dexter</td>
                    <td>Dr. Charles</td>
                    <td>31 July 2022</td>
                    <td>
                      <span className="badge badge-rounded badge-warning">
                        Panding
                      </span>
                    </td>
                    <td>$540</td>
                    <td>
                      <Dropdown className="dropdown custom-dropdown mb-0">
                        <Dropdown.Toggle
                          className="btn sharp btn-primary tp-btn i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="12" cy="5" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="19" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                          <Dropdown.Item className="dropdown-item">
                            Details
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item text-danger">
                            Cancel
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>03 </td>
                    <td>Mr. Nathan</td>
                    <td>Dr. Frederick</td>
                    <td>30 July 2022</td>
                    <td>
                      <span className="badge badge-rounded badge-danger">
                        Canceled
                      </span>
                    </td>
                    <td>$301</td>
                    <td>
                      <Dropdown className="dropdown custom-dropdown mb-0">
                        <Dropdown.Toggle
                          className="btn sharp btn-primary tp-btn i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="12" cy="5" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="19" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                          <Dropdown.Item className="dropdown-item">
                            Details
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item text-danger">
                            Cancel
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>Mr. Aurora</td>
                    <td>Dr. Roman</td>
                    <td>29 July 2022</td>
                    <td>
                      <span className="badge badge-rounded badge-success">
                        Checkin
                      </span>
                    </td>
                    <td>$099</td>
                    <td>
                      <Dropdown className="dropdown custom-dropdown mb-0">
                        <Dropdown.Toggle
                          className="btn sharp btn-primary tp-btn i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="12" cy="5" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="19" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                          <Dropdown.Item className="dropdown-item">
                            Details
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item text-danger">
                            Cancel
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>Mr. Matthew</td>
                    <td>Dr. Samantha</td>
                    <td>28 July 2022</td>
                    <td>
                      <span className="badge badge-rounded badge-success">
                        Checkin
                      </span>
                    </td>
                    <td>$520</td>
                    <td>
                      <Dropdown className="dropdown custom-dropdown mb-0">
                        <Dropdown.Toggle
                          className="btn sharp btn-primary tp-btn i-false"
                          data-toggle="dropdown"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="12" cy="5" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="19" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                          <Dropdown.Item className="dropdown-item">
                            Details
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item text-danger">
                            Cancel
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-xxl-4 col-sm-6">
          <div className="card text-white bg-primary">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Blood type :</span>
                <strong>O+</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Allergies :</span>
                <strong>Penicilin, peanuts </strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Pressure :</span>
                <strong>120/100 mmHG</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Diseases :</span>
                <strong>Diabetes</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Temperture :</span>
                <strong>34 Degree</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-xxl-4 col-sm-6">
          <div className="card text-white bg-warning text-black">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Regular Checkups</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Dr Theodore Handle :</span>
                <strong>Dentist</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Dr Valentino Morose :</span>
                <strong>Surgeon</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Dr Fleece Marigold :</span>
                <strong>Clinical</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="mb-0">Dr Eric Widget :</span>
                <strong>Cardiology</strong>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-xl-4 col-lg-12 col-xxl-4 col-sm-12">
          <div className="card">
            <div className="card-body text-center ai-icon  text-primary">
              <svg
                id="rocket-icon"
                className="my-2"
                viewBox="0 0 24 24"
                width="80"
                height="80"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <h4 className="my-2">You don’t have badges yet</h4>
              <Link className="btn my-2 btn-primary btn-lg px-4">
                <i className="fa fa-usd"></i> Earn Budges
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-12 col-xxl-8 col-sm-12">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-xxl-6 col-md-6">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <div className="clearfix">
                    <h3 className="card-title">Blood pressure</h3>
                    <span>In the normal</span>
                  </div>
                  <div className="clearfix text-center">
                    <h3 className="text-primary mb-0">120/89</h3>
                    <span>mmHG</span>
                  </div>
                </div>
                <div className="card-body text-center">
                  <BloodPressur />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-xxl-6 col-md-6">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <div className="clearfix">
                    <h3 className="card-title">Heart Rate</h3>
                    <span className="text-danger">Above the normal</span>
                  </div>
                  <div className="clearfix text-center">
                    <h3 className="text-danger mb-0">107</h3>
                    <span>Per Min</span>
                  </div>
                </div>
                <div className="card-body text-center">
                  <div className="ico-sparkline">
                    <HeartRate />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-xxl-6 col-md-6">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <div className="clearfix">
                    <h3 className="card-title">Glucose Rate</h3>
                    <span>In the normal</span>
                  </div>
                  <div className="clearfix text-center">
                    <h3 className="text-success mb-0">97</h3>
                    <span>mg/dl</span>
                  </div>
                </div>
                <div className="card-body text-center">
                  <Clolesterol />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-xxl-6 col-md-6">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <div className="clearfix">
                    <h3 className="card-title">Clolesterol</h3>
                    <span>In the normal</span>
                  </div>
                  <div className="clearfix text-center">
                    <h3 className="text-info mb-0">124</h3>
                    <span>mg/dl</span>
                  </div>
                </div>
                <div className="card-body text-center">
					<GlucoseRate />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-12 col-sm-12">
          <div className="card overflow-hidden">
            <div
              className="text-center p-5 overlay-box"
              style={{ backgroundImage: `url(${bg5})` }}
            >
              <img
                src={profile}
                width="100"
                className="img-fluid rounded-circle"
                alt=""
              />
              <h3 className="mt-3 mb-0 text-white">Deangelo Sena</h3>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-6">
                  <div className="bgl-primary rounded p-3">
                    <h4 className="mb-0">Female</h4>
                    <small>Patient Gender</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bgl-primary rounded p-3">
                    <h4 className="mb-0">Age: 24</h4>
                    <small>Years Old</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer mt-0">
              <button className="btn btn-primary btn-lg btn-block">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-6">
          <div className="card bg-primary">
            <div className="card-body pb-0">
              <div className="row">
                <div className="col">
                  <h5 className="text-white">Power</h5>
                  <span className="text-white">2017.1.20</span>
                </div>
                <div className="col text-end">
                  <h5 className="text-white">
                    <i className="fa fa-caret-up"></i> 260
                  </h5>
                  <span className="text-white">+12.5(2.8%)</span>
                </div>
              </div>
            </div>
            <div className="chart-wrapper">
              <PowerBar />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-6">
          <div className="card bg-success">
            <div className="card-body pb-0">
              <div className="row">
                <div className="col">
                  <h5 className="text-white">Power</h5>
                  <span className="text-white">2017.1.20</span>
                </div>
                <div className="col text-end">
                  <h5 className="text-white">
                    <i className="fa fa-caret-up"></i> 260
                  </h5>
                  <span className="text-white">+12.5(2.8%)</span>
                </div>
              </div>
            </div>
            <div className="chart-wrapper">
              <PowerLine />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-6">
          <div className="card">
            <div className="card-body pb-0">
              <div className="row">
                <div className="col">
                  <h5>3650</h5>
                  <span>VIEWS OF YOUR PROJECT</span>
                </div>
              </div>
            </div>
            <div className="chart-wrapper">
              <ViewProject />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <h4 className="text-uppercase">74,206 K</h4>
                  <span>Lifetime earnings</span>
                </div>
                <div className="col-auto">
                  <div className="chart-wrapper ">
                    <LifeTimeEarning />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-xxl-12">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body pb-0">
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <h5>Lorem Ipsum</h5>
                  </div>
                  <div className="col-auto">
                    <h5>
                      <span>
                        <i className="fa fa-caret-up"></i>
                      </span>
                      <span className="px-1">2,250</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="chart-wrapper">
                <Widget1 />
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col text-center">
                    <h5 className="font-weight-normal">1230</h5>
                    <span>Type A</span>
                  </div>
                  <div className="col text-center">
                    <h5 className="font-weight-normal">1230</h5>
                    <span>Type A</span>
                  </div>
                  <div className="col text-center">
                    <h5 className="font-weight-normal">1230</h5>
                    <span>Type A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body pb-0">
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <h5>Lorem Ipsum</h5>
                  </div>
                  <div className="col-auto">
                    <h5>
                      <span>
                        <i className="fa fa-caret-up"></i>
                      </span>
                      <span className="px-1">2,250</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="chart-wrapper">
                <Widget2 />
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col text-center">
                    <h5 className="font-weight-normal">1230</h5>
                    <span>Type A</span>
                  </div>
                  <div className="col text-center">
                    <h5 className="font-weight-normal">1230</h5>
                    <span>Type A</span>
                  </div>
                  <div className="col text-center">
                    <h5 className="font-weight-normal">1230</h5>
                    <span>Type A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {" "}
        <div className="col-xl-6 col-lg-6">
          <div className="card">
            <div className="card-body pb-0">
              <h4 className="card-title text-uppercase font-weight-normal">
                Market Now
              </h4>
              <h2 className="font-weight-normal text-danger">
                <span>
                  <i className="fa fa-caret-up"></i>
                </span>
                <span className="px-1">3454664</span>
              </h2>
              <div className="row mt-5">
                <div className="col text-center">
                  <h5 className="font-weight-normal">APPL</h5>
                  <span className="text-success">+ 82.24 %</span>
                </div>
                <div className="col text-center">
                  <h5 className="font-weight-normal">FB</h5>
                  <span className="text-danger">- 12.24 %</span>
                </div>
                <div className="col text-center">
                  <h5 className="font-weight-normal">GOOG</h5>
                  <span className="text-success">+ 42.24 %</span>
                </div>
              </div>
            </div>
            <div className="chart-wrapper mt-3">
              <MarketNow />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="card">
            <div className="card-body pb-0">
              <h4 className="card-title text-uppercase font-weight-normal">
                Sales Analysis
              </h4>
              <h2 className="font-weight-normal text-danger">
                <span>
                  <i className="fa fa-caret-up"></i>
                </span>
                <span className="px-1">3454664</span>
              </h2>
              <div className="row mt-5">
                <div className="col text-center">
                  <h5 className="font-weight-normal">Today</h5>
                  <span className="text-success">+ 8224</span>
                </div>
                <div className="col text-center">
                  <h5 className="font-weight-normal">Today</h5>
                  <span className="text-danger">- 1224</span>
                </div>
                <div className="col text-center">
                  <h5 className="font-weight-normal">Week</h5>
                  <span className="text-success">+ 4224</span>
                </div>
              </div>
            </div>
            <div className="chart-wrapper">
              <SalesAnalysis />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {" "}
        <div className="col-xl-6 col-lg-12">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title">Top Products</h4>
            </div>
            <div className="card-body pb-0">
              <div className="widget-media">
                <ul className="timeline">
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img  alt="" width="50" src={avatar1} />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">Dr sultads Send you Photo</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="primary light" className=" i-false p-0 sharp">
                          <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-info">KG</div>
                      <div className="media-body">
                        <h5 className="mb-1">Resport created successfully</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="btn btn-info light sharp"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-success">
                        <i className="fa fa-home"></i>
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">Reminder : Treatment Time!</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="btn btn-success light sharp"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chart-wrapper">
              {/* <LineChart4 color="#2780D4" /> */}
              <TopProducts1 />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title">Top Products</h4>
            </div>
            <div className="card-body pb-0">
              <div className="widget-media">
                <ul className="timeline">
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img  alt="" width="50" src={avatar4} />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">Dr sultads Send you Photo</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="btn btn-primary light sharp"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-info">
                        <img  width="50" alt="" src={avatar2} />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">Resport created successfully</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="btn btn-info light sharp"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-success">
                        <img  width="50" alt="" src={avatar3} />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-1">Reminder : Treatment Time!</h5>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                      <Dropdown className="dropdown">
                        <Dropdown.Toggle
                          variant="btn btn-success light sharp"
                          className=" i-false p-0 sharp"
                        >
                          <svg
                            width="18px"
                            height="18px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24" />
                              <circle fill="#000000" cx="5" cy="12" r="2" />
                              <circle fill="#000000" cx="12" cy="12" r="2" />
                              <circle fill="#000000" cx="19" cy="12" r="2" />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item"
                            to="/widget-basic"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chart-wrapper">
              <TopProducts2 />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {" "}
        <div className="col-xl-6 col-xxl-8 col-lg-12">
          <div className="row">
            <div className="col-sm-12">
              <div className="card overflow-hidden">
                <div className="row no-gutters">
                  <div className="col-5 ">
                    <div className="card-body">
                      <h6 className="font-weight-normal text-uppercase">
                        Weekly sales
                      </h6>
                      <h4>$ 14000</h4>
                      <div>
                        <span className="badge badge-light me-1">60%</span>
                        <span>Higher</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-7 p-0">
                    <div className="chart-wrapper">
                      <WeeklySales1 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5>570</h5>
                  <p>All Sales</p>
                </div>
                <div className="chart-wrapper">
                  <AllSell1 />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5>570</h5>
                  <p>All Sales</p>
                </div>
                <div className="chart-wrapper">
                  <AllSell2 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-4 col-lg-12">
          <div className="card">
            <div className="chart-wrapper">
              <WeeklySales2 />
            </div>
            <div className="card-body">
              <h4 className="card-title">Sales Status</h4>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-between">
                    <h6>67%</h6>
                    <span>Grow</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="d-flex justify-content-between">
                    <h6>67%</h6>
                    <span>Grow</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="d-flex justify-content-between">
                    <h6>67%</h6>
                    <span>Grow</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="d-flex justify-content-between">
                    <h6>67%</h6>
                    <span>Grow</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {" "}
        <div className="col-xl-3 col-xxl-3 col-sm-6">
          <div className="card overflow-hidden">
            <div className="social-graph-wrapper widget-facebook">
              <span className="s-icon">
                <i className="fab fa-facebook-f"></i>
              </span>
            </div>
            <div className="row">
              <div className="col-6 border-end">
                <div className="pt-3 pb-3 ps-0 pe-0 text-center">
                  <h4 className="m-1">
                    <span className="counter">89</span> k
                  </h4>
                  <p className="m-0">Friends</p>
                </div>
              </div>
              <div className="col-6">
                <div className="pt-3 pb-3 ps-0 pe-0 text-center">
                  <h4 className="m-1">
                    <span className="counter">119</span> k
                  </h4>
                  <p className="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-3 col-sm-6">
          <div className="card overflow-hidden">
            <div className="social-graph-wrapper widget-linkedin">
              <span className="s-icon">
                <i className="fab fa-linkedin-in"></i>
              </span>
            </div>
            <div className="row">
              <div className="col-6 border-end">
                <div className="pt-3 pb-3 ps-0 pe-0 text-center">
                  <h4 className="m-1">
                    <span className="counter">89</span> k
                  </h4>
                  <p className="m-0">Friends</p>
                </div>
              </div>
              <div className="col-6">
                <div className="pt-3 pb-3 ps-0 pe-0 text-center">
                  <h4 className="m-1">
                    <span className="counter">119</span> k
                  </h4>
                  <p className="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-3 col-sm-6">
          <div className="card overflow-hidden">
            <div className="social-graph-wrapper widget-googleplus">
              <span className="s-icon">
                <i className="fab fa-google-plus-g"></i>
              </span>
            </div>
            <div className="row">
              <div className="col-6 border-end">
                <div className="pt-3 pb-3 ps-0 pe-0 text-center">
                  <h4 className="m-1">
                    <span className="counter">89</span> k
                  </h4>
                  <p className="m-0">Friends</p>
                </div>
              </div>
              <div className="col-6">
                <div className="pt-3 pb-3 ps-0 pe-0 text-center">
                  <h4 className="m-1">
                    <span className="counter">119</span> k
                  </h4>
                  <p className="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-3 col-sm-6">
          <div className="card overflow-hidden">
            <div className="social-graph-wrapper widget-twitter">
              <span className="s-icon">
                <i className="fab fa-twitter"></i>
              </span>
            </div>
            <div className="row">
              <div className="col-6 border-end">
                <div className="pt-3 pb-3 ps-0 pe-0 text-center">
                  <h4 className="m-1">
                    <span className="counter">89</span> k
                  </h4>
                  <p className="m-0">Friends</p>
                </div>
              </div>
              <div className="col-6">
                <div className="pt-3 pb-3 ps-0 pe-0 text-center">
                  <h4 className="m-1">
                    <span className="counter">119</span> k
                  </h4>
                  <p className="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Widget;
