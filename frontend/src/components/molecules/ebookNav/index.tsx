import { bookmarkImg, closeImg, highlightImg, settingImg } from '@src/assets/imgs';
import * as S from './index.styled';
import Swal from 'sweetalert2';

export default function EbookNav({ closeViewer }: { closeViewer: () => void }) {
  return (
    <S.Container>
      <S.CloseIcon src={closeImg} alt="CloseImg" onClick={() => closeViewer()} />
      <S.IconBox>
        <S.Icon
          src={bookmarkImg}
          alt="BookmarkImg"
          onClick={() => {
            Swal.fire({
              title: '준비 중',
              text: '추후 업데이트 될 예정입니다.',
              confirmButtonColor: '#2cc295',
            });
          }}
        />
        <S.Icon
          src={highlightImg}
          alt="HighLightImg"
          onClick={() => {
            Swal.fire({
              title: '준비 중',
              text: '추후 업데이트 될 예정입니다.',
              confirmButtonColor: '#2cc295',
            });
          }}
        />
        <S.Icon
          src={settingImg}
          alt="SettingImg"
          onClick={() => {
            Swal.fire({
              title: '준비 중',
              text: '추후 업데이트 될 예정입니다.',
              confirmButtonColor: '#2cc295',
            });
          }}
        />
      </S.IconBox>
    </S.Container>
  );
}
