import { UploadOutlined } from '@ant-design/icons';
import { Upload, UploadProps, message } from 'antd';
import * as S from './index.styled';
import Input from '@src/components/atoms/input';
import Dropdown from '@src/components/molecules/dropdown';
import React from 'react';

function UploadBookInfo({ setTitle, setPageNum, setPrice, setGenre, setIntroduction, setFileData, items }: any) {
  const { Dragger } = Upload;

  const bookUploadeProps: UploadProps = {
    name: 'file',
    multiple: true,
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.originFileObj} file uploaded successfully.`);
        const file = info.file.originFileObj;
        file && setFileData(file);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <S.Container>
      <S.InputContainer>
        <S.Price>
          <S.InputTitle>
            제목 <strong>*</strong>
          </S.InputTitle>
          <Input placeholder={'30자 이내로 작성해주세요'} size={'short'} state={'default'} setInput={setTitle} />
        </S.Price>
        <S.Genre>
          <S.InputTitle>
            장 수 <strong>*</strong>
          </S.InputTitle>
          <Input
            type="number"
            placeholder={'페이지 수를 입력하세요'}
            size={'short'}
            state={'default'}
            setInput={setPageNum}
          />
        </S.Genre>
      </S.InputContainer>

      <S.InputContainer>
        <S.Price>
          <S.InputTitle>
            가격 <strong>*</strong>
          </S.InputTitle>
          <Input type="number" placeholder={'단위 : 먼지'} size={'short'} state={'default'} setInput={setPrice} />
        </S.Price>
        <S.Genre>
          <S.InputTitle>장르</S.InputTitle>
          <Dropdown items={items} setInput={setGenre} />
        </S.Genre>
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>소개</S.InputTitle>
        <S.Textarea
          placeholder="1000자 이내로 작성해주세요"
          onChange={({ target: { value } }) => setIntroduction(value)}
        />
      </S.InputContainer>

      <S.UploaderContainer>
        <S.UploadTitle>
          파일 업로드 <strong>*</strong>
        </S.UploadTitle>
        <Dragger {...bookUploadeProps} action={'/api/noop'}>
          <S.IconContainer>
            <UploadOutlined style={{ color: 'var(--BG_GRAY1)', marginRight: '1rem' }} />
            <p className="ant-upload-text">10 Mb 이하 EPUB 형식의 책 파일을 업로드해주세요.</p>
          </S.IconContainer>
        </Dragger>
      </S.UploaderContainer>
    </S.Container>
  );
}

export default React.memo(UploadBookInfo);
