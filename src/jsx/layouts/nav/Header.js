import React,{useState, useEffect} from "react";
import { Dropdown } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
/// Scroll
//import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
//import profile from "../../../images/profile/pic1.jpg";
//import avatar from "../../../images/avatar/1.jpg";
//import { Dropdown } from "react-bootstrap";
//import LogoutPage from './Logout';
//import RightSideBar from './RightSideBar';


import LogoutPage from './Logout';

import United from "../../../images/United.png";
import avatar from "../../../images/avatar/1.jpg";
import profile from "../../../images/profile/pic1.jpg";


const NotificationBlog =({classChange}) =>{
	return(
		<>
			<li>
				<div className="timeline-panel">
					<div className="media me-2">
						<img alt="images" width={50} src={avatar} />
					</div>
					<div className="media-body">
						<h6 className="mb-1">Dr sultads Send you Photo</h6>
						<small className="d-block">29 July 2022 - 02:26 PM</small>
					</div>
				</div>
			</li>
			<li>
				<div className="timeline-panel">
					<div className={`media me-2 ${classChange}`}>KG</div>
					<div className="media-body">
						<h6 className="mb-1">Resport created successfully</h6>
						<small className="d-block">29 July 2022 - 02:26 PM</small>
					</div>
				</div>
			</li>
			<li>
				<div className="timeline-panel">
					<div className={`media me-2 ${classChange}`}><i className="fa fa-home" /></div>
					<div className="media-body">
						<h6 className="mb-1">Reminder : Treatment Time!</h6>
						<small className="d-block">29 July 2022 - 02:26 PM</small>
					</div>
				</div>
			</li>
		</>
	)
}

const Header = ({ onNote }) => {
	const [rightSelect, setRightSelect] = useState('Eng');
	//For fix header
	const [headerFix, setheaderFix] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix(window.scrollY > 50);
		});
	}, []); 
	
  //const [searchBut, setSearchBut] = useState(false);	
  var path = window.location.pathname.split("/");
  var name = path[path.length - 1].split("-");
  var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
  var finalName = filterName.includes("app")
    ? filterName.filter((f) => f !== "app")
    : filterName.includes("ui")
    ? filterName.filter((f) => f !== "ui")
    : filterName.includes("uc")
    ? filterName.filter((f) => f !== "uc")
    : filterName.includes("basic")
    ? filterName.filter((f) => f !== "basic")
    : filterName.includes("jquery")
    ? filterName.filter((f) => f !== "jquery")
    : filterName.includes("table")
    ? filterName.filter((f) => f !== "table")
    : filterName.includes("page")
    ? filterName.filter((f) => f !== "page")
    : filterName.includes("email")
    ? filterName.filter((f) => f !== "email")
    : filterName.includes("ecom")
    ? filterName.filter((f) => f !== "ecom")
    : filterName.includes("chart")
    ? filterName.filter((f) => f !== "chart")
    : filterName.includes("editor")
    ? filterName.filter((f) => f !== "editor")
    : filterName;
  return ( 
    <div className={`header ${headerFix ? "is-fixed" : ""}`}>
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
				<div
					className="dashboard_bar"
					style={{ textTransform: "capitalize" }}
				  >
					{finalName.join(" ").length === 0
					  ? "Dashboard"
					  : finalName.join(" ") === "dashboard dark"
					  ? "Dashboard"
					  : finalName.join(" ")}
				</div>
            </div>
			<div className="navbar-nav header-right">
				<div className="nav-item d-flex align-items-center">
					<div className="input-group search-area">
						<span className="input-group-text"><Link to={"#"}><svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z" fill="var(--secondary)"/>
							</svg>
							</Link></span>
						<input type="text" className="form-control" placeholder="Search here..." />  
					</div>					
				</div>
				<div className="dz-side-menu">
					<div className="search-coundry d-flex align-items-center">
						<img src={United} alt="" className='mx-2'/>						
						<Dropdown className='sidebar-dropdown me-2 mt-2'>
							<Dropdown.Toggle as='div' className='i-false sidebar-select'>{rightSelect} <i className="fa-solid fa-angle-down ms-2" /></Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item onClick={()=>setRightSelect("Eng")}>Eng</Dropdown.Item>
								<Dropdown.Item onClick={()=>setRightSelect("Af")}>Af</Dropdown.Item>
								<Dropdown.Item onClick={()=>setRightSelect("Al")}>Al</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="sidebar-social-link ">
						<ul className="">
							<Dropdown as="li" className="nav-item dropdown notification_dropdown ">
								<Dropdown.Toggle variant="" as="a" className="nav-link  ai-icon i-false c-pointer" role="button">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M20.4023 13.4798C20.7599 13.6577 21.0359 13.9387 21.23 14.2197C21.6082 14.8003 21.5775 15.5121 21.2096 16.1395L20.4942 17.2634C20.1161 17.8627 19.411 18.2373 18.6854 18.2373C18.3277 18.2373 17.9291 18.1437 17.6021 17.9564C17.3364 17.7972 17.0298 17.741 16.7028 17.741C15.691 17.741 14.8428 18.5183 14.8121 19.4455C14.8121 20.5225 13.8719 21.3653 12.6967 21.3653H11.3068C10.1214 21.3653 9.18116 20.5225 9.18116 19.4455C9.16072 18.5183 8.3125 17.741 7.30076 17.741C6.96351 17.741 6.65693 17.7972 6.40144 17.9564C6.07441 18.1437 5.66563 18.2373 5.31816 18.2373C4.58235 18.2373 3.8772 17.8627 3.49908 17.2634L2.79393 16.1395C2.4158 15.5308 2.39536 14.8003 2.77349 14.2197C2.937 13.9387 3.24359 13.6577 3.59106 13.4798C3.8772 13.3487 4.06116 13.1333 4.23489 12.8804C4.74587 12.075 4.43928 11.0167 3.57062 10.5391C2.55888 10.0053 2.23185 8.81591 2.81437 7.88875L3.49908 6.78366C4.09181 5.8565 5.35904 5.52871 6.381 6.0719C7.2701 6.52143 8.42491 6.22174 8.94611 5.4257C9.10962 5.16347 9.2016 4.88251 9.18116 4.60156C9.16072 4.23631 9.27314 3.8898 9.46731 3.60884C9.84543 3.0282 10.5301 2.65359 11.2762 2.63486H12.7171C13.4734 2.63486 14.1581 3.0282 14.5362 3.60884C14.7202 3.8898 14.8428 4.23631 14.8121 4.60156C14.7917 4.88251 14.8837 5.16347 15.0472 5.4257C15.5684 6.22174 16.7232 6.52143 17.6225 6.0719C18.6343 5.52871 19.9117 5.8565 20.4942 6.78366L21.1789 7.88875C21.7717 8.81591 21.4447 10.0053 20.4227 10.5391C19.554 11.0167 19.2474 12.075 19.7686 12.8804C19.9322 13.1333 20.1161 13.3487 20.4023 13.4798ZM9.10962 12.0095C9.10962 13.4798 10.4075 14.6505 12.012 14.6505C13.6165 14.6505 14.8837 13.4798 14.8837 12.0095C14.8837 10.5391 13.6165 9.3591 12.012 9.3591C10.4075 9.3591 9.10962 10.5391 9.10962 12.0095Z" fill="#130F26"/>
									</svg>							
								</Dropdown.Toggle>
								<Dropdown.Menu  className=" dropdown-menu dropdown-menu-end">
									<PerfectScrollbar className="widget-timeline dz-scroll style-1 ps p-3 ps--active-y height370" id="DZ_W_TimeLine02">
										<h4 className="text-center border-bottom pb-2">Notications</h4>	
										<ul className="timeline">
											<li>
												<div className="timeline-badge primary" />
												<Link className="timeline-panel c-pointer text-muted" to="#">
													<span>10 minutes ago</span>
													<h6 className="mb-0"> Youtube, a video-sharing website, goes live{" "} <strong className="text-primary">$500</strong>.</h6>
												</Link>
											</li>
											<li>
												<div className="timeline-badge info"></div>
												<Link className="timeline-panel c-pointer text-muted" to="#">
													<span>20 minutes ago</span>
													<h6 className="mb-0">
														New order placed{" "}
														<strong className="text-info">#XF-2356.</strong>
													</h6>
													<p className="mb-0"> Quisque a consequat ante Sit amet magna at volutapt...</p>
												</Link>
											</li>
											<li>
												<div className="timeline-badge danger"></div>
												<Link className="timeline-panel c-pointer text-muted" to="#">
													<span>30 minutes ago</span>
												  <h6 className="mb-0">
													john just buy your product{" "}
													<strong className="text-warning">Sell $250</strong>
												  </h6>
												</Link>
											</li>
											<li>
												<div className="timeline-badge success"></div>
												<Link className="timeline-panel c-pointer text-muted" to="#">
												  <span>15 minutes ago</span>
												  <h6 className="mb-0">
													StumbleUpon is acquired by eBay.{" "}
												  </h6>
												</Link>
											</li>
											<li>
												<div className="timeline-badge warning"></div>
												<Link className="timeline-panel c-pointer text-muted" to="#">
												  <span>20 minutes ago</span>
												  <h6 className="mb-0">
													Mashable, a news website and blog, goes live.
												  </h6>
												</Link>
											</li>
											<li>
												<div className="timeline-badge dark"></div>
												<Link className="timeline-panel c-pointer text-muted" to="#">
													<span>20 minutes ago</span>
													<h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
												</Link>
											</li>
											<li>
												<div className="timeline-badge primary" />
												<Link className="timeline-panel c-pointer text-muted" to="#">
													<span>10 minutes ago</span>
													<h6 className="mb-0"> Youtube, a video-sharing website, goes live{" "} <strong className="text-primary">$500</strong>.</h6>
												</Link>
											</li>
											<li>
												<div className="timeline-badge info"></div>
												<Link className="timeline-panel c-pointer text-muted" to="#">
													<span>20 minutes ago</span>
													<h6 className="mb-0">
														New order placed{" "}
														<strong className="text-info">#XF-2356.</strong>
													</h6>
													<p className="mb-0"> Quisque a consequat ante Sit amet magna at volutapt...</p>
												</Link>
											</li>
											<li>
												<div className="timeline-badge danger"></div>
												<Link className="timeline-panel c-pointer text-muted" to="#">
												  <span>30 minutes ago</span>
												  <h6 className="mb-0">
													john just buy your product{" "}
													<strong className="text-warning">Sell $250</strong>
												  </h6>
												</Link>
											</li>
											<li>
												<div className="timeline-badge success"></div>
												<Link className="timeline-panel c-pointer text-muted" to="#">
												  <span>15 minutes ago</span>
												  <h6 className="mb-0">
													StumbleUpon is acquired by eBay.{" "}
												  </h6>
												</Link>
											</li>
										</ul>
										<div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
											<div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }}/>
										</div>
										<div className="ps__rail-y" style={{ top: 0, right: 0 }}>
											<div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 0 }}/>
										</div>
									</PerfectScrollbar>
								</Dropdown.Menu>
							</Dropdown>	
							<Dropdown as="li" className="nav-item dropdown notification_dropdown ">
								<Dropdown.Toggle variant="" as="a" className="nav-link  i-false c-pointer" onClick={() => onNote()}>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M16.9394 3.57129C18.2804 3.57129 19.5704 4.06765 20.5194 4.95828C21.4694 5.84704 22.0004 7.04579 22.0004 8.30073V15.6993C22.0004 18.3122 19.7304 20.4287 16.9394 20.4287H7.0604C4.2694 20.4287 2.0004 18.3122 2.0004 15.6993V8.30073C2.0004 5.68783 4.2594 3.57129 7.0604 3.57129H16.9394ZM18.5304 9.69615L18.6104 9.62123C18.8494 9.34964 18.8494 8.9563 18.5994 8.68471C18.4604 8.54517 18.2694 8.45994 18.0704 8.44121C17.8604 8.43091 17.6604 8.4974 17.5094 8.62852L13.0004 12C12.4204 12.4505 11.5894 12.4505 11.0004 12L6.5004 8.62852C6.1894 8.41312 5.7594 8.44121 5.5004 8.69407C5.2304 8.94693 5.2004 9.34964 5.4294 9.6306L5.5604 9.75234L10.1104 13.077C10.6704 13.4891 11.3494 13.7138 12.0604 13.7138C12.7694 13.7138 13.4604 13.4891 14.0194 13.077L18.5304 9.69615Z" fill="#130F26"/>
									</svg>							
								</Dropdown.Toggle>
							</Dropdown>	
							<Dropdown as="li" className="nav-item dropdown notification_dropdown">
								<Dropdown.Toggle className="nav-link i-false c-pointer" variant="" as="a">
									<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M18.7071 8.56414C18.7071 9.74035 19.039 10.4336 19.7695 11.2325C20.3231 11.8211 20.5 12.5766 20.5 13.3963C20.5 14.215 20.2128 14.9923 19.6373 15.6233C18.884 16.3798 17.8215 16.8627 16.7372 16.9466C15.1659 17.0721 13.5937 17.1777 12.0005 17.1777C10.4063 17.1777 8.83505 17.1145 7.26375 16.9466C6.17846 16.8627 5.11602 16.3798 4.36367 15.6233C3.78822 14.9923 3.5 14.215 3.5 13.3963C3.5 12.5766 3.6779 11.8211 4.23049 11.2325C4.98384 10.4336 5.29392 9.74035 5.29392 8.56414V8.16515C5.29392 6.58996 5.71333 5.55995 6.577 4.55164C7.86106 3.08114 9.91935 2.19922 11.9558 2.19922H12.0452C14.1254 2.19922 16.2502 3.12359 17.5125 4.65728C18.3314 5.64484 18.7071 6.63146 18.7071 8.16515V8.56414ZM9.07367 19.1136C9.07367 18.642 9.53582 18.426 9.96318 18.3336C10.4631 18.2345 13.5093 18.2345 14.0092 18.3336C14.4366 18.426 14.8987 18.642 14.8987 19.1136C14.8738 19.5626 14.5926 19.9606 14.204 20.2134C13.7001 20.5813 13.1088 20.8143 12.4906 20.8982C12.1487 20.9397 11.8128 20.9407 11.4828 20.8982C10.8636 20.8143 10.2723 20.5813 9.76938 20.2125C9.37978 19.9606 9.09852 19.5626 9.07367 19.1136Z" fill="#130F26"/>
									</svg>								
								</Dropdown.Toggle>
								<Dropdown.Menu align="	right" className="mt-2 dropdown-menu dropdown-menu-end">
									<PerfectScrollbar className="widget-media dz-scroll p-3 height380">
										<ul className="timeline">
											<NotificationBlog classChange='media-info'/>
											<NotificationBlog classChange='media-success' />
											<NotificationBlog classChange='media-danger' />
											<NotificationBlog classChange='media-info' />
										</ul>
									<div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
										<div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }}/>
									</div>
									<div className="ps__rail-y" style={{ top: 0, right: 0 }}>
										<div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 0 }}/>
									</div>
								</PerfectScrollbar>
								<Link className="all-notification" to="#">
									See all notifications <i className="ti-arrow-right" />
								</Link>
							</Dropdown.Menu>
						</Dropdown>
					</ul>	
					</div>
					<ul>
						<Dropdown as="li" className="nav-item dropdown header-profile">
							<Dropdown.Toggle variant="" as="a" className="nav-link i-false c-pointer">
								<img src={profile} width={20} alt="" />
							</Dropdown.Toggle>
							<Dropdown.Menu align="right" className="dropdown-menu dropdown-menu-end">
								<Link to="/app-profile" className="dropdown-item ai-icon">
									<svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary me-1" width={18} height={18} viewBox="0 0 24 24" fill="none"
										stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
									>
										<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
										<circle cx={12} cy={7} r={4} />
									</svg>
									<span className="ms-2">Profile </span>
								</Link>
								<Link to="/email-inbox" className="dropdown-item ai-icon">
									<svg
									id="icon-inbox" xmlns="http://www.w3.org/2000/svg" className="text-success me-1" width={18}
									height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
									strokeLinecap="round" strokeLinejoin="round"
									>
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
									<polyline points="22,6 12,13 2,6" />
									</svg>
									<span className="ms-2">Inbox </span>
								</Link>
								<LogoutPage />
							</Dropdown.Menu>
						</Dropdown> 	
					</ul>
					
				</div>

			</div>
			
			
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
