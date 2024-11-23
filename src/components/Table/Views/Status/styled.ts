import { Skeleton } from "../../../Skeleton";
import styled, { DefaultTheme, css } from "styled-components";

export const RootModifiers = {
  green: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green.light};
    border-color: ${theme.colors.green.light};

    .point {
      background-color: ${theme.colors.green.strong};
    }

    p {
      color: ${theme.colors.green.strong};
    }
  `,

  gray: (theme: DefaultTheme) => css`
    background-color: transparent;
    border-color: ${theme.colors.gray.light};

    .point {
      background-color: ${theme.colors.gray.strong};
    }

    p {
      color: ${theme.colors.gray.strong};
    }
  `,
  yellow: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.yellow.light};
    border-color: ${theme.colors.yellow.light};

    .point {
      background-color: ${theme.colors.yellow.strong};
    }

    p {
      color: ${theme.colors.yellow.strong};
    }
  `,
  red: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.red.light};
    border-color: ${theme.colors.red.light};

    .point {
      background-color: ${theme.colors.red.strong};
    }

    p {
      color: ${theme.colors.red.strong};
    }
  `,
  orange: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.orange.light};
    border-color: ${theme.colors.orange.light};

    .point {
      background-color: ${theme.colors.orange.strong};
    }

    p {
      color: ${theme.colors.orange.strong};
    }
  `,
};

export const Root = styled.div<{
  $type: keyof typeof RootModifiers;
  $width?: string;
  $height: number;
  $loading?: boolean;
}>`
  ${({ theme, $type, $height, $width, $loading }) => css`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${$height}px;
    width: ${$width || "100%"};
    gap: ${theme.spacings.xxxsmall};
    border: 1px solid ${theme.colors.gray.light};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: 5px;

    .point {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: ${theme.colors.gray.strong};
    }

    p {
      font-size: ${theme.font.size.xxxsmall};
      color: ${theme.colors.gray.strong};
      font-weight: 600;
    }

    ${RootModifiers[$type](theme)}

    ${$loading &&
    css`
      border-color: ${theme.colors.background};
    `}
  `}
`;

export const Skt = styled(Skeleton)``;
