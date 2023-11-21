import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

//const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
//const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const WorldMap = () => {
	
  return (
    <ComposableMap>
      <Geographies geography="./features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
	
	
  );
};

export default WorldMap;
