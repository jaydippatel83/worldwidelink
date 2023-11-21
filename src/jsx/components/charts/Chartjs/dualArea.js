import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  defaultFontFamily: "Poppins",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "My First dataset",
      data: [25, 20, 60, 41, 66, 45, 80],
      borderColor: "rgba(0, 161, 93, 1)",
      borderWidth: "1",
      backgroundColor: "rgba(0, 161, 93, .1)",
      tension:0.4,
      fill:true
    },
    {
      label: "My First dataset",
      data: [5, 25, 20, 41, 36, 75, 70],
      borderColor: "rgba(149, 105, 255,1)",
      borderWidth: "1",
      backgroundColor: "rgba(149, 105, 255, .5)",
      tension:0.4,
      fill:true
    },
  ],
};

const options = {
  plugins:{
	  legend: false,
  },
  scales: {
    y: 
      {
		    max: 100,
        min: 0,
        ticks: {
          beginAtZero: true,
          stepSize: 20,
          padding: 10,
        },
      },
    
    x: 
      {
        ticks: {
          padding: 5,
        },
      },
    
  },
};
class DualArea extends Component {
  render() {
    return (
      <>
        <Line data={data} options={options} height={150} />
      </>
    );
  }
}

export default DualArea;
