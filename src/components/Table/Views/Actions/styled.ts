import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ internal }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    gap: ${internal.spacings.xxxsmall};
    padding: ${internal.spacings.xxsmall} 0;
    border-radius: ${internal.border.xxradius};

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 28px;
      min-width: 180px;
      background-color: transparent;
      padding: 0 ${internal.spacings.xxsmall};
      background-color: ${internal.colors.background};
      z-index: 1;

      &:hover {
        opacity: 0.6;
      }
    }

    .actions--empty {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${internal.spacings.xxsmall} 0;
      color: ${internal.colors.gray.strong};
      font-size: ${internal.font.size.xxxsmall};
      width: 180px;
      cursor: not-allowed;
    }
  `}
`;
