import PageTitle from '@src/components/atoms/pageTitle';
import * as S from './[bookId].styled';
import BookCover from '@src/components/atoms/bookCover';
import { TestBook } from '@src/assets/imgs';
import Munzibtn from '@src/components/molecules/munzibtn';
import { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import Rating from '@src/components/atoms/rating';
import ReviewCard from '@src/components/atoms/reviewCard';

const textContent = `1000자를 세 문단으로 나눴으면, 각 문단은 문항에서 묻는 내용을 채워 넣습니다. SK 브로드밴드의 2019년 기출 문항을 예로 들어보겠습니다. '최고 수준의 목표를 세우고 자발적으로 성취한 경험'을 1000자로 적어야 합니다. '최고 수준의 목표'와 '성취한 경험'이 핵심 키워드겠네요. 일단 세 문단으로 구성하기로 계획합니다. 첫 문단에 '최고 수준의 목표'에 대한 내용을, 두세 번째 문단에 '성취한 경험'을 구체적으로 적어주면 완결성이 있는 글이 나올 것 같네요.
경험이 조금 부족하다면, 하나의 경험을 디테일하게 분해해야 합니다. SK 브로드밴드에 지원한다고 하죠. 저는 첫 문단에 '최고 수준의 목표는 무엇이었고, 왜 그것을 목표로 삼았는지'에 대한 이야기로 333자를 채우겠습니다. 
두 번째 문단에는 '목표를 이루려면 어떤 노력을 해야 했는지, 최대 장애물은 무엇인지, 장애물을 극복하려면 어떤 방법이 필요했는지'에 대한 이야기로 333자를 채우겠습니다. '경험'은 '에피소드'가 많이 발생할 것이기 때문에, 그때 있었던 에피소드도 넣겠습니다.
세 번째 문단에는 '어떤 성취가 있었는지, 성취를 통해 무엇을 배웠는지, 어떤 차기 목표가 생겼는지'에 대한 이야기로 333자를 채우겠습니다. 이렇게 적으면 별다른 기교가 들어가지 않아도, 성장스토리를 또렷하게 드러낼 수 있습니다.
경험이 조금 부족하다면, 하나의 경험을 디테일하게 분해해야 합니다. SK 브로드밴드에 지원한다고 하죠. 저는 첫 문단에 '최고 수준의 목표는 무엇이었고, 왜 그것을 목표로 삼았는지'에 대한 이야기로 333자를 채우겠습니다. 
두 번째 문단에는 '목표를 이루려면 어떤 노력을 해야 했는지, 최대 장애물은 무엇인지, 장애물을 극복하려면 어떤 방법이 필요했는지'에 대한 이야기로 333자를 채우겠습니다. '경험'은 '에피소드'가 많이 발생할 것이기 때문에, 그때 있었던 에피소드도 넣겠습니다.`;

export default function BookId() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <>
      <PageTitle>책장</PageTitle>
      <S.Container>
        <S.InfoContainer>
          <BookCover size="big" imgSrc={TestBook} />
          <S.BookInfo>
            <S.BookTitle>어느날 싸피에 책 한 권이 날아왔다</S.BookTitle>
            <S.SmallInfo>방글이 · 2023.09.13 · 소설</S.SmallInfo>
            <S.PriceContainer>
              <Munzibtn price={5} content="구매하기" />
              <Munzibtn price={1} content="대여하기" />
            </S.PriceContainer>
            <S.InfoText>
              <S.InfoTitle>소개</S.InfoTitle>
              <S.InfoContent isClicked={isClicked}>{textContent}</S.InfoContent>
              <S.MoreInfoBtn onClick={() => setIsClicked((pre) => !pre)}>
                {isClicked ? (
                  <UpOutlined style={{ marginRight: '0.8rem' }} />
                ) : (
                  <DownOutlined style={{ marginRight: '0.8rem' }} />
                )}
                더보기
              </S.MoreInfoBtn>
            </S.InfoText>
          </S.BookInfo>
        </S.InfoContainer>
        <S.ReviewContainer>
          <S.InfoTitle>리뷰</S.InfoTitle>
          <Rating value={4} label={true} editable={false} setInput={() => {}} />
          <S.CardContainer>
            {[1, 2, 3, 4, 5, 6, 7].map((card: number) => (
              <ReviewCard imgSrc={TestBook} />
            ))}
          </S.CardContainer>
        </S.ReviewContainer>
      </S.Container>
    </>
  );
}
