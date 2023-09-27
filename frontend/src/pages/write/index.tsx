import UploadBookCover from '@src/components/organisms/uploadBookCover';
import * as S from '@src/styles/pageStyles/write/index.styled';
import UploadBookInfo from '@src/components/organisms/uploadBookInfo';
import Modal from '@src/components/molecules/modal';
import PageTitle from '@src/components/atoms/pageTitle';
import { useEffect, useState } from 'react';
import type { DropdownItems } from '@src/types/props';
import { bookApi } from '@src/apis';
import { useRouter } from 'next/router';
import Button from '@src/components/atoms/button';

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
  const [fileData, setFileData] = useState<File>();
  const [coverData, setCoverData] = useState<File>();
  const [imgUrl, setImgUrl] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [genre, setGenre] = useState<string>('일반');
  const [introduction, setIntroduction] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [isNft, setIsNft] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handlePostBook = async () => {
    await bookApi.postBook({
      title: title,
      price: 0,
      introduce: introduction,
      genre: genre,
      file: fileData,
      cover: coverData,
    }).then((res)=>console.log("HANDLE BOOK POSE RES: " + res));
  };

  useEffect(() => {
    console.log('title', title);
    console.log('price', price);
    console.log('genre', genre);
    console.log('isNft', isNft);
    console.log('introduction', introduction);
  });

  return (
    <>
      <PageTitle>출판하기</PageTitle>
      <S.Content>
      <UploadBookCover
          imgUrl={imgUrl}
          loding={loading}
          setLoading={setLoading}
          setCoverData={setCoverData}
          setImgUrl={setImgUrl}
          setIsNft={setIsNft}
        />
        <UploadBookInfo
          setTitle={setTitle}
          setPrice={setPrice}
          setGenre={setGenre}
          setIntroduction={setIntroduction}
          setFileData={setFileData}
          items={items}
        />
      </S.Content>
      <S.BtnContainer>
        <Button length={'long'} content={'다음'} onClick={showModal} />
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          type="publish"
          title={'책제목'}
          price={10}
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