import React,{useState} from 'react';
//import { Dropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Select from 'react-select';

import user from './../../../../images/profile/pic1.jpg';

const inputBlog = [
    { label:'Name', value:'John' },
    { label:'Surname', value:'Brahim' },
    { label:'Specialty', value:'Developer' },
    { label:'Skills', value:'HTML,  JavaScript,  PHP' },
];

const options2 = [
    { value: '1', label: 'Select' },
    { value: '2', label: 'Male' },
    { value: '3', label: 'Female' },
    { value: '4', label: 'Other' }
]
const options3 = [
    { value: '1', label: 'Russia' },
    { value: '2', label: 'Canada' },
    { value: '3', label: 'China' },
    { value: '4', label: 'India' }
]
const options4 = [
    { value: '1', label: 'Krasnodar' },
    { value: '2', label: 'Tyumen' },
    { value: '3', label: 'Chelyabinsk' },
    { value: '4', label: 'Moscow' }
]

const EditProfile = () => {
   // const [selectOption , setSelectOption] = useState('Gender');
    return(
        <>
            <div className="row">
                <div className="col-xl-3 col-lg-4">
                    <div className="clearfix">
                        <div className="card card-bx profile-card author-profile m-b30">
                            <div className="card-body">
                                <div className="p-5">
                                    <div className="author-profile">
                                        <div className="author-media">
                                            <img src={user} alt="" />
                                            <div className="upload-link" title="" data-toggle="tooltip" data-placement="right" data-original-title="update">
                                                <input type="file" className="update-flie" />
                                                <i className="fa fa-camera"></i>
                                            </div>
                                        </div>
                                        <div className="author-info">
                                            <h6 className="title">Nella Vita</h6>
                                            <span>Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-list">
                                    <ul>
                                        <li><Link to={"/app-profile"}>Models</Link><span>36</span></li>
                                        <li><Link to={"/uc-lightgallery"}>Gallery</Link><span>3</span></li>
                                        <li><Link to={"/app-profile"}>Lessons</Link><span>1</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="input-group mb-3">
                                    <div className="form-control rounded text-center bg-white">Portfolio</div>
                                </div>
                                <div className="input-group">
                                    <a href="https://www.dexignzone.com/" target="blank" className="form-control text-primary rounded text-start bg-white">https://www.dexignzone.com/</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-8">
                    <div className="card profile-card card-bx m-b30">
                        <div className="card-header">
                            <h6 className="title">Account setup</h6>
                        </div>
                        <form className="profile-form">
                            <div className="card-body">
                                <div className="row">
                                    { inputBlog.map((item, ind)=>(
                                        <div className="col-sm-6 m-b30" key={ind}>
                                            <label className="form-label">{item.label}</label>
                                            <input type="text" className="form-control" defaultValue={item.value}  />
                                        </div>
                                    ))}
                                   
                                    <div className="col-sm-6 m-b30">                                        
                                        <label className="form-label">Gender</label>
                                        <Select options={options2}  className="custom-react-select" 
                                            defaultValue={options2[0]}
                                            isSearchable={false}
                                        />
                                          
                                    </div>
                                    <div className="col-sm-6 m-b30">
                                        <label className="form-label">Birth</label>
                                        <input type="text" className="form-control" placeholder="dd. mm .yyyy" />
                                    </div>
                                    <div className="col-sm-6 m-b30">
                                        <label className="form-label">Phone</label>
                                        <input type="text" className="form-control" defaultValue="+123456789" />
                                    </div>
                                    <div className="col-sm-6 m-b30">
                                        <label className="form-label">Email address</label>
                                        <input type="text" className="form-control" defaultValue="demo@gmail.com" />
                                    </div>
                                    <div className="col-sm-6 m-b30">
                                        <label className="form-label">Country</label>
                                        <Select options={options3}  className="custom-react-select" 
                                            defaultValue={options3[0]}
                                            isSearchable={false}
                                        />
                                    </div>
                                    <div className="col-sm-6 m-b30">
                                        <label className="form-label">City</label> 
                                        <Select options={options4}  className="custom-react-select" 
                                            defaultValue={options4[0]}
                                            isSearchable={false}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary">UPDATE</button>
                                <Link to={"#"} className="btn-link">Forgot your password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProfile;