import { bookmarkImg, closeImg, highlightImg, settingImg } from '@src/assets/imgs';
import * as S from './index.styled';
import { useRouter } from 'next/router';
import { bookApi } from '@src/apis';

export default function EbookNav(
  {closeViewer}:{closeViewer:()=>void;}
) {
  return (
    <S.Container>
      <S.CloseIcon src={closeImg} alt="CloseImg" 
        onClick={() => closeViewer()} />
      <S.IconBox>
        <S.Icon src={bookmarkImg} alt="BookmarkImg" />
        <S.Icon src={highlightImg} alt="HighLightImg" />
        <S.Icon src={settingImg} alt="SettingImg" />
      </S.IconBox>
    </S.Container>
  );
}
