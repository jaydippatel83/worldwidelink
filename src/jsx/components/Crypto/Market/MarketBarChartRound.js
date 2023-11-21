import React from "react";
import ReactApexChart from "react-apexcharts";

class MarketBarChartRound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
		series: [
			{
                name: 'Running',
                data: [96, 60, 90,60,50],
                //radius: 12,	
            }, 
            {
              name: 'Cycling',
              data: [80, 40, 55,40,80]
            }, 
			
		],
      	options: {
			chart: {
			    type: "bar",
			    height: 110,		
                toolbar: {
                    show: false,
                },
			},
			plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '60%',
                    endingShape: "rounded",
                    borderRadius: 1,
                },
			},
			
			states: {
                hover: {
                  filter: 'none',
                }
            },
			colors:['var(--primary)', 'var(--secondary)'],
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
                    width: 10,
                    height: 10,
                    strokeWidth: 10,
                    strokeColor: '#fff',
                    fillColors: undefined,
                    radius: 5,	
				}
			},
            dataLabels: {
                enabled: false,
                offsetY: -30,
                style: {
                  fontSize: '14px',
                  fontWeight: '600',
              },
            },
            
			stroke: {
                show: true,
                width:20,
                curve: 'smooth',
                lineCap: 'rounded',
                colors: ['transparent']
            },
			grid: {
				show:false,
				borderColor: '#eee',
				padding: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}
			},
			xaxis: {
				//categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
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
      <div id="chartRound">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={110}
        />
      </div>
    );
  }
}

export default MarketBarChartRound;
