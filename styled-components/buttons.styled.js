import styled from "styled-components";
import { colors } from "../colors";

const Button = styled.button`
  border: 0;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const ButtonStyled = styled(Button)`
  background-color: ${(props) => {
    const type = props.color;
    if (type) {
      const color = colors[type];
      if (color) {
        return color["bg"];
      }
      return colors["primary"]["bg"];
    }
    return colors["primary"]["bg"];
  }};
  color: #fff;
`;

export const ButtonOutlineStyled = styled(Button)`
  border: 1px solid;
  color: #fff;

  border-color: ${(props) => {
    const type = props.color;
    if (type) {
      const color = colors[type];
      if (color) {
        return color["bg"];
      }
      return colors["primary"]["bg"];
    }
    return colors["primary"]["bg"];
  }};

  transition: background-color 0.25s linear;

  &:hover {
    background-color: ${(props) => {
      const type = props.color;
      if (type) {
        const color = colors[type];
        if (color) {
          return color["bg"];
        }
        return colors["primary"]["bg"];
      }
      return colors["primary"]["bg"];
    }};
  }
`;
