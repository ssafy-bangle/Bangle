import PageTitle from '@src/components/atoms/pageTitle';
import * as S from './index.styled';
import { TestBook } from '@src/assets/imgs';
import BookCover from '@src/components/atoms/bookCover';
import BooksContainer from '@src/components/organisms/booksContainer';
import { useRouter } from 'next/router';

export default function Bookshelf() {
  const router = useRouter();

  // 책의 URL은 여기서 보내지 않는다 (주소에 노출되기때문 => ebook에서 fetch해오도록 한다)
  // TEST를 위한 임시 책 id
  const testCurrentTitle = 'title';
  const testBookId = 4;
  const testDate = '2000.00.00';
  const testWriter = '글쓴이';
  const testCategory = '분류';

  const handleBookClick = () => {
    router.push(`/ebook/${testBookId}`);
  };

  return (
    <>
      <PageTitle>책장</PageTitle>
      <S.Container>
        <S.SubTitle>지금 보고 있는 책</S.SubTitle>
        <S.Box>
          <S.Left>
            <S.Title onClick={handleBookClick}>{testCurrentTitle}</S.Title>
            <S.Content>
              {testDate} · {testWriter} · {testCategory}
            </S.Content>
          </S.Left>
          <S.CoverContainer>
            <BookCover imgSrc={TestBook} onClick={handleBookClick} />
          </S.CoverContainer>
        </S.Box>

        <BooksContainer type="book" page="bookShelf" title="모든 책" onClick={handleBookClick} />
      </S.Container>
    </>
  );
}
