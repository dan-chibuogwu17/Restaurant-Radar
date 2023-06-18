import styled, { useTheme } from "styled-components/native";

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

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;
export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaulProps = {
  position: "top",
  size: "small",
};
