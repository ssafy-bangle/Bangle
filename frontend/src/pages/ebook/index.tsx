import EpubViewer from '@src/components/atoms/epubViewer';
import { useState } from 'react';
export default function Ebook() {
  const [clickState, setClickState] = useState<-1 | 0 | 1>(0);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <EpubViewer side="left" clickState={clickState} setClickState={setClickState} />
        <EpubViewer side="right" clickState={clickState} setClickState={setClickState} />
      </div>
    </>
  );
}
