import React from "react";
//import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
 // Marker,
  //Annotation
} from "react-simple-maps";

//import allStates from "./allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

/* const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
}; */

const MapChart = () => {
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill="#eff2f4"
              />
            ))}
            
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;