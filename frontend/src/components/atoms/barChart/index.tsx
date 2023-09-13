import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { color } from 'chart.js/helpers';

ChartJS.register(CategoryScale, LinearScale, BarElement, Legend);

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
      backgroundColor: '#FFE86F',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: '#D0E8FF',
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} width={550} />;
}
