"use client"; // this is a client component 👈🏽
import React, { useState } from 'react';
import './combobox.css';

const LanguageSelector = ({onLanguageChange}: {onLanguageChange: (lang: string) => void}) => {
  const [selectedOption, setSelectedOption] = useState<string>('Hindi');

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log('selected lang: ', value);
    setSelectedOption(value);
    debugger
    onLanguageChange(value);
  };

  return (
    <select
      onChange={handleSelect}
      value={selectedOption}
    >
      <option value="Hindi">Hindi</option>
      <option value="English">English</option>
    </select>
  );
};

export default LanguageSelector;