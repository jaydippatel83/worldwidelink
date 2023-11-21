/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect, useState } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import Collapse from 'react-bootstrap/Collapse';
/// Link
import { Link } from "react-router-dom";

import {MenuList} from './Menu';
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";

//import medal from "../../../images/medal.png";


class MM extends Component {
	componentDidMount() {
		this.$el = this.el;
		this.mm = new Metismenu(this.$el);
	}
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu " ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
	const {
		iconHover,
		sidebarposition,
		headerposition,
		sidebarLayout,
	} = useContext(ThemeContext);
	useEffect(() => {
		var btn = document.querySelector(".nav-control");
		var aaa = document.querySelector("#main-wrapper");
		function toggleFunc() {
			return aaa.classList.toggle("menu-toggle");
		}
		btn.addEventListener("click", toggleFunc);
		
		//sidebar icon Heart blast
		var handleheartBlast = document.querySelector('.heart');
		function heartBlast() {
			return handleheartBlast.classList.toggle("heart-blast");
		}
		handleheartBlast.addEventListener('click', heartBlast);
		
	}, []);
 //For scroll
 	const [hideOnScroll, setHideOnScroll] = useState(true)
	useScrollPosition(
		({ prevPos, currPos }) => {
		  const isShow = currPos.y > prevPos.y
		  if (isShow !== hideOnScroll) setHideOnScroll(isShow)
		},
		[hideOnScroll]
	)


	// Menu dropdown list 
	const [active , setActive] = useState('dashboard');
	const [activeSubmenu , setActiveSubmenu] = useState('');
	const handleMenuActive = status => {
		//alert(1);
		setActive(status)
		if(active === status){
			setActive('');
		}
	}
	const handleSubmenuActive = status => {
		//alert(1);
		setActiveSubmenu(status)
		if(activeSubmenu === status){
			setActiveSubmenu('');
		}
	}
	// Menu dropdown list End

  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
      "",
      "dashboard-dark",
      "food-order",
      "favorite-menu",
      "message",
      "order-history",
      "notification",
      "bill",
      "setting",
      "task",
    ],
	restro=[
		"restaurant",
		"menu",
		"orders",
		"customer-reviews",
		"restro-setting",
	],
	drivers=[
		"deliver-main",
		"deliver-order",
		"feedback",
	],
    app = [
      "app-profile",
      "post-details",
      "app-calender",
      "email-compose",
      "email-inbox",
      "email-read",
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "post-details",
      "ecom-product-detail",
    ],
    email = ["email-compose", "email-inbox", "email-read"],
    shop = [
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "ecom-product-detail",
    ],
    charts = [
      "chart-rechart",
      "chart-flot",
      "chart-chartjs",
      //"chart-chartist",
      "chart-sparkline",
      "chart-apexchart",
    ],
    bootstrap = [
      "ui-accordion",
      "ui-badge",
      "ui-alert",
      "ui-button",
      "ui-modal",
      "ui-button-group",
      "ui-list-group",
      "ui-card",
      "ui-carousel",
      "ui-dropdown",
      "ui-popover",
      "ui-progressbar",
      "ui-tab",
      "ui-typography",
      "ui-pagination",
      "ui-grid",
    ],
    plugins = [
      "uc-select2",
      "uc-nestable",
      "uc-sweetalert",
      "uc-toastr",
      "uc-noui-slider",
      "map-jqvmap",
      "uc-lightgallery",
    ],
	redux = [
       "redux-form",
	   "redux-wizard",    
       "todo",
    ],
    widget = ["widget-basic"],
    forms = [
      "form-element",
      "form-wizard",
      "form-ckeditor",
      "form-pickers",
      "form-validation-jquery",
    ],
    table = ["table-bootstrap-basic", "table-datatable-basic"],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen",
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ],
    error = [
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ];

	
  return (
    <div
      className={`dlabnav  border-right ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? hideOnScroll > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
      <PerfectScrollbar className="dlabnav-scroll">
        <p className="menu-title style-1"> Main Menu</p>
        <ul className="metismenu" id="menu">
            {MenuList.map((data, index)=>{
              let menuClass = data.classsChange;
                return(				
                  <li className={` ${ active === data.title ? 'mm-active' : ''}`}
                    key={index} 
                  >
                    <Link className="has-arrow" to="#" 
                      onClick={() => handleMenuActive(data.title)}
                    >
                      <i className={data.iconStyle}></i>
                      <span className="nav-text">{data.title}</span>
                    </Link>
                    <Collapse in={active === data.title ? true :false}>
                      <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                        {data.content && data.content.map((data,index) => {									
                          return(	
                            <>
                              <li key={index}
                                className={`${ activeSubmenu === data.title ? "mm-active" : ""}`}
                               
                              >
                                {data.content && data.content.length > 0 ?
                                  <Link to={data.to} className={data.hasMenu ? 'has-arrow' : ''}
                                    onClick={() => { handleSubmenuActive(data.title)}}
                                  >
                                    {data.title}
                                  </Link>
                                  :
                                  <Link to={data.to} 
                                  >
                                    {data.title}
                                  </Link>
                                }
                                <Collapse in={activeSubmenu === data.title ? true :false}>
                                  <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                                    {data.content && data.content.map((data,index) => {
                                      return(	
                                        <>
                                          <li key={index}>
                                            <Link className={`${path === data.to ? "mm-active" : ""}`} to={data.to}>{data.title}</Link>
                                          </li>
                                        </>
                                      )
                                    })}
                                  </ul>
                                </Collapse>
                              </li>
                            </>
                          )
                        })}
                      </ul>
                    </Collapse>
                  </li>	
                )
            })}
				
		    </ul>
		<div className="plus-box">
			<div className="d-flex align-items-center">
				<h5>Upgrade your Account to Get Free Voucher</h5>				
			</div>
			  <Link to={"#"} className="btn bg-white btn-sm">Upgrade</Link>
		</div>
		<div className="copyright mt-0">
			<p><strong>Food Desk - Online Food Delivery Admin Dashboard</strong> © 2022 All Rights Reserved</p>
			<p className="fs-12">Made with <span className="heart"></span> by DexignLab</p>
		</div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
