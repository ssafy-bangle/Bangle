import Epub, { Book, Rendition, Contents, EpubCFI } from 'epubjs';
import { useEffect, useState, useRef, useMemo } from 'react';
import * as S from './index.styled';

export default function EPubViewer({
  side,
  clickState,
  setClickState,
}: {
  side: 'left' | 'right';
  clickState: -1 | 0 | 1;
  setClickState: (state: -1 | 0 | 1) => void;
}) {
  const [book, setBook] = useState<Book | null>(null);
  const [page, setPage] = useState<number>(side === 'left' ? 1 : 2);
  const [rendition, setRendition] = useState<Rendition | null>(null);
  const areaElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadEpub = async () => {
      try {
        // need to change address to something else
        let local = localStorage.getItem("QmaJVBxw5CRFqieHhe4EUdt3FutiH154gNh3C5yRMxZuRY")
        local = local === null ? "" : local
        const binary = atob(local)
        const uintArray = new Uint8Array(binary.length)
        for (let i = 0; i < binary.length; i++) {
          uintArray[i] = binary.charCodeAt(i);
        }
        const epubBlob = new Blob([uintArray], {type:'application/epub+zip'})
        const epubData = await epubBlob.arrayBuffer()
        const epubBook = Epub(epubData);
        await epubBook.ready;
        setBook(epubBook);
        

        const areaElement = areaElementRef.current;
        if (areaElement) {
          const epubRendition = epubBook.renderTo(areaElement, {
            width: '100%',
            height: '90%',
          });
          setRendition(epubRendition);
          epubRendition.display(side === 'left' ? 1 : 2);
          // epubRendition.display(side === 'left' ? 3 : 4);
        }
      } catch (error) {
        console.error('Error loading EPUB:', error);
      }
    };
    loadEpub();
  }, []);

  // 페이지 이벤트 감지 시, 페이지 변경
  useEffect(() => {
    clickState === 1 && setPage((cur) => cur + 2);
    clickState === -1 && page - 2 > 0 && setPage((cur) => cur - 2);
    setClickState(0);
  }, [clickState]);

  // 페이지 변경 감지 시, 책 화면 변경
  useEffect(() => {
    book && rendition && rendition.display(page);
  }, [page, book, rendition]);

  // 책 화면 변경 감지 시, 텍스트 색상 변경
  useEffect(() => {
    if (rendition) {
      rendition.hooks.content.register((content: Contents) => {
        const bookContainer = content.document.body;
        const textElements = bookContainer.querySelectorAll('*');
        textElements.forEach((element: any) => {
          element.style.color = '#E8E9E9';
        });
      });
    }
  }, [rendition]);

  return (
    <S.ModalContainer>
      <S.Container ref={areaElementRef}></S.Container>
    </S.ModalContainer>
  );
}
