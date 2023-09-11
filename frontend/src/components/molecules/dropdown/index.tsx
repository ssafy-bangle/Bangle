import * as S from './index.styled';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import type { DropdownItems, DropdownProps } from '@src/types/props';

const items: DropdownItems[] = [
  {
    label: '일반',
    key: 0,
  },
  {
    label: '자기계발',
    key: 1,
  },
  {
    label: '금융',
    key: 2,
  },
  {
    label: '소설',
    key: 3,
  },
];

export default function DropdownItem({ size, state, setItem }: DropdownProps) {
  const [selectedItem, setSelectedItem] = useState<DropdownItems>(items[0]);

  const onClick: MenuProps['onClick'] = ({ key }) => {
    const tmp: number = Number(key);
    setSelectedItem(items[tmp]);
    console.log(items[tmp]);
  };

  return (
    <>
      <S.StyledSelection menu={{ items, onClick }} trigger={['click']} overlayStyle={{ minWidth: '22.8rem' }}>
        <a onClick={(e) => e.preventDefault()}>
          <S.StyledSpace>
            {selectedItem.label}
            <DownOutlined />
          </S.StyledSpace>
        </a>
      </S.StyledSelection>
    </>
  );
}
