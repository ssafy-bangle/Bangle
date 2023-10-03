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
  const router = useRouter();
  let bookId = router.query.bookId
  console.log(router.query)
  useEffect(() => {
    if (bookId) {
      bookId = Array.isArray(bookId) ? bookId[0] : bookId;
      // need to get address from bookshelf
      bookApi.getBookDetail(Number.parseInt(bookId))
        .then((res) => {
          console.log("RES: ", res)
          const bookDetail = res.data.bookDetail
          if (bookDetail !== null) {
            // const address = bookDetail.address
            const address = "QmaJVBxw5CRFqieHhe4EUdt3FutiH154gNh3C5yRMxZuRY"
            ipfs.downloadBookFile(address)
            let encodedData = localStorage.getItem(address)
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
          }
        })
      
    }
  }, [bookId])
  return (
    <>
      <EbookNav />
      <S.Container>
        <S.LeftArrow src={arrowLeft} alt="arrowLeft" onClick={() => setClickState(-1)} />
        <EpubViewer side="left" clickState={clickState} setClickState={setClickState} bookBinary={epubData}/>
        <S.Line />
        <EpubViewer side="right" clickState={clickState} setClickState={setClickState} bookBinary={epubData}/>
        <S.RightArrow src={arrowRight} alt="arrowRight" onClick={() => setClickState(1)} />
      </S.Container>
    </>
  );
}
