import React, { useContext, useEffect, useState } from 'react';
import { createClient } from 'urql'
import { Web3Context } from '../../../../context/Web3Context';
import Select from "react-select";
import { airdropAddress, airdropABI, airdropTokenAddress, airdropFujiAddress, airdropFujiToken } from "../../../../config"
import { Contract, ethers } from 'ethers';



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
        const array = [];
        const data = await client.query(tokensQuery).toPromise()
        data.data?.messageSents.map((data) => {
            array.push(data.depositor)
        })

        setUsers(array);
    }
    const [value, setValue] = useState(airdrops[0]);


    const airdrop = async () => {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const airdropContract = new Contract(
            airdropAddress,
            airdropABI,
            signer
        );
        const reqId = await airdropContract.requestRandomAddresses(users);
        const status = await airdropContract.getRequestStatus();
        await status.wait();
        let trx;
        if (status) {
            trx = await airdropContract.fulfillRandomWords(reqId, users);
            trx.wait();
        }

    }

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
                            <button className='btn btn-primary' onClick={airdrop}>Airdrop</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Airdrop;


