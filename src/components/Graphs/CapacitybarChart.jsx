import { Stack } from '@mui/system';
import { useEffect } from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { analizeSlicesActions } from '../../store/slices/analizeSlices';



export const CapacitybarChart = () => {
    const { status } = useSelector(store => store.institutionsStore)
    const { institutionsRegions } = useSelector(store => store.analizeSlicesStore)
    const dispatch = useDispatch()

    // console.log(getParametr({ institutions, areas2, regions }))
    // console.log(institutionsRegions)

    const [options, setOptions] = useState({
        grid: {
            borderColor: 'rgba(218, 226, 255, 1)',
            strokeDashArray: 2,
        },
        dataLabels: {
            enabled: true
        },
        legend: {
            show: true,
            position: 'top',
            offsetX: '40px',
            markers: {
                radius: 15,
                fillColors:
                    ['#61B8FF', '#3763FF']
            }
        },
        chart: {
            toolbar: {
                show: false,
            },
            height: 350,
            type: 'bar',
            height: 178,
            width: "100px"
        },
        plotOptions: {
            bar: {
                columnWidth: '70%',
                dataLabels: {
                    position: 'top' // bottom/center/top
                }
            },
        },
        dataLabels: {
            enabled: true,
            offsetY: -16,
            style: {
                fontSize: '12px',
                colors: ['rgba(41, 45, 50, 1)']
            }
        },
        stroke: {
            show: true,
            width: 6,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Чуй', 'Нарын', 'аа', 'DDD', 'EEE'],
        },
        yaxis: {
            title: true,
        },
        fill: {
            colors: ['#61B8FF', '#3763FF'],
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + '%'
                }
            }
        }
    })

    useEffect(() => {
        if (status === 'fulfilled') {
            setOptions({
                grid: {
                    borderColor: 'rgba(218, 226, 255, 1)',
                    strokeDashArray: 2,
                },
                dataLabels: {
                    enabled: true
                },
                legend: {
                    show: true,
                    position: 'top',
                    offsetX: '40px',
                    markers: {
                        radius: 15,
                        fillColors:
                            ['#61B8FF', '#3763FF']
                    }
                },
                chart: {
                    toolbar: {
                        show: false,
                    },
                    height: 350,
                    type: 'bar',
                    height: 178,
                    width: "100px"
                },
                plotOptions: {
                    bar: {
                        columnWidth: '30rem',
                        horizontal: false,
                        dataLabels: {
                            position: 'top' // bottom/center/top
                        }
                    },
                },
                dataLabels: {
                    enabled: true,
                    offsetY: -16,
                    style: {
                        fontSize: '12px',
                        colors: ['rgba(41, 45, 50, 1)']
                    },
                    formatter: function (val) {
                        return val
                    }
                },
                stroke: {
                    show: true,
                    width: 6,
                    colors: ['transparent']
                },
                xaxis: {
                    show: false,
                    categories: institutionsRegions.map((elem, index) => elem.name)
                },
                yaxis: {
                    title: true,
                },
                fill: {
                    colors: ['#3763FF', '#61B8FF',],
                    opacity: 1,
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                }
            })
        }
    }, [status, institutionsRegions])

    const [series, setSeries] = useState([
        {
            name: 'занятость',
            data: [248, 280, 348, 250, 350, 554, 678]
        },
        {
            name: 'вместимость',
            data: [110, 130, 150, 120, 250, 543, 445]
        },
    ])

    useEffect(() => {
        if (status === 'fulfilled') {
            setSeries([
                // {
                //     name: 'занятость',
                //     data: institutionsRegions.map(elem => elem.empoyment ? +elem.empoyment.toFixed(2) + '%' : 0)
                // },
                {
                    name: 'вместимость',
                    data: institutionsRegions.map(elem => elem.first_capacity ? +elem.first_capacity.toFixed(2) : 0)
                },
            ])
        }
    }, [institutionsRegions, status])

    return <>
        <Chart options={options} series={series} type="bar" height="350" width="100%" style={{ flexGrow: 1 }} />
    </>
}

const Text = styled('div')`
    font-size: 0.9rem;
`

const Number = styled('span')`
    display: block;
    padding-right: 6px;
    font-size: 0.9rem;
`

const Item = styled('li')`
    display: flex;
    /* padding-bottom: 6px; */
`

const List = styled('ol')`
    /* border: 1px solid red; */
    list-style: none;
    margin: 0;
    padding: 0 20px;
`