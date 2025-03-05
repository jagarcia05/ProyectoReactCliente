import React from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown :(e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder,onKeyDown }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      style={{ padding: '8px', width: '100%' }}
    />
  );
};

export default Input;