import Epub, { Book, Rendition, Contents, EpubCFI } from 'epubjs';
import { useEffect, useState, useRef, useMemo } from 'react';
import * as S from './index.styled';

export default function EPubViewer({
  side,
  bookBinary,
  clickState,
  setClickState,
  epubCfi,
  setEpubCfi,
}: {
  side: 'left' | 'right';
  bookBinary: ArrayBuffer;
  clickState: number;
  setClickState: (c: number) => void;
  epubCfi: string;
  setEpubCfi: (s: string) => void;
}) {
  const [book, setBook] = useState<Book | null>(null);
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
          if (epubCfi === null) {
            epubRendition.display(1);
          } else {
            epubRendition.display(epubCfi).then(() => {
              epubRendition.next();
            });
            // epubRendition.next()
          }
        }
      } catch (error) {
        // console.error('Error loading EPUB:', error);
      }
    };
    if (bookBinary.byteLength) {
      loadEpub();
    }
  }, [bookBinary]);
  // 페이지 변경 감지 시, 책 화면 변경
  useEffect(() => {
    if (book && rendition && rendition.location) {
      if (clickState > 0) {
        rendition.next();
      } else if (clickState < 0) {
        rendition.prev();
      }
      setEpubCfi(rendition.location.end.cfi);
      setClickState(0);
    }
  }, [book, rendition, clickState]);

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
