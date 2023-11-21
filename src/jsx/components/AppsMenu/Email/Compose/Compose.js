import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar"; 
import DropFile from "./DropFile";

import PageTitle from "../../../../layouts/PageTitle";
import { Dropdown } from "react-bootstrap";

const Compose = () => {
  return (
    <Fragment>
      {/* <PageTitle activeMenu="Compose" motherMenu="Email" pageContent="Email" /> */}

      <div className="row">
        <div className="col-lg-12">
          <div className="card rounded-0 mb-0 h-auto">
            <div className="card-body">
				<div className="row gx-0">
					<div className="col-lg-4 col-xl-3">
					  <PerfectScrollbar className="email-left-box dlab-scroll  pt-3 ps-0">
						<div className="p-0">
						  <Link
							to="/email-compose"
							className="btn text-white btn-block"
						  >
							<i className="fa-solid fa-plus me-2"></i>Compose Email
						  </Link>
						</div>
						<div className="mail-list rounded ">
						  <Link to="/email-inbox" className="list-group-item active">
							<i className="fa-regular fa-envelope align-middle"></i>
							Inbox
							<span className="badge badge-purple badge-sm float-end rounded">
							  2
							</span>
						  </Link>
						  <Link to="/email-compose" className="list-group-item">
							<i className="fa-regular fa-paper-plane align-middle"></i>
							Sent
						  </Link>
						  <Link to="/email-compose" className="list-group-item">
							<i className="fa-regular fa-star align-middle"></i>
							Favorite
							{/* <span className="badge badge-danger text-white badge-sm float-end">
							  47
							</span> */}
						  </Link>
						  <Link to="/email-compose" className="list-group-item">
							<i className="fa-regular fa-file align-middle"></i>
							Draft
						  </Link>
						  	<Link to="/email-compose" className="list-group-item">
						  		<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
									<path d="M15.4425 10.0575L10.065 15.435C9.92569 15.5745 9.76026 15.6851 9.57816 15.7606C9.39606 15.8361
									9.20087 15.8749 9.00375 15.8749C8.80663 15.8749 8.61144 15.8361 8.42934 15.7606C8.24724 15.6851 8.08181 15.5745 7.9425 15.435L1.5 9V1.5H9L15.4425
									7.9425C15.7219 8.22354 15.8787 8.60372 15.8787 9C15.8787 9.39628 15.7219 9.77646 15.4425 10.0575Z"
									stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M5.25 5.25H5.268" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
								Important
						  	</Link>
						  	<Link to="#" className="list-group-item"><i className="fa-regular fa-clock align-middle"></i> Scheduled</Link>
							<Link to="#" className="list-group-item ">
								<svg width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5.5 8.25L11 13.75L16.5 8.25" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
								{" "} Move
							</Link>
						</div>
						<div className="mail-list rounded overflow-hidden mt-4 ">
							<div className="intro-title d-flex justify-content-between my-0">
								<h5>Categories</h5>								
							</div>
						  <Link to="/email-inbox" className="list-group-item change">Work </Link>
						  <Link to="/email-inbox" className="list-group-item change">Private </Link>
						  <Link to="/email-inbox" className="list-group-item change">Support</Link>
						  <Link to="/email-inbox" className="list-group-item change">Social</Link>
						</div>
					  </PerfectScrollbar>
					</div>
					<div className="col-lg-8 col-xl-9">
						<div className="email-right-box ms-0">
							<div className="toolbar mb-4 px-3 mt-3" role="toolbar">
							  <div className="btn-group mb-1">
								<button type="button" className="btn btn-primary light px-3">
								  <i className="fa fa-archive"></i>
								</button>
								<button type="button" className="btn btn-primary light px-3">
								  	<i className="fa fa-exclamation-circle"></i>
								</button>
								<button type="button" className="btn btn-primary light px-3">
								  <i className="fa fa-trash"></i>
								</button>
							  </div>
							  <Dropdown className="btn-group mb-1">
								<Dropdown.Toggle
								  type="button"
								  className="btn btn-primary light dropdown-toggle px-3 ms-1"
								  data-toggle="dropdown"
								>
								  <i className="fa fa-folder me-1"></i>
								  <b className="caret m-l-5"></b>
								</Dropdown.Toggle>
								<Dropdown.Menu className="dropdown-menu">
								  <Dropdown.Item
									as="a"
									className="dropdown-item"
									to="/email-compose"
								  >
									Social
								  </Dropdown.Item>
								  <Dropdown.Item
									as="a"
									className="dropdown-item"
									to="/email-compose"
								  >
									Promotions
								  </Dropdown.Item>
								  <Dropdown.Item
									as="a"
									className="dropdown-item"
									to="/email-compose"
								  >
									Updates
								  </Dropdown.Item>
								  <Dropdown.Item
									as="a"
									className="dropdown-item"
									to="/email-compose"
								  >
									Forums
								  </Dropdown.Item>
								</Dropdown.Menu>
							  </Dropdown>
							  <Dropdown className="btn-group mb-1">
								<Dropdown.Toggle
								  className="btn btn-primary light dropdown-toggle px-3 ms-1"
								  data-toggle="dropdown"
								>
								  <i className="fa fa-tag me-1"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu>
								  <Dropdown.Item as="a">Updates</Dropdown.Item>
								  <Dropdown.Item as="a">Social</Dropdown.Item>
								  <Dropdown.Item as="a">Promotions</Dropdown.Item>
								  <Dropdown.Item as="a">Forums</Dropdown.Item>
								</Dropdown.Menu>
							  </Dropdown>
							  <Dropdown className="btn-group mb-1">
								<Dropdown.Toggle
								  type="button"
								  className="btn btn-primary light dropdown-toggle  ms-1"
								  data-toggle="dropdown"
								>
								  More <span className="caret m-l-5"></span>
								</Dropdown.Toggle>
								<Dropdown.Menu className="dropdown-menu">
								  <Dropdown.Item
									className="dropdown-item"
									to="/email-compose"
								  >
									Mark as Unread
								  </Dropdown.Item>
								  <Dropdown.Item
									className="dropdown-item"
									to="/email-compose"
								  >
									Add to Tasks
								  </Dropdown.Item>
								  <Dropdown.Item
									className="dropdown-item"
									to="/email-compose"
								  >
									Add Star
								  </Dropdown.Item>
								  <Dropdown.Item
									className="dropdown-item"
									to="/email-compose"
								  >
									Mute
								  </Dropdown.Item>
								</Dropdown.Menu>
							  </Dropdown>
							</div>
							<div className="compose-wrapper " id="compose-content">
								<div className="compose-content">
									<form action="#">
										<div className="form-group mb-3">
										<input
											type="text"
											className="form-control bg-transparent"
											placeholder=" To:"
										/>
										</div>
										<div className="form-group mb-3">
										<input type="text" className="form-control bg-transparent" placeholder=" Subject:"/>
										</div>
										<div className="form-group mb-3">
										<textarea id="email-compose-editor" className="textarea_editor form-control bg-transparent" rows="5"
											placeholder="Enter text ..."
										></textarea>
										</div>
									</form>
									<h5 className="my-3"><i className="fa fa-paperclip me-2"></i> Attatchment</h5>
									<DropFile />
								</div>
								<div className="text-left mt-4 mb-5">
									<button
										className="btn btn-primary btn-sl-sm me-2"
										type="button"
									>
										<span className="me-2">
										<i className="fa fa-paper-plane"></i>
										</span>
										Send
									</button>
									<button
										className="btn btn-danger light btn-sl-sm"
										type="button"
									>
										<span className="me-2">
										<i className="fa fa-times" aria-hidden="true"></i>
										</span>
										Discard
									</button>
								</div>
							</div>	
						  </div>	
					</div>
				</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Compose;
