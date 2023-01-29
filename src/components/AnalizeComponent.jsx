import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    elements: {
        bar: {
            inflateAmount: -2
        }
    },
    layout: {
        padding: 0
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['2019', '2020', '2021', '2022'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Мужчины',
            data: { [2019]: 300, [2020]: 400, [2021]: 500, [2022]: 300 },
            backgroundColor: '#3763FF',
        },
        {
            label: 'Женщины',
            data: { [2019]: 230, [2020]: 250, [2021]: 350, [2022]: 50 },
            backgroundColor: '#FD9588',
        },

    ],
};

export default function AnalizeCompoent() {
    return <Box sx={{ width: '400px', height: '400px' }}>
        <Bar options={options} data={data} />;
    </Box>
}