import { useState } from 'react'
import Chart from 'react-apexcharts'



export const Chart2 = ({ strokeWidth, height, size }) => {
    const [options, setOptions] = useState({
        grid: {
            borderColor: 'rgba(218, 226, 255, 1)',
            strokeDashArray: 5,
        },
        colors: ['#3763FF', '#61B8FF', '#FD9588'
        ],

        series: [68, 40, 20],

        stroke: { width: strokeWidth },
        chart: {
            toolbar: {
                show: false,
            },
            width: '100%',
            type: 'donut',
        },
        chartOptions: {
            labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
        },
        plotOptions: {
            pie: {
                customScale: 1,
                donut: {
                    size: size,
                    labels: {
                        show: true,
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
                                }, 0)
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
        },
    })
    return <Chart options={options} series={options.series} type={options.chart.type} height="" width="110%" style={{ marginLeft: '-20px', flexGrow: 1 }} />
}