import React from 'react';
import MarketChart from './MarketChart';
import { Dropdown } from 'react-bootstrap';

const Charts = () => {
    return (
        <div className="container mt-0">
            <div className="row">
                <div className="col-xl-12 wow fadeInUp" data-wow-delay="1.5s">
                    <div className="card market_chart">
                        <div className="card-header border-0 align-items-start flex-wrap pb-0">
                            <div>
                                <h2 className="heading">Market Chart</h2>
                                <div className="market-data">
                                    <div className="income data">
                                        <span>This Month</span>
                                        <h4>$29.999.00</h4>
                                    </div>
                                    <div className="price data">
                                        <span>Price</span>
                                        <h4>480 <sub>- 0,5%</sub></h4>
                                    </div>
                                    <div className="rate data">
                                        <span>Rate</span>
                                        <h4>-0.0662%/hr</h4>
                                    </div>
                                    <div className="volume data">
                                        <span>volume</span>
                                        <h4>175k</h4>
                                    </div>

                                </div>
                            </div>
                            <Dropdown className="dropdown custom-dropdown">
                                <Dropdown.Toggle as="div" className="btn sharp btn-primary tp-btn i-false">
                                    <svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.19995 10.001C5.19995 9.71197 5.14302 9.42576 5.03241 9.15872C4.9218 8.89169 4.75967 8.64905 4.55529 8.44467C4.35091 8.24029 4.10828 8.07816 3.84124 7.96755C3.5742 7.85694 3.28799 7.80001 2.99895 7.80001C2.70991 7.80001 2.4237 7.85694 2.15667 7.96755C1.88963 8.07816 1.64699 8.24029 1.44261 8.44467C1.23823 8.64905 1.0761 8.89169 0.965493 9.15872C0.854882 9.42576 0.797952 9.71197 0.797952 10.001C0.798085 10.5848 1.0301 11.1445 1.44296 11.5572C1.85582 11.9699 2.41571 12.2016 2.99945 12.2015C3.58319 12.2014 4.14297 11.9694 4.55565 11.5565C4.96832 11.1436 5.20008 10.5838 5.19995 10L5.19995 10.001ZM5.19995 3.00101C5.19995 2.71197 5.14302 2.42576 5.03241 2.15872C4.9218 1.89169 4.75967 1.64905 4.55529 1.44467C4.35091 1.24029 4.10828 1.07816 3.84124 0.967552C3.5742 0.856941 3.28799 0.800011 2.99895 0.800011C2.70991 0.800011 2.4237 0.856941 2.15667 0.967552C1.88963 1.07816 1.64699 1.24029 1.44261 1.44467C1.23823 1.64905 1.0761 1.89169 0.965493 2.15872C0.854883 2.42576 0.797953 2.71197 0.797953 3.00101C0.798085 3.58475 1.0301 4.14453 1.44296 4.55721C1.85582 4.96988 2.41571 5.20164 2.99945 5.20151C3.58319 5.20138 4.14297 4.96936 4.55565 4.5565C4.96832 4.14364 5.20008 3.58375 5.19995 3.00001L5.19995 3.00101ZM5.19995 17.001C5.19995 16.712 5.14302 16.4258 5.03241 16.1587C4.9218 15.8917 4.75967 15.6491 4.55529 15.4447C4.35091 15.2403 4.10828 15.0782 3.84124 14.9676C3.5742 14.8569 3.28799 14.8 2.99895 14.8C2.70991 14.8 2.4237 14.8569 2.15666 14.9676C1.88963 15.0782 1.64699 15.2403 1.44261 15.4447C1.23823 15.6491 1.0761 15.8917 0.965493 16.1587C0.854882 16.4258 0.797952 16.712 0.797952 17.001C0.798084 17.5848 1.0301 18.1445 1.44296 18.5572C1.85582 18.9699 2.41571 19.2016 2.99945 19.2015C3.58319 19.2014 4.14297 18.9694 4.55565 18.5565C4.96832 18.1436 5.20008 17.5838 5.19995 17L5.19995 17.001Z" fill="var(--primary)" />
                                    </svg>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                    <Dropdown.Item className="dropdown-item" href="javascript:void(0);">Option 1</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item" href="javascript:void(0);">Option 2</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item" href="javascript:void(0);">Option 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="card-body custome-tooltip pt-0">
                            <div id="activity1"></div>
                            <MarketChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;