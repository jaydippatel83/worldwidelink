import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown, Modal} from 'react-bootstrap';

//images
import profile from './../../../images/profile/pic1.jpg';
import pic1 from './../../../images/profile/small/pic1.jpg';
import pic2 from './../../../images/profile/small/pic2.jpg';
import pic3 from './../../../images/profile/small/pic3.jpg';
import pic4 from './../../../images/profile/small/pic4.jpg';
import pic5 from './../../../images/profile/small/pic5.jpg';
import pic14 from './../../../images/profile/14.jpg';
import pic18 from './../../../images/profile/18.jpg';
import pic19 from './../../../images/profile/19.jpg';

const contactBlog = [
    {image:pic4, title:'Samanta William'},
    {image:pic1, title:'Tony Soap'},
    {image:pic3, title:'Karen Hope'},
    {image:pic2, title:'Jordan Nico'},
    {image:pic5, title:'Nadila Adja'},
];

const taskData = [
    {title:'To Do', notask1:'5',notask2:'4' },
    {title:'In Progress', notask1:'7',notask2:'6'},
    {title:'Completed', notask1:'12',notask2:'10'},
];

const User = () =>{
    const [contactModal, setContactModal] = useState(); 
    // This is load more function 
	const [data, setData] = useState(contactBlog);
	const [refresh, setRefresh] = useState(false);
	const [refresh2, setRefresh2] = useState(false);

	const LoadMore = () => {
		setRefresh(true);
		setTimeout(() => {
		  setData([
			...data,
			data[Math.floor(Math.random() * Math.floor(data.length - 1))],
		  ]);
		  setRefresh(false);
		}, 1000);
	};

    const onLoad = () => {
		setRefresh2(true);
		setTimeout(() => {
		  setData([
			...data,
			data[Math.floor(Math.random() * Math.floor(data.length - 1))],
		  ]);
		  setRefresh2(false);
		}, 1000);
	};
    return(
        <>
            <div className="row">
                <div className="col-xl-8">
                    <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <div className="card justify-content-center">
                                <div className="card-body d-flex">
                                    <div className="d-block">
                                        <img src={profile} className="avatar avatar-xxl" alt="" />
                                    </div>
                                    <div className="w-100 ps-4">
                                        <div className="d-flex justify-content-between">
                                            <div className="">
                                                <h4 className="font-w700"> Nadila Adja </h4>
                                                <h5> UI Designer </h5>
                                                <span> London, United Kingdom </span> 
                                            </div>
                                            <div className="d-flex">
                                                <div className="icon-box icon-box-sm bg-primary-light me-2 btn-edit">
                                                    <Link to={"#"}>
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_787_189)">
                                                                <path d="M16.0001 2.66699C13.363 2.66699 10.7851 3.44898 8.59248 4.91406C6.39983 6.37915 4.69086 8.46153 3.68169 10.8979C2.67253 13.3342 2.40848 16.0151 2.92295 18.6015C3.43742 21.1879 4.7073 23.5637 6.572 25.4284C8.4367 27.2931 10.8125 28.563 13.3989 29.0775C15.9853 29.5919 18.6662 29.3279 21.1025 28.3187C23.5389 27.3096 25.6213 25.6006 27.0863 23.4079C28.5514 21.2153 29.3334 18.6374 29.3334 16.0003C29.3334 14.2494 28.9885 12.5156 28.3185 10.8979C27.6484 9.2802 26.6663 7.81035 25.4282 6.57224C24.1901 5.33412 22.7202 4.35199 21.1025 3.68193C19.4849 3.01187 17.751 2.66699 16.0001 2.66699ZM16.0001 26.667C13.8904 26.667 11.8281 26.0414 10.074 24.8693C8.31988 23.6973 6.95271 22.0314 6.14537 20.0823C5.33804 18.1332 5.1268 15.9885 5.53838 13.9194C5.94995 11.8502 6.96586 9.94961 8.45761 8.45785C9.94938 6.96609 11.85 5.95019 13.9191 5.53862C15.9883 5.12704 18.133 5.33828 20.082 6.14561C22.0311 6.95295 23.697 8.32012 24.8691 10.0742C26.0412 11.8284 26.6668 13.8907 26.6668 16.0003C26.6668 18.8293 25.5429 21.5424 23.5426 23.5428C21.5422 25.5432 18.8291 26.667 16.0001 26.667Z" fill="#A098AE"/>
                                                                <path d="M16.0001 22.6667C16.7365 22.6667 17.3334 22.0697 17.3334 21.3333C17.3334 20.597 16.7365 20 16.0001 20C15.2637 20 14.6667 20.597 14.6667 21.3333C14.6667 22.0697 15.2637 22.6667 16.0001 22.6667Z" fill="#A098AE"/>
                                                                <path d="M16.0001 9.33301C15.6465 9.33301 15.3073 9.47348 15.0573 9.72353C14.8072 9.97358 14.6667 10.3127 14.6667 10.6663V17.333C14.6667 17.6866 14.8072 18.0258 15.0573 18.2758C15.3073 18.5259 15.6465 18.6663 16.0001 18.6663C16.3537 18.6663 16.6928 18.5259 16.9429 18.2758C17.1929 18.0258 17.3334 17.6866 17.3334 17.333V10.6663C17.3334 10.3127 17.1929 9.97358 16.9429 9.72353C16.6928 9.47348 16.3537 9.33301 16.0001 9.33301Z" fill="#A098AE"/>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_787_189">
                                                                <rect width="32" height="32" fill="white"/>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </Link>
                                                </div>
                                                <Dropdown className="dropdown ms-auto">
                                                    <Dropdown.Toggle as="div" className="icon-box icon-box-sm bg-primary-light i-false">
                                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M27.3925 4.60647C26.1493 3.36576 24.4647 2.66895 22.7083 2.66895C20.9519 2.66895 19.2673 3.36576 18.0241 4.60647L15.5295 7.10101L4.30461 18.3265C4.10055 18.5303 3.96826 18.7948 3.92767 19.0803L2.67994 27.8109C2.65288 28 2.66679 28.1927 2.72072 28.376C2.77465 28.5593 2.86735 28.7289 2.99252 28.8732C3.11769 29.0176 3.27243 29.1333 3.44624 29.2126C3.62005 29.292 3.80888 29.333 3.99994 29.333C4.06311 29.3331 4.12621 29.3287 4.18874 29.3197L12.9199 28.0726C13.2054 28.0313 13.4698 27.8989 13.6738 27.695L27.3938 13.9762C28.0091 13.361 28.4972 12.6307 28.8302 11.8268C29.1632 11.023 29.3346 10.1614 29.3346 9.29134C29.3346 8.42126 29.1632 7.5597 28.8302 6.75586C28.4972 5.95202 28.0091 5.22166 27.3938 4.60647H27.3925ZM12.1022 25.4958L5.57154 26.4281L6.50487 19.8981L16.4726 9.92954L22.0709 15.5274L12.1022 25.4958ZM25.5066 12.0909L23.9559 13.6421L18.3574 8.04394L19.9094 6.49181C20.6635 5.77219 21.6659 5.3707 22.7083 5.3707C23.7507 5.3707 24.753 5.77219 25.5071 6.49181C26.2494 7.2344 26.6664 8.24138 26.6664 9.29134C26.6664 10.3413 26.2494 11.3483 25.5071 12.0909H25.5066Z" fill="#A098AE"/>
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end" align="end">
                                                        <li className="dropdown-item"><Link to={"#"}><i className="fa fa-user-circle text-primary me-2"></i> View profile</Link></li>
                                                        <li className="dropdown-item"><Link to={"#"}><i className="fa fa-users text-primary me-2"></i> Add to btn-close friends </Link></li>
                                                        <li className="dropdown-item"><Link to={"#"}><i className="fa fa-plus text-primary me-2"></i> Add to group </Link></li>
                                                        <li className="dropdown-item"><Link to={"#"}><i className="fa fa-ban text-primary me-2"></i> Block </Link></li>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>                                            
                                        </div>
                                        <div className="d-flex flex-wrap pt-4">
                                            <div className="d-flex align-items-center pe-4 mb-2">
                                                <div className="pe-2">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20 4.5H4C3.20435 4.5 2.44129 4.81607 1.87868 5.37868C1.31607 5.94129 1 6.70435 1 7.5V17.5C1 18.2956 1.31607 19.0587 1.87868 19.6213C2.44129 20.1839 3.20435 20.5 4 20.5H20C20.7956 20.5 21.5587 20.1839 22.1213 19.6213C22.6839 19.0587 23 18.2956 23 17.5V7.5C23 6.70435 22.6839 5.94129 22.1213 5.37868C21.5587 4.81607 20.7956 4.5 20 4.5ZM21 17.25L16.1 12.85L21 9.42V17.25ZM3 9.42L7.9 12.85L3 17.25V9.42ZM9.58 14.03L11.43 15.32C11.5974 15.4361 11.7963 15.4984 12 15.4984C12.2037 15.4984 12.4026 15.4361 12.57 15.32L14.42 14.03L19.42 18.5H4.6L9.58 14.03ZM4 6.5H20C20.1857 6.50149 20.3673 6.55467 20.5245 6.65358C20.6817 6.75249 20.8083 6.89322 20.89 7.06L12 13.28L3.11 7.06C3.19171 6.89322 3.31826 6.75249 3.47545 6.65358C3.63265 6.55467 3.81428 6.50149 4 6.5Z" fill="#F79F19"/>
                                                    </svg>	
                                                </div>
                                                <h5 className="font-w400 mb-0">demo@gmail.com</h5>
                                            </div>
                                            <div className="d-flex align-items-center pe-4 mb-2">
                                                <div className="pe-2">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.4401 13.5004C19.2201 13.5004 18.9901 13.4304 18.7701 13.3804C18.3246 13.2822 17.8868 13.1518 17.4601 12.9904C16.9962 12.8216 16.4862 12.8304 16.0284 13.015C15.5706 13.1996 15.1972 13.547 14.9801 13.9904L14.7601 14.4404C13.7861 13.8985 12.8911 13.2256 12.1001 12.4404C11.3149 11.6494 10.6419 10.7544 10.1001 9.78036L10.5201 9.50036C10.9635 9.28327 11.3109 8.90989 11.4955 8.45205C11.6801 7.99421 11.6889 7.48427 11.5201 7.02036C11.3613 6.59278 11.231 6.15515 11.1301 5.71036C11.0801 5.49036 11.0401 5.26036 11.0101 5.03036C10.8887 4.32598 10.5197 3.6881 9.96972 3.2316C9.41972 2.77509 8.7248 2.52997 8.0101 2.54036H5.0101C4.57913 2.53631 4.15235 2.62517 3.75881 2.80089C3.36527 2.9766 3.01421 3.23505 2.72953 3.55864C2.44485 3.88222 2.23324 4.26335 2.10909 4.67607C1.98494 5.08879 1.95118 5.52342 2.0101 5.95036C2.54284 10.1397 4.45613 14.0322 7.44775 17.013C10.4394 19.9938 14.3388 21.8929 18.5301 22.4104H18.9101C19.6475 22.4114 20.3595 22.1409 20.9101 21.6504C21.2265 21.3674 21.4792 21.0205 21.6516 20.6327C21.8239 20.2448 21.9121 19.8248 21.9101 19.4004V16.4004C21.8979 15.7057 21.6449 15.0369 21.1944 14.508C20.744 13.9791 20.1239 13.623 19.4401 13.5004ZM19.9401 19.5004C19.9399 19.6423 19.9095 19.7827 19.8509 19.912C19.7923 20.0413 19.7068 20.1566 19.6001 20.2504C19.4884 20.3468 19.3577 20.4189 19.2165 20.462C19.0753 20.505 18.9267 20.5181 18.7801 20.5004C15.035 20.0202 11.5563 18.3068 8.89282 15.6306C6.2293 12.9545 4.53251 9.46769 4.0701 5.72036C4.05419 5.57387 4.06813 5.42569 4.1111 5.28475C4.15407 5.14381 4.22517 5.01304 4.3201 4.90036C4.41381 4.79369 4.52916 4.7082 4.65848 4.64957C4.7878 4.59095 4.92812 4.56054 5.0701 4.56036H8.0701C8.30265 4.55518 8.52972 4.63124 8.71224 4.77543C8.89476 4.91962 9.02131 5.12293 9.0701 5.35036C9.1101 5.62369 9.1601 5.89369 9.2201 6.16036C9.33562 6.6875 9.48936 7.20554 9.6801 7.71036L8.2801 8.36036C8.1604 8.41528 8.05272 8.4933 7.96326 8.58995C7.87379 8.6866 7.8043 8.79997 7.75877 8.92355C7.71324 9.04713 7.69257 9.17849 7.69795 9.31008C7.70332 9.44167 7.73464 9.5709 7.7901 9.69036C9.2293 12.7731 11.7073 15.2512 14.7901 16.6904C15.0336 16.7904 15.3066 16.7904 15.5501 16.6904C15.6748 16.6458 15.7894 16.5768 15.8873 16.4875C15.9851 16.3983 16.0643 16.2905 16.1201 16.1704L16.7401 14.7704C17.2571 14.9552 17.7847 15.1088 18.3201 15.2304C18.5868 15.2904 18.8568 15.3404 19.1301 15.3804C19.3575 15.4291 19.5608 15.5557 19.705 15.7382C19.8492 15.9207 19.9253 16.1478 19.9201 16.3804L19.9401 19.5004Z" fill="#FF5B5B"/>
                                                    </svg>
                                                </div>
                                                <h5 className="font-w400 mb-0">+012 345 689</h5>
                                            </div>
                                            <div className="d-flex align-items-center pe-4 mb-2">
                                                <div className="pe-2">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.97117 23.5767H18.0289C20.8125 23.5767 23.0769 21.3123 23.0769 18.5286V6.47093C23.0769 3.68727 20.8125 1.42285 18.0289 1.42285H5.97117C3.18752 1.42285 0.923096 3.68727 0.923096 6.47093V18.5286C0.923096 21.3123 3.18752 23.5767 5.97117 23.5767ZM2.76925 6.47093C2.76925 4.70545 4.20525 3.26901 5.97117 3.26901H18.0289C19.7948 3.26901 21.2308 4.70545 21.2308 6.47093V18.5286C21.2308 20.2941 19.7948 21.7305 18.0289 21.7305H5.97117C4.20525 21.7305 2.76925 20.2941 2.76925 18.5286V6.47093Z" fill="#00A389"/>
                                                        <path d="M7.0557 19.2014H16.9454C17.544 19.2014 18.1011 18.9328 18.4752 18.4649C18.852 17.9935 18.9917 17.385 18.8583 16.7954C18.3441 14.5292 16.7943 12.7479 14.7709 11.8879C15.3334 11.2406 15.6861 10.4062 15.6861 9.4834C15.6861 7.4511 14.0329 5.79785 12.0001 5.79785C9.96736 5.79785 8.31412 7.4511 8.31412 9.4834C8.31412 10.4062 8.66681 11.2406 9.22931 11.8879C7.20591 12.7479 5.6561 14.5294 5.14194 16.7959C5.00853 17.385 5.14825 17.993 5.52505 18.4645C5.89915 18.9328 6.45715 19.2014 7.0557 19.2014ZM10.1603 9.4834C10.1603 8.46928 10.986 7.64401 12.0001 7.64401C13.0142 7.64401 13.84 8.46928 13.84 9.4834C13.84 10.4975 13.0142 11.3228 12.0001 11.3228C10.986 11.3228 10.1603 10.4975 10.1603 9.4834ZM12.0001 13.1689C14.4385 13.1689 16.5181 14.828 17.0572 17.2034C17.0689 17.2538 17.05 17.2903 17.0329 17.3124C16.9986 17.3552 16.9589 17.3552 16.9454 17.3552H7.0557C7.04218 17.3552 7.00162 17.3552 6.96736 17.3124C6.95024 17.2903 6.9313 17.2538 6.94302 17.2038C7.48209 14.828 9.56171 13.1689 12.0001 13.1689Z" fill="#00A389"/>
                                                    </svg>

                                                </div>
                                                <h5 className="font-w400 mb-0">Frize Studios</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-header border-0 pb-0 d-block">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h3 className="heading">Contacts</h3>
                                            <span>You have <span className="font-w600">456</span> contacts</span>
                                        </div>
                                        <div className="icon-box icon-box-sm bg-primary">
                                            <Link to={"#"} onClick={()=>setContactModal(true)}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 3C7.05 3 3 7.05 3 12C3 16.95 7.05 21 12 21C16.95 21 21 16.95 21 12C21 7.05 16.95 3 12 3ZM12 19.125C8.1 19.125 4.875 15.9 4.875 12C4.875 8.1 8.1 4.875 12 4.875C15.9 4.875 19.125 8.1 19.125 12C19.125 15.9 15.9 19.125 12 19.125Z" fill="white"></path>
                                                    <path d="M16.3503 11.0251H12.9753V7.65009C12.9753 7.12509 12.5253 6.67509 12.0003 6.67509C11.4753 6.67509 11.0253 7.12509 11.0253 7.65009V11.0251H7.65029C7.12529 11.0251 6.67529 11.4751 6.67529 12.0001C6.67529 12.5251 7.12529 12.9751 7.65029 12.9751H11.0253V16.3501C11.0253 16.8751 11.4753 17.3251 12.0003 17.3251C12.5253 17.3251 12.9753 16.8751 12.9753 16.3501V12.9751H16.3503C16.8753 12.9751 17.3253 12.5251 17.3253 12.0001C17.3253 11.4751 16.8753 11.0251 16.3503 11.0251Z" fill="white"></path>
                                                </svg>								
                                            </Link>									
                                        </div>	
                                    </div>	
                                    <div className="input-group custom-search-area mt-4">
                                        <span className="input-group-text">
                                            <Link to={"#"}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.5605 18.4395L16.7527 14.6317C17.5395 13.446 18 12.0262 18 10.5C18 6.3645 14.6355 3 10.5 3C6.3645 3 3 6.3645 3 10.5C3 14.6355 6.3645 18 10.5 18C12.0262 18 13.446 17.5395 14.6317 16.7527L18.4395 20.5605C19.0245 21.1462 19.9755 21.1462 20.5605 20.5605C21.1462 19.9747 21.1462 19.0252 20.5605 18.4395V18.4395ZM5.25 10.5C5.25 7.605 7.605 5.25 10.5 5.25C13.395 5.25 15.75 7.605 15.75 10.5C15.75 13.395 13.395 15.75 10.5 15.75C7.605 15.75 5.25 13.395 5.25 10.5V10.5Z" fill="var(--primary)"></path>
                                                </svg>
                                            </Link>
                                        </span>
                                        <input type="text" className="form-control border-start-0" placeholder="Search here..." />
                                    </div>
                                </div>
                                <div className="card-body pt-4 pb-0 height450 dz-scroll">
                                    <div className="contacts-list"  id="RecentActivityContent">
                                        {data.map((item, index)=>(
                                            <div className="d-flex justify-content-between mb-3 mt-3 pb-3" key={index}>
                                                <div className="d-flex align-items-center">
                                                    <img src={item.image} alt="" className="avatar" />
                                                    <div className="ms-3">
                                                        <h5 className="mb-1"><Link  className="text-secondary" to={"/app-profile"}>{item.title}</Link></h5>
                                                        <span className="fs-14 text-muted">Marketing Manager</span>
                                                    </div>
                                                </div>	
                                                <div className="icon-box icon-box-sm bg-primary-light">
                                                    <Link to={"#"}>
                                                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18 0.889911C18.0057 0.823365 18.0057 0.756458 18 0.689911L17.91 0.499911C17.91 0.499911 17.91 0.429911 17.86 0.399911L17.81 0.349911L17.65 0.219911C17.6062 0.175413 17.5556 0.138269 17.5 0.109911L17.33 0.0499115H17.13H0.93H0.73L0.56 0.119911C0.504246 0.143681 0.453385 0.177588 0.41 0.219911L0.25 0.349911C0.25 0.349911 0.25 0.349911 0.25 0.399911C0.25 0.449911 0.25 0.469911 0.2 0.499911L0.11 0.689911C0.10434 0.756458 0.10434 0.823365 0.11 0.889911L0 0.999911V12.9999C0 13.2651 0.105357 13.5195 0.292893 13.707C0.48043 13.8946 0.734784 13.9999 1 13.9999H10C10.2652 13.9999 10.5196 13.8946 10.7071 13.707C10.8946 13.5195 11 13.2651 11 12.9999C11 12.7347 10.8946 12.4803 10.7071 12.2928C10.5196 12.1053 10.2652 11.9999 10 11.9999H2V2.99991L8.4 7.79991C8.5731 7.92973 8.78363 7.99991 9 7.99991C9.21637 7.99991 9.4269 7.92973 9.6 7.79991L16 2.99991V11.9999H14C13.7348 11.9999 13.4804 12.1053 13.2929 12.2928C13.1054 12.4803 13 12.7347 13 12.9999C13 13.2651 13.1054 13.5195 13.2929 13.707C13.4804 13.8946 13.7348 13.9999 14 13.9999H17C17.2652 13.9999 17.5196 13.8946 17.7071 13.707C17.8946 13.5195 18 13.2651 18 12.9999V0.999911C18 0.999911 18 0.929911 18 0.889911ZM9 5.74991L4 1.99991H14L9 5.74991Z" fill="var(--primary)"></path>
                                                        </svg>
                                                    </Link>		
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-footer border-0 pt-0">
                                    <div className="text-center border-0 pt-3">
                                        <Link to={"#"} onClick={() => LoadMore()}
                                            className="btn btn-block btn-primary dz-load-more" id="RecentActivity" rel="ajax/message.html"
                                        >
                                            View More {" "}
                                            {refresh && <i className="fa fa-refresh"></i>}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-header d-block border-0 pb-0 ">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h3 className="heading">Messages</h3>
                                            <span>You have <span className="font-w600">10 New</span> Messages</span>
                                        </div>
                                        <Link to={"#"} className="icon-box icon-box-sm bg-primary" onClick={()=>setContactModal(true)}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 3C7.05 3 3 7.05 3 12C3 16.95 7.05 21 12 21C16.95 21 21 16.95 21 12C21 7.05 16.95 3 12 3ZM12 19.125C8.1 19.125 4.875 15.9 4.875 12C4.875 8.1 8.1 4.875 12 4.875C15.9 4.875 19.125 8.1 19.125 12C19.125 15.9 15.9 19.125 12 19.125Z" fill="white"></path>
                                                <path d="M16.3503 11.0251H12.9753V7.65009C12.9753 7.12509 12.5253 6.67509 12.0003 6.67509C11.4753 6.67509 11.0253 7.12509 11.0253 7.65009V11.0251H7.65029C7.12529 11.0251 6.67529 11.4751 6.67529 12.0001C6.67529 12.5251 7.12529 12.9751 7.65029 12.9751H11.0253V16.3501C11.0253 16.8751 11.4753 17.3251 12.0003 17.3251C12.5253 17.3251 12.9753 16.8751 12.9753 16.3501V12.9751H16.3503C16.8753 12.9751 17.3253 12.5251 17.3253 12.0001C17.3253 11.4751 16.8753 11.0251 16.3503 11.0251Z" fill="white"></path>
                                            </svg>										
                                        </Link>
                                    </div>
                                    <div className="input-group custom-search-area mt-4">
                                        <span className="input-group-text">
                                            <Link to={"#"}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.5605 18.4395L16.7527 14.6317C17.5395 13.446 18 12.0262 18 10.5C18 6.3645 14.6355 3 10.5 3C6.3645 3 3 6.3645 3 10.5C3 14.6355 6.3645 18 10.5 18C12.0262 18 13.446 17.5395 14.6317 16.7527L18.4395 20.5605C19.0245 21.1462 19.9755 21.1462 20.5605 20.5605C21.1462 19.9747 21.1462 19.0252 20.5605 18.4395V18.4395ZM5.25 10.5C5.25 7.605 7.605 5.25 10.5 5.25C13.395 5.25 15.75 7.605 15.75 10.5C15.75 13.395 13.395 15.75 10.5 15.75C7.605 15.75 5.25 13.395 5.25 10.5V10.5Z" fill="var(--primary)"></path>
                                                </svg>
                                            </Link>
                                        </span>
                                        <input type="text" className="form-control border-start-0" placeholder="Search here..." />
                                    </div>
                                </div>
                                
                                <div className="card-body height450 dz-scroll pt-4 pb-0">
                                    <div className="contacts-list" id="RecentMessagesContent">
                                        {data.map((item, index)=>(
                                            <div className="d-flex justify-content-between mb-3 mt-3 border-bottom pb-3" key={index}>
                                                <div className="d-flex align-items-center">
                                                    <img src={item.image} alt="" className="avatar" />
                                                    <div className="ms-3">
                                                        <h5 className="mb-1"><Link className="text-secondary" to={"/email-inbox"}>{item.title}</Link></h5>
                                                        <span className="fs-14 text-muted text-wrap">Lorem ipsum dolor sit amet...</span>
                                                    </div>
                                                </div>	
                                                <div className="text-end">
                                                    <span className="d-block mb-1">12:45 PM</span>
                                                    <span className="badge badge-primary">2</span>	
                                                </div>																				
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-footer border-0 pt-0">
                                    <div className="text-center border-0 pt-3">
                                        <Link to={"#"} onClick={() => onLoad()}
                                            className="btn btn-block btn-primary dz-load-more" id="RecentActivity" rel="ajax/message.html"
                                        >
                                            View More {" "}
                                            {refresh2 && <i className="fa fa-refresh"></i>}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="row">
                        <div className="col-xl-12 col-lg-6">
                            <div className="card">
                                <div className="prot-blog">
                                    <div className="d-flex post justify-content-between align-items-center">
                                        <h3 className="text d-inline mb-0">Current Plan</h3>
                                        <Dropdown className="dropdown">
                                            <Dropdown.Toggle as="div" className="i-false">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0012 9.86792C11.6543 9.86792 11.3109 9.93268 10.9904 10.0585C10.67 10.1843 10.3788 10.3687 10.1335 10.6012C9.88829 10.8337 9.69374 11.1097 9.56101 11.4134C9.42828 11.7172 9.35996 12.0427 9.35996 12.3715C9.35996 12.7003 9.42828 13.0258 9.56101 13.3296C9.69374 13.6333 9.88829 13.9093 10.1335 14.1418C10.3788 14.3743 10.67 14.5587 10.9904 14.6845C11.3109 14.8103 11.6543 14.8751 12.0012 14.8751C12.7017 14.8749 13.3734 14.611 13.8686 14.1414C14.3638 13.6718 14.6419 13.0349 14.6418 12.3709C14.6416 11.7069 14.3632 11.0702 13.8677 10.6008C13.3723 10.1314 12.7004 9.86777 12 9.86792H12.0012ZM3.60116 9.86792C3.25431 9.86792 2.91086 9.93268 2.59042 10.0585C2.26997 10.1843 1.97881 10.3687 1.73355 10.6012C1.48829 10.8337 1.29374 11.1097 1.16101 11.4134C1.02828 11.7172 0.959961 12.0427 0.959961 12.3715C0.959961 12.7003 1.02828 13.0258 1.16101 13.3296C1.29374 13.6333 1.48829 13.9093 1.73355 14.1418C1.97881 14.3743 2.26997 14.5587 2.59042 14.6845C2.91086 14.8103 3.25431 14.8751 3.60116 14.8751C4.30165 14.8749 4.97339 14.611 5.4686 14.1414C5.9638 13.6718 6.24192 13.0349 6.24176 12.3709C6.2416 11.7069 5.96318 11.0702 5.46775 10.6008C4.97231 10.1314 4.30045 9.86777 3.59996 9.86792H3.60116ZM20.4012 9.86792C20.0543 9.86792 19.7109 9.93268 19.3904 10.0585C19.07 10.1843 18.7788 10.3687 18.5336 10.6012C18.2883 10.8337 18.0937 11.1097 17.961 11.4134C17.8283 11.7172 17.76 12.0427 17.76 12.3715C17.76 12.7003 17.8283 13.0258 17.961 13.3296C18.0937 13.6333 18.2883 13.9093 18.5336 14.1418C18.7788 14.3743 19.07 14.5587 19.3904 14.6845C19.7109 14.8103 20.0543 14.8751 20.4012 14.8751C21.1017 14.8749 21.7734 14.611 22.2686 14.1414C22.7638 13.6718 23.0419 13.0349 23.0418 12.3709C23.0416 11.7069 22.7632 11.0702 22.2677 10.6008C21.7723 10.1314 21.1005 9.86777 20.4 9.86792H20.4012Z" fill="#FCFCFC"></path>
                                                </svg>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end" >
                                                <Dropdown.Item className="dropdown-item">Delete</Dropdown.Item>
                                                <Dropdown.Item className="dropdown-item" >Edit</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="fill">
                                        <h2 className="text mb-0">Premium</h2>
                                        <p className="mb-1">Expired on December 30th, 2022</p>
                                    </div>
                                    <h4 className="mb-0">
                                        <Link to={"/post-details"} className="text-bla">
                                            <svg className="me-2" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4.5" cy="4.5" r="4.5" fill="#FCFCFC"></circle>
                                            </svg>
                                            250 GB Storage
                                        </Link>
                                    </h4>
                                    <h4 className="mb-3">
                                        <Link to={"/post-details"} className="text-bla">
                                            <svg className="me-2" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4.5" cy="4.5" r="4.5" fill="#FCFCFC"></circle>
                                            </svg>
                                            Unlimited Tickets Support
                                        </Link>
                                    </h4>
                                    <Link to={"#"} className="upg">Upgrade Plan</Link>
                                    <div className="shape">
                                        <svg width="225" height="193" viewBox="0 0 225 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.25" d="M33.5363 229H202.479C212.704 229 222.221 224.41 228.611 216.417C235.048 208.362 237.435 197.967 235.156 187.894C226.373 149.176 199.898 118.742 165.333 104.048C174.942 92.9903 180.967 78.7346 180.967 62.9677C180.967 28.2457 152.725 0 118 0C83.2752 0 55.0333 28.2457 55.0333 62.9677C55.0333 78.7346 61.0582 92.9903 70.6672 104.048C36.1021 118.742 9.62733 149.179 0.8441 187.902C-1.43496 197.967 0.951892 208.355 7.38869 216.41C13.7793 224.41 23.3113 229 33.5363 229ZM86.5706 62.9677C86.5706 45.6414 100.676 31.5416 118 31.5416C135.324 31.5416 149.429 45.6414 149.429 62.9677C149.429 80.294 135.324 94.3938 118 94.3938C100.676 94.3938 86.5706 80.294 86.5706 62.9677ZM118 125.935C159.654 125.935 195.18 154.281 204.389 194.863C204.589 195.726 204.265 196.35 203.973 196.727C203.388 197.458 202.71 197.458 202.479 197.458H33.5363C33.3053 197.458 32.6123 197.458 32.0272 196.727C31.7346 196.35 31.4112 195.726 31.6114 194.871C40.82 154.281 76.3456 125.935 118 125.935Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-6 ">
                            <div className="card">
                                <div className="card-header border-0 pb-0 ">
                                    <h3 className="heading">Task</h3>
                                </div>
                                <div className="card-body pt-2">
                                    {taskData.map((data, ind)=>(
                                        <div className={`d-flex align-items-center ${ind === 0 || ind === 1 ? "mb-4" : '' }`} key={ind}>
                                            <div className="icon-box icon-box-sm bg-primary">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V6C0 6.53043 0.210714 7.03914 0.585786 7.41421C0.960859 7.78929 1.46957 8 2 8H6C6.53043 8 7.03914 7.78929 7.41421 7.41421C7.78929 7.03914 8 6.53043 8 6V2C8 1.46957 7.78929 0.960859 7.41421 0.585786C7.03914 0.210714 6.53043 0 6 0ZM2 6V2H6V6H2ZM16 0H12C11.4696 0 10.9609 0.210714 10.5858 0.585786C10.2107 0.960859 10 1.46957 10 2V6C10 6.53043 10.2107 7.03914 10.5858 7.41421C10.9609 7.78929 11.4696 8 12 8H16C16.5304 8 17.0391 7.78929 17.4142 7.41421C17.7893 7.03914 18 6.53043 18 6V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0ZM12 6V2H16V6H12ZM6 10H2C1.46957 10 0.960859 10.2107 0.585786 10.5858C0.210714 10.9609 0 11.4696 0 12V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H6C6.53043 18 7.03914 17.7893 7.41421 17.4142C7.78929 17.0391 8 16.5304 8 16V12C8 11.4696 7.78929 10.9609 7.41421 10.5858C7.03914 10.2107 6.53043 10 6 10ZM2 16V12H6V16H2ZM16 10H12C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12V16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V12C18 11.4696 17.7893 10.9609 17.4142 10.5858C17.0391 10.2107 16.5304 10 16 10ZM12 16V12H16V16H12Z" fill="#FCFCFC"></path>
                                                </svg>
                                            </div>
                                            <div className="ms-3">
                                                <h5 className="mb-1"><Link  className="text-secondary" to={"/activity"}>{data.title}</Link></h5>
                                                <ul className="d-flex">
                                                    <li className="me-3">{data.notask1} Task Now</li>
                                                    <li><svg width="6" className="me-3" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="3" cy="3.5" r="3" fill="#C4C4C4"></circle>
                                                        </svg>
                                                        {data.notask2} On Progress
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-12 ">
                            <div className="card">
                                <div className="card-header border-0 pb-0">
                                    <h3 className="heading mb-0">Lastest Activity</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="dz-scroll">
                                        <ul className="timeline-active">
                                            <li className="d-flex timeline-list">
                                                <div className="dz-media">
                                                    <img src={pic14} alt="" className="avatar" />
                                                </div>
                                                <div className="panel">
                                                    <Link to={"#"} className="timeline-panel text-muted d-flex align-items-center mb-0">
                                                        <h4 className="mb-0"><strong>Karen Hope</strong> moved task <strong className="text-primary">Frize Projects</strong> </h4>
                                                    </Link>
                                                    <span className="time py-0">Monday, June 31 2020</span>	
                                                </div>
                                            </li>
                                            <li className="d-flex timeline-list">
                                                <div className="dz-media">
                                                    <img src={pic18} alt="" className="avatar" />
                                                </div>
                                                <div className="panel">
                                                    <Link to={"#"} className="timeline-panel text-muted d-flex align-items-center mb-0">
                                                        <h4 className="mb-0" ><strong>Tony Soap </strong> commented at <strong className="text-primary"> Frize Projects </strong></h4>
                                                    </Link>
                                                    <span className="time py-0">Monday, June 31 2020</span>	
                                                    
                                                </div>
                                            </li>
                                            <li className="d-flex timeline-list pb-0">
                                                <div className="dz-media">
                                                    <img src={pic19} alt="" className="avatar" />
                                                </div>
                                                <div className="panel">
                                                    <Link to={"#"} className="timeline-panel text-muted d-flex align-items-center mb-0" >
                                                        <h4 className="mb-0" ><strong>Samantha William </strong> add 4 files on  Frize <strong className="text-danger">Projects </strong></h4>
                                                    </Link>
                                                    <span className="time py-0">Monday, June 31 2020</span>	
                                                </div>
                                                
                                            </li>
                                        </ul>
                                    </div>	
                                </div>
                            </div>
                        </div>
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
    );
}
export default User;