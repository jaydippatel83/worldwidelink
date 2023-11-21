import React from 'react';
import {Tab, Nav, Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';


import CoinChart from './Coin/CoinChart';
import QuickTrade from './Coin/QuickTrade';
import CoinBuyTable from './Coin/CoinBuyTable';
import CoinSellTable from './Coin/CoinSellTable';



const tabHeading = [
    {title:'Bitcoin', keytype:'bitcoin', changelog:'bitcoin ms-0'}, 
    {title:'Ethereum', keytype:'ethereum', changelog:'etherum'}, 
    {title:'Dash', keytype:'dash', changelog:'dash'}, 
    {title:'Litecoin', keytype:'litecoin', changelog:'litcoin'}, 
    {title:'Ripple', keytype:'ripple', changelog:'ripple'}, 
];

const DropdownBlog = () =>{
    return(
        <>
            <Dropdown className="custom-dropdown mb-0 tbl-orders-style">
                <Dropdown.Toggle className="btn sharp tp-btn i-false"  as="div">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0335 13C12.5854 13 13.0328 12.5523 13.0328 12C13.0328 11.4477 12.5854 11 12.0335 11C11.4816 11 11.0342 11.4477 11.0342 12C11.0342 12.5523 11.4816 13 12.0335 13Z" stroke="#342E59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.0335 6C12.5854 6 13.0328 5.55228 13.0328 5C13.0328 4.44772 12.5854 4 12.0335 4C11.4816 4 11.0342 4.44772 11.0342 5C11.0342 5.55228 11.4816 6 12.0335 6Z" stroke="#342E59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.0335 20C12.5854 20 13.0328 19.5523 13.0328 19C13.0328 18.4477 12.5854 18 12.0335 18C11.4816 18 11.0342 18.4477 11.0342 19C11.0342 19.5523 11.4816 20 12.0335 20Z" stroke="#342E59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu className=" dropdown-menu-end" align="end">
                    <Dropdown.Item>Details</Dropdown.Item>
                    <Dropdown.Item className="text-danger">Cancel</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

const CoinDetails = () => {
    return(
        <>
            <div className="row">
                <Tab.Container defaultActiveKey="bitcoin">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body pt-3 pb-3">
                                <div className="coin-warpper d-flex align-items-center justify-content-between flex-wrap">
                                    <div>
                                        <Nav as="ul" className=" nav-pills">
                                            {tabHeading.map((item, index)=>(
                                                <Nav.Item as="li" key={index}>
                                                    <Nav.Link as="button" className={`${item.changelog}`} 
                                                        eventKey={item.keytype} 
                                                    >
                                                        { index === 0 ? 
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 9.50011C15.9993 8.67201 15.328 8.00092 14.5001 8H10V11H14.5001C15.328 10.9993 15.9993 10.328 16 9.50011Z" fill="#FFAB2D"/>
                                                                <path d="M10 16H14.5001C15.3285 16 16 15.3285 16 14.5001C16 13.6715 15.3285 13 14.5001 13H10V16Z" fill="#FFAB2D"/>
                                                                <path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z" fill="#FFAB2D"/>
                                                            </svg>
                                                            :
                                                            index === 1 ?
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.3801 13.8734C12.136 13.9546 11.864 13.9546 11.6199 13.8734L9 13L12 18L15 13L12.3801 13.8734Z" fill="#00ADA3"/>
                                                                <path d="M12 12L15 10.8001L12 6L9 10.8001L12 12Z" fill="#00ADA3"/>
                                                                <path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9927 5.37574 18.6243 0.00732425 12 0ZM17.0524 11.5263L12.7667 20.0977C12.5551 20.5212 12.04 20.6928 11.6168 20.4812C11.4507 20.3983 11.3162 20.2638 11.2333 20.0977L6.94757 11.5263C6.81443 11.2589 6.8296 10.9416 6.9876 10.6882L11.2733 3.83111C11.5582 3.42984 12.114 3.33515 12.5153 3.62001C12.5972 3.67808 12.6686 3.74923 12.7267 3.83111L17.0121 10.6882C17.1704 10.9416 17.1856 11.2589 17.0524 11.5263Z" fill="#00ADA3"/>
                                                            </svg>
                                                            :

                                                            index === 2 ?
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9927 5.37574 18.6243 0.00732425 12 0V0ZM7.04462 11.1428H10.4732C10.9466 11.1428 11.3304 11.5265 11.3304 12C11.3304 12.4735 10.9466 12.8572 10.4732 12.8572H7.04462C6.57116 12.8572 6.18742 12.4735 6.18742 12C6.18742 11.5265 6.57142 11.1428 7.04462 11.1428ZM17.7624 9.92331L16.7315 15.0812C16.4887 16.2784 15.4374 17.1401 14.2158 17.1429H7.04462C6.57116 17.1429 6.18742 16.7592 6.18742 16.2857C6.18742 15.8123 6.57142 15.4285 7.04462 15.4285H14.2158C14.621 15.4275 14.9697 15.1418 15.0503 14.7448L16.0814 9.58692C16.173 9.12654 15.8743 8.67924 15.4141 8.58768C15.3595 8.57696 15.304 8.57147 15.2486 8.57147H8.75902C8.28556 8.57147 7.90182 8.18773 7.90182 7.71427C7.90182 7.24081 8.28556 6.85707 8.75902 6.85707H15.2486C16.6648 6.85759 17.8123 8.00567 17.8121 9.42186C17.8121 9.59006 17.7953 9.75799 17.7624 9.92331V9.92331Z" fill="#3693FF"/>
                                                            </svg>
                                                            :
                                                            index === 3 ?
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM16.2857 18.0001H9.42866C8.9552 18.0001 8.57147 17.6164 8.57147 17.1429C8.57147 17.1024 8.57434 17.0618 8.5801 17.0216L9.22515 12.5054L7.92222 12.8313C7.85421 12.8486 7.78437 12.8572 7.71427 12.8572C7.24081 12.8567 6.85759 12.4727 6.85785 11.9992C6.85838 11.6063 7.12571 11.2642 7.50683 11.1684L9.48674 10.6735L10.2942 5.0213C10.3612 4.55254 10.7954 4.22714 11.2642 4.2941C11.7329 4.36107 12.0583 4.79529 11.9914 5.26404L11.2825 10.2247L14.3636 9.4543C14.8222 9.33737 15.2886 9.61439 15.4053 10.0729C15.5222 10.5315 15.2452 10.9979 14.7866 11.1148C14.784 11.1153 14.7814 11.1161 14.7788 11.1166L11.0204 12.0562L10.4164 16.2857H16.2857C16.7592 16.2857 17.1429 16.6695 17.1429 17.1429C17.1429 17.6161 16.7592 18.0001 16.2857 18.0001Z" fill="#374C98"/>
                                                            </svg>
                                                            :
                                                            index === 4 ?
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 9.50011C15.9993 8.67201 15.328 8.00092 14.5001 8H10V11H14.5001C15.328 10.9993 15.9993 10.328 16 9.50011Z" fill="#FFAB2D"/>
                                                                <path d="M10 16H14.5001C15.3285 16 16 15.3285 16 14.5001C16 13.6715 15.3285 13 14.5001 13H10V16Z" fill="#FFAB2D"/>
                                                                <path d="M12 0C5.3726 0 0 5.3726 0 12C0 18.6274 5.3726 24 12 24C18.6274 24 24 18.6274 24 12C23.9924 5.37574 18.6243 0.00758581 12 0ZM18.0001 14.5713C17.9978 16.4641 16.4641 17.9978 14.5716 17.9999V18.8571C14.5716 19.3305 14.1876 19.7143 13.7144 19.7143C13.2409 19.7143 12.8572 19.3305 12.8572 18.8571V17.9999H11.1431V18.8571C11.1431 19.3305 10.7591 19.7143 10.2859 19.7143C9.8124 19.7143 9.42866 19.3305 9.42866 18.8571V17.9999H6.85733C6.38387 17.9999 6.00013 17.6161 6.00013 17.1429C6.00013 16.6695 6.38387 16.2857 6.85733 16.2857H7.71427V7.71427H6.85733C6.38387 7.71427 6.00013 7.33053 6.00013 6.85707C6.00013 6.38361 6.38387 5.99987 6.85733 5.99987H9.42866V5.14293C9.42866 4.66947 9.8124 4.28573 10.2859 4.28573C10.7593 4.28573 11.1431 4.66947 11.1431 5.14293V5.99987H12.8572V5.14293C12.8572 4.66947 13.2409 4.28573 13.7144 4.28573C14.1879 4.28573 14.5716 4.66947 14.5716 5.14293V5.99987C16.4571 5.99202 17.992 7.5139 18.0001 9.39937C18.0043 10.3978 17.5714 11.3481 16.8152 12C17.5643 12.6445 17.9967 13.5828 18.0001 14.5713Z" fill="#FFAB2D"/>
                                                            </svg>
                                                            :
                                                            ''
                                                        }
                                                        {item.title}
                                                    </Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                    </div>
                                    <div className="input-group custom-search-area w-auto">
                                        <input type="text" className="form-control" placeholder="Search here..." />
                                        <span className="input-group-text ps-0">
                                            <Link to={"#"}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.5605 18.4395L16.7527 14.6317C17.5395 13.446 18 12.0262 18 10.5C18 6.3645 14.6355 3 10.5 3C6.3645 3 3 6.3645 3 10.5C3 14.6355 6.3645 18 10.5 18C12.0262 18 13.446 17.5395 14.6317 16.7527L18.4395 20.5605C19.0245 21.1462 19.9755 21.1462 20.5605 20.5605C21.1462 19.9747 21.1462 19.0252 20.5605 18.4395V18.4395ZM5.25 10.5C5.25 7.605 7.605 5.25 10.5 5.25C13.395 5.25 15.75 7.605 15.75 10.5C15.75 13.395 13.395 15.75 10.5 15.75C7.605 15.75 5.25 13.395 5.25 10.5V10.5Z" fill="var(--primary)"></path>
                                                </svg>
                                            </Link>
                                        </span>
                                    </div>
                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <Tab.Content>
                            <Tab.Pane eventKey="bitcoin">
                                <div className="row">
                                    <div className="col-xl-9 col-xxl-9" >
                                        <CoinChart />
                                    </div>
                                    <div className="col-xl-3 col-xxl-3 col-sm-6">
                                        <div className="card  digital-cash">
                                            <div className="card-header border-0">
                                                <h4 className="mb-0 heading">About</h4>
                                                <DropdownBlog />
                                            </div>
                                            <div className="card-body py-0">
                                                <div className="text-center">
                                                    <div className="media d-block">
                                                        <svg width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M84.0001 49.8757C83.9965 45.5281 80.4721 42.0049 76.1257 42.0001H52.5001V57.7501H76.1257C80.4721 57.7465 83.9965 54.222 84.0001 49.8757Z" fill="#FFAB2D"/>
                                                            <path d="M52.5001 83.9999H76.1257C80.4745 83.9999 84.0001 80.4743 84.0001 76.1255C84.0001 71.7756 80.4745 68.2499 76.1257 68.2499H52.5001V83.9999Z" fill="#FFAB2D"/>
                                                            <path d="M63 0C28.2061 0 0 28.2061 0 63C0 97.7938 28.2061 126 63 126C97.7938 126 126 97.7938 126 63C125.96 28.2226 97.7774 0.0398255 63 0V0ZM94.5007 76.4995C94.4883 86.4367 86.4367 94.4883 76.5009 94.4993V98.9996C76.5009 101.485 74.4849 103.5 72.0006 103.5C69.5149 103.5 67.5003 101.485 67.5003 98.9996V94.4993H58.5011V98.9996C58.5011 101.485 56.4851 103.5 54.0008 103.5C51.5151 103.5 49.5005 101.485 49.5005 98.9996V94.4993H36.001C33.5153 94.4993 31.5007 92.4847 31.5007 90.0004C31.5007 87.5147 33.5153 85.5001 36.001 85.5001H40.4999V40.4999H36.001C33.5153 40.4999 31.5007 38.4853 31.5007 35.9996C31.5007 33.5139 33.5153 31.4993 36.001 31.4993H49.5005V27.0004C49.5005 24.5147 51.5151 22.5001 54.0008 22.5001C56.4865 22.5001 58.5011 24.5147 58.5011 27.0004V31.4993H67.5003V27.0004C67.5003 24.5147 69.5149 22.5001 72.0006 22.5001C74.4863 22.5001 76.5009 24.5147 76.5009 27.0004V31.4993C86.3996 31.4581 94.4581 39.448 94.5007 49.3467C94.5227 54.5886 92.2498 59.5777 88.2796 63C92.2128 66.3838 94.4828 71.3098 94.5007 76.4995V76.4995Z" fill="#FFAB2D"/>
                                                        </svg>
                                                        <div className="media-content">
                                                            <h4 className="mt-0 mt-md-4 fs-20 font-w700 text-black mb-0">Digital Cash</h4>
                                                            <span className="font-w600 text-black">Bitcoin</span>
                                                            <span className="my-4 fs-16 font-w600 d-block">1 BITCOIN = 43,474.50 USD</span>
                                                            <p className="text-start">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO)...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer p-2 border-0">
                                                <Link to={"#"} className="btn btn-link text-primary">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-6">
                                        <QuickTrade />
                                    </div>
                                    <div className="col-xl-3 col-sm-6">
                                        <CoinBuyTable bgChange="warning"/>
                                    </div>
                                    <div className="col-xl-3 col-sm-6">
                                        <CoinSellTable bgChangeSell="warning"/>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="ethereum">
                                <div className="row">
                                    <div className="col-xl-9 col-xxl-9" >
                                        <CoinChart />
                                    </div>
                                    <div className="col-xl-3 col-xxl-3 col-sm-6 ">
                                        <div className="card  digital-cash">
                                            <div className="card-header border-0">
                                                <h4 className="mb-0 heading">About</h4>
                                                <DropdownBlog />
                                            </div>
                                            <div className="card-body py-0">
												<div className="text-center">
													<div className="media d-block">
														<svg width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M64.9961 72.8351C63.7146 73.2618 62.2869 73.2618 61.0053 72.8351L47.2507 68.25L63.0007 94.5L78.7507 68.25L64.9961 72.8351Z" fill="#00ADA3"/>
															<path d="M63.0007 63L78.7507 56.7003L63.0007 31.5L47.2507 56.7003L63.0007 63Z" fill="#00ADA3"/>
															<path d="M63.0004 0C28.2065 0 0.000366211 28.2061 0.000366211 63C0.000366211 97.7938 28.2065 126 63.0004 126C97.7942 126 126 97.7938 126 63C125.962 28.2226 97.7777 0.0384523 63.0004 0V0ZM89.5256 60.513L67.0255 105.513C65.9145 107.737 63.2105 108.637 60.9885 107.526C60.1164 107.091 59.4106 106.385 58.9752 105.513L36.4751 60.513C35.7761 59.1094 35.8558 57.4436 36.6852 56.1129L59.1853 20.1133C60.6809 18.0067 63.5991 17.5095 65.7058 19.0051C66.1356 19.3099 66.5105 19.6835 66.8154 20.1133L89.3141 56.1129C90.145 57.4436 90.2246 59.1094 89.5256 60.513V60.513Z" fill="#00ADA3"/>
														</svg>
														<div className="media-content">
															<h4 className="mt-4 fs-20 font-w700 text-black mb-0">Digital Cash</h4>
															<span className="font-w600 text-black">Ethereum</span>
															<span className="my-4 fs-16 font-w600 d-block">1 ETHEREUM = 3,219.89 USD</span>
															<p className="text-start">Ethereum is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO)...</p>
														</div>
													</div>
												</div>
											</div>
                                            <div className="card-footer p-2 border-0">
                                                <Link to={"#"} className="btn btn-link text-primary">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-6">
                                        <QuickTrade />
                                    </div>
                                    <div className="col-xl-3 col-sm-6 ">
                                        <CoinBuyTable bgChange="info"/>
                                    </div>
                                    <div className="col-xl-3 col-sm-6">
                                        <CoinSellTable bgChangeSell="info" />
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="dash">
                                <div className="row">
                                    <div className="col-xl-9 col-xxl-9 ">
                                        <CoinChart />
                                    </div>
                                    <div className="col-xl-3 col-xxl-3 col-sm-6">
                                        <div className="card  digital-cash">
                                            <div className="card-header border-0">
                                                <h4 className="mb-0 heading">About</h4>
                                                <DropdownBlog />
                                            </div>
                                            <div className="card-body py-0">
												<div className="text-center">
													<div className="media d-block">
														<svg width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M63 0C28.2061 0 0 28.2061 0 63C0 97.7938 28.2061 126 63 126C97.7938 126 126 97.7938 126 63C125.962 28.2226 97.7774 0.0384523 63 0ZM36.9843 58.4997H54.9841C57.4697 58.4997 59.4844 60.5143 59.4844 63C59.4844 65.4857 57.4697 67.5003 54.9841 67.5003H36.9843C34.4986 67.5003 32.484 65.4857 32.484 63C32.484 60.5143 34.5 58.4997 36.9843 58.4997ZM93.2524 52.0974L87.8402 79.1761C86.5658 85.4616 81.0465 89.9853 74.6332 90.0004H36.9843C34.4986 90.0004 32.484 87.9858 32.484 85.5001C32.484 83.0144 34.5 80.9998 36.9843 80.9998H74.6332C76.7604 80.9943 78.591 79.4947 79.014 77.41L84.4276 50.3313C84.9082 47.9143 83.3399 45.566 80.9243 45.0853C80.6373 45.029 80.3461 45.0002 80.055 45.0002H45.9848C43.4992 45.0002 41.4846 42.9856 41.4846 40.4999C41.4846 38.0142 43.4992 35.9996 45.9848 35.9996H80.055C87.49 36.0024 93.5147 42.0298 93.5133 49.4648C93.5133 50.3478 93.4254 51.2295 93.2524 52.0974Z" fill="#3693FF"/>
														</svg>
														<div className="media-content">
															<h4 className="mt-0 mt-md-4 fs-20 font-w700 text-black mb-0">Digital Cash</h4>
															<span className="font-w600 text-black">DASH</span>
															<span className="my-4 fs-16 font-w600 d-block">1 DASH = 68.48 USD</span>
															<p className="text-start">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO)...</p>
														</div>
													</div>
												</div>
											</div>
                                            <div className="card-footer p-2 border-0">
                                                <Link to={"#"} className="btn btn-link text-primary">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-6">
                                        <QuickTrade />
                                    </div>
                                    <div className="col-xl-3 col-sm-6" >
                                        <CoinBuyTable bgChange="secondary"/>
                                    </div>
                                    <div className="col-xl-3 col-sm-6" >
                                        <CoinSellTable bgChangeSell="secondary"/>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="litecoin">
                                <div className="row">
                                    <div className="col-xl-9 col-xxl-9 wow fadeInLeft" data-wow-delay="0.2s">
                                        <CoinChart />
                                    </div>
                                    <div className="col-xl-3 col-xxl-3 col-sm-6 wow fadeInRight" data-wow-delay="0.3s">
                                        <div className="card  digital-cash">
                                            <div className="card-header border-0">
                                                <h4 className="mb-0 heading">About</h4>
                                                <DropdownBlog />
                                            </div>
                                            <div className="card-body py-0">
												<div className="text-center">
													<div className="media d-block">
														<svg width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M63 0C28.2061 0 0 28.2061 0 63C0 97.7938 28.2061 126 63 126C97.7938 126 126 97.7938 126 63C125.96 28.2226 97.7774 0.0398255 63 0V0ZM85.5001 94.5007H49.5005C47.0148 94.5007 45.0002 92.4861 45.0002 90.0004C45.0002 89.7875 45.0153 89.5747 45.0455 89.3632L48.4321 65.6532L41.5917 67.3643C41.2346 67.455 40.8679 67.5003 40.4999 67.5003C38.0142 67.4975 36.0024 65.4815 36.0037 62.9959C36.0065 60.9332 37.41 59.1369 39.4109 58.6343L49.8054 56.036L54.0447 26.3618C54.3963 23.9009 56.676 22.1925 59.1369 22.544C61.5979 22.8956 63.3062 25.1753 62.9547 27.6362L59.233 53.6794L75.4091 49.6351C77.8165 49.0212 80.2651 50.4755 80.8776 52.8829C81.4914 55.2903 80.0371 57.7389 77.6297 58.3528C77.616 58.3555 77.6023 58.3596 77.5885 58.3624L57.857 63.2953L54.6861 85.5001H85.5001C87.9858 85.5001 90.0004 87.5147 90.0004 90.0004C90.0004 92.4847 87.9858 94.5007 85.5001 94.5007Z" fill="#374C98"/>
														</svg>
														<div className="media-content">
															<h4 className="mt-0 mt-md-4 fs-20 font-w700 text-black mb-0">Digital Cash</h4>
															<span className="font-w600 text-black">LITCOIN</span>
															<span className="my-4 fs-16 font-w600 d-block">1 LITCOIN = 68.48 USD</span>
															<p className="text-start">Litecoin is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO)...</p>
														</div>
													</div>
												</div>
											</div>
                                            <div className="card-footer p-2 border-0">
                                                <Link to={"#"} className="btn btn-link text-primary">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                                        <QuickTrade />
                                    </div>
                                    <div className="col-xl-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <CoinBuyTable bgChange="primary"/>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                                        <CoinSellTable bgChangeSell="primary"/>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="ripple">
                                <div className="row">
                                    <div className="col-xl-9 col-xxl-9 wow fadeInLeft">
                                        <CoinChart />
                                    </div>
                                    <div className="col-xl-3 col-xxl-3 col-sm-6">
                                        <div className="card  digital-cash">
                                            <div className="card-header border-0">
                                                <h4 className="mb-0 heading">About</h4>
                                                <DropdownBlog />
                                            </div>
                                            <div className="card-body py-0">
												<div className="text-center">
													<div className="media d-block">
														<svg width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M62.9999 126C75.4601 126 87.6405 122.305 98.0007 115.382C108.361 108.46 116.436 98.6206 121.204 87.109C125.973 75.5972 127.22 62.93 124.789 50.7092C122.358 38.4885 116.359 27.263 107.548 18.4522C98.7368 9.64157 87.5114 3.64141 75.2906 1.21055C63.0698 -1.22031 50.4026 0.0272952 38.8908 4.79561C27.3792 9.56392 17.54 17.6388 10.6174 27.9991C3.69488 38.3593 0 50.5397 0 62.9999C0 79.7085 6.63747 95.7327 18.4522 107.548C30.2671 119.362 46.2913 126 62.9999 126Z" fill="#23292F"/>
															<path d="M86.0515 36.1686H95.524L75.8253 55.8223C72.4017 59.2421 67.7606 61.163 62.9216 61.163C58.0825 61.163 53.4414 59.2421 50.0178 55.8223L30.3754 36.1686H39.8366L54.7991 51.0973C56.9675 53.2634 59.9072 54.4801 62.9722 54.4801C66.0371 54.4801 68.9769 53.2634 71.1453 51.0973L86.0515 36.1686Z" fill="white"/>
															<path d="M39.7916 90.8322H30.3754L50.1416 71.0548C53.5652 67.635 58.2062 65.7141 63.0453 65.7141C67.8844 65.7141 72.5254 67.635 75.949 71.0548L95.7602 90.8322H86.299L71.224 75.7798C69.0556 73.6137 66.1159 72.397 63.0509 72.397C59.986 72.397 57.0463 73.6137 54.8778 75.7798L39.7916 90.8322Z" fill="white"/>
														</svg>
														<div className="media-content">
															<h4 className="mt-0 mt-md-4  fs-20 font-w700 text-black mb-0">Digital Cash</h4>
															<span className="font-w600 text-black">RIPPLE</span>
															<span className="my-4 fs-16 font-w600 d-block">1 RIPPLE = 68.48 USD</span>
															<p className="text-start">Ripple is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO)...</p>
														</div>
													</div>
												</div>
											</div>
                                            <div className="card-footer p-2 border-0">
                                                <Link to={"#"} className="btn btn-link text-primary">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-sm-6 ">
                                        <QuickTrade />
                                    </div>
                                    <div className="col-xl-3 col-sm-6" >
                                        <CoinBuyTable bgChange="black"/>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 ">
                                        <CoinSellTable bgChangeSell="black"/>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>    
                    </div>   
                </Tab.Container>
            </div>
        </>
    )
}
export default CoinDetails;