import Chart from 'react-apexcharts'

var options = {
    grid: {
        borderColor: 'rgba(218, 226, 255, 1)',
        strokeDashArray: 2,
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    chart: {
        toolbar: {
            show: false,
        },
        type: 'area',
        stacked: false,
        height: 178,
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 3,
        dashArray: 0,
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    colors: ['#61B8FF', '#3763FF', '#FD9588'
    ],

};

const series = [
    {
        data: [44, 55, 57, 56, 61, 58]
    }, {
        data: [76, 85, 101, 98, 87, 105]
    },
];

export const Chart3 = () => {
    return <Chart options={options} series={series} type="area" width="100%" style={{ flexGrow: 1 }} />
}