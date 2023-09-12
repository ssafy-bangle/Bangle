import UploadBookCover from '@src/components/organisms/uploadBookCover';
import * as S from './index.styled';
import UploadBookInfo from '@src/components/organisms/uploadBookInfo';
import Button from '@src/components/atoms/button';
import Modal from '@src/components/molecules/modal';

export default function Write() {
  return (
    <>
      <S.PageTitle>출판하기</S.PageTitle>
      <S.Content>
        <UploadBookCover />
        <UploadBookInfo />
      </S.Content>
      <S.BtnContainer>
        <Modal open title={'책제목'} firstPrice={5} secondPrice={10} />
      </S.BtnContainer>
    </>
  );
}
