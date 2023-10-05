import { Checkbox } from 'antd';
import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const StyledCheckBox = styled(Checkbox)`
  margin-right: 0.8rem;
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--BG_MAIN);
    border-color: var(--BG_MAIN);

    :where(.css-dev-only-do-not-override-190m0jy).ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
      .ant-checkbox-checked:not(.ant-checkbox-disabled)
      .ant-checkbox-inner {
      background-color: var(--BG_MAIN);
    }
    :where(.css-190m0jy).ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
      .ant-checkbox-checked:not(.ant-checkbox-disabled)
      .ant-checkbox-inner {
      background-color: var(--BG_MAIN);
    }
  }
  :where(.css-dev-only-do-not-override-190m0jy).ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-inner,
  :where(.css-dev-only-do-not-override-190m0jy).ant-checkbox:not(.ant-checkbox-disabled):hover .ant-checkbox-inner {
    border-color: var(--BG_MAIN);
  }
  :where(.css-dev-only-do-not-override-190m0jy).ant-checkbox .ant-checkbox-input:focus-visible + .ant-checkbox-inner {
    outline: none;
    outline-offset: 0;
  }
  :where(.css-190m0jy).ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-inner,
  :where(.css-190m0jy).ant-checkbox:not(.ant-checkbox-disabled):hover .ant-checkbox-inner {
    border-color: var(--BG_MAIN);
  }
  :where(.css-190m0jy).ant-checkbox .ant-checkbox-input:focus-visible + .ant-checkbox-inner {
    outline: none;
    outline-offset: 0;
  }
`;

export const Content = styled.span`
  margin: auto 0 auto 0;
  color: var(--BG_GRAY3);
  font-size: 1.4rem;
  font-weight: 500;
`;
