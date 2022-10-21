import React from "react";
import PropTypes from "prop-types";
import { Button as BootstrapButton } from "react-bootstrap";
import styled from "styled-components";

const BaseButton = styled(BootstrapButton)`
  border-radius: 2px;
  padding: 12px 24px;
`;

const PrimaryButton = styled(BaseButton)`
  background-color: ${(props) => (props.disabled ? "#F5F5F5" : "#F2B63D")};
  color: ${(props) => (props.disabled ? "gray" : "black")};
  border-color: #F2B63D;
  &:hover {
    background-color: #FFE86F;
    color: black
    border-color: #F2B63D;
  }
`;
const SecondaryButton = styled(BaseButton)`
  background-color: white;
  color: ${(props) => (props.disabled ? "gray" : "black")};
  border-color: blue;
  &:hover {
    background-color: gray;
    color: black;
    border-color: strongblue;
  }
`;
const DangerButton = styled(BaseButton)`
  background-color: lightred;
  color: ${(props) => (props.disabled ? "gray" : "black")};
  border-color: red;
  &:hover {
    background-color: red;
    color: black;
    border-color: red;
  }
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  secondary,
  danger,
  children,
  icon,
  iconLeft,
  onlyIcon,
}) => {
  if (primary)
    return (
      <PrimaryButton>
        {icon && iconLeft && <img src="https://via.placeholder.com/20" />}
        {!onlyIcon && children}
        {icon && !iconLeft && <img src="https://via.placeholder.com/20" />}
      </PrimaryButton>
    );
  if (secondary)
    return (
      <SecondaryButton>
        {icon && iconLeft && <img src="https://via.placeholder.com/20" />}
        {!onlyIcon && children}
        {icon && !iconLeft && <img src="https://via.placeholder.com/20" />}
      </SecondaryButton>
    );
  if (danger)
    return (
      <DangerButton>
        {icon && iconLeft && <img src="https://via.placeholder.com/20" />}
        {!onlyIcon && children}
        {icon && !iconLeft && <img src="https://via.placeholder.com/20" />}
      </DangerButton>
    );

  return <BaseButton>{children}</BaseButton>;
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
  icon: PropTypes.bool,
  iconLeft: PropTypes.bool,
  onlyIcon: PropTypes.bool,
};
