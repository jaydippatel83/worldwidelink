import React from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Table from 'react-bootstrap/Table';
import { Badge, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { EscrowContext } from '../EscrowContext/EscrowContext';
import { Web3Context } from '../../../context/Web3Context';

export default function Agreements() {
    const escrowContext = React.useContext(EscrowContext);
    const web3Context = React.useContext(Web3Context);
    const { shortAddress } = web3Context

    const { everyAgreementProvider, everyAgreementClient, stakeCcipProvider, submitWork, releaseFund, raiseDispute, cancel } = escrowContext;


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
            <div className='container'>

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

                {
                    everyAgreementClient?.length == 0 ? everyAgreementProvider && everyAgreementProvider?.map((Agreement) => {

                        return (
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Card.Header>
                                        <CustomToggle eventKey="0">
                                            <Table borderless>
                                                <tbody>
                                                    <tr>
                                                        <><td>{Agreement.agreeId}</td>
                                                            <td>{Agreement.title}</td>
                                                            <td>{shortAddress(Agreement.clientAdd)}</td>
                                                            <td>{Agreement.agreementAmount} CCIP</td></>

                                                        <td>
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
                                            <div className='mb-5' style={{ textAlign: "center", borderBottom: "1px solid #eeee" }}>
                                                <h3>
                                                    {Agreement?.title}'s Details
                                                </h3>
                                                <h5>
                                                    Agreement amount: <span style={{ color: "red" }}>{Agreement.agreementAmount}</span>
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
                                                            <p className='text-black'> Address: {Agreement.clientAdd}</p>
                                                            <p className='text-black'>
                                                                Staked Amount : {Agreement.clientStake} CCIP
                                                            </p>

                                                            {Agreement.workSubmitted === false ? (

                                                                <div>
                                                                    <p className='text-black'>
                                                                        Work Status :
                                                                        <Link to={"#"} className='badge-md  ms-1 badge badge-warning'>Pending</Link>
                                                                    </p>
                                                                </div>

                                                            ) : (
                                                                <>
                                                                    <p className='text-black'>
                                                                        Work Status :
                                                                        <Link to={"#"} className='badge-md   ms-1 badge '>Done</Link>
                                                                    </p>
                                                                    <div className='col'>
                                                                        {Agreement.release === true ? (
                                                                            <Card.Footer className="bg-transparent border-0 text-white">
                                                                                <h4>Fund Release <span className="badge  badge-primary">Successful</span></h4>
                                                                            </Card.Footer>
                                                                        ) : (
                                                                            ""
                                                                        )}

                                                                    </div>
                                                                </>

                                                            )}

                                                        </Card.Body>

                                                    </Card>
                                                </Col>
                                                <Col xl="5" className="mx-auto">
                                                    <Card
                                                        style={{ maxWidth: '800px', backgroundColor: "#f4effe" }}>
                                                        <Card.Header>
                                                            <Card.Title>Freelancer Information</Card.Title>
                                                        </Card.Header>
                                                        <Card.Body className=" mb-0">
                                                            <p className='text-black'> Address: {Agreement.providerAdd}</p>
                                                            <p className='text-black'>
                                                                Staked Amount : {Agreement.providerStake} CCIP
                                                            </p>
                                                        </Card.Body>
                                                        <Card.Footer className=" bg-transparent border-0 text-white">
                                                            {Agreement.providerStake !== "0.0" ? (

                                                                <div>
                                                                    {Agreement.workSubmitted === true ? (

                                                                        <div>
                                                                            <h4>Work status   <span className="badge badge-success">Done</span></h4>
                                                                            {
                                                                                Agreement.release === true ? (
                                                                                    <h4 className='mt-4'>  Fund Recieved {" "}
                                                                                        <Badge bg="" className=" badge-success">Received</Badge>
                                                                                    </h4>
                                                                                ) : <h4 className='mt-4'>  Fund Recieved {" "}
                                                                                    <Badge bg="" className=" badge-danger">NO</Badge>
                                                                                </h4>

                                                                            }

                                                                        </div>

                                                                    ) : (
                                                                        <div>
                                                                            <div className="row text-center mt-4">
                                                                                <div className='col-6'>
                                                                                    <button type="button" class="btn btn-primary btn-sm"
                                                                                        onClick={() => submitWork(Agreement?.agreeId)}
                                                                                    >Submit Work</button>
                                                                                </div>
                                                                                <div className='col-6'>
                                                                                    <button type="button" class="btn btn-danger btn-sm"
                                                                                        onClick={() => raiseDispute(Agreement.agreeId, Agreement.clientAdd, Agreement.providerAdd)}
                                                                                    >Dispute</button>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ) : (
                                                                <button type="button" class="btn btn-primary"
                                                                    onClick={() => stakeCcipProvider(Agreement.agreeId, Agreement.agreementAmount)}>Stake Token</button>

                                                            )}

                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Card.Body>


                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        )
                    }) :
                        everyAgreementClient && everyAgreementClient?.map((Agreement) => {

                            return (
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Card.Header>
                                            <CustomToggle eventKey="0">
                                                <Table borderless>
                                                    <tbody>
                                                        <tr>
                                                            <><td>{Agreement.agreeId}</td>
                                                                <td>{Agreement.title}</td>
                                                                <td>{Agreement.clientAdd}</td>
                                                                <td>{shortAddress(Agreement.agreementAmount)} CCIP</td></>

                                                            <td>
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
                                                <div className='mb-5' style={{ textAlign: "center", borderBottom: "1px solid #eeee" }}>
                                                    <h3>
                                                        {Agreement?.title}'s Details
                                                    </h3>
                                                    <h5>
                                                        Agreement amount: <span style={{ color: "red" }}>{Agreement.agreementAmount}</span>
                                                    </h5>
                                                </div>
                                                <Row className="d-flex align-items-center">
                                                    <Col xl="5" className="mx-auto">
                                                        <Card style={{
                                                            maxWidth: '500px',
                                                            backgroundColor: "#f4effe"
                                                        }}>
                                                            <Card.Header>
                                                                <Card.Title>Client Information</Card.Title>
                                                            </Card.Header>
                                                            <Card.Body className=" mb-0">
                                                                <p className='text-black'> Address: {Agreement.clientAdd}</p>
                                                                <p className='text-black'>
                                                                    Staked Amount : {Agreement.clientStake} CCIP
                                                                </p>


                                                                {Agreement.workSubmitted === false ? (

                                                                    <div>
                                                                        <p className='text-black'>
                                                                            Work Status :
                                                                            <Link to={"#"} className='badge-md  ms-1 badge badge-warning'>Pending</Link>
                                                                        </p>
                                                                        <div className="row text-center mt-4">
                                                                            <div className='col-6'>
                                                                                <button type="button" class="btn btn-primary btn-sm"
                                                                                    onClick={() => cancel(Agreement?.agreeId)}
                                                                                >Cancle</button>
                                                                            </div>
                                                                            <div className='col-6'>
                                                                                <button type="button" class="btn btn-danger btn-sm"
                                                                                    onClick={() => raiseDispute(Agreement.agreeId, Agreement.clientAdd, Agreement.providerAdd)}
                                                                                >Dispute</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                ) : (
                                                                    <>
                                                                        <p className='text-black'>
                                                                            Work Status :
                                                                            <Link to={"#"} className='badge-md  ms-1 badge badge-success'>Done</Link>
                                                                        </p>
                                                                        <div className='col'>
                                                                            {Agreement.release === true ? (
                                                                                <Card.Footer className="bg-transparent border-0 text-white">
                                                                                    <h4>Fund Release <span className="badge  badge-success">Successful</span></h4>
                                                                                </Card.Footer>
                                                                            ) : (
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-primary btn-md"
                                                                                    onClick={() => releaseFund(Agreement?.agreeId)}
                                                                                >
                                                                                    Release Fund
                                                                                </button>
                                                                            )}

                                                                        </div>
                                                                    </>

                                                                )}

                                                            </Card.Body>

                                                        </Card>
                                                    </Col>
                                                    <Col xl="5" className="mx-auto">
                                                        <Card
                                                            style={{ maxWidth: '800px', backgroundColor: "#f4effe" }}>
                                                            <Card.Header>
                                                                <Card.Title>Freelancer Information</Card.Title>
                                                            </Card.Header>
                                                            <Card.Body className=" mb-0">
                                                                <p className='text-black'> Address: {Agreement.providerAdd}</p>
                                                                <p className='text-black'>
                                                                    Staked Amount : {Agreement.providerStake} CCIP
                                                                </p>
                                                            </Card.Body>
                                                            <Card.Footer className=" bg-transparent border-0 text-white">


                                                                <div>
                                                                    <h4>Work status   <span className="badge   badge-success">Done</span></h4>
                                                                    {
                                                                        Agreement.release === true ? (
                                                                            <h4 className='mt-4'>  Fund Recieved {" "}
                                                                                <Badge bg="" className="  badge-success">Received</Badge>
                                                                            </h4>
                                                                        ) : <h4 className='mt-4'>  Fund Recieved {" "}
                                                                            <Badge bg="" className="  badge-danger">NO</Badge>
                                                                        </h4>

                                                                    }

                                                                </div>



                                                            </Card.Footer>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Card.Body>


                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            )
                        })
                }
            </div>


        </>
    )
}
