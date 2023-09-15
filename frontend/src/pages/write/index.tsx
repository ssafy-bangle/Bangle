import UploadBookCover from '@src/components/organisms/uploadBookCover';
import * as S from './index.styled';
import UploadBookInfo from '@src/components/organisms/uploadBookInfo';
import Modal from '@src/components/molecules/modal';
import PageTitle from '@src/components/atoms/pageTitle';
import { useEffect } from 'react';
import { UserInfoState } from '@src/modules/user';
import { useRecoilValue } from 'recoil';

export default function Write() {

  return (
    <>
      <PageTitle>출판하기</PageTitle>
      <S.Content>
        <UploadBookCover />
        <UploadBookInfo />
      </S.Content>
      <S.BtnContainer>
        <Modal type='publish' title={'책제목'} publishPrice={10} />
      </S.BtnContainer>
    </>
  );
}
