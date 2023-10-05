import * as S from './index.styled';
import { BookProps } from '@src/types/props';
import BookCover from '@src/components/atoms/bookCover';
import { Popover, Progress } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export default function Book({ data, imgsrc, onClick, showProgress }: BookProps) {
  // authorId
  const router = useRouter();
  const content = (
    <div>
      {
        showProgress ?
        <>
          <S.BookInfo onClick={() => router.push(`/review/${data?.bookId}`)}>책 리뷰 쓰기</S.BookInfo>
          <hr style={{ opacity: '35%' }} />
        </>
        : <></>
      }
      <S.BookInfo onClick={() => router.push(`/bookshelf/${data?.bookId}`)}>책 정보 보기</S.BookInfo>
      <hr style={{ opacity: '35%' }} />
      <S.BookInfo onClick={() => router.push(`/author/${data?.authorId}`)}>작가 정보 보기</S.BookInfo>
    </div>
  );

  return (
    <>
      {' '}
      {onClick && (
        <div>
          <BookCover imgsrc={imgsrc} onClick={() => onClick(data?.bookId)} />
          {
            showProgress ? 
            <S.Progress>
              <Progress percent={data?.progress} size="small" strokeColor={'#FFE86F'} />
            </S.Progress>
            : <br></br>
          }
          <S.BookTitle onClick={() => onClick(data?.bookId)}>
            {data?.title}
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}>
              <Popover content={content} trigger={'click'} placement="bottomRight" arrow>
                <MoreOutlined />
              </Popover>
            </div>
          </S.BookTitle>
        </div>
      )}{' '}
    </>
  );
}
