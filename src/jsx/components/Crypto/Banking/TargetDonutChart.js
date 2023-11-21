import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class TargetDonutChart extends Component {
  render() {
    const data = {
		weight: 0,
		defaultFontFamily: "Poppins",
		datasets: [
			{
				data: [this.props.value, 100 - this.props.value],
				borderWidth: 0,
				backgroundColor: [
					this.props.backgroundColor,
					this.props.backgroundColor2,
				],
			},
		],
    };

    const options = {
      width: 90,
      //cutoutPercentage: 60,
      cutout: "75%",
      responsive: false,
      maintainAspectRatio: true,
      tooltips: { enabled: false },
      hover: { mode: null },
    };
    return (
      <div className="donut4" style={{ marginTop: "-10px" }}>
        <Doughnut data={data} options={options} height={170} width={170} />
      </div>
    );
  }
}

export default TargetDonutChart;
