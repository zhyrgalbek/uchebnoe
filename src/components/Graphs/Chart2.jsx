import Chart from 'react-apexcharts'

var options = {
    grid: {
        borderColor: 'rgba(218, 226, 255, 1)',
        strokeDashArray: 5,
    },
    series: [68, 40, 20],
    chart: {
        toolbar: {
            show: false,
        },
        type: 'donut',
    },
    chartOptions: {
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
    },
    plotOptions: {
        pie: {
            customScale: 1,
            donut: {
                size: "85%",
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
};


export const Chart2 = () => {
    return <Chart options={options} series={options.series} type={options.chart.type} />
}