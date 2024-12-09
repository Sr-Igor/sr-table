import styled, { DefaultTheme, css, keyframes } from "styled-components";

const gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const SkeletonModifier = {
  black: (theme: DefaultTheme) => css`
    --color--1: ${theme.colors.loading.light};
    --color--2: ${theme.colors.loading.strong};
  `,
};

const image = () => css`
  background-image: linear-gradient(
    30deg,
    var(--color--2),
    var(--color--1),
    var(--color--2)
  );
  background-size: 400% 400%;
  animation: ${gradient} 3s ease infinite;
`;

export const Skeleton = styled.div<{
  $loading?: boolean;
}>`
  ${({ theme, $loading }) => css`
    ${SkeletonModifier["black"](theme)}

    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;

    opacity: ${$loading ? 1 : 0};
    transition: opacity ${theme.transition.default};
    display: ${$loading ? "block" : "none"};
    ${image()}
  `}
`;
