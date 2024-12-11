import styled, { css } from "styled-components";
import { Skeleton } from ".././../../Skeleton";

export const Area = styled.a`
  ${({ internal }) => css`
    color: ${internal.colors.gray.strong};
    font-size: ${internal.font.size.xsmall};
    height: 30px;
    background-color: transparent;

    @media (max-width: 1440px) {
      width: 200px;
    }

    .infos {
      display: flex;
      align-items: center;
      gap: ${internal.spacings.xxsmall};

      .value {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: block;
        &::first-letter {
          text-transform: uppercase;
        }
      }
    }
  `}
`;

export const Skt = styled(Skeleton)`
  ${({ internal }) => css`
    position: initial;
    border-radius: ${internal.border.radius};
  `}
`;

export const Avatar = styled.div`
  ${({ internal }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: ${internal.colors.gray.light};
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  `}
`;
