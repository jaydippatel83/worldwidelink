import React from 'react';
import {Link} from 'react-router-dom';

const orderTable = [
    {email:'samantha@mail.com', title:'Samanta William', price:'$75,00', status:'Paid', statusChange:'success'},
    {email:'tony@gmail.com', title:'Tony Soap', price:'$80,00', status:'Unpaid', statusChange:'danger'},
    {email:'demo@mail.com', title:'Nela Vita', price:'$90,00', status:'Paid', statusChange:'success'},
    {email:'karen@mail.com', title:'Karen Hope', price:'$70,00', status:'Pending', statusChange:'warning'},
    {email:'nadia@mail.com', title:'Nadia Edja', price:'$76,00', status:'Unpaid', statusChange:'danger'},
    {email:'samantha@mail.com', title:'Samanta William', price:'$75,00', status:'Paid', statusChange:'success'},
    {email:'tony@gmail.com', title:'Tony Soap', price:'$80,00', status:'Unpaid', statusChange:'danger'},
    {email:'demo@mail.com', title:'Nela Vita', price:'$90,00', status:'Paid', statusChange:'success'},
    {email:'karen@mail.com', title:'Karen Hope', price:'$70,00', status:'Pending', statusChange:'warning'},
    {email:'nadia@mail.com', title:'Nadia Edja', price:'$76,00', status:'Unpaid', statusChange:'danger'},
];

const Order = () => {
    const checkboxFun = (type) => {
		setTimeout(() => {
			const checkbox = document.querySelectorAll('.order-history input');
			const motherCheckBox = document.querySelector('.sorting_asc input');
			for (let i = 0; i < checkbox.length; i++) {
			const element = checkbox[i]
				if (type === 'all') {
					if (motherCheckBox.checked) {
						element.checked = true
					} else {
						element.checked = false
					}
				} else {
					if (!element.checked) {
						motherCheckBox.checked = false
						break
					} else {
						motherCheckBox.checked = true
					}
				}
			}
		},200);
	}
    return(
        <>
            <div className="row">
                <div className="col-xxl-12">
                    <div className="card">
                        <div className="card-body px-0 pt-0">
                            <div className="table-responsive">
                                <table className="order-history table shadow-hover tickettable display mb-4 no-footer" id="example6">
                                    <thead>
                                        <tr>
                                            <th className="sorting_asc">
                                                <input type="checkbox" className="form-check-input" id="checkAll" required=""
                                                    onClick={() => checkboxFun('all')}
                                                />
                                            </th>
                                            <th className="fs-14 font-w600 ps-0">Event</th>
                                            <th className="fs-14 font-w600">Date</th>
                                            <th className="fs-14 font-w600">Email</th>
                                            <th className="fs-14 font-w600">Price</th>
                                            <th className="fs-14 font-w600 text-end">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderTable.map((item, index)=>(
                                            <tr key={index}>
                                                <td>
                                                    <div className="checkbox me-0 align-self-center">
                                                        <div className="custom-control custom-checkbox ">
                                                            <input type="checkbox" className="form-check-input" id={`checkbox${index+1}`} required="" 
                                                                onClick={() => checkboxFun()}
                                                            />
                                                            <label className="custom-control-label" htmlFor={`checkbox${index+1}`}></label>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="ps-0"> 
                                                    <span className="font-w600 fs-14"> #ID-01-12344 </span>
                                                </td>
                                                <td className="fs-14 font-w400">Jan 12, 2022</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <Link to={"/email-inbox"}>
                                                            <div className="icon-box icon-box-sm  bg-primary"> 
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.427 6L12.6 10.8C12.4335 10.9267 12.2312 10.9976 12.022 11.0026C11.8129 11.0077 11.6074 10.9465 11.435 10.828L5.573 6H18.427ZM19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.3L10.2 12.4C10.7159 12.7863 11.3435 12.9944 11.988 12.993C12.6551 12.992 13.3037 12.774 13.836 12.372L20 7.3V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18Z" fill="white"/>
                                                                </svg>
                                                            </div>
                                                        </Link>
                                                        <div className="ms-3">
                                                            <h5 className="mb-0"><Link  to={"/app-profile"} className="text-secondary" >{item.title}</Link></h5>
                                                            <span className="fs-14 text-muted">{item.email}</span>
                                                        </div>
                                                    </div>	
                                                </td>
                                                <td>{item.price}</td>
                                                <td className="text-end">
                                                    <span className={`label label-${item.statusChange}`}>{item.status}</span>
                                                </td>
                                            </tr>
                                        ))}                                        
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-pagenation d-flex align-items-center justify-content-between">
                                <p>Showing <span> 1-10 </span> from <span> 50 </span> data </p>
                                <nav>
                                    <ul className="pagination pagination-gutter pagination-primary no-bg">
                                        <li className="page-item page-indicator">
                                            <Link to={"#"} className="page-link">
                                                <i className="fa-solid fa-angle-left"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item "><Link to={"#"} className="page-link">1</Link></li>
                                        <li className="page-item active"><Link to={"#"} className="page-link">2</Link></li>
                                        <li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
                                        <li className="page-item page-indicator">
                                            <Link to={"#"} className="page-link">
                                                <i className="fa-solid fa-angle-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Order;