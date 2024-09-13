import React from 'react';
import { InputStyles, RadioStyles } from './input.styles';

interface InputProps {
  type?: 'text' | 'image' | 'number' | 'password' | 'date' | 'radio';
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, className, value, onChange }) => {
  switch (type) {
    case 'text':
      return (
        <InputStyles
          type="text"
          placeholder={placeholder}
          className={className || 'text-input'}
          value={value as string}
          onChange={onChange}
        />
      );
    case 'password':
      return (
        <InputStyles
          type="password"
          placeholder={placeholder}
          className={className || 'text-input'}
          value={value as string}
          onChange={onChange}
        />
      );
    case 'number':
      return (
        <InputStyles
          type="text"
          placeholder={placeholder}
          className={className || 'number-input'}
          value={value as string}
          onChange={onChange}
        />
      );
    case 'date':
      return (
        <InputStyles
          type="date"
          placeholder={placeholder}
          className={className || 'text-input'}
          value={value as string}
          onChange={onChange}
        />
      );
    case 'image':
      return (
        <InputStyles
          type="file"
          placeholder={placeholder}
          className={className || 'image-input'}
          value={value}
          onChange={onChange}
        />
      );
      case 'radio':
      return (
        <RadioStyles>
          <label>
            <input
              type="radio"
              name="type"
              value="receita"
              checked={value === 'receita'}
              onChange={onChange}
            />
            Receita
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="despesa"
              checked={value === 'despesa'}
              onChange={onChange}
            />
            Despesa
          </label>
        </RadioStyles>
      );
    default:
      return <InputStyles type="text" placeholder={placeholder} className={className} value={value as string} onChange={onChange} />;
  }
};

export default Input;
