import React, { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className='input-field'>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
