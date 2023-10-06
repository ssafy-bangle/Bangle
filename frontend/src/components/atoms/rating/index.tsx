import { RatingProps } from '@src/types/props';
import * as S from './index.styled';
import { useEffect, useState } from 'react';

export default function Rating({ value, label, editable, setInput, size }: RatingProps) {
  const [ratingValue, setRatingValue] = useState<number>(value);

  useEffect(() => {
    setRatingValue(Math.round(value * 10)/10);
  }, [value]);

  const handleRateChange = (newValue: number) => {
    setInput(newValue);
  };

  return (
    <>
      <S.Container>
        <S.RateStar 
          size={size}
          allowHalf 
          value={ratingValue} 
          disabled={editable ? false : true} 
          onChange={handleRateChange} />
        {label && <S.LabelRate>{ratingValue}</S.LabelRate>}
      </S.Container>
    </>
  );
}
