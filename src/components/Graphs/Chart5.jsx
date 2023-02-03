import Chart from 'react-apexcharts';

const options = {
    grid: {
        borderColor: 'rgba(218, 226, 255, 1)',
        strokeDashArray: 4,
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        position: 'top',
        offsetX: '40px',
        tooltipHoverFormatter: function (val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
    },
    chart: {
        toolbar: {
            show: false,
        },
        type: 'bar',
        height: 178,
        width: "100px",
        stacked: false
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
        title: false,
    },
    fill: {
        colors: ['#3763FF', '#FD9588'],
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    },
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


export const Chart5 = () => {
    return <Chart options={options} series={series} type="bar" height="290" width="100%" style={{ flexGrow: 1 }} />
}