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
import * as S from './index.styled';
import Loading from '../loading';
import NoValue from '../noValue';

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
    y: {
      ticks: {
        stepSize: 1,
      },
    },
  },
};

export const LineChart = React.memo(function LineChart({
  book,
  isLoading,
}: {
  book: bookStatProp[];
  isLoading: boolean;
}) {
  const [data, setData] = useState<ChartData>({ labels: [], datasets: [] });
  let labels = [];
  const colorsArray = [
    '#FF99CC',
    '#99CCFF',
    '#CC99FF',
    '#FFFF99',
    '#99FFCC',
    '#CCFF99',
    '#FFCC99',
    '#99FF99',
    '#99FFFF',
    '#FF99FF',
    '#CCFFFF',
    '#FF5733',
    '#FF33A1',
    '#33FF57',
    '#33A1FF',
    '#5733FF',
    '#FF3366',
    '#FFAA33',
    '#66FF33',
    '#3366FF',
    '#33FFAA',
    '#FF3333',
    '#FFFF33',
    '#33FFFF',
    '#AA33FF',
    '#FF33FF',
    '#33FF33',
    '#33AAFF',
    '#FF66FF',
    '#66FF66',
  ];

  useEffect(() => {
    const datasets = book
      ?.filter((item: bookStatProp) => {
        if (item.today_views !== 0 || item.today_purchases !== 0 || item.today_reviews !== 0) {
          return true;
        }
        return false;
      })
      .map((item: bookStatProp, idx: number) => ({
        label: item.title.length > 12 ? item.title.slice(0, 8) + '...' : item.title,
        data: [item.today_views, item.today_purchases, item.today_reviews],
        borderColor: colorsArray[idx % 30],
        backgroundColor: colorsArray[idx % 30],
      }));
    labels = ['조회수', '구매수', '리뷰수'];

    setData({
      labels,
      datasets: datasets,
    });
  }, [book]);

  return (
    <>
      {!isLoading ? (
        data.datasets.length > 0 ? (
          <Line options={options} data={data} width={630} />
        ) : (
          <S.NoValueContainer>
            <NoValue type={'authorHome'} />
          </S.NoValueContainer>
        )
      ) : (
        <S.LoadingBox>
          <Loading content="분석 중..." />
        </S.LoadingBox>
      )}
    </>
  );
});
