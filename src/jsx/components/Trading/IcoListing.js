import {React} from 'react';
import {Link} from 'react-router-dom';



const listingData = [
    {title: 'Bitcoin', subtitle:'Finance', icon : 'fa-solid fa-bitcoin-sign', price:'$72', percent: '50',type:'Neutral', date: 'Ended 12 Oct'},
    {title: 'Litecoin', subtitle:'Infrastructure', icon : 'fa-solid fa-litecoin-sign', price:'$74', percent: '80',type:'Neutral', date: 'Ended 12 Oct'},
    {title: 'Etherium', subtitle:'Construction', icon : 'fa-brands fa-ethereum', price:'$30', percent: '50',type:'Neutral', date: 'Ended 20 Oct'},
    {title: 'Monero', subtitle:'Infrastructure', icon : 'fa-brands fa-monero', price:'$72', percent: '80',type:'Not Rated', date: 'Ended 25 Oct'},
    {title: 'Cardano', subtitle:'Infrastructure', icon : 'fa-brands fa-digital-ocean', price:'$72', percent: '20',type:'Neutral', date: '15 Days Oct'},
    {title: 'Ardor', subtitle:'Infrastructure', icon : 'fa-brands fa-airbnb', price:'$72', percent: '80',type:'Neutral', date: '9 Days Oct'},
    {title: 'OmiGO', subtitle:'Infrastructure', icon : 'fa-brands fa-affiliatetheme', price:'$85', percent: '70',type:'Not Rated', date: 'Ended 20 No'},
    {title: 'Tether', subtitle:'Infrastructure', icon : 'fa-brands fa-steam-symbol', price:'$72', percent: '80',type:'Not Rated', date: '15 Day Left'},
    {title: 'Komodo', subtitle:'Devolopment', icon : 'fa-brands fa-korvue', price:'$72', percent: '80',type:'Neutral', date: '9 Day Left'},
    {title: 'Arc', subtitle:'Technology', icon : 'fa-solid fa-austral-sign', price:'$82', percent: '70',type:'Neutral', date: 'Ended 20 Oct'},
    {title: 'Quantom', subtitle:'Future', icon : 'fa-solid fa-biohazard', price:'$75', percent: '60',type:'Science', date: 'Ended 15 Oct'},
    {title: 'Nem', subtitle:'Infrastructure', icon : 'fa-solid fa-fan', price:'$72', percent: '50',type:'Neutral', date: 'Ended 10 No'},
    {title: 'Augur', subtitle:'Manufacturing', icon : 'fa-brands fa-atlassian', price:'$90', percent: '85',type:'Not Rated', date: 'Ended 15 No'},
    {title: 'Atoms', subtitle:'Technology', icon : 'fa-solid fa-atom', price:'$72', percent: '80',type:'Neutral', date: 'Ended 20 Nov'},
    {title: 'Startis', subtitle:'Trading', icon : 'fa-solid fa-layer-group', price:'$72', percent: '99',type:'Not Rated', date: 'Ended 27 Nov'},
    {title: 'Sango', subtitle:'Curruncy', icon : 'fa-solid fa-lari-sign', price:'$65', percent: '75',type:'Neutral', date: 'Ended 28 Nov'},
    {title: 'Fragmint', subtitle:'Plateform', icon : 'fa-solid fa-franc-sign', price:'$55', percent: '65',type:'Science', date: 'Ended 30 Nov'},
    {title: 'Crypcrade', subtitle:'Investment & Trading', icon : 'fa-sharp fa-solid fa-copyright', price:'$50', percent: '40',type:'Not Rated', date: 'Ended 03 Dec'},
    {title: 'Ameta', subtitle:'Gaming', icon : 'fa-brands fa-angular', price:'$72', percent: '80',type:'Neutral', date: 'Ended 07 Dec'},
    {title: 'Moverse', subtitle:'Blockchain Service', icon : 'fa-brands fa-phoenix-framework', price:'$30', percent: '70',type:'Not Rated', date: 'Ended 20 Dec'},
];

const IcoListing = () => {
    return(
        <>
            <div className="row">
                <div className="col-xl-12">                       
                    <div className="row">
                        {listingData.map((item, ind)=>(
                            <div className="col-xl-3 col-md-6 col-sm-6" key={ind}>
                                <div className="card pull-up">
                                    <div className="card-body align-items-center flex-wrap">
                                        <div className="d-flex align-items-center mb-4">
                                            <Link t={"#"} className="ico-icon">
                                                <i className={item.icon}></i>
                                            </Link>
                                            <div className="ms-4">
                                                <Link t={"#"}><h4 className="heading mb-0">{item.title}</h4></Link>
                                                <span>{item.subtitle}</span>
                                            </div>
                                        </div>	
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fs-14 text-black">{item.price}/100</p>
                                                <span className="fs-12">{item.type}</span>
                                            </div>
                                            <div>
                                                <p className="mb-0 fs-14 text-success">{item.percent}%</p>
                                                <span className="fs-12">{item.date}</span>
                                            </div>
                                        </div>
                                    </div>	
                                </div>
                            </div>
                        ))}
                        <div className="col-xl-12">
                            <div className="table-pagenation mb-3">
                                <p className="ms-0 mb-0">Showing <span>1-5</span>from <span>100</span>data</p>
                                <nav>
                                    <ul className="pagination pagination-gutter pagination-primary no-bg">
                                        <li className="page-item page-indicator">
                                            <Link to={"#"} className="page-link">
                                                <i className="fa-solid fa-angle-left"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item "><Link to={"#"} className="page-link" >1</Link></li>
                                        <li className="page-item active"><Link to={"#"} className="page-link" >2</Link></li>
                                        <li className="page-item"><Link to={"#"} className="page-link" >3</Link></li>
                                        <li className="page-item page-indicator me-0">
                                            <Link to={"#"} className="page-link" >
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

export default IcoListing;