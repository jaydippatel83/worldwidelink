import React, { useEffect, useState } from 'react';
import WidgetChartIndex3 from './WidgetChartIndex3';
import { EscrowContext } from '../../EscrowContext/EscrowContext';
import { Web3Context } from '../../../../context/Web3Context';
import { ethers } from 'ethers';

const CardData = () => {
    const escrowContext = React.useContext(EscrowContext);
    const [netId, setNetId] = useState();
    const web3Context = React.useContext(Web3Context);
    const { everyAgreementProvider, everyAgreementClient } = escrowContext;
    const { deposits, borrowings, provider, address } = web3Context;
    const [balance, setBalance] = useState();

    const widgetChart = [
        { id: 1, value: everyAgreementProvider?.length + everyAgreementClient?.length, title: 'Escrow ', bgcolor: 'bg-white' },
        { id: 2, value: `${deposits?.length} / ${borrowings?.length}`, title: 'Lend / Borrow', bgcolor: 'bg-white' },
        { id: 3, value: "Active", title: 'SOS Alert', bgcolor: 'bg-white' },
        { id: 4, value: `${balance} ${netId === 80001 ? 'MATIC' : 'ETH'} `, title: 'Total Balance', bgcolor: 'bg-white' },
    ];

    useEffect(() => {
        getBalance();
    }, [provider, address])

    const getBalance = async () => {
        const balance = await provider.getBalance(address);
        const formattedBalance = ethers.formatUnits(balance);
        const netId = await provider.getNetwork();
        setNetId(Number(netId.chainId));
        const bal = Number(formattedBalance).toFixed(4)
        setBalance(bal);
    }

    return (
        <>
            {widgetChart.map((item, ind) => (
                <div className="col-xl-3 col-lg-6 col-sm-6" key={ind}>
                    <div className={`card card-box ${item.bgcolor} pb-4`}>
                        <div className="card-header d-block border-0 pb-0 text-center">
                            <div className="chart-num-days">
                                <h2 className={`count-num ${item.id === 3 ? 'text-danger' : 'text-primary'} `}>{item.title}</h2>
                                <h2 className="count-num text-dark">{item.value}</h2>
                            </div>
                        </div>
                        {/* <div className="card-body p-0 custome-tooltip">
                            <WidgetChartIndex3 />
                        </div> */}
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardData;