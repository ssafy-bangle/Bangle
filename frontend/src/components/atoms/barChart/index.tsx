import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { selectedBook } from '@src/types/props';

ChartJS.register(CategoryScale, LinearScale, BarElement, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white',
      },
    },
    y: {
      ticks: {
        color: 'white',
      },
    },
  },
};

export default function BarChart({ book }: { book: selectedBook }) {
  const labels = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  const data = {
    labels,
    datasets: [
      {
        label: '판매수',
        data: book.month_purchases,
        backgroundColor: '#D0E8FF',
      },
    ],
  };
  return <Bar options={options} data={data} width={550} />;
}
