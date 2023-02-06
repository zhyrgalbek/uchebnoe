import Chart from 'react-apexcharts';

const options = {
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
            ['#61B8FF', '#3763FF'
        ]
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
        categories: ['AAA', 'BBB', 'CCC', 'DDD', 'EEE'],
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
                return "$ " + val + " thousands"
            }
        }
    }
}

const series = [
    {
        name: 'Revenue',
        data: [248, 280, 348, 250, 350]
    },
    {
        name: 'Net Profit',
        data: [110, 130, 150, 120, 250]
    },
]


export const Chart1 = () => {
    return <Chart options={options} series={series} type="bar" height="240" width="100%" style={{ flexGrow: 1 }} />
}