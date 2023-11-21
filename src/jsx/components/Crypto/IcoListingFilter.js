import React, {useState, useEffect} from 'react';
//import {Tab, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion"

const IcoListingFilter = () =>{

    const cardData = [
        {cardid:'9',title: 'Bitcoin', subtitle:'Finance', icon : 'fa-solid fa-bitcoin-sign', price:'$72', percent: '50',type:'Neutral', date: 'Ended 12 Oct'},
        {cardid:'1',title: 'Litecoin', subtitle:'Infrastructure', icon : 'fa-solid fa-litecoin-sign', price:'$74', percent: '80',type:'Neutral', date: 'Ended 12 Oct'},
        {cardid:'4',title: 'Etherium', subtitle:'Construction', icon : 'fa-brands fa-ethereum', price:'$30', percent: '50',type:'Neutral', date: 'Ended 20 Oct'},
        {cardid:'2',title: 'Monero', subtitle:'Infrastructure', icon : 'fa-brands fa-monero', price:'$72', percent: '80',type:'Not Rated', date: 'Ended 25 Oct'},
        {cardid:'7',title: 'Cardano', subtitle:'Infrastructure', icon : 'fa-brands fa-digital-ocean', price:'$72', percent: '20',type:'Neutral', date: '15 Days Oct'},
        {cardid:'5',title: 'Ardor', subtitle:'Infrastructure', icon : 'fa-brands fa-airbnb', price:'$72', percent: '80',type:'Neutral', date: '9 Days Oct'},
        {cardid:'9',title: 'OmiGO', subtitle:'Infrastructure', icon : 'fa-brands fa-affiliatetheme', price:'$85', percent: '70',type:'Not Rated', date: 'Ended 20 No'},
        {cardid:'5',title: 'Tether', subtitle:'Infrastructure', icon : 'fa-brands fa-steam-symbol', price:'$72', percent: '80',type:'Not Rated', date: '15 Day Left'},
        {cardid:'9',title: 'Komodo', subtitle:'Devolopment', icon : 'fa-brands fa-korvue', price:'$72', percent: '80',type:'Neutral', date: '9 Day Left'},
        {cardid:'7',title: 'Arc', subtitle:'Technology', icon : 'fa-solid fa-austral-sign', price:'$82', percent: '70',type:'Neutral', date: 'Ended 20 Oct'},
        {cardid:'2',title: 'Quantom', subtitle:'Future', icon : 'fa-solid fa-biohazard', price:'$75', percent: '60',type:'Science', date: 'Ended 15 Oct'},
        {cardid:'1',title: 'Nem', subtitle:'Infrastructure', icon : 'fa-solid fa-fan', price:'$72', percent: '50',type:'Neutral', date: 'Ended 10 No'},
        {cardid:'5',title: 'Augur', subtitle:'Manufacturing', icon : 'fa-brands fa-atlassian', price:'$90', percent: '85',type:'Not Rated', date: 'Ended 15 No'},
        {cardid:'9',title: 'Atoms', subtitle:'Technology', icon : 'fa-solid fa-atom', price:'$72', percent: '80',type:'Neutral', date: 'Ended 20 Nov'},
        {cardid:'7',title: 'Startis', subtitle:'Trading', icon : 'fa-solid fa-layer-group', price:'$72', percent: '99',type:'Not Rated', date: 'Ended 27 Nov'},
        {cardid:'5',title: 'Sango', subtitle:'Curruncy', icon : 'fa-solid fa-lari-sign', price:'$65', percent: '75',type:'Neutral', date: 'Ended 28 Nov'},
        {cardid:'7',title: 'Fragmint', subtitle:'Plateform', icon : 'fa-solid fa-franc-sign', price:'$55', percent: '65',type:'Science', date: 'Ended 30 Nov'},
        {cardid:'5',title: 'Crypcrade', subtitle:'Investment & Trading', icon : 'fa-sharp fa-solid fa-copyright', price:'$50', percent: '40',type:'Not Rated', date: 'Ended 03 Dec'},
        {cardid:'4',title: 'Ameta', subtitle:'Gaming', icon : 'fa-brands fa-angular', price:'$72', percent: '80',type:'Neutral', date: 'Ended 07 Dec'},
        {cardid:'9',title: 'Moverse', subtitle:'Blockchain Service', icon : 'fa-brands fa-phoenix-framework', price:'$30', percent: '70',type:'Not Rated', date: 'Ended 20 Dec'},
    ];

     const [popular, setPopular ] = useState([]);
     const [filtered, setFiltered ] = useState([]);
     const [activeGenre, setActiveGenre ] = useState(0);
    

    useEffect(()=>{
        fetchPopular();
    },[])
    function  fetchPopular(){
        setPopular(cardData);
        setFiltered(cardData);
    }

    useEffect(()=>{
        if(activeGenre===0){
            setFiltered(cardData);
            return;
        }
        const filtered = popular.filter((card)=>
         card.cardid.includes(activeGenre)
        );
        setFiltered(filtered);
    }, [activeGenre]);
    //console.log(filtered);
    //console.log('filtered');
    return(
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card Infra">
                        <div className="card-header border-0">
                            <div className="site-filters clearfix center m-b40">
                                <ul className="filters" data-bs-toggle="buttons">
                                    <li data-filter="" className={`btn ${activeGenre === 0 ? "active" : ""}`}>
                                        <Link to={"#"} className="site-button" onClick={()=>setActiveGenre(0)}>Show All</Link> 
                                    </li>
                                    <li data-filter=".infra" className={`btn ${activeGenre === 5 ? "active" : ""}`}>
                                        <Link to={"#"} className="site-button" onClick={()=>setActiveGenre(5)}>Infrastructure</Link> </li>
                                    <li data-filter=".gaming"  className={`btn ${activeGenre === 7 ? "active" : ""}`}>
                                        <Link to={"#"} className="site-button" onClick={()=>setActiveGenre(7)}>Gaming</Link> 
                                    </li>
                                    <li data-filter=".trade"  className={`btn ${activeGenre === 9 ? "active" : ""}`}>
                                        <Link to={"#"} className="site-button" onClick={()=>setActiveGenre(9)}>Trading</Link> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="row">
                        <div className="col-xl-2 col-lg-4">
                            <div className="card check-filter">
                                <div className="card-body site-filters clearfix">
                                    <ul className="filters d-grid" data-bs-toggle="radio">
                                        <li data-filter="" className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked
                                                onClick={()=>setActiveGenre(0)}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">All</label>
                                        </li>
                                        <li data-filter=".rated" className="form-check" >
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  
                                                onClick={()=>setActiveGenre(1)}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">Rated</label>
                                        </li>
                                        <li data-filter=".notrated" className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" 
                                              onClick={()=>setActiveGenre(2)}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault3">Not Rated</label>
                                        </li>
                                        <li data-filter=".spo" className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" 
                                                onClick={()=>setActiveGenre(4)}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault4">Sponsered</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-10">
                            <ul 
                                //layout  
                                id="masonry" className="row"
                                //transition={{ duration: 0.3 }}
                            >
                                <AnimatePresence>
                                    {filtered.map((item, index)=>{
                                        return(                                       
                                            <motion.li 
                                                layout
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="col-xl-3 col-md-6 infra rated px-3" key={index}
                                                //transition={{ duration: 0.5 }}
                                            >
                                                <div className="card pull-up">
                                                    <div className="card-body align-items-center flex-wrap">
                                                        <div className="d-flex align-items-center mb-4">
                                                            <Link to={"#"} className="ico-icon">
                                                                <i className={item.icon}></i>
                                                            </Link>
                                                            <div className="ms-4">
                                                                <h4 className="heading mb-0">{item.title}</h4>
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
                                            </motion.li>
                                     )})}
                                </AnimatePresence>
                            </ul>

                        </div>

                    </div>
                </div>
            
            </div>
        </>
    )
}
export default IcoListingFilter;