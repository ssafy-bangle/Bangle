import { Rate } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
// export const StyledInput = styled(Input)<{
//   size: 'short' | 'default' | 'medium' | 'long';
//   state: 'default' | 'focus' | 'error';
// }>`
//   width: ${({ size }) => {
//     switch (size) {
//       case 'short':
//         return '22.7rem';
//       case 'medium':
//         return '27rem';
//       case 'long':
//         return '56.4rem';
//       default:
//         return '31.2rem';
//     }
//   }};
export const RateStar = styled(Rate)<{
  size: 'small' | 'default'
}>`
  font-size: ${({size}) => {
    switch (size) {
      case 'small': return '2rem';
      case 'default': return '3.2rem';
    }
  }};
  font-weight: 700;
  color: var(--BG_POINT);
`;

export const LabelRate = styled.div`
  color: var(--BG_GRAY1);
  font-size: 2rem;
  font-weight: 700;
  margin-left: 2rem;
`;
