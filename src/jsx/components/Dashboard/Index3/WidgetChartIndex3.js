import React from "react";
import ReactApexChart from "react-apexcharts";

class WidgetChartIndex3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
            name: 'Net Profit',
            data: [200, 310, 50, 250, 50, 300, 100, 200,],
        },
      ],
      options: {
        chart: {
          height: 70,
          type: "line",
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
        colors:['#0E8A74'],
        dataLabels: {
            enabled: false,
        },
  
        legend: {
            show: false,
        },
        stroke: {
            show: true,
            width: 6,
            curve:'smooth',
            colors:['rgba(255, 255, 255, 0.5)'],
        },
        grid: {
			show:false,
			borderColor: '#eee',
			padding: {
				top: 10,
				right: 0,
				bottom: 20,
				left: 0

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
			categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
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
				enabled: false,
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
		  opacity: 1,
		  colors:'#FB3E7A'
		},
		tooltip: {
			style: {
				fontSize: '13px',
				fontFamily: 'Poppins',
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
      <div id="widgetChart3" className="chart-primary">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={70}
        />
      </div>
    );
  }
}

export default WidgetChartIndex3;
