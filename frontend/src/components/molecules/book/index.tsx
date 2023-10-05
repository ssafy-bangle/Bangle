import * as S from './index.styled';
import { BookProps } from '@src/types/props';
import BookCover from '@src/components/atoms/bookCover';
import { Popover, Progress } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export default function Book({ data, imgsrc, onClick }: BookProps) {
  // authorId
  const router = useRouter();
  const content = (
    <div>
      <div onClick={()=>router.push(`/bookshelf/${data?.bookId}`)}>책 정보 보기</div>
      <hr />
      <div onClick={()=>router.push(`/author/${data?.authorId}`)}>작가 정보 보기</div>
    </div>
  )

  return (
    <>
      {' '}
      {onClick && (
        <div>
          <BookCover imgsrc={imgsrc} onClick={() => onClick(data?.bookId)} />
          <S.Progress>
            <Progress percent={data?.progress} size="small" strokeColor={"#FFE86F"}/>
          </S.Progress>
          <S.BookTitle onClick={() => onClick(data?.bookId)}>
            {data?.title}
            <div onClick={(e)=>{e.stopPropagation()}}>
              <Popover content={content} trigger={"click"} placement='bottomLeft'>
                <MoreOutlined />
              </Popover>
            </div>
          </S.BookTitle>
        </div>
      )}{' '}
    </>
  );
}
