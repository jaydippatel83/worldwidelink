import React from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";

class TotaldipositChart extends React.Component {  
	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					name: 'Net Profit',
					data: [200,300, 200, 250, 200, 240, 180,230,200, 200, 200],				
				}, 
            ],
			options: {
				chart: {
					type: "area",
					height: 130,
					width: 400,                    
					toolbar: {
						show: false,
					},
					zoom: {
						enabled: false
					},
					sparkline: {
						enabled: true
					}
				},
                
				/* plotOptions: {
                    bar: {
                        horizontal: false,
                        endingShape:'rounded',
                        columnWidth: '35%',
                        borderRadius: 2,                    
                    },
                }, */
				
				colors:['var(--primary)'],
				dataLabels: {
				  enabled: false,
				},

				legend: {
					show: false,
				},
				stroke: {
				  show: true,
				  width: 3,
				  curve:'smooth',
				  colors:['#DE97DF'],
				},
                grid: {
					show:false,
					borderColor: '#eee',
					padding: {
						top: 0,
						right: 0,
						bottom: 0,
						left: -1

					}
				},
				states: {
					normal: {
						filter: {
							type: 'none',
							value: 0
						}
					},
					hover: {
						filter: {
							type: 'none',
							value: 0
						}
					},
					active: {
						allowMultipleDataPointsSelection: false,
						filter: {
							type: 'none',
							value: 0
						}
					}
				},
				xaxis: {
					//categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July','August', 'Sept','Oct'],
					axisBorder: {
						show: false,
					},
					axisTicks: {
						show: false
					},
					labels: {
						show: false,
						style: {
							fontSize: '12px',
						}
					},
					crosshairs: {
						show: false,
						position: 'front',
						stroke: {
							width: 1,
							dashArray: 3
						}
					},
					tooltip: {
						enabled: true,
						formatter: undefined,
						offsetY: 0,
						style: {
							fontSize: '12px',
						}
					}
				},
				yaxis: {
					show: false,
				},	
				fill: {
				  opacity: 0.9,
				  colors:'#DE97DF',
				  type: 'gradient', 
				  gradient: {
					colorStops:[ 
						
						{
						  offset: 0,
						  color: '#DE97DF',
						  opacity: .8
						},
						{
						  offset: 0.6,
						  color: '#DE97DF',
						  opacity: .6
						},
						{
						  offset: 100,
						  color: 'white',
						  opacity: 0
						}
					  ],
					  
					}
				},
				tooltip: {
					enabled:false,
					style: {
						fontSize: '12px',
					},
					y: {
						formatter: function(val) {
							return "$" + val + " thousands"
						}
					}
				}	
			}, 
		};
	}

  
	render() {
        return (
            <div id="TotaldipositChart">
                <ReactApexChart 
					options={this.state.options} 
					series={this.state.series} 
					type="area" 
					height={130}  
					width={400}
				/>
            </div>
        );
	}
}

export default TotaldipositChart;