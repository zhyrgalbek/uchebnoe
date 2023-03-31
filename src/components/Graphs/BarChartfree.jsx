import { Stack } from '@mui/system';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
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
                    name: 'кол-во свободных мест',
                    data: maxFreeInstitutions?.map(elem => elem.total_free)
                }],
                options: {
                    chart: {
                        type: 'bar',
                        height: 350
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: '20rem',
                            borderRadius: 4,
                            horizontal: false,
                            dataLabels: {
                                position: 'top' // bottom/center/top
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        offsetY: -20,
                        offsetX: 0,
                        style: {
                            fontSize: '12px',
                            colors: ['rgba(41, 45, 50, 1)']
                        },
                    },
                    xaxis: {
                        categories: maxFreeInstitutions?.map((elem, index) => (+index + 1)),
                    },
                    legend: {
                        show: true,
                    }
                },
            })
        }
    }, [maxFreeInstitutions, status])
    return <Stack>
        <List>
            {maxFreeInstitutions.map((elem, index) => {
                return <Item key={elem.id}><Number>{index + 1}.</Number><Text>{elem.name}</Text></Item>
            })}
        </List>
        <ReactApexChart options={options.options} width="100%" series={options.series} type="bar" height={350} style={{ flexGrow: 1 }} />
    </Stack>
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
    padding: 8px 0;
    /* padding-bottom: 6px; */
`

const List = styled('ol')`
    /* border: 1px solid red; */
    list-style: none;
    margin: 0;
    padding: 0 20px;
    margin-bottom: 30px;
`