import React, { useEffect, useState } from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import * as S from './index.styled';
import Input from '@src/components/atoms/input';
import Dropdown from '@src/components/molecules/dropdown';
import type { DropdownItems } from '@src/types/props';

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

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default function UploadBookInfo() {
  const [genre, setGenre] = useState<string>();
  useEffect(() => {
    console.log('TEST', genre);
  }, [genre]);
  return (
    <S.Container>
      <S.InputContainer>
        <S.InputTitle>
          제목 <strong>*</strong>
        </S.InputTitle>
        <Input placeholder={'30자 이내로 작성해주세요'} size={'long'} state={'default'} setInput={() => {}} />
      </S.InputContainer>

      <S.InputContainer>
        <S.Price>
          <S.InputTitle>
            가격 <strong>*</strong>
          </S.InputTitle>
          <Input placeholder={'단위 : 먼지'} size={'short'} state={'default'} setInput={() => {}} />
        </S.Price>
        <S.Genre>
          <S.InputTitle>장르</S.InputTitle>
          <Dropdown items={items} setInput={setGenre} />
        </S.Genre>
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>소개</S.InputTitle>
        <S.Textarea placeholder="1000자 이내로 작성해주세요" />
      </S.InputContainer>

      <S.UploaderContainer>
        <S.UploadTitle>
          파일 업로드 <strong>*</strong>
        </S.UploadTitle>
        <Dragger {...props}>
          <S.IconContainer>
            <UploadOutlined style={{ color: 'var(--BG_GRAY1)', marginRight: '1rem' }} />
            <p className="ant-upload-text">10 Mb 이하 EPUB 형식의 책 파일을 업로드해주세요.</p>
          </S.IconContainer>
        </Dragger>
      </S.UploaderContainer>
    </S.Container>
  );
}
