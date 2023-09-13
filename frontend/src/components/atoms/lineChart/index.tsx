import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      borderColor: '#FBE38E',
      backgroundColor: '#FBE38E',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      borderColor: '#B1A5FF',
      backgroundColor: '#B1A5FF',
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} width={800} />;
}
