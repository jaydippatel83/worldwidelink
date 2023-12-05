import React, { useContext, useEffect, useState } from 'react';
import { createClient } from 'urql'
import { Web3Context } from '../../../../context/Web3Context';
import Select from "react-select";

const Airdrop = () => {
    const web3Context = useContext(Web3Context);
    const { address } = web3Context;
    const [users, setUsers] = useState();
    const client = createClient({
        url: "https://api.studio.thegraph.com/query/44401/wwl/0.0.1",
    })
    const tokensQuery = ` 
    {
        messageSents(first:5){
            id,
            depositor,
            receiver,
            messageId 
          } 
    }
`

    useEffect(() => {
        getUserAddress();
    }, [])

    const airdrops = [
        { value: "lending", label: "Lending" },
        { value: "escrow", label: "Escrow" },
        { value: "transfer", label: "Transfer" },
    ];

    const getUserAddress = async () => {
        const data = await client.query(tokensQuery).toPromise()
        setUsers(data.data)
        console.log(data?.data?.messageSents, "data");
    }
    const [value, setValue] = useState(airdrops[0]);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 col-12 col-md-6 ">
                    <div className="card p-5">
                        <h1>Airdrop</h1>
                        <div className="form-group">
                            <label className="form-label">Airdrop Users</label>
                            <div className="form-group  mb-3">
                                <Select
                                    className="custom-react-select"
                                    defaultValue={airdrops[0]}
                                    isSearchable={false}
                                    id="airdrop"
                                    value={value}
                                    onChange={(value) => setValue(value)}
                                    options={airdrops}
                                />
                            </div>
                        </div>
                        <div className="custome-equal ">
                            <button className='btn btn-primary'>Airdrop</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Airdrop;

// ["0x762231E298259D94a1da0eC4B6e47e6e38f261b9",
//     "0xfB5C5f3d07ac7551c765E0dB128738755A1a7Efe",
//     "0xE89121b5aa08AfF1803BA77Ef5202B514d0831d0"]

// 0xDEA9612BC37c1f28eAc0C624f0fd09E52Be3331B main
// 0xE16931fa0e12e3df6bFDD832Ef296ec86d64AB00 token