import * as S from './index.styled';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { beforeImgUpload, getBase64 } from '@src/utils';

export default function UploadBookCover({ imgUrl, loading, setLoading, setCoverData, setImgUrl }: any) {
  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImgUrl(url);
        const coverData = info.file.originFileObj;
        coverData && setCoverData(coverData);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <S.Container>
      <S.InputTitle>
        책 표지 <strong>*</strong>
      </S.InputTitle>

      <S.StyledUpload
        name="avatar"
        listType="picture-card"
        className="uploader"
        showUploadList={false}
        beforeUpload={beforeImgUpload}
        onChange={handleChange}
        action={'/api/noop'}>
        {imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </S.StyledUpload>
    </S.Container>
  );
}
