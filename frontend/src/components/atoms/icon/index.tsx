import * as S from './index.styled';
import { IconProps } from '@src/types/props';
import { SyncOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';

export default function Icon({ name }: IconProps) {
  function RenderComponent({ name }: IconProps) {
    if (name === 'mode') {
      return <SyncOutlined />;
    } else if (name === 'cart') {
      return <ShoppingCartOutlined />;
    } else if (name === 'search') {
      return <SearchOutlined />;
    } else {
      return name;
    }
  }

  return (
    <>
      <RenderComponent name={name} />
    </>
  );
}
