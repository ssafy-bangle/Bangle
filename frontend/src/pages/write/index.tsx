import UploadBookCover from '@src/components/organisms/uploadBookCover';
import * as S from './index.styled';
import UploadBookInfo from '@src/components/organisms/uploadBookInfo';
import Modal from '@src/components/molecules/modal';
import PageTitle from '@src/components/atoms/pageTitle';
import { useEffect, useState } from 'react';
import type { DropdownItems } from '@src/types/props';
import { bookApi } from '@src/apis';
import { useRouter } from 'next/router';

const items: DropdownItems[] = [
  {
    label: '일반',
    key: 0,
  },
  {
    label: '자기계발',
    key: 1,
  },
  {
    label: '금융',
    key: 2,
  },
  {
    label: '소설',
    key: 3,
  },
];

export default function Write() {
  const router = useRouter();
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [genre, setGenre] = useState<string>('');
  const [introduction, setIntroduction] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState<string>('');
  const [isNft, setIsNft] = useState<boolean>(false);

  const handlePostBook = async () => {
    await bookApi.postBook({
      title: title,
      cover: '',
      price: 0,
      file: '',
      introduce: introduction,
    });
  };

  useEffect(() => {
    console.log('title', title);
    console.log('price', price);
    console.log('genre', genre);
    console.log('isNft', isNft);
    console.log('introduction', introduction);
    console.log('imgUrl', imgUrl);
    console.log('isNft', isNft);
  });

  return (
    <>
      <PageTitle>출판하기</PageTitle>
      <S.Content>
        <UploadBookCover
          imgUrl={imgUrl}
          loding={loading}
          setLoading={setLoading}
          setImgUrl={setImgUrl}
          setIsNft={setIsNft}
        />
        <UploadBookInfo
          setTitle={setTitle}
          setPrice={setPrice}
          setGenre={setGenre}
          setIntroduction={setIntroduction}
          items={items}
        />
      </S.Content>
      <S.BtnContainer>
        <Modal
          type="publish"
          title={'책제목'}
          firstPrice={5}
          secondPrice={10}
          onClick={() => {
            console.log('Write TEST!');
            handlePostBook();
            router.push('/');
          }}
        />
      </S.BtnContainer>
    </>
  );
}
