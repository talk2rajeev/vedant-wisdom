import React, { useState } from 'react';
import './combobox.css';

const LanguageSelector = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Hindi');

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
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