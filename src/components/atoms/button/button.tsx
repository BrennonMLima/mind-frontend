import React from 'react';
import { StyledButton } from './button.styles';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick, type = "button", icon }) => {
  return (
    <StyledButton className={`button ${className}`} onClick={onClick} type={type}>
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </StyledButton>
  );
};

export default Button;
