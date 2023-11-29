import React, { useEffect, useState, useContext } from "react";
import { Web3Context } from "../../../context/Web3Context";
import { ethers } from "ethers";

export const LandTable = () => {
  const { deposits, address } = useContext(Web3Context);

  return (
    <div className="table-responsive dataTablehistory">
      <div id="bthdata_wrapper" className="dataTables_wrapper no-footer">
        <table
          id="example"
          className="table dataTable shadow-hover display"
          style={{ minWidth: "845px" }}
        >
          <thead>
            <tr>
              <th>Token Address</th>
              <th>Supplier</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {deposits.map((deposit, ind) => (
              <tr key={ind}>
                <td>{deposit.token}</td>
                <td>{address}</td>
                <td>{(ethers.formatEther(deposit.amount))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
