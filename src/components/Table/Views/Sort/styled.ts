import styled, { css } from "styled-components";

export const Box = styled.div`
  ${({ internal }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    transition: all 0.3s ease;

    .arrow {
      position: absolute;
      opacity: 0.3;
      color: ${internal.colors.gray.strong};
      transition: all 0.3s ease;

      &.top {
        bottom: -2px;
      }

      &.bottom {
        top: -2px;
      }

      &.active {
        opacity: 1;
        stroke-width: 3;
        scale: 1.2;
      }
    }
  `}
`;
