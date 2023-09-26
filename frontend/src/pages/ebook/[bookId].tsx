import { arrowLeft, arrowRight } from '@src/assets/imgs';
import EpubViewer from '@src/components/atoms/epubViewer';
import EbookNav from '@src/components/molecules/ebookNav';
import * as S from '@src/styles/pageStyles/ebook/index.styled';
import { useState } from 'react';
export default function Ebook() {
  const [clickState, setClickState] = useState<-1 | 0 | 1>(0);
  return (
    <>
      <EbookNav />
      <S.Container>
        <S.LeftArrow src={arrowLeft} alt="arrowLeft" onClick={() => setClickState(-1)} />
        <EpubViewer side="left" clickState={clickState} setClickState={setClickState} />
        <S.Line />
        <EpubViewer side="right" clickState={clickState} setClickState={setClickState} />
        <S.RightArrow src={arrowRight} alt="arrowRight" onClick={() => setClickState(1)} />
      </S.Container>
    </>
  );
}
