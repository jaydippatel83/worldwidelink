import React from "react";
import ReactApexChart from "react-apexcharts";

class MarketAreaChart extends React.Component {  
	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					name: 'Net Profit',
					data: [20, 60, 20, 30, 50, 40, 60,],				
				}, 
            ],
			options: {
				chart: {
					type: "area",
					height: 400,
					              
					toolbar: {
						show: false,
					},					
				},
                
				/* plotOptions: {
                    bar: {
                        horizontal: false,
                        endingShape:'rounded',
                        columnWidth: '35%',
                        borderRadius: 2,                    
                    },
                }, */
				
				colors:['#886CC0'],
				dataLabels: {
                    formatter: function (val) {
                        return val + "$";
                    },
                 
                    enabled: true,
                    offsetY: -10,
                    style: {
                        fontSize: '12px',
                        colors: ["#304758"]
                    },
                    background: {
                        enabled: false,
                        foreColor: '#fff',
                        padding: 4,
                        borderRadius: 2,
                        borderWidth: 1,
                        borderColor: '#fff',
                        opacity: 0.9,
                        dropShadow: {
                            enabled: false,
                            top: 1,
                            left: 1,
                            blur: 1,
                            color: '#000',
                            opacity: 0.45
                        }
                    },
                },

				markers: {
                    shape: "circle",
                },
        
                legend: {
                    show: false,
                },
                stroke: {
                  show: true,
                  width: 5,
                  curve:'smooth',
                  colors:['var(--primary)'],
                },
                grid: {
                    borderColor: '#eee',
                    show: true,
                     xaxis: {
                        lines: {
                            show: true,
                        }
                    },  
                     yaxis: {
                        lines: {
                            show: true,
                        }
                    }, 			
                },
                markers: {
                    size: [8,0],
                    strokeWidth: [4,0],
                    strokeColors: ['#fff'],
                    border:4,
                    radius: 4,
                    colors:['#9568ff'],
                    hover: {
                      size: 10,
                    }
                },
                xaxis: {
                      
                    categories: ['Jan', 'Fab', 'Mar', 'April', 'May', 'Jun', 'July'],
                    labels: {
                      style: {
                          colors: '#7E7F80',
                          fontSize: '13px',
                          fontFamily: 'Poppins',
                          fontWeight: 100,
                          cssClass: 'apexcharts-xaxis-label',
                      },
                    },
                    crosshairs: {
                        show: false,
                    }
                 },
                yaxis: {
                  show:true,	
                  labels: {
                      offsetX: -15,
                        style: {
                            colors: '#7E7F80',
                            fontSize: '14px',
                            fontFamily: 'Poppins',
                            fontWeight: 100,
                      },
                        formatter: function (y) {
                            return y.toFixed(0) + "k";
                        }
                    },
                },
                fill: {
                    opacity: 9,
                        colors:'#b292ff'
                },
                tooltip: {
                    y: {
                      formatter: function (val) {
                        return "$ " + val + " hundred"
                      }
                    }
                  }

			}, 
		};
	}

  
	render() {
        return (
            <div id="revenueMap" className="revenueMap">
                <ReactApexChart 
					options={this.state.options} 
					series={this.state.series} 
					type="area" 
					height={400}  
					
				/>
            </div>
        );
	}
}

export default MarketAreaChart;