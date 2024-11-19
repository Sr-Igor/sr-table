import styled, { css } from "styled-components";

export const Root = styled.div<{ $isLoading?: boolean }>`
  ${({ theme, $isLoading }) => css`
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
    font-size: ${theme.font.size.xsmall};
    opacity: ${$isLoading ? 0.5 : 1};
    pointer-events: ${$isLoading ? "none" : "all"};

    .btn--pagination {
      background-color: transparent;
      width: 28px;
      height: 100%;

      &:hover {
        opacity: 0.5;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }

    p {
      color: ${theme.colors.gray.strong};
    }

    .current {
      border: 1px solid ${theme.colors.gray.light};
      border-radius: ${theme.border.radius};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 100%;
    }
  `}
`;
