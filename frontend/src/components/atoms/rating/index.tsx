import { RatingProps } from '@src/types/props';
import * as S from './index.styled';
import { StarTwoTone } from '@ant-design/icons';

export default function Rating({ value, label, editable, setInput }: RatingProps) {
  const handleRateChange = (value: number) => {
    console.log('Rate Changed:', value);
    setInput(value);
  };

  return (
    <>
      <S.Container>
        <S.RateStar allowHalf defaultValue={value} disabled={editable ? false : true} onChange={handleRateChange} />
        {
          label && <S.LabelRate>{value}</S.LabelRate>
        }
      </S.Container>
    </>
  );
}
