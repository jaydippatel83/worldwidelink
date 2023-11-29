import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useTable, useSortBy } from 'react-table';
import PageTitle from '../../layouts/PageTitle';
import Table from 'react-bootstrap/Table';
import { Badge, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { EscrowContext } from '../EscrowContext/EscrowContext';


export default function Agreements() {
    const escrowContext = React.useContext(EscrowContext);

    const { everyAgreement, fetchAllAgreements } = escrowContext;
    const [providerStaked, setProviderStaked] = useState(false);
    const [workStatus, setWorkStatus] = useState('pending');

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

    const handleSubmitWork = () => {
        setWorkStatus('done');
    };

    const handleCancelWork = () => {
        setWorkStatus('canceled');
    };

    const handleDispute = () => {
        setWorkStatus('disputed');
    };

    const handleReleaseFund = () => {
        setWorkStatus('fundsReleased');
    };

    useEffect(() => {
        console.log('everyAgreement', everyAgreement);
        // fetchAllAgreements();
        everyAgreement.map((e) => {
            console.log('-----', e);
        })
    }, [everyAgreement])


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
                                        {
                                            everyAgreement && everyAgreement?.map((Agreement) => {
                                                return (
                                                    <><td>{Agreement.agreeId}</td>
                                                        <td>{Agreement.title}</td>
                                                        <td>{Agreement.clientAdd}</td>
                                                        <td>{Agreement.agreementAmount} CCIP</td></>
                                                )
                                            })
                                        }

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
                            {
                                everyAgreement && everyAgreement?.map((Cagreement) => {
                                    return (
                                        <>
                                            <div className='mb-5' style={{ textAlign: "center", borderBottom: "1px solid #eeee" }}>
                                                <h3>
                                                    {Cagreement?.title}'s Details
                                                </h3>
                                                <h5>
                                                    Agreement amount: <span style={{ color: "red" }}>{Cagreement.agreementAmount}</span>
                                                </h5>
                                            </div>
                                            <Row className="d-flex align-items-center">
                                                <Col xl="5" className="mx-auto">
                                                    <Card style={{
                                                        maxWidth: '500px',
                                                        backgroundColor: "#f4effe"
                                                        // backgroundColor:"#e1daee"
                                                    }}>
                                                        <Card.Header>
                                                            <Card.Title>Client Information</Card.Title>
                                                        </Card.Header>
                                                        <Card.Body className=" mb-0">
                                                            <p className='text-black'> Address: {Cagreement.clientAdd}</p>
                                                            <p className='text-black'>
                                                                Staked Amount : {Cagreement.clientStake} CCIP
                                                            </p>

                                                            <p className='text-black'>
                                                                Work Status :
                                                                <Link to={"#"} className='badge-md light ms-1 badge badge-warning'>Pending</Link>

                                                            </p>
                                                            {workStatus === "pending" ? (

                                                                <div>
                                                                    <div className="row text-center mt-4">
                                                                        <div className='col-6'>
                                                                            <button type="button" class="btn btn-primary btn-sm"
                                                                            >Cancle</button>
                                                                        </div>
                                                                        <div className='col-6'>
                                                                            <button type="button" class="btn btn-primary btn-sm"
                                                                            >Dispute</button>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            ) : (
                                                                <div className='col'>
                                                                    <button type="button" class="btn btn-primary btn-md" onClick={handleReleaseFund}
                                                                    >Relese Fund</button>
                                                                    {workStatus === 'fundsReleased' &&
                                                                        <Card.Footer className=" bg-transparent border-0 text-white">
                                                                            <h4>Fund Release  <span className="badge light badge-success">Successful</span></h4>
                                                                        </Card.Footer>}
                                                                </div>
                                                            )}

                                                        </Card.Body>

                                                    </Card>
                                                </Col>
                                                <Col xl="5" className="mx-auto">
                                                    <Card
                                                        //  className="bg-light"
                                                        style={{ maxWidth: '800px', backgroundColor: "#f4effe" }}>
                                                        <Card.Header>
                                                            <Card.Title>Provider Information</Card.Title>
                                                        </Card.Header>
                                                        <Card.Body className=" mb-0">
                                                            <p className='text-black'> Address: {Cagreement.providerAdd}</p>
                                                            <p className='text-black'>
                                                                Staked Amount : {Cagreement.providerStake} CCIP
                                                            </p>
                                                        </Card.Body>
                                                        <Card.Footer className=" bg-transparent border-0 text-white">
                                                            {providerStaked ? (

                                                                <div>
                                                                    {workStatus === 'done' ? (

                                                                        <div>
                                                                            <h4>Work status   <span className="badge light badge-success">Done</span></h4>
                                                                            <h4 className='mt-4'>  Fund Recieved {" "}
                                                                                <Badge bg="" className="light badge-danger">NO</Badge>
                                                                                {/* <Link to={"#"} className='badge-md light ms-1 badge badge-warning'>Pending</Link>    */}


                                                                            </h4>
                                                                        </div>

                                                                    ) : (
                                                                        <div>
                                                                            <div className="row text-center mt-4">
                                                                                <div className='col-6'>
                                                                                    <button type="button" class="btn btn-primary btn-sm"
                                                                                        onClick={handleSubmitWork}
                                                                                    >Submit Work</button>
                                                                                </div>
                                                                                <div className='col-6'>
                                                                                    <button type="button" class="btn btn-primary btn-sm"
                                                                                    >Dispute</button>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ) : (
                                                                <button type="button" class="btn btn-primary"
                                                                    onClick={() => setProviderStaked(true)}>Stake Token</button>

                                                            )}

                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </>
                                    )
                                })
                            }
                        </Card.Body>


                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
}
