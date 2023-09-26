import BarChart from '@src/components/atoms/barChart';
import { LineChart } from '@src/components/atoms/lineChart';
import * as S from './index.styled.';
import Chip from '@src/components/atoms/chip';

export default function AuthorHome() {
  return (
    <>
      <S.Container>
        <S.Title>전체</S.Title>
        <S.Box>
          <S.MiniTitle>총 판매</S.MiniTitle>
          <LineChart />
        </S.Box>

        <S.Title2>분석</S.Title2>
        <S.ChipBox>
          <Chip size="big" title="테스트 케이스" />
        </S.ChipBox>
        <S.ChipBox>
          <Chip size="big" title="테스트 케이스" />
        </S.ChipBox>
        <S.ChipBox>
          <Chip size="big" title="테스트 케이스" />
        </S.ChipBox>

        <S.Box>
          <S.BarBox>
            <S.Left>
              <S.MiniTitle>정보</S.MiniTitle>
              <S.InfoBox>
                <S.Content>
                  <S.InfoTitle>오늘의 조회 수</S.InfoTitle>
                  <S.Info>5</S.Info>
                </S.Content>
                <S.Content>
                  <S.InfoTitle>오늘의 판매 수</S.InfoTitle>
                  <S.Info>5</S.Info>
                </S.Content>
                <S.Content>
                  <S.InfoTitle>누적 판매 수</S.InfoTitle>
                  <S.Info>5</S.Info>
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
