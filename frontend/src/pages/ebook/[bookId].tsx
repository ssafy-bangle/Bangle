import { arrowLeft, arrowRight } from '@src/assets/imgs';
import EpubViewer from '@src/components/atoms/epubViewer';
import EbookNav from '@src/components/molecules/ebookNav';
import * as S from '@src/styles/pageStyles/ebook/index.styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { bookApi } from '@src/apis';
import ipfs from '@src/utils/ipfs';
import Button from '@src/components/atoms/button';

export default function Ebook() {
  const [epubData, setEpubData] = useState<ArrayBuffer>(new ArrayBuffer(0));
  const [curPage, setCurPage] = useState<number>(0);
  const [clickState, setClickState] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [userPW, setUserPW] = useState<string>('');
  const [showEpub, setShowEpub] = useState<boolean>(false);
  const [epubCfi, setEpubCfi] = useState<string>('');

  const router = useRouter();
  const bookId = Array.isArray(router.query.bookId) ? router.query.bookId[0] : router.query.bookId;

  const getBookAndDecrypt = async () => {
    let isDecrypted = false;
    if (bookId && userPW !== '') {
      // get bookshelf address from bookid
      bookApi.getBookViewDetail(bookId).then((res) => {
        setTotalPages(res.data.totalPages);
        setCurPage(res.data.readPages);
        setEpubCfi(res.data.epubCfi);
        const bookshelfAddress = res.data.address;
        ipfs.downloadBookFile(userPW, bookshelfAddress).then((decryptedData) => {
          const binary = atob(decryptedData);
          const uintArray = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            uintArray[i] = binary.charCodeAt(i);
          }

          const epubBlob = new Blob([uintArray], { type: 'application/epub+zip' });
          epubBlob.arrayBuffer().then((data) => {
            setEpubData(data);
            setShowEpub(true);
          });
        });
      });
    }
    return isDecrypted;
  };

  const movePage = (direction: number) => {
    if (direction === 1 && totalPages >= curPage + 2) {
      setCurPage(curPage + 2);
      setClickState(1);
    } else if (direction === -1 && curPage - 2 >= 0) {
      setCurPage(curPage - 2);
      setClickState(-1);
    }
  };

  const closeViewer = () => {
    router.push('/bookshelf?new=true');
    if (bookId) {
      bookApi.postBookshelfPage(bookId, curPage, epubCfi);
    }
  };

  const decrypt = () => {
    getBookAndDecrypt();
  };

  return (
    <>
      {showEpub ? (
        <>
          <EbookNav closeViewer={closeViewer} />
          <S.Container>
            <S.LeftArrow src={arrowLeft} alt="arrowLeft" onClick={() => movePage(-1)} />
            <EpubViewer
              side="left"
              bookBinary={epubData}
              clickState={clickState}
              setClickState={setClickState}
              epubCfi={epubCfi}
              setEpubCfi={setEpubCfi}
            />
            <S.Line />
            <S.RightArrow src={arrowRight} alt="arrowRight" onClick={() => movePage(1)} />
          </S.Container>
        </>
      ) : (
        <S.InputPW>
          비밀번호를 입력해 주세요
          <S.InputContainer>
            <S.InputField
              size={'default'}
              state={'focus'}
              placeholder={'비밀번호를 입력해 주세요'}
              setInput={setUserPW}
            />
            <Button length="short" onClick={decrypt} content="입력" />
          </S.InputContainer>
        </S.InputPW>
      )}
    </>
  );
}
