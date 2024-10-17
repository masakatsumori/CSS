import React, { useState } from 'react';

interface SelectProps {
    options: string[];
    selectedValue: string;
    onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, selectedValue, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    return (
        <select value={selectedValue} onChange={handleChange}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Select;
