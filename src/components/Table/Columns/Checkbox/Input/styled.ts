import styled, { css } from "styled-components";

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
    position: relative;

    ${$checked &&
    css`
      border-color: ${theme.colors.red.strong};
      background-color: ${theme.colors.red.strong};
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
