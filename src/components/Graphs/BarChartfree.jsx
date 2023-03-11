import { useEffect } from 'react';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { analizeSlicesActions } from '../../store/slices/analizeSlices';


export const BarChartfree = () => {
    const { institutions, status } = useSelector(store => store.institutionsStore)
    const { maxFreeInstitutions } = useSelector(store => store.analizeSlicesStore)
    const dispatch = useDispatch();
    useEffect(() => {
        if (status === 'fulfilled') {
            dispatch(analizeSlicesActions.setMaxFreeInstitutions({ institutions }))
        }
    }, [institutions, status])
    const [options, setOptions] = useState({
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                    'United States', 'China', 'Germany'
                ],
            }
        },
    })
    useEffect(() => {
        if (status === 'fulfilled') {
            setOptions({
                series: [{
                    name: 'свободные места',
                    data: maxFreeInstitutions?.map(elem => elem.total_free)
                }],
                options: {
                    chart: {
                        type: 'bar',
                        height: 350
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 4,
                            horizontal: false,
                        }
                    },
                    dataLabels: {
                        enabled: true
                    },
                    xaxis: {
                        categories: maxFreeInstitutions?.map(elem => elem.name),
                    }
                },
            })
        }
    }, [maxFreeInstitutions, status])
    return <ReactApexChart options={options.options} width="100%" series={options.series} type="bar" height={350} style={{ flexGrow: 1 }} />
}