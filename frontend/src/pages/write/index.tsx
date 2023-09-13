import UploadBookCover from '@src/components/organisms/uploadBookCover';
import * as S from './index.styled';
import UploadBookInfo from '@src/components/organisms/uploadBookInfo';
import Modal from '@src/components/molecules/modal';
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
        <Modal type='publish' title={'책제목'} firstPrice={5} secondPrice={10} />
      </S.BtnContainer>
    </>
  );
}
