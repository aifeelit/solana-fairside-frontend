import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class Dash_Graph extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        tooltip: {
          enabled: true,
          enabledOnSeries: undefined,
          shared: true,
          followCursor: false,
          intersect: false,
          inverseOrder: false,
          custom: undefined,
          fillSeriesColor: false,
          // theme: true,
          style: {
            fontSize: '12px',
            fontFamily: undefined
          },
          onDatasetHover: {
            highlightDataSeries: false,
          },
          x: {
            show: false,
            format: 'MM',
            formatter: undefined,
          },
          y: {
            formatter: (value) => { return 'FSHARE' + '<br/>' + value + ' ETH' },
            title: {
              formatter: (seriesName) => seriesName,
            },
          },
          marker: {
            show: false,
          },
          items: {
            display: 'flex',
          },
          fixed: {
            enabled: false,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0,
          },
        }
        ,
        // annotations: {
        //   yaxis: [
        //     {
        //       y: 4000,
        //       borderColor: '#4569f5',
        //       label: {
        //         borderColor: '#4569f5',
        //         style: {
        //           color: '#fff',
        //           background: '#4569f5'
        //         },
        //         text: '4000 EH'
        //       }
        //     }
        //   ]
        // },

        chart: {
          height: 350,
          type: 'area',
          width: 1,
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
          gradient: {
            // shade: 'dark',
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: ['#4569f5'],
            inverseColors: true,
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 50, 100],
            colorStops: []
          }
        },
        stroke: {
          curve: 'smooth',
          colors: ['#4569f5'],
          width: 2,
        },
        xaxis: {
          crosshairs: {
            show: true,
            snap:true,
            position: 'back',
            stroke: {
              color: '#4569f5',
              width: 1,
              dashArray: 3,
            },
          },
          tooltip: {
            enabled: false,
            offsetX: 0,
          },
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec'
          ],
        },
        yaxis: {
          show: true,
          showAlways: false,
          showForNullSeries: false,
          seriesName: undefined,
          opposite: false,
          reversed: false,
          logarithmic: false,
          logBase: 0,
          tickAmount: 14,
          min: 0,
          max: 8000,
          forceNiceScale: false,
          floating: false,
          decimalsInFloat: undefined,
          labels: {
            show: true,
            align: 'left',
            style: {
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              cssClass: 'apexcharts-yaxis-label',
            },
            offsetX: 36,
            offsetY: -5,
            rotate: 0,
            formatter: (value) => { if (Math.floor(value) % 4000 == 0) return Math.floor(value) },
          },

          title: {
            text: undefined,
            rotate: -90,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: '200px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-title',
            },
          },
          crosshairs: {
            show: true,
            position: 'back',
            stroke: {
              color: '#4569f5',
              width: 1,
              dashArray: 3,
            },
          },
          tooltip: {
            enabled: true,
            offsetX: -1000,
          },

        }
      },
      series: [
        {
          name: '',
          data: [2800, 1380, 1410, 2100, 1700, 1600, 2800, 3460, 3480, 4000, 3520, 5700],
        }
      ],
    }
  }

  render() {
    return (
      <div className='app'>
        <div className='row'>
          <div className='mixed-chart'>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type='area'
              width='100%'
              height='360px'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Dash_Graph
