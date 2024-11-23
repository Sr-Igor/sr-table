import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    gap: ${theme.spacings.xxxsmall};
    padding: ${theme.spacings.xxsmall} 0;
    border-radius: ${theme.border.xxradius};

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 28px;
      min-width: 180px;
      background-color: transparent;
      padding: 0 ${theme.spacings.xxsmall};
      background-color: ${theme.colors.background};
      z-index: 1;

      &:hover {
        opacity: 0.6;
      }
    }

    .actions--empty {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${theme.spacings.xxsmall} 0;
      color: ${theme.colors.gray.strong};
      font-size: ${theme.font.size.xxxsmall};
      width: 180px;
      cursor: not-allowed;
    }
  `}
`;
