import React,{useState} from 'react';
import {Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import prof14  from './../../../images/profile/14.jpg';
import prof15  from './../../../images/profile/15.jpg';
import prof16  from './../../../images/profile/16.jpg';
import prof17  from './../../../images/profile/17.jpg';
import prof18  from './../../../images/profile/18.jpg';
import prof19  from './../../../images/profile/19.jpg';
import prof21  from './../../../images/profile/21.jpg';
import prof22  from './../../../images/profile/22.jpg';
import prof23  from './../../../images/profile/23.jpg';
import prof24  from './../../../images/profile/24.jpg';
import prof25  from './../../../images/profile/25.jpg';

function ImageBlog({source}){
    return(
        <>
            <div className="dz-media">
                <img src={source} alt="" />
            </div>
        </>
    );
}

const Activity = () =>{
    const [selectDrop, setSelectDrop] = useState("Recently");
    return(
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="page-titles acti-space"> 
                        <h2 className="heading sm-mb-0 mb-2">Activity</h2>
                        <div className="d-flex align-items-center flex-wrap">
                            <div className="me-2">
                                <button type="button" className="btn light btn-primary btn-sm mx-1">Activity</button>
                                <button type="button" className="btn light btn-primary btn-sm mx-1">Notifications</button>
                            </div>
                            <Dropdown className="banking-dropdown">
                                <Dropdown.Toggle as="div" className="i-false banking-select">
                                    {selectDrop} <i className="fa-solid fa-angle-down ms-3"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>setSelectDrop("Recently")}>Recently</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setSelectDrop("Today")}>Today</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>setSelectDrop("This Weeks")}>This Weeks</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="dropdown custom-dropdown ms-2 mb-0">
                                <Dropdown.Toggle as="div" className="btn sharp btn-primary tp-btn i-false">
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="12" cy="5" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="19" r="2"></circle></g></svg>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-end" align="end">
                                    <Dropdown.Item>Option 1</Dropdown.Item>
                                    <Dropdown.Item>Option 2</Dropdown.Item>
                                    <Dropdown.Item>Option 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="">
                        <div className="card activity">
                            <div className="card-body pt-0">
                                <div id="DZ_W_TimeLine11" className="widget-timeline style-3 ">
                                    <h4 className="mt-3">Today</h4>
                                    <ul className="timeline-active">
                                        <li className="d-flex align-items-baseline timeline-list">                                           
                                            <ImageBlog source= {prof14} />
                                            <div className="panel">
                                                <Link to={"#"} className="timeline-panel text-muted d-flex align-items-center" >
                                                    <h4><strong>Karen Hope</strong> has created new task at <strong>Frize</strong> <strong className="text-primary">Projects</strong> </h4>
                                                </Link>
                                                <div className="modulel flex-wrap">
                                                    <ImageBlog source= {prof15} />                                                    
                                                    <ImageBlog source= {prof16} />
                                                </div>
                                            </div>
                                            <span className="time">Monday, June 31 2022</span>	
                                        </li>
                                        <li className="d-flex align-items-baseline timeline-list">
                                            <ImageBlog source={prof17} />
                                            <div className="panel">
                                                <Link to={"#"} className="timeline-panel text-muted d-flex align-items-center" >
                                                    <h4><strong className="text-pink">[REMINDER] </strong> Due date of <strong className="text-pink">Erempe Studios Projects</strong> task will be coming</h4>
                                                </Link>
                                            </div>	
                                            <span className="time">Monday, June 31 2022</span>
                                        </li>
                                        <li className="d-flex align-items-baseline timeline-list">                                            
                                            <ImageBlog source={prof18} />
                                            <div className="panel">
                                                <Link to={"#"} className="timeline-panel text-muted d-flex align-items-center" >
                                                    <h4 ><strong>Tony Soap </strong> commented at <strong className="text-primary"> Frize Projects </strong></h4>
                                                </Link>
                                                
                                            </div>
                                            <span className="time">Monday, June 31 2022</span>	
                                        </li>
                                        <li className="d-flex align-items-baseline timeline-list">
                                            <ImageBlog source={prof19} />
                                            
                                            <div className="panel">
                                                <Link to={"#"} className="timeline-panel text-muted d-flex align-items-center" >
                                                    <h4 ><strong>Samantha William </strong> add 4 files on  Frize <strong className="text-danger">Projects </strong></h4>
                                                </Link>
                                                <div className="modulel flex-wrap">
                                                    <ImageBlog source={prof21} />
                                                    <ImageBlog source={prof22} />
                                                    <ImageBlog source={prof23} />
                                                    <ImageBlog source={prof24} />
                                                </div>
                                            </div>
                                            <span className="time">Monday, June 31 2022</span>	
                                        </li>
                                    </ul>
                                    <h4 className="mt-3">Yesterday</h4>
                                    <ul className="timeline-active">
                                        <li className="d-flex align-items-baseline timeline-list">                                         
                                            <ImageBlog source={prof25} />
                                            <div className="panel">
                                                <Link to={"#"} className="timeline-panel text-muted d-flex align-items-center" >
                                                    <h4 ><strong>Johnny Ahmad </strong>  mentioned you at <strong className="text-primary"> Web Design Projects</strong></h4>
                                                </Link>
                                            </div>
                                            <span className="time">Monday, June 31 2022</span>	
                                        </li>
                                        <li className="d-flex align-items-baseline timeline-list">                                            
                                            <ImageBlog source={prof19} />
                                            <div className="panel">
                                                <Link to={"#"} className="timeline-panel text-muted d-flex align-items-center" >
                                                    <h4><strong>Nadila Adja  </strong> mentioned you at <strong className="text-pink"> Projects</strong> </h4>
                                                </Link>
                                            </div>
                                            <span className="time">Monday, June 31 2022</span>	
                                        </li>
                                    </ul>
                                    <div className="loadmore-btn">
                                        <button className="btn btn-primary">Load More</button>
                                    </div>
                                </div>	
                            </div>
                        </div>	
                    </div>
                    
                </div>
            
            </div>
        </>
    )
}
export default Activity;