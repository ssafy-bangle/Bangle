import { arrowLeft, arrowRight } from '@src/assets/imgs';
import EpubViewer from '@src/components/atoms/epubViewer';
import EbookNav from '@src/components/molecules/ebookNav';
import * as S from '@src/styles/pageStyles/ebook/index.styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { bookApi } from '@src/apis';
import ipfs from '@src/utils/ipfs';

export default function Ebook() {
  const [clickState, setClickState] = useState<-1 | 0 | 1>(0);
  const [epubData, setEpubData] = useState<ArrayBuffer>(new ArrayBuffer(0));
  const [curPage, setCurPage] = useState<number>(1);
  let totalPage = 1;
  let bookshelfId = 0;

  const router = useRouter();
  let bookId = router.query.bookId
  console.log(router.query)

  useEffect(() => {
    if (bookId) {
      bookId = Array.isArray(bookId) ? bookId[0] : bookId;
      // get bookshelf address from bookid
      bookApi.getBookViewDetail(bookId)
        .then((res) => {
          totalPage = res.totalPage
          bookshelfId = res.bookshelfId
          setCurPage(res.readPages)
          const bookshelfAddress = res.address
          ipfs.downloadBookFile(bookshelfAddress)

          let encodedData = localStorage.getItem(bookshelfAddress)
          encodedData = encodedData === null ? "" : encodedData
          const binary = atob(encodedData)
          const uintArray = new Uint8Array(binary.length)
          for (let i = 0; i < binary.length; i++) {
            uintArray[i] = binary.charCodeAt(i);
          }

          const epubBlob = new Blob([uintArray], {type:'application/epub+zip'})
          epubBlob.arrayBuffer().then((data) => {
            setEpubData(data)
          })

        })
    }
  }, [bookId])

  const movePage = (direction: number) => {
    if (direction === 1 && totalPage >= curPage + 2) {
      setCurPage(curPage + 2)
    } else if (direction === -1 && curPage - 2 > 0) {
      setCurPage(curPage - 2)
    }
  }

  const closeViewer = () => {
    () => router.push('/bookshelf')
    bookApi.postBookshelfPage(bookshelfId, curPage);
  }

  return (
    <>
      <EbookNav closeViewer={closeViewer}/>
      <S.Container>
        <S.LeftArrow src={arrowLeft} alt="arrowLeft" onClick={() => movePage(-1)} />
        <EpubViewer 
          side="left" 
          bookBinary={epubData} 
          curPage={curPage}
          />
        <S.Line />
        <EpubViewer 
          side="right" 
          bookBinary={epubData} 
          curPage={curPage + 1}
          />
        <S.RightArrow src={arrowRight} alt="arrowRight" onClick={() => movePage(1)} />
      </S.Container>
    </>
  );
}
