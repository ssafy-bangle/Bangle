import { Button } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
`;

export const SearchInput = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const InputStyle = styled.div`
  ::placeholder {
    color: var(--BG_GRAY3);
  }
`;

export const SearchBtn = styled.button`
  color: var(--BG_MAIN);
  font-size: 2.4rem;
  background-color: transparent;
  border: none;
  z-index: 10;
  margin: 1.6rem;
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: none;
    outline: none;
    color: var(--BG_MAIN);
  }
`;

export const SearchLogContainer = styled.div`
  width: 100%;
  height: 29.5rem;
  border: 1px solid var(--BG_MAIN);
  border-radius: 1.6rem;
  background-color: var(--BG_BLACK);
  margin-top: 1.4rem;
  padding: 1.5rem 2.4rem;
`;

export const RecentContainer = styled.div`
  color: var(--BG_GRAY2);
  font-size: 1.4rem;
  font-weight: 500;
`;

export const RecentItemContainer = styled.div`
  margin-top: 1.2rem;
`;

export const RecentItem = styled.div`
  color: var(--BG_GRAY1);
  margin-top: 1.2rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const Divider = styled.div`
  background-color: var(--BG_GRAY3);
  margin: 1.6rem 0;
  height: 0.1rem;
  width: 100%;
`;

export const GenreContainer = styled.div`
  color: var(--BG_GRAY2);
  font-size: 1.4rem;
  font-weight: 500;
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.2rem;
  gap: 0.8rem;
  columns: 0.8rem;
`;

export const SearchIcon = styled.div`
  display: inline-flex;
  cursor: pointer;
  padding: 1.2rem;
  margin-left: auto;
  font-size: 2.4rem;
  color: var(--BG_WHITE);
`;
