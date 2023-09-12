import UploadBookCover from '@src/components/organisms/uploadBookCover';
import * as S from './index.styled';
import UploadBookInfo from '@src/components/organisms/uploadBookInfo';
import Button from '@src/components/atoms/button';
import PageTitle from '@src/components/atoms/pageTitle';

export default function Write() {
  return (
    <>
      <PageTitle>출판하기</PageTitle>
      <S.Content>
        <UploadBookCover />
        <UploadBookInfo />
      </S.Content>
      <S.BtnContainer>
        <Button length={'long'} size={'small'} content={'다음'} />
      </S.BtnContainer>
    </>
  );
}
