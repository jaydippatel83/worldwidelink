import React from "react";
import ReactApexChart from "react-apexcharts";
//import ApexCharts from 'apexcharts';
//import { Link } from "react-router-dom";

class MarketChart extends React.Component {  
	constructor(props) {
		super(props);
		this.state = {
			series: [{
                name: "Running",
                data: [1400, 800, 1200, 550, 1550, 600, 1250]
              },
              {
                name: "Pending",
                data: [500, 600, 300, 1200, 1200, 800, 1400]
              }
            ],
			options: {
				chart: {
					type: "area",
					height: 400,
                    group: 'social',
					toolbar: {
						show: false,
					},
				},
                zoom: {
                    enabled: false
                },
				plotOptions: {
                    // bar: {
                    //     horizontal: false,
                    //     endingShape:'rounded',
                    //     columnWidth: '35%',
                    //     borderRadius: 2,                    
                    // },
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show:false,
                  tooltipHoverFormatter: function(val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                  },
                  markers: {
                    fillColors:['var(--secondary)','var(--primary)'],
                    width: 3,
                    height: 16,
                    strokeWidth: 0,
                    radius: 16
                  }
                },
                markers: {
                    size: [8,0],
                    strokeWidth: [4,0],
                    strokeColors: ['#fff','#fff'],
                    border:4,
                    radius: 4,
                    colors:['#2A353A','#2A353A','#fff'],
                    hover: {
                      size: 10,
                    }
                },
                xaxis: {
                    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    labels: {
                     style: {
                        colors: '#3E4954',
                        fontSize: '14px',
                         fontFamily: 'Poppins',
                        fontWeight: 100,
                        
                      },
                    },
                    axisBorder:{
                        show: false,
                    }
                },
                yaxis: {
                    labels: {
                        show: true,
                        align: 'right',
                        minWidth: 15,
                        offsetX:-16,
                        style: {
                          colors: '#666666',
                          fontSize: '14px',
                           fontFamily: 'Poppins',
                          fontWeight: 100,
                          
                        },
                    },
                },
                fill: {
                    colors:['#fff','#FF9432'],
                    type:'gradient',
                    opacity: 1,
                    gradient: {
                        shade:'light',
                        shadeIntensity: 1,
                        colorStops: [ 
                          [
                            {
                              offset: 0,
                              color: 'var(--secondary)',
                              opacity: 0.4
                            },
                            {
                              offset: 0.6,
                              color: 'var(--secondary)',
                              opacity: 0.25
                            },
                            {
                              offset: 100,
                              color: 'var(--secondary)',
                              opacity: 0
                            }
                          ],
                          [
                            {
                              offset: 0,
                              color: 'var(--primary)',
                              opacity: .4
                            },
                            {
                              offset: 50,
                              color: 'var(--primary)',
                              opacity: 0.25
                            },
                            {
                              offset: 100,
                              color: '#fff',
                              opacity: 0
                            }
                          ]
                        ]
        
                  },
                },
                colors:['var(--secondary)','var(--primary)'],
                stroke:{
                    curve : "straight",
                     width: 3,
                },
                grid: {
                    borderColor: '#e1dede',
                    strokeDashArray:8,
                    
                      xaxis: {
                          lines: {
                          show: true,
                          opacity: 0.5,
                          }
                      },
                      yaxis: {
                          lines: {
                          show: true,
                          opacity: 0.5,
                          }
                      },
                      row: {
                          colors: undefined,
                          opacity: 0.5
                      },  
                      column: {
                          colors: undefined,
                          opacity: 0.5
                      },  
                 },
                 responsive: [{
                      breakpoint: 1602,
                      options: {
                          markers: {
                               size: [6,6,4],
                               hover: {
                                  size: 7,
                                }
                          },chart: {
                          height: 230,
                      },	
                      },
                      
                 }]
                    
			}, 
		};
	}

  
	render() {
        return (
            <div id="activity1">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={400}  />
            </div>
        );
	}
}

export default MarketChart; 