import * as S from './index.styled';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { ConfigProvider, MenuProps } from 'antd';
import type { DropdownItems, DropdownProps } from '@src/types/props';

export default function Dropdown({ source = 'default', items, setInput }: DropdownProps) {
  const [selectedItem, setSelectedItem] = useState<DropdownItems>(items[0]);

  const onClick: MenuProps['onClick'] = ({ key }) => {
    const tmp: number = Number(key);
    setSelectedItem(items[tmp]);
    setInput(items[tmp].label);
    console.log(items[tmp]);
  };

  return (
    <>
      <ConfigProvider theme={{ hashed: false }}>
        <S.StyledSelection menu={{ items, onClick }} trigger={['click']} overlayStyle={{ minWidth: '22.8rem' }}>
          <a onClick={(e) => e.preventDefault()}>
            <S.StyledSpace>
              {selectedItem.label}
              <DownOutlined />
            </S.StyledSpace>
          </a>
        </S.StyledSelection>
      </ConfigProvider>
    </>
  );
}
