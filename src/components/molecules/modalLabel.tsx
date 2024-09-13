
import React from 'react';
import Input from '../atoms/input/input';
import { ModalLabelStyled } from './molecules.styles';

interface ModalLabelProps {
  title: string;
  type?: "number" | "text" | "image" | "date" | "radio";
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalLabel: React.FC<ModalLabelProps> = ({ title, type, placeholder, value, onChange }) => {
  return (
    <ModalLabelStyled>
      <p>{title}</p>
      <Input type={type} placeholder={placeholder} value={value as string} onChange={onChange}/>
    </ModalLabelStyled>
  );
};

export default ModalLabel;
