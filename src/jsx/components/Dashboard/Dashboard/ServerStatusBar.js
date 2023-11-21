import React from "react";
import ReactApexChart from "react-apexcharts";

class ServerStatusBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
		series: [
			{
				name: 'Running',
				data: [96, 60, 90],
				//radius: 12,	
			}, 
			{
			  name: 'Cycling',
			  data: [80, 40, 55]
			}, 
			
		],
      options: {
        chart: {
          type: "bar",
          height: 170,
		  
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
			columnWidth: '100%',
			 //startingShape: false,
			endingShape: "rounded",
			borderRadius: 8,
          },
        },
		
		states: {
		  hover: {
			filter: 'none',
		  }
		},
		colors:['var(--primary)', 'var(--secondary)'],
        dataLabels: {
			enabled: true,
			offsetY: -30 ,
			  style: {
				fontSize: '14px',
				fontWeight: '600',
			},
		},
		markers: {
			shape: "circle",
		},
		legend: {
			show: false,
			fontSize: '12px',
			labels: {
				colors: '#000000',
				
				},
			markers: {
				width: 18,
				height: 18,
				strokeWidth: 10,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
			}
		},
		stroke: {
		  show: true,
		  width:20,
		  curve: 'smooth',
		  lineCap: 'round',
		  colors: ['transparent']
		},
		grid: {
			show: false,
			xaxis: {
				lines: {
					show: false,
				}
			},
			 yaxis: {
					lines: {
						show: false
					}
				},  				
		},
		xaxis: {
			categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
			labels: {
				show: false,
				style: {
					colors: '#A5AAB4',
					fontSize: '14px',
					fontWeight: '500',
					fontFamily: 'poppins',
					cssClass: 'apexcharts-xaxis-label',
				},
			},
			crosshairs: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			}, 			
		},
		yaxis: {
			labels: {
			show: false,
				offsetX:-16,
			   style: {
				  colors: '#000000',
				  fontSize: '13px',
				   fontFamily: 'poppins',
				  fontWeight: 100,
				  cssClass: 'apexcharts-xaxis-label',
			  },
		  },
		},
			
			
      },
    };
  }

  render() {
    return (
      <div id="chartBar" className="chartBar">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={170}
        />
      </div>
    );
  }
}

export default ServerStatusBar;
