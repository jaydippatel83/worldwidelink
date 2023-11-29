import React from 'react';
import { Badge, Card, Col, Dropdown, Table } from 'react-bootstrap';

const svg1 = (
    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect x="0" y="0" width="24" height="24"></rect>
            <circle fill="#000000" cx="5" cy="12" r="2"></circle>
            <circle fill="#000000" cx="12" cy="12" r="2"></circle>
            <circle fill="#000000" cx="19" cy="12" r="2"></circle>
        </g>
    </svg>
);

const TxTable = () => {

    return (
        <Col lg={12}>
            <Card>
                <Card.Header>
                    <Card.Title>Latest Transactions</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className="width80">
                                    <strong>#</strong>
                                </th>
                                <th>
                                    <strong>Tx Hash</strong>
                                </th>
                                <th>
                                    <strong>Address</strong>
                                </th>
                                <th>
                                    <strong>DATE</strong>
                                </th>
                                <th>
                                    <strong>STATUS</strong>
                                </th>
                                <th>
                                    <strong>Token</strong>
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>01</strong>
                                </td>
                                <td>Mr. Bobby</td>
                                <td>Dr. Jackson</td>
                                <td>01 August 2022</td>
                                <td>
                                    <span className="badge light badge-success">Successful</span>
                                </td>
                                <td>$21.56</td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="success"
                                            className="light sharp i-false"
                                        >
                                            {svg1}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Edit</Dropdown.Item>
                                            <Dropdown.Item>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>02</strong>
                                </td>
                                <td>Mr. Bobby</td>
                                <td>Dr. Jackson</td>
                                <td>01 August 2022</td>
                                <td>
                                    <Badge bg="" className="light badge-danger">Canceled</Badge>
                                </td>
                                <td>$21.56</td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="danger"
                                            className="light sharp i-false"
                                        >
                                            {svg1}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Edit</Dropdown.Item>
                                            <Dropdown.Item>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>03</strong>
                                </td>
                                <td>Mr. Bobby</td>
                                <td>Dr. Jackson</td>
                                <td>01 August 2022</td>
                                <td>
                                    <Badge bg="" className="badge-warning light">Pending</Badge>
                                </td>
                                <td>$21.56</td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="warning"
                                            className="light sharp i-false"
                                        >
                                            {svg1}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Edit</Dropdown.Item>
                                            <Dropdown.Item>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TxTable;