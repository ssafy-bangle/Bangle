import { message } from 'antd';
import { RcFile } from 'antd/es/upload';

export const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const beforeImgUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('JPG/PNG 파일만 업로드 해주세요');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('2MB보다 작은 파일을 업로드 해주세요');
  }
  return isJpgOrPng && isLt2M;
};
