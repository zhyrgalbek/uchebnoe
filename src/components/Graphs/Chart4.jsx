import Chart from 'react-apexcharts'

var options = {
    grid: {
        borderColor: 'rgba(218, 226, 255, 1)',
        strokeDashArray: 5,
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: [1, 2, 3, 4, 5, 6],
    },
    chart: {
        height: 240,
        width: "100%",
        type: "line",
        stacked: true,
        toolbar: {
            show: false
        },
    },
    series: [{
        name: "Series 3",
        type: 'line',
        data: [250, 210, 350, 220, 221, 200]
    },
    {
        name: "bar 1",
        type: 'bar',
        data: [100, 100, 100, 100, 100, 100]
    },
    {
        name: "bar 2",
        type: 'bar',
        data: [100, 100, 100, 100, 100, 100]
    },
    {
        name: "bar 3",
        type: 'bar',
        data: [100, 100, 100, 100, 100, 100]
    },
    {
        name: "bar 4",
        type: 'bar',
        data: [25, 25, 100, 25, 25, 25]
    },
    {
        name: "bar 5",
        type: 'bar',
        data: [52, 15, 100, 75, 35, 45]
    },
    ],
    fill: {
        opacity: 1,
        colors: [
            '#DAE2FF',
            'rgba(181, 197, 255, 1)',
            'rgba(143, 167, 255, 1)',
            'rgba(106, 138, 255, 1)',
            '#6A8AFF',
            'rgba(66, 106, 255, 1)',
        ],
    },
    markers: {
        size: [3, 0, 0, 0, 0],
        colors: 'rgba(253, 149, 136, 1)',
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            borderRadiusWhenStacked: "last",
            borderRadiusApplication: "end"
        }
    },
    stroke: {
        curve: 'smooth',
        colors: [
            "rgba(97, 184, 255, 0.5)",
            "rgba(143, 167, 255, 0)",
            "rgba(143, 167, 255, 0)",
            "rgba(143, 167, 255, 0)",
            "rgba(143, 167, 255, 0)",
            "rgba(143, 167, 255, 0)",
        ],
        width: 3,
        radius: 200,
    },
    yaxis: {
        max: 500,
    }
};

const series = [
    {
        name: "Series 3",
        type: 'line',
        data: [250, 210, 350, 220, 221, 200]
    },
    {
        name: "bar 1",
        type: 'bar',
        data: [100, 100, 100, 100, 100, 100]
    },
    {
        name: "bar 2",
        type: 'bar',
        data: [100, 100, 100, 100, 100, 100]
    },
    {
        name: "bar 3",
        type: 'bar',
        data: [100, 100, 100, 100, 100, 100]
    },
    {
        name: "bar 4",
        type: 'bar',
        data: [100, 0, 100, 0, 0, 0]
    },
    {
        name: "bar 5",
        type: 'bar',
        data: [0, 0, 100, 0, 0, 0]
    },
];

export const Chart4 = () => {
    return <Chart options={options} series={series} type="line" />
}