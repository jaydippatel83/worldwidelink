import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown, Modal} from 'react-bootstrap';

import pic15 from './../../../images/contacts/15.jpg';
import pic2 from './../../../images/contacts/2.jpg';
import pic3 from './../../../images/contacts/3.jpg';
import pic4 from './../../../images/contacts/4.jpg';
import pic5 from './../../../images/contacts/5.jpg';
import pic6 from './../../../images/contacts/6.jpg';
import pic17 from './../../../images/contacts/17.jpg';
import pic8 from './../../../images/contacts/8.jpg';
import pic9 from './../../../images/contacts/9.jpg';
import pic10 from './../../../images/contacts/10.jpg';
import pic18 from './../../../images/contacts/18.jpg';
import pic14 from './../../../images/contacts/14.jpg';


const cardBlog = [
    {image:pic15, title:'Jordana'},
    {image:pic2, title:'Jacob Jack'},
    {image:pic3, title:'Jordan Nico'},
    {image:pic4, title:'Gibs Gibsy'},
    {image:pic5, title:'Sammy'},
    {image:pic6, title:'Core'},
    {image:pic17, title:'Sodara'},
    {image:pic8, title:'Smith'},
    {image:pic9, title:'Nico'},
    {image:pic10, title:'Samantha'},
    {image:pic18, title:'Adja'},
    {image:pic14, title:'Johnny'},
];

const Contact  = () =>{
    const [contactModal,setContactModal] = useState();
    return(
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body py-2">
                            <div className="row d-flex align-items-center justify-content-between">
                                <div className="col-xl-3 col-md-6 col-sm-6">
                                    <div className="input-group custom-search-area my-2">
                                        <span className="input-group-text">
                                            <Link to={"#"}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.5605 18.4395L16.7527 14.6317C17.5395 13.446 18 12.0262 18 10.5C18 6.3645 14.6355 3 10.5 3C6.3645 3 3 6.3645 3 10.5C3 14.6355 6.3645 18 10.5 18C12.0262 18 13.446 17.5395 14.6317 16.7527L18.4395 20.5605C19.0245 21.1462 19.9755 21.1462 20.5605 20.5605C21.1462 19.9747 21.1462 19.0252 20.5605 18.4395V18.4395ZM5.25 10.5C5.25 7.605 7.605 5.25 10.5 5.25C13.395 5.25 15.75 7.605 15.75 10.5C15.75 13.395 13.395 15.75 10.5 15.75C7.605 15.75 5.25 13.395 5.25 10.5V10.5Z" fill="var(--primary)"></path>
                                                </svg>
                                            </Link>
                                        </span>
                                        <input type="text" className="form-control border-start-0" placeholder="Search Contact" />
                                    </div>
                                </div>
                                <div className="col-xl-9 col-md-6 col-sm-12 my-2">
                                    <button  className="btn btn-primary" onClick={()=>setContactModal(true)}>New Contact
                                        <svg className="ms-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 3C7.05 3 3 7.05 3 12C3 16.95 7.05 21 12 21C16.95 21 21 16.95 21 12C21 7.05 16.95 3 12 3ZM12 19.125C8.1 19.125 4.875 15.9 4.875 12C4.875 8.1 8.1 4.875 12 4.875C15.9 4.875 19.125 8.1 19.125 12C19.125 15.9 15.9 19.125 12 19.125Z" fill="white"/>
                                            <path d="M16.3503 11.0253H12.9753V7.65029C12.9753 7.12529 12.5253 6.67529 12.0003 6.67529C11.4753 6.67529 11.0253 7.12529 11.0253 7.65029V11.0253H7.65029C7.12529 11.0253 6.67529 11.4753 6.67529 12.0003C6.67529 12.5253 7.12529 12.9753 7.65029 12.9753H11.0253V16.3503C11.0253 16.8753 11.4753 17.3253 12.0003 17.3253C12.5253 17.3253 12.9753 16.8753 12.9753 16.3503V12.9753H16.3503C16.8753 12.9753 17.3253 12.5253 17.3253 12.0003C17.3253 11.4753 16.8753 11.0253 16.3503 11.0253Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="row">
                        {cardBlog.map((data, index)=>(
                            <div className="col-xl-3 col-md-6" key={index}>
                                <div className="card contact_list ">
                                    <div className="card-body text-center">
                                        <div className="user-content">
                                            <div className="user-info">
                                                <div className="user-img">
                                                    <img src={data.image} alt="" />
                                                </div>
                                                <div className="user-details">
                                                    <h4 className="user-name">{data.title}</h4>
                                                    <span className="mail">Designer at</span> 
                                                    <span className="number">Frize Studio</span>
                                                </div>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle  as="div" className="i-false btn-link btn sharp tp-btn btn-primary pill">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.0012 9.35986C11.6543 9.35986 11.3109 9.42818 10.9904 9.56091C10.67 9.69365 10.3788 9.88819 10.1335 10.1335C9.88829 10.3787 9.69374 10.6699 9.56101 10.9903C9.42828 11.3108 9.35996 11.6542 9.35996 12.0011C9.35996 12.3479 9.42828 12.6914 9.56101 13.0118C9.69374 13.3323 9.88829 13.6234 10.1335 13.8687C10.3788 14.1139 10.67 14.3085 10.9904 14.4412C11.3109 14.5739 11.6543 14.6423 12.0012 14.6423C12.7017 14.6421 13.3734 14.3637 13.8686 13.8682C14.3638 13.3728 14.6419 12.701 14.6418 12.0005C14.6416 11.3 14.3632 10.6282 13.8677 10.133C13.3723 9.63782 12.7004 9.3597 12 9.35986H12.0012ZM3.60116 9.35986C3.25431 9.35986 2.91086 9.42818 2.59042 9.56091C2.26997 9.69365 1.97881 9.88819 1.73355 10.1335C1.48829 10.3787 1.29374 10.6699 1.16101 10.9903C1.02828 11.3108 0.959961 11.6542 0.959961 12.0011C0.959961 12.3479 1.02828 12.6914 1.16101 13.0118C1.29374 13.3323 1.48829 13.6234 1.73355 13.8687C1.97881 14.1139 2.26997 14.3085 2.59042 14.4412C2.91086 14.5739 3.25431 14.6423 3.60116 14.6423C4.30165 14.6421 4.97339 14.3637 5.4686 13.8682C5.9638 13.3728 6.24192 12.701 6.24176 12.0005C6.2416 11.3 5.96318 10.6282 5.46775 10.133C4.97231 9.63782 4.30045 9.3597 3.59996 9.35986H3.60116ZM20.4012 9.35986C20.0543 9.35986 19.7109 9.42818 19.3904 9.56091C19.07 9.69365 18.7788 9.88819 18.5336 10.1335C18.2883 10.3787 18.0937 10.6699 17.961 10.9903C17.8283 11.3108 17.76 11.6542 17.76 12.0011C17.76 12.3479 17.8283 12.6914 17.961 13.0118C18.0937 13.3323 18.2883 13.6234 18.5336 13.8687C18.7788 14.1139 19.07 14.3085 19.3904 14.4412C19.7109 14.5739 20.0543 14.6423 20.4012 14.6423C21.1017 14.6421 21.7734 14.3637 22.2686 13.8682C22.7638 13.3728 23.0419 12.701 23.0418 12.0005C23.0416 11.3 22.7632 10.6282 22.2677 10.133C21.7723 9.63782 21.1005 9.3597 20.4 9.35986H20.4012Z" fill="#A098AE"/>
                                                    </svg>    
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-end" align="end">
                                                    <Dropdown.Item>Delete</Dropdown.Item>
                                                    <Dropdown.Item>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="contact-icon">
                                            <div className="icon">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.973 14.7709C19.9394 14.6283 19.8749 14.4949 19.784 14.3799C19.6931 14.265 19.578 14.1715 19.447 14.1059L15.447 12.1059C15.2592 12.0122 15.0468 11.98 14.8397 12.0137C14.6325 12.0475 14.4413 12.1455 14.293 12.2939L12.618 13.9689C10.211 13.5819 6.418 9.78994 6.032 7.38294L7.707 5.70694C7.85545 5.55864 7.95349 5.36739 7.98723 5.16028C8.02097 4.95317 7.9887 4.7407 7.895 4.55294L5.895 0.552942C5.82953 0.421827 5.73604 0.306705 5.62115 0.215724C5.50625 0.124744 5.37277 0.0601275 5.23014 0.0264496C5.08751 -0.00722831 4.93922 -0.00914485 4.79577 0.0208356C4.65231 0.050816 4.5172 0.111961 4.4 0.199942L0.4 3.19994C0.275804 3.29309 0.175 3.41387 0.105573 3.55273C0.036145 3.69158 0 3.8447 0 3.99994C0 13.5699 6.43 19.9999 16 19.9999C16.1552 19.9999 16.3084 19.9638 16.4472 19.8944C16.5861 19.8249 16.7069 19.7241 16.8 19.5999L19.8 15.5999C19.8877 15.4828 19.9487 15.3479 19.9786 15.2047C20.0085 15.0614 20.0066 14.9134 19.973 14.7709ZM15.5 17.9929C7.569 17.7799 2.22 12.4309 2.007 4.49994L4.642 2.51894L5.783 4.79994L4.293 6.28994C4.19978 6.38314 4.1259 6.49384 4.07561 6.61569C4.02533 6.73754 3.99963 6.86813 4 6.99994C4 10.5329 9.467 15.9999 13 15.9999C13.2652 15.9999 13.5195 15.8945 13.707 15.7069L15.197 14.2169L17.481 15.3589L15.5 17.9929Z" fill="#01A3FF"/>
                                                </svg>
                                            </div>
                                            <div className="icon">
                                                <svg width="20" height="20" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.5 1.87161C21.5066 1.79397 21.5066 1.71591 21.5 1.63828L21.395 1.41661C21.395 1.41661 21.395 1.33494 21.3367 1.29994L21.2783 1.24161L21.0917 1.08994C21.0406 1.03803 20.9815 0.994693 20.9167 0.961609L20.7183 0.891609H20.485H1.585H1.35167L1.15333 0.973276C1.08829 1.00101 1.02895 1.04056 0.978333 1.08994L0.791667 1.24161C0.791667 1.24161 0.791667 1.24161 0.791667 1.29994C0.791667 1.35828 0.791667 1.38161 0.733333 1.41661L0.628333 1.63828C0.62173 1.71591 0.62173 1.79397 0.628333 1.87161L0.5 1.99994V15.9999C0.5 16.3094 0.622916 16.6061 0.841709 16.8249C1.0605 17.0437 1.35725 17.1666 1.66667 17.1666H12.1667C12.4761 17.1666 12.7728 17.0437 12.9916 16.8249C13.2104 16.6061 13.3333 16.3094 13.3333 15.9999C13.3333 15.6905 13.2104 15.3938 12.9916 15.175C12.7728 14.9562 12.4761 14.8333 12.1667 14.8333H2.83333V4.33328L10.3 9.93328C10.5019 10.0847 10.7476 10.1666 11 10.1666C11.2524 10.1666 11.4981 10.0847 11.7 9.93328L19.1667 4.33328V14.8333H16.8333C16.5239 14.8333 16.2272 14.9562 16.0084 15.175C15.7896 15.3938 15.6667 15.6905 15.6667 15.9999C15.6667 16.3094 15.7896 16.6061 16.0084 16.8249C16.2272 17.0437 16.5239 17.1666 16.8333 17.1666H20.3333C20.6427 17.1666 20.9395 17.0437 21.1583 16.8249C21.3771 16.6061 21.5 16.3094 21.5 15.9999V1.99994C21.5 1.99994 21.5 1.91828 21.5 1.87161ZM11 7.54161L5.16667 3.16661H16.8333L11 7.54161Z" fill="#01A3FF"/>
                                                </svg>
                                            </div>
                                            <div className="icon">
                                                <svg width="20" height="20" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.1547 2.20068C22.9967 2.09387 22.8151 2.02739 22.6255 2.00705C22.436 1.98671 22.2443 2.01314 22.0673 2.08401L17.7798 3.79901C17.6526 2.97529 17.2356 2.22402 16.6038 1.68036C15.972 1.13671 15.167 0.836354 14.3335 0.833344H3.8335C2.90524 0.833344 2.015 1.20209 1.35862 1.85847C0.702245 2.51485 0.333496 3.40509 0.333496 4.33334V13.6667C0.333496 14.5949 0.702245 15.4852 1.35862 16.1416C2.015 16.7979 2.90524 17.1667 3.8335 17.1667H14.3335C15.1668 17.1637 15.9717 16.8635 16.6035 16.3201C17.2352 15.7767 17.6523 15.0257 17.7798 14.2022L22.0673 15.9172C22.2444 15.9879 22.4361 16.0142 22.6256 15.9937C22.8151 15.9732 22.9968 15.9065 23.1546 15.7996C23.3124 15.6926 23.4417 15.5486 23.5309 15.3802C23.6202 15.2118 23.6669 15.024 23.6668 14.8333V3.16668C23.6669 2.97607 23.6202 2.78836 23.5309 2.61996C23.4416 2.45156 23.3124 2.30761 23.1547 2.20068ZM14.3335 14.8333H3.8335C3.52408 14.8333 3.22733 14.7104 3.00854 14.4916C2.78975 14.2728 2.66683 13.9761 2.66683 13.6667V4.33334C2.66683 4.02392 2.78975 3.72718 3.00854 3.50839C3.22733 3.28959 3.52408 3.16668 3.8335 3.16668H14.3335C14.6429 3.16668 14.9397 3.28959 15.1585 3.50839C15.3772 3.72718 15.5002 4.02392 15.5002 4.33334V13.6667C15.5002 13.9761 15.3772 14.2728 15.1585 14.4916C14.9397 14.7104 14.6429 14.8333 14.3335 14.8333ZM21.3335 13.1102L17.8335 11.7102V6.28984L21.3335 4.88984V13.1102Z" fill="#01A3FF"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>   
            <Modal className="modal fade" id="exampleModal" centered show={contactModal} onHide={setContactModal}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" onClick={()=>setContactModal(false)}></button>
                    </div>
                    <div className="modal-body">                            
                        <label className="form-label d-block">Enter Name</label>
                        <input type="text" className="form-control w-100" placeholder="Username" />                            
                        <label className="form-label d-block mt-3">Enter Position</label>
                        <input type="text" className="form-control w-100" placeholder="position" />                            
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={()=>setContactModal(false)}>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </Modal>	 
        </>
    )
}
export default Contact;