import styled, { css } from "styled-components";

export const Box = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .size {
    opacity: 0;
    z-index: -1;
  }
`;

export const Container = styled.label<{ $checked: boolean }>`
  ${({ theme, $checked }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    border: 2px solid ${theme.colors.gray.light};
    cursor: pointer;
    position: absolute;
    background-color: ${theme.colors.background};

    ${$checked &&
    css`
      border-color: ${theme.colors.checkbox};
      background-color: ${theme.colors.checkbox};
    `}

    input {
      visibility: hidden;
    }

    .checkbox--icon {
      position: absolute;
    }

    .lbl--check {
      font-size: ${theme.font.size.xxsmall};
      color: ${theme.colors.gray.strong};
      margin-left: ${theme.spacings.xxxsmall};
      white-space: nowrap;
    }
  `}
`;
