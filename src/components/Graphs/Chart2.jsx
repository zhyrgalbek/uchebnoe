import { useEffect } from 'react'
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import Chart from 'react-apexcharts'



export const Chart2 = ({ strokeWidth, size, scale, series, occupation, label, width, height }) => {
    const [options, setOptions] = useState({
        grid: {
            borderColor: 'rgba(218, 226, 255, 1)',
            strokeDashArray: 5,
        },
        colors: ['rgb(43,131,186)', 'rgb(171,221,164)', 'rgb(254,255,191)', 'rgb(253,174,97)', 'rgb(215,25,28)'],
        series: series,
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
                            label: label ? label : 'Количество:',
                            fontSize: '12px',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            color: '#373d3f',
                            formatter: function (w) {
                                return occupation.toFixed(2) + '%'
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
    useEffect(() => {
        setOptions({
            grid: {
                borderColor: 'rgba(218, 226, 255, 1)',
                strokeDashArray: 5,
            },
            colors: ['rgb(43,131,186)', 'rgb(171,221,164)', 'rgba(255, 204, 74, 1)', 'rgb(253,174,97)', 'rgb(215,25,28)'],
            series: series,
            labels: ["занятость 50%", "занятость 75%", "занятость 100%", "занятость 125%", "занятость 150%"],
            stroke: { width: strokeWidth },
            chart: {
                toolbar: {
                    show: false,
                },
                type: 'donut',
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
                                label: label ? label : 'Количество:',
                                fontSize: '12px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                color: '#373d3f',
                                formatter: function (w) {
                                    return occupation.toFixed(2) + '%'
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: true,
                color: 'red'
            },
            legend: {
                show: true,
                position: 'bottom',
                floating: false,
                // width: '100%',
                // height: '200px'
            },
        })
    }, [occupation, label, size, width, height])
    return <>
        <ReactApexChart options={options} series={options.series} width={width} height={height} type="donut" />
        {/* <Chart options={options} series={options.series} type={options.chart.type} width={width} height={height} style={{}} /> */}
    </>
}

