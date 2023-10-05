import BarChart from '@src/components/atoms/barChart';
import { LineChart } from '@src/components/atoms/lineChart';
import * as S from './index.styled';
import Chip from '@src/components/atoms/chip';
import { useEffect, useState } from 'react';
import { authorApi } from '@src/apis';
import { bookStatProp } from '@src/types/author';
import { selectedBook } from '@src/types/props';
import { AlertOpenState } from '@src/modules/state';
import { useSetRecoilState } from 'recoil';

export default function AuthorHome() {
  const setIsAlertOpen = useSetRecoilState(AlertOpenState);
  const [book, setBook] = useState<bookStatProp[]>([
    {
      cover: '',
      title: '',
      price: 0,
      today_views: 0,
      today_purchases: 0,
      today_reviews: 0,
      total_purchases: 0,
      month_purchases: [],
    },
  ]);

  const [selectedBook, setSelectedBook] = useState<selectedBook>({ purchases: '-', price: '-', month_purchases: [] });

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
    authorApi
      .getStat()
      .then((res: bookStatProp[]) => {
        setBook(res);
        calTotalTodayData();
      })
      .catch(() => {
        setIsAlertOpen(true);
      });
  }, []);

  return (
    <>
      <S.Container>
        <S.Title>오늘의 분석</S.Title>
        <S.Box>
          <LineChart book={book} />
        </S.Box>
        <S.Title2>월별 분석</S.Title2>
        <S.ChipSection>
          {book?.map((item: bookStatProp, idx: number) => (
            <S.ChipBox key={idx}>
              <Chip
                size="big"
                title={item.title}
                imgsrc={item.cover}
                purchases={item.total_purchases}
                price={item.price}
                month_purchases={item.month_purchases}
                setValue={() =>
                  setSelectedBook({
                    purchases: item.total_purchases,
                    price: item.price,
                    month_purchases: item.month_purchases,
                  })
                }
              />
            </S.ChipBox>
          ))}
        </S.ChipSection>
        <S.Box>
          <S.BarBox>
            <S.Left>
              <S.MiniTitle>정보</S.MiniTitle>
              <S.InfoBox>
                <S.Content>
                  <S.InfoTitle>누적 판매 수</S.InfoTitle>
                  <S.Info>{selectedBook.purchases}</S.Info>
                </S.Content>
                <S.Content>
                  <S.InfoTitle>누적 판매 수익</S.InfoTitle>
                  <S.Info>
                    {typeof selectedBook.purchases === 'number' && typeof selectedBook.price === 'number'
                      ? selectedBook.purchases * selectedBook.price
                      : '-'}
                  </S.Info>
                </S.Content>
              </S.InfoBox>
            </S.Left>
            <S.Right>
              <S.MiniTitle>판매량</S.MiniTitle>
              <BarChart book={selectedBook} />
            </S.Right>
          </S.BarBox>
        </S.Box>
      </S.Container>
    </>
  );
}
