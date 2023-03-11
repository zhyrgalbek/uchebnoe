import { useEffect } from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { analizeSlicesActions } from '../../store/slices/analizeSlices';

function getParametr({ institutions, areas2, regions, areas, county, county2 }) {
    return {
        institutions,
        areas,
        regions,
        county,
        areas2,
        county2,
        variant: getVariant({ areas2, county2 })
    }
}

function getVariant({ areas2, county2 }) {
    if (county2.length !== 0) {
        return 'county';
    }
    if (areas2.length !== 0) {
        return 'area_id';
    }
    return 'area_administrative_id';
}

export const Chart1 = () => {
    const { institutions, status } = useSelector(store => store.institutionsStore)
    const { areas2, county2 } = useSelector(store => store.filterAreasStore)
    const { regions, areas, county } = useSelector(store => store.staticDatasStore)
    const { institutionsRegions } = useSelector(store => store.analizeSlicesStore)
    const dispatch = useDispatch()

    // console.log(getParametr({ institutions, areas2, regions }))
    // console.log(institutionsRegions)
    useEffect(() => {
        if (status === 'fulfilled') {
            dispatch(analizeSlicesActions.setInstitutionsRegions(getParametr({ institutions, areas2, regions, areas, county, county2 })));
        }
    }, [institutions, status])
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
                    categories: institutionsRegions.map(elem => elem.name)
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
                {
                    name: 'занятость',
                    data: institutionsRegions.map(elem => elem.empoyment ? elem.empoyment.toFixed(2) + '%' : 0)
                },
                // {
                //     name: 'вместимость',
                //     data: [110, 130, 150, 120, 250, 543, 445]
                // },
            ])
        }
    }, [institutionsRegions, status])

    return <Chart options={options} series={series} type="bar" height="350" width="100%" style={{ flexGrow: 1 }} />
}