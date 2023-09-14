import * as S from './index.styled';
import { useRecoilState } from 'recoil';
import { CartOpenState } from '@src/modules/state';
import Button from '@src/components/atoms/button';
import { CartBlackImg } from '@src/assets/imgs';

export default function Cart() {
  const [open, setOpen] = useRecoilState(CartOpenState);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <S.StyledDrawer placement="right" onClose={onClose} open={open}>
      <S.Container>
        <S.Box>
          <S.Img src={CartBlackImg} width={20} alt="cartImg" />
          <S.Title>내가 담은 책들</S.Title>
        </S.Box>
        <S.ListContainer></S.ListContainer>
        <S.InfoContainer></S.InfoContainer>
        <Button length={'long'} content="결제하기" />
      </S.Container>
    </S.StyledDrawer>
  );
}
