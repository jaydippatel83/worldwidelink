import React from 'react';
import { Badge, Card, Col, Dropdown, Table } from 'react-bootstrap';
import { EscrowContext } from '../../EscrowContext/EscrowContext';
import { Web3Context } from '../../../../context/Web3Context';


const EscrowTable = () => {
    const escrowContext = React.useContext(EscrowContext);
    const web3Context = React.useContext(Web3Context);
    const { everyAgreementProvider, everyAgreementClient } = escrowContext;
    const { shortAddress } = web3Context;

    return (
        <Col lg={12}>
            <Card>
                <Card.Header>
                    <Card.Title>Escrow Agreements</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className="width80">
                                    <strong>#</strong>
                                </th>
                                <th>
                                    <strong>title</strong>
                                </th>
                                <th>
                                    <strong>Client</strong>
                                </th>
                                <th>
                                    <strong>Freelancer</strong>
                                </th>
                                <th>
                                    <strong>Amount</strong>
                                </th>
                                <th>
                                    <strong>STATUS</strong>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                everyAgreementClient?.length == 0 ? everyAgreementProvider && everyAgreementProvider?.map((agrmnt) => {
                                    return (
                                        <tr>
                                            <td>
                                                <strong>0{agrmnt?.agreeId}</strong>
                                            </td>
                                            <td>{agrmnt?.title}</td>
                                            <td>{shortAddress(agrmnt?.clientAdd)}</td>
                                            <td>{shortAddress(agrmnt?.providerAdd)}</td>
                                            <td>{agrmnt?.agreementAmount} CCIP</td>
                                            <td>
                                                <span className={agrmnt?.release ? "badge  badge-success" : "badge badge-warning "}>{agrmnt?.release ? "Successful" : "Pending"}</span>
                                            </td>
                                        </tr>
                                    )
                                }) :
                                    everyAgreementClient && everyAgreementClient?.map((agrmnt) => {
                                        return (
                                            <tr>
                                                <td>
                                                    <strong>0{agrmnt?.agreeId}</strong>
                                                </td>
                                                <td>{agrmnt?.title}</td>
                                                <td>{shortAddress(agrmnt?.clientAdd)}</td>
                                                <td>{shortAddress(agrmnt?.providerAdd)}</td>
                                                <td>{agrmnt?.agreementAmount} CCIP</td>
                                                <td>
                                                    <span className={agrmnt?.release ? "badge  badge-success" : "badge badge-warning  "}>{agrmnt?.release ? "Successful" : "Pending"}</span>
                                                </td>
                                            </tr>
                                        )
                                    })
                            }

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default EscrowTable;