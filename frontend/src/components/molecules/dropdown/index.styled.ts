import styled from 'styled-components';
import { Select, Dropdown, Space } from 'antd';

// export const StyledSelection = styled(Select)`
//   width: 22.8rem;
//   padding: 1.2rem 1.6rem 1.2rem 1.6rem;
//   border: 1px solid;
//   background-color: red !important;
//   border-color: var(--BG_GRAY2);
//   font-size: 1.6rem;
//   color: var(--BG_GRAY1);
//   font-weight: 500;
//   border-radius: 1.2rem;
//   display: flex;
//   justify-content: space-between;
//   &:hover,
//   &:focus {
//     border-color: var(--BG_MAIN) !important;
//   }
//   & > .ant-select {
//     background-color: blue !important;
//   }
// `;

export const StyledSelection = styled(Dropdown)`

`;

export const StyledSpace = styled(Space)`
  width: 22.8rem;
  padding: 1.2rem 1.6rem 1.2rem 1.6rem;
  border: 1px solid;
  background-color: transparent !important;
  border-color: var(--BG_GRAY2);
  font-size: 1.6rem;
  color: var(--BG_GRAY1);
  font-weight: 500;
  border-radius: 1.2rem;
  display: flex;
  justify-content: space-between;
  &:hover,
  &:focus {
    border-color: var(--BG_MAIN) !important;
  }
`;
