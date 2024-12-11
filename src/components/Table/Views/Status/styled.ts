import { Skeleton } from "../../../Skeleton";
import styled, { DefaultTheme, css } from "styled-components";

export const RootModifiers = {
  green: (internal: DefaultTheme) => css`
    background-color: ${internal.colors.green.light};
    border-color: ${internal.colors.green.light};

    .point {
      background-color: ${internal.colors.green.strong};
    }

    p {
      color: ${internal.colors.green.strong};
    }
  `,

  gray: (internal: DefaultTheme) => css`
    background-color: transparent;
    border-color: ${internal.colors.gray.light};

    .point {
      background-color: ${internal.colors.gray.strong};
    }

    p {
      color: ${internal.colors.gray.strong};
    }
  `,
  yellow: (internal: DefaultTheme) => css`
    background-color: ${internal.colors.yellow.light};
    border-color: ${internal.colors.yellow.light};

    .point {
      background-color: ${internal.colors.yellow.strong};
    }

    p {
      color: ${internal.colors.yellow.strong};
    }
  `,
  red: (internal: DefaultTheme) => css`
    background-color: ${internal.colors.red.light};
    border-color: ${internal.colors.red.light};

    .point {
      background-color: ${internal.colors.red.strong};
    }

    p {
      color: ${internal.colors.red.strong};
    }
  `,
  orange: (internal: DefaultTheme) => css`
    background-color: ${internal.colors.orange.light};
    border-color: ${internal.colors.orange.light};

    .point {
      background-color: ${internal.colors.orange.strong};
    }

    p {
      color: ${internal.colors.orange.strong};
    }
  `,
};

export const Root = styled.div<{
  $type: keyof typeof RootModifiers;
  $width?: string;
  $height: number;
  $loading?: boolean;
}>`
  ${({ internal, $type, $height, $width, $loading }) => css`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${$height}px;
    width: ${$width || "100%"};
    gap: ${internal.spacings.xxxsmall};
    border: 1px solid ${internal.colors.gray.light};
    padding: ${internal.spacings.xxsmall} ${internal.spacings.xsmall};
    border-radius: 5px;

    .point {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: ${internal.colors.gray.strong};
    }

    p {
      font-size: ${internal.font.size.xxxsmall};
      color: ${internal.colors.gray.strong};
      font-weight: 600;
    }

    ${RootModifiers[$type](internal)}

    ${$loading &&
    css`
      border-color: ${internal.colors.background};
    `}
  `}
`;

export const Skt = styled(Skeleton)``;
