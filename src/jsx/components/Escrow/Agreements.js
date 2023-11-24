import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useTable, useSortBy } from 'react-table';
import PageTitle from '../../layouts/PageTitle';
import Table from 'react-bootstrap/Table';
import { Button, Col, Row } from 'react-bootstrap';
// import MOCK_DATA from './MOCK_DATA_3.json';
// import { COLUMNS } from './Columns';


export default function Agreements() {

   
    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!'),
        );
        return (
            <button
                type="button"
                style={{ backgroundColor: 'white', border: "none", width: "100%" }}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    }




    return (
        <>
            <Table >
                <thead>
                    <tr >
                        <th>Id</th>
                        <th>Title</th>
                        <th>Address</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
            </Table>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <CustomToggle eventKey="0">
                            <Table borderless>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Home Agreement</td>
                                        <td>address28237447473838</td>
                                        <td>0.001 CCIP</td>
                                        {/* <td>Created Aggrement</td> */}
                                        <td>
                                            {/* <span className="badge badge-primary badge-lg">
                                                Pending
                                                <span className="ms-1 fa fa-redo" />
                                            </span> */}
                                            <span className="badge badge-success badge-lg">
                                                Created Agreement
                                                <span className="ms-1 fa fa-check" />
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div className='mb-5' style={{ textAlign: "center", borderBottom: "1px solid #eeee" }} >
                                <h3>
                                    Agreement Home's Details
                                </h3>
                                <h5>
                                    Agreement amount: <span style={{ color: "red" }}>0.01CCIP</span>
                                </h5>
                            </div>
                            <Row className="d-flex align-items-center">
                                <Col xl="4" className="mx-auto">
                                    <Card className="bg-light" style={{ maxWidth: '300px' }}>
                                        <Card.Header>
                                            <Card.Title >Buyer Information</Card.Title>
                                        </Card.Header>
                                        <Card.Body className=" mb-0">
                                            <p className='text-black'> Address:  7545934598349</p>
                                            <p className='text-black'>
                                                Staked Amount : 0.02 CCIP
                                            </p>
                                        </Card.Body>
                                        <Card.Footer className=" bg-transparent border-0 text-white">
                                            <h4 >Fund Release : ✅</h4>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xl="4" className="mx-auto">
                                    <Card className="bg-light" style={{ maxWidth: '300px' }}>
                                        <Card.Header>
                                            <Card.Title >Seller Information</Card.Title>
                                        </Card.Header>
                                        <Card.Body className=" mb-0">
                                            <p className='text-black'> Address:  7545934598349</p>
                                            <p className='text-black'>
                                                Staked Amount : 0.02 CCIP
                                            </p>
                                        </Card.Body>
                                        <Card.Footer className=" bg-transparent border-0 text-white">
                                            <h4 >Work status : ✅</h4>
                                            <h4 >  Fund Recieved : ❌</h4>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
}
