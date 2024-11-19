import styled, { css } from "styled-components";
import { Skeleton } from ".././../../Skeleton";

export const Area = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.gray.strong};
    font-size: ${theme.font.size.xsmall};
    height: 30px;
    background-color: transparent;

    @media (max-width: 1440px) {
      width: 200px;
    }

    .infos {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.xxsmall};

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
  ${({ theme }) => css`
    position: initial;
    border-radius: ${theme.border.radius};
  `}
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: ${theme.colors.gray.light};
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  `}
`;
