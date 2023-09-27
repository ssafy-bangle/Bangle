import { bookmarkImg, closeImg, highlightImg, settingImg } from '@src/assets/imgs';
import * as S from './index.styled';
import { useRouter } from 'next/router';

export default function EbookNav() {
  const router = useRouter();
  return (
    <S.Container>
      <S.CloseIcon src={closeImg} alt="CloseImg" onClick={() => router.push('/bookshelf')} />
      <S.IconBox>
        <S.Icon src={bookmarkImg} alt="BookmarkImg" />
        <S.Icon src={highlightImg} alt="HighLightImg" />
        <S.Icon src={settingImg} alt="SettingImg" />
      </S.IconBox>
    </S.Container>
  );
}
