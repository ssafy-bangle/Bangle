import Epub, { Book, Rendition, Contents, EpubCFI } from 'epubjs';
import { useEffect, useState, useRef, useMemo } from 'react';
import * as S from './index.styled';

export default function EPubViewer({
  side,
  bookBinary,
  curPage,
  clickState,
  setClickState
}: {
  side: 'left' | 'right';
  bookBinary: ArrayBuffer;
  curPage: number;
  clickState: number;
  setClickState: (c:number)=>void;
}) {
  const [book, setBook] = useState<Book | null>(null);
  const [page, setPage] = useState<number>(side === 'left' ? 1 : 2);
  const [rendition, setRendition] = useState<Rendition | null>(null);
  const areaElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadEpub = async () => {
      try {
        const epubBook = Epub(bookBinary);
        await epubBook.ready;
        setBook(epubBook);

        const areaElement = areaElementRef.current;
        if (areaElement) {
          const epubRendition = epubBook.renderTo(areaElement, {
            width: '110%',
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
    if (bookBinary.byteLength) {
      loadEpub();
    }
  }, [bookBinary]);
  // 페이지 변경 감지 시, 책 화면 변경
  useEffect(() => {
    if (rendition?.location) {
      console.log(rendition.location.start.cfi)
      rendition.display("epubcfi(/6/4!/4/1:0)")
    }
    // let temp = rendition?.location.start.cfi
    // rendition?.display(temp)
    setPage(curPage);
    if (book && rendition) {
      // rendition.display(curPage)
      if (clickState > 0) {
        rendition.next()
      } else if (clickState < 0) {
        rendition.prev()
      }
      setClickState(0)
    }
    // book && rendition && rendition.display(curPage);

  }, [curPage, book, rendition, clickState]);

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
      <S.Container ref={areaElementRef} />
    </S.ModalContainer>
  );
}
