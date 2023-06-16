import styled from "styled-components";

const positionVariants = {
  top: "margin-top",
  right: "margin-right",
  left: "margin-left",
  bottom: "margin-bottom",
};

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
};

const getVariant = (position, size, theme) => {
  const property = positionVariants[position];
  const spaceIndex = sizeVariants[size];
  const spacing = theme.space[spaceIndex];
  return `${property}:${spacing}`;
};

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}}
`;

Spacer.defaulProps = {
  position: "top",
  size: "small",
};
