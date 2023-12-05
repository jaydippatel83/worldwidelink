import React, { useEffect } from 'react';
import { createClient } from 'urql'

const Airdrop = () => {
    const client = createClient({
        url: process.env.REACT_APP_The_graph_url,
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

    const getUserAddress = async () => {
        const data = await client.query(tokensQuery).toPromise()
        console.log(data, "data");
    }


    return (
        <div>
            <h1>Airdrop</h1>
        </div>
    );
};

export default Airdrop;