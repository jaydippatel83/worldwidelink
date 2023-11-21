import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import ReactSlider from 'react-slider'
import Nouislider from "nouislider-react";
//import noUiSlider from "nouislider";
//import "nouislider/distribute/nouislider.css";
//import 'nouislider/dist/nouislider.css';

//let slider;

// function destroyExistingSlider(){
//   if(slider && slider.noUiSlider){
//     slider.noUiSlider.destroy();
//   }
// }

const OrderForm = () =>{
	// useEffect(()=>{
	// 	//destroyExistingSlider();
	// 	var slider = document.getElementById('slider');
	// 	noUiSlider.create(slider, {
	// 		start: [20, 80],
	// 		connect: true,
	// 		range: {
	// 			'min': 0,
	// 			'max': 100
	// 		}
	// 	});
	//});
	return(
		<>
			<form>
				<div className="sell-blance">
					<label className="form-label text-primary">Price</label>
					<div className="form-label blance"><span>BALANCE:</span><p>$3,123.9</p></div>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="0.00" />
						<span className="input-group-text">USDT</span>
					</div>
				</div>
				<div className="sell-blance">
					<label className="form-label text-primary">Amount</label>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Amount" />
						<span className="input-group-text">BTC</span>
					</div>
				</div>
				<div className="sell-blance">
					<label className="form-label text-primary">Total</label>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Total" />
						<span className="input-group-text">USDT</span>
					</div>
				</div>
				<div className="slider-wrapper">
					{/* <div id="slider"></div> */}
				  {/* <div id="employees"></div> */}
					{/* <Nouislider range={{ min: 0, max: 100 }} start={[20, 80]} connect /> */}
					<ReactSlider
						min={5}
						max={99}
						defaultValue={27}
						className="progress-slider"
						//thumbClassName="example-thumb"
						//trackClassName="example-track"
						renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
					/>
					
				</div>
				<div className="text-center">
					<Link to={"/exchange"} className="btn btn-primary w-75">BUY BTC</Link>
				</div>
					
			</form>
		</>
	)
}
export default OrderForm;