import React, { useEffect, useState } from 'react';
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
import { bookStatProp } from '@src/types/author';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: (number | null)[];
    borderColor: string;
    backgroundColor: string;
  }[];
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
      labels: {
        padding: 15,
        color: 'white',
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white',
      },
    },
  },
};

export const LineChart = React.memo(function LineChart({ book }: { book: bookStatProp[] }) {
  const [data, setData] = useState<ChartData>({ labels: [], datasets: [] });
  let labels = [];
  const colorsArray = [
    '#FFE86F',
    '#7FFF6F',
    '#FF6F6F',
    '#91C6F2',
    '#F291C6',
    '#C691F2',
    '#9A89FF',
    '#FF9A89',
    '#89FF9A',
  ];

  useEffect(() => {
    const datasets = book?.map((item: bookStatProp, idx: number) => ({
      label: item.title.length > 12 ? item.title.slice(0, 8) + '...' : item.title,
      data: [item.today_views, item.today_purchases, item.today_reviews],
      borderColor: colorsArray[idx],
      backgroundColor: colorsArray[idx],
    }));

    labels = ['조회수', '구매수', '리뷰수'];

    setData({
      labels,
      datasets: datasets,
    });
  }, [book]);

  return <Line options={options} data={data} width={630} />;
});
