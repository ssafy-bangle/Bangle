import { ConfigProvider } from 'antd';
import * as S from './index.styled';
import { CheckBoxProps } from '@src/types/props';

export default function Checkbox({ content, setInput }: CheckBoxProps) {
  return (
    <S.Container>
      <ConfigProvider>
        <S.StyledCheckBox
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={({ target: { checked } }) => setInput(checked)}
        />
      </ConfigProvider>
      <S.Content>{content}</S.Content>
    </S.Container>
  );
}
