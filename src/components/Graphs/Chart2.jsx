import { useState } from 'react'
import Chart from 'react-apexcharts'



export const Chart2 = ({ strokeWidth, size, scale }) => {
    const [options, setOptions] = useState({
        grid: {
            borderColor: 'rgba(218, 226, 255, 1)',
            strokeDashArray: 5,
        },
        colors: ['#3763FF', '#61B8FF', '#FD9588'
        ],

        series: [12, 10, 20],

        stroke: { width: strokeWidth },
        chart: {
            toolbar: {
                show: false,
            },
            type: 'donut',
        },
        chartOptions: {
            labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
        },
        plotOptions: {
            pie: {
                customScale: scale,
                donut: {
                    size: size,
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '26px',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            color: undefined,
                            offsetY: -10,
                            formatter: function (val) {
                                return val
                            }
                        },
                        value: {
                            show: true,
                            fontSize: '24px',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            color: undefined,
                            offsetY: 2,
                            formatter: function (val) {
                                return val
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Количество:',
                            fontSize: '12px',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            color: '#373d3f',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0) + '%'
                            }
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
            position: 'top',
            floating: false,
        },
    })
    return <Chart options={options} series={options.series} type={options.chart.type} width="100%" height="190" style={{}} />
}