import styled, { css } from "styled-components";

export const Root = styled.div<{ $isLoading?: boolean }>`
  ${({ internal, $isLoading }) => css`
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${internal.spacings.xxsmall};
    font-size: ${internal.font.size.xsmall};
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
      color: ${internal.colors.gray.strong};
    }

    .current {
      border: 1px solid ${internal.colors.gray.light};
      border-radius: ${internal.border.radius};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 100%;
    }
  `}
`;
