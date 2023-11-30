/// Menu
import React, { useContext, useReducer, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Collapse from 'react-bootstrap/Collapse';
import { Link, NavLink } from "react-router-dom";

import { MenuList } from './Menu';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";


const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active: "",
  activeSubmenu: "",
}

const SideBar = () => {
  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
  } = useContext(ThemeContext);

  const [state, setState] = useReducer(reducer, initialState);

  const [hideOnScroll, setHideOnScroll] = useState(true)
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll]
  )



  const handleMenuActive = status => {

    setState({ active: status });

    if (state.active === status) {

      setState({ active: "" });
    }

  }
  const handleSubmenuActive = (status) => {

    setState({ activeSubmenu: status })
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" })

    }

  }
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];


  return (
    <div
      className={`deznav  border-right ${iconHover} ${sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
        ? hideOnScroll > 120
          ? "fixed"
          : ""
        : ""
        }`}
    >
      <PerfectScrollbar className="deznav-scroll">
        <ul className="metismenu" id="menu">
          {MenuList.map((data, index) => {
            let menuClass = data.classsChange;
            if (menuClass === "menu-title") {
              return (
                <li className={menuClass} key={index} >{data.title}</li>
              )
            } else {
              return (
                <li className={` ${state.active === data.title ? 'mm-active' : ''}`}
                  key={index}
                >

                  {data.content && data.content.length > 0 ?
                    <Link to={"#"}
                      className="has-arrow"
                      onClick={() => { handleMenuActive(data.title) }}
                    >
                      {data.iconStyle}
                      <span className="nav-text">{data.title}</span>
                    </Link>
                    :
                    <NavLink to={data.to} >
                      {data.iconStyle}
                      <span className="nav-text">{data.title}</span>
                    </NavLink>
                  }
                  <Collapse in={state.active === data.title ? true : false}>
                    <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                      {data.content && data.content.map((data, index) => {
                        return (
                          <li key={index}
                            className={`${state.activeSubmenu === data.title ? "mm-active" : ""}`}
                          >
                            {data.content && data.content.length > 0 ?
                              <>
                                <NavLink to={data.to} className={data.hasMenu ? 'has-arrow' : ''}
                                  onClick={() => { handleSubmenuActive(data.title) }}
                                >
                                  {data.title}
                                </NavLink>
                                <Collapse in={state.activeSubmenu === data.title ? true : false}>
                                  <ul className={`${menuClass === "mm-collapse" ? "mm-show" : ""}`}>
                                    {data.content && data.content.map((data, index) => {
                                      return (
                                        <>
                                          <li key={index}>
                                            <Link className={`${path === data.to ? "mm-active" : ""}`} to={data.to}>{data.title}</Link>
                                          </li>
                                        </>
                                      )
                                    })}
                                  </ul>
                                </Collapse>
                              </>
                              :
                              <Link to={data.to}>
                                {data.title}
                              </Link>
                            }

                          </li>

                        )
                      })}
                    </ul>
                  </Collapse>
                </li>
              )
            }
          })}
        </ul>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
