import React, { Component } from "react";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea  } from "react-chartjs-2";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
   defaultFontFamily: "Poppins",
   datasets: [
      {
         data: [15, 18, 9, 6, 19],
         borderWidth: 0,
         backgroundColor: [
            "rgba(258, 128, 25,1)",
            "rgba(112, 159, 186, 1)",
            "rgba(255, 106, 89,1)",
            "rgba(54, 147, 255, 1)",
            "rgba(136,108,196, 1)",
         ],
      },
   ],
};

const options = {
	type: 'polarArea',
   plugins:{   
	responsive: true,
   },
   maintainAspectRatio: false,
};
class PolarChart extends Component {
   render() {
      return <PolarArea  data={data} options={options} height={150} />;
   }
}

export default PolarChart;
