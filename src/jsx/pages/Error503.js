import React from "react";
import { Link } from "react-router-dom";

const Error503 = () => {
   return (
      <div className="authincation">
         <div className="container">
            {" "}
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-7">
                  <div className="form-input-content text-center error-page">
                     <h1 className="error-text fw-bold">503</h1>
                     <h4>
                        <i className="fa fa-times-circle text-danger" /> Service
                        Unavailable
                     </h4>
                     <p>Sorry, we are under maintenance!</p>
                     <div>
                        <Link className="btn btn-primary" to="/dashboard">
                           Back to Home
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Error503;
