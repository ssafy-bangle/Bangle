import { RatingProps } from '@src/types/props';
import * as S from './index.styled';
import { useEffect, useState } from 'react';

export default function Rating({ value, label, editable, setInput }: RatingProps) {
  const handleRateChange = (newValue: number) => {
    console.log('Rate Changed:', newValue);
    setInput(newValue);
  };

  useEffect(() => {
    console.log('newValue', value);
    setRatingValue(value);
  }, [value]);

  const [ratingValue, setRatingValue] = useState<number>(value);

  return (
    <>
      <S.Container>
        <S.RateStar allowHalf value={ratingValue} disabled={editable ? false : true} onChange={handleRateChange} />
        {label && <S.LabelRate>{ratingValue}</S.LabelRate>}
      </S.Container>
    </>
  );
}
