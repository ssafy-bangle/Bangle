import Input from '@src/components/atoms/input';
import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const Line = styled.div`
  width: 5rem;
  height: 100rem;
  background-color: var(--BG_GRAY3) !important;
`;

export const LeftArrow = styled(Image)`
  width: 1.5rem;
  height: 3.3476rem;
  position: absolute;
  top: 310px;
  left: -100px;
  cursor: pointer;
`;

export const RightArrow = styled(LeftArrow)`
  width: 1.5rem;
  height: 3.3476rem;
  left: 1080px;
`;

export const InputPW = styled.div`
  color: var(--BG_GRAY1);
  text-align: center;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20rem;
  ::placeholder {
    color: var(--BG_GRAY2);
  }
`;

export const InputField = styled(Input)`
  background-color: aliceblue;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 2rem;
  color: var(--BG_GRAY1);
  margin-top: 4rem;
  flex-direction: column;
  justify-content: space-between;
`;
