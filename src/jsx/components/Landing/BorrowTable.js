import React, { useEffect, useState, useContext } from "react";
import { Web3Context } from "../../../context/Web3Context";
import { ethers } from "ethers";

export const BorrowTable = () => {
  const { borrowings, address } = useContext(Web3Context);

  return (
    <div className="table-responsive dataTablehistory">
      <div className="dataTables_wrapper no-footer">
        <table
          id="example"
          className="table dataTable shadow-hover display"
          style={{ minWidth: "845px" }}
        >
          <thead>
            <tr>
              <th>Token Address</th>
              <th>Borrower</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {borrowings.map((borrowing, i) => {
              return (
                <tr key={i}>
                  <td>{borrowing.token}</td>
                  <td>{address}</td>
                  <td>
                    {ethers.utils.formatEther(borrowing.amount)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
          <div className="dataTables_info">
            Showing {activePag.current * sort + 1} to{" "}
            {data.length > (activePag.current + 1) * sort
              ? (activePag.current + 1) * sort
              : data.length}{" "}
            of {data.length} entries
          </div>
        </div> */}
      </div>
    </div>
  );
};
