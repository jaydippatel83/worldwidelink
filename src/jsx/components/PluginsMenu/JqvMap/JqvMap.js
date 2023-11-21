import React from "react";

///import Usa from "@svg-maps/usa";
//import World from "@svg-maps/world";
//import { SVGMap } from "react-svg-map";
//import "react-svg-map/lib/index.css";
import MapChart from './MapChart';
import WorldMap from './WorldMap';


import PageTitle from "../../../layouts/PageTitle";

// const data = [
//     {country: 'cn', value: 1389618778}, // china
//     {country: 'in', value: 1311559204}, // india
//     {country: 'us', 	value: 331883986}, // united states
//     {country: 'id', 	value: 264935824}, // indonesia
//     {country: 'pk', 	value: 210797836}, // pakistan
//     {country: 'br', 	value: 210301591}, // brazil
//     {country: 'ng', 	value: 208679114}, // nigeria
//     {country: 'bd', 	value: 161062905}, // bangladesh
//     {country: 'ru', 	value: 141944641}, // russia
//     {country: 'mx', 	value: 127318112}, // mexico
//  ];
 

const JqvMap = () => {
	//const [selected, onSelect] = useState(null);
	
  return (
    <div className="h-80">
      <PageTitle activeMenu="JqvMap" pageContent="JqvMap" motherMenu="Map" />

      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">World Map</h4>
            </div>
            <div className="card-body mb-2" style={{ height: "100%" }}>            
                <div id="world-map" style={{ height: "100%" }}>
                  {/* <SVGMap map={World} /> */}
                  {/* <WorldMapUsa selected={selected} onSelect={onSelect} />		 */}
                  <WorldMap />
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">USA</h4>
            </div>
            <div className="card-body mb-2" style={{ height: "100%" }}>
			  <div id="usa" style={{ height: "100%" }}>				  
				  <MapChart />
			  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JqvMap;
