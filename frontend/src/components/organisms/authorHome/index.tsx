import BarChart from '@src/components/atoms/barChart';
import { LineChart } from '@src/components/atoms/lineChart';
import * as S from './index.styled';
import Chip from '@src/components/atoms/chip';
import { useEffect, useState } from 'react';
import { authorApi } from '@src/apis';
import { bookStatProp } from '@src/types/author';

export default function AuthorHome() {
  const [book, setBook] = useState<bookStatProp[]>([
    {
      cover: '',
      title: '',
      today_views: 0,
      today_purchases: 0,
      today_reviews: 0,
      total_purchases: 0,
    },
  ]);
  const [selectedBookPurchases, setSelectedBookPurchases] = useState<number>(0);

  type totalTodayData = {
    today_views: number;
    today_reviews: number;
    today_purchases: number;
  };

  let totalTodayData: totalTodayData = {
    today_views: 0,
    today_reviews: 0,
    today_purchases: 0,
  };

  const calTotalTodayData = () => {
    if (book) {
      totalTodayData = book.reduce((total, bookItem) => {
        total.today_reviews += bookItem.today_reviews;
        total.today_purchases += bookItem.today_purchases;
        total.today_views += bookItem.today_views;
        return total;
      });
    }
  };

  useEffect(() => {
    const getStat = () => {
      authorApi.getStat().then((res: bookStatProp[]) => {
        setBook(res);
        calTotalTodayData();
      });
    };
    getStat();
  }, []);

  return (
    <>
      <S.Container>
        <S.Title>오늘의 분석</S.Title>
        <S.Box>
          <LineChart book={book} />
        </S.Box>
        <S.Title2>누적 데이터</S.Title2>
        {book?.map((item: bookStatProp) => (
          <S.ChipBox>
            <Chip
              size="big"
              title={item.title}
              imgsrc={item.cover}
              purchases={item.total_purchases}
              setValue={() => setSelectedBookPurchases}
            />
          </S.ChipBox>
        ))}

        <S.Box>
          <S.BarBox>
            <S.Left>
              <S.MiniTitle>정보</S.MiniTitle>
              <S.InfoBox>
                <S.Content>
                  <S.InfoTitle>누적 판매 수</S.InfoTitle>
                  <S.Info>{selectedBookPurchases}</S.Info>
                </S.Content>
                <S.Content>
                  <S.InfoTitle>누적 판매 수익</S.InfoTitle>
                  <S.Info>5</S.Info>
                </S.Content>
              </S.InfoBox>
            </S.Left>
            <S.Right>
              <S.MiniTitle>판매량</S.MiniTitle>
              <BarChart />
            </S.Right>
          </S.BarBox>
        </S.Box>
      </S.Container>
    </>
  );
}
