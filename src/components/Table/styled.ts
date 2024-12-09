import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Area = styled.div`
  display: flex;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;

  &.table--stable,
  &.table--fixed {
    height: 100%;
    width: auto;
  }
`;

export const Scrollable = styled.span`
  ${({ theme }) => css`
    overflow: hidden;
    width: 100%;

    .scroll {
      width: 100%;
      height: 100%;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        height: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.gray.light};
        border-radius: 4px;
      }
    }
  `}
`;

export const Thead = styled.thead`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray.light};
    width: 100%;
  `}
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr<{ $height: number; $hover?: boolean }>`
  ${({ theme, $height, $hover }) => css`
    border: 1px solid ${theme.colors.gray.light};
    overflow: hidden;
    height: ${$height}px;
    border: 1px solid ${theme.colors.gray.light};

    ${$hover &&
    css`
      background-color: ${theme.colors.gray.light};
    `}
  `}
`;

export const Th = styled.th<{
  $width?: string;
  $identifier: string;
  $break?: number;
}>`
  ${({ theme, $width, $identifier, $break }) => css`
    text-align: left;
    color: ${theme.colors.gray.strong};
    font-size: ${theme.font.size.xxsmall};
    font-weight: 600;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border: 1px solid ${theme.colors.gray.light};
    border-right: none;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    ${$width &&
    css`
      width: ${$width};
    `}

    &.table--column--stable {
      min-width: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    &:last-child {
      border-right: 1px solid ${theme.colors.gray.light};
    }

    .cover {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.small};
    }

    &.usable {
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.6;
        background-color: ${theme.colors.gray.strong + "30"};
      }
    }

    &.${$identifier} {
      ${$break &&
      css`
        @media (max-width: ${$break}px) {
          display: none;
        }
      `}
    }
  `}
`;

export const Td = styled.td<{
  $width?: string;
  $height: number;
  $identifier: string;
  $break?: number;
}>`
  ${({ theme, $width, $height, $identifier, $break }) => css`
    position: relative;
    overflow: hidden;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border: 1px solid ${theme.colors.gray.light};
    border-right: none;
    border-top: none;

    &:last-child {
      border-right: 1px solid ${theme.colors.gray.light};
    }

    &.${$identifier} {
      ${$break &&
      css`
        @media (max-width: ${$break}px) {
          display: none;
        }
      `}
    }

    a,
    button {
      color: ${theme.colors.gray.strong};
      font-size: ${theme.font.size.xsmall};
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      display: block;

      ${$width &&
      css`
        width: ${$width};
      `}

      height: ${$height}px;
      background-color: transparent;

      &.actions {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
      }
    }

    &::first-letter {
      text-transform: uppercase;
    }

    &.actions {
      height: 100%;
      display: flex;
      gap: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Empty = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
    gap: ${theme.spacings.small};

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .image--box {
      width: 300px;
      height: 300px;
      position: relative;

      @media (max-width: 768px) {
        width: 200px;
        height: 200px;
      }
    }

    h4 {
      max-width: 400px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: ${theme.colors.gray.strong};
      font-size: ${theme.font.size.small};

      @media (max-width: 768px) {
        text-align: center;
        font-size: ${theme.font.size.xsmall};
      }
    }

    p {
      color: ${theme.colors.gray.strong};
      font-size: ${theme.font.size.xsmall};

      @media (max-width: 768px) {
        font-size: ${theme.font.size.xxsmall};
      }
    }
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    p {
      color: ${theme.colors.gray.strong};
      font-size: ${theme.font.size.xxsmall};
    }
  `}
`;
