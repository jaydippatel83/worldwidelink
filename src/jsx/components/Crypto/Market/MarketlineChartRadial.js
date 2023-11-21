import React from "react";
import ReactApexChart from "react-apexcharts";

class MarketlineChartRadial extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
		series: [76],
        chartOptions: {
            colors: ['#9568ff']
        },
      	options: {
			chart: {
			    type: 'radialBar',
                offsetY: -20,
		        height:250,
                sparkline: {
                    enabled: true
                }
			},
            plotOptions: {
                radialBar: {
                    width: '80%',
                    color: "#9568ff",
                    background: "var(--primary)",
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                      background: "var(--secondary)",
                      color: "#9568ff",
                      strokeWidth: '97%',
                      margin: 5, // margin is in pixels
                      dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#fff',
                        opacity: 1,
                        blur: 2
                      }
                    },
                    dataLabels: {
                        name: {
                          show: false
                        },
                        value: {
                          offsetY: -2,
                          fontSize: '22px'
                        }
                    }
                }
            },
            grid: {
                padding: {
                  top: 0
                }
            },
			fill: {
                opacity:1.5,
                type: 'gradient',
                color:['#9568ff'],
                gradient: {
                    gradientToColors: ['#9568ff'],
                    shadeIntensity: 1,
                    opacityFrom: 1,
                    opacityTo: 2,
                    stops: [0,0, 100],
                    inverseColors: false
                },
            },
            labels: ['Average Results'],
            
            
      	},
    };
  }

  render() {
    return (
      <div id="chartRadial">
        <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={250}
        />
      </div>
    );
  }
}

export default MarketlineChartRadial;
