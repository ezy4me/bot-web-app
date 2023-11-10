import React, { ChangeEvent } from 'react';

interface InputProps {
  label?: string;
  value: string;
  placeHolder?: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, value,placeHolder, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className='input-field'>
      <label>{label}</label>
      <input type="text" placeholder={placeHolder} value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
