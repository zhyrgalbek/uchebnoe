import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';

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
        markers: {
            radius: 15,
            fillColors:
                ['#3763FF', '#FD9588']
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
        max: 400,
        tickAmount: 4,
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

const text = [['Мужчины', 'Женщины'], ['Эркектер', 'Аялдар']];

export const Chart5 = () => {
    // const { translation } = useSelector(store => store.translate);
    const { translation } = useSelector(store => store.translationStore)
    const series = [
        {
            name: text[translation][0],
            data: [248, 280, 348, 250, 350]
        },
        {
            name: text[translation][1],
            data: [110, 130, 150, 120, 250]
        },
    ]
    return <Chart options={options} series={series} type="bar" height="240" width="100%" style={{ flexGrow: 1 }} />
}