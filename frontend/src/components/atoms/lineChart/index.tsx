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
    },
  },
};

export const LineChart = React.memo(function LineChart({ book }: { book: bookStatProp[] }) {
  const [data, setData] = useState<ChartData>({ labels: [], datasets: [] });

  let labels = [];

  useEffect(() => {
    labels = book?.map((item: bookStatProp) => {
      return item.title;
    });

    labels = ['', ...labels, ''];

    setData({
      labels,
      datasets: [
        {
          label: '조회수',
          data: [null, ...book?.map((item: bookStatProp) => item.today_views)],
          borderColor: '#FBE38E',
          backgroundColor: '#FBE38E',
        },
        {
          label: '구매수',
          data: [null, ...book?.map((item: bookStatProp) => item.today_purchases)],
          borderColor: '#B1A5FF',
          backgroundColor: '#B1A5FF',
        },
        {
          label: '리뷰수',
          data: [null, ...book?.map((item: bookStatProp) => item.today_reviews)],
          borderColor: '#D0E8FFD9',
          backgroundColor: '#D0E8FFD9',
        },
      ],
    });
  }, [book]);

  return <Line options={options} data={data} width={800} />;
});
