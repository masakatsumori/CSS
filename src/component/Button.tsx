import React, { useState } from 'react';

interface ToggleButtonProps {
    toggleState: number;
    setToggleState: React.Dispatch<React.SetStateAction<number>>;
    states: { text: string; color: string }[];
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ toggleState, setToggleState, states }) => {
    const handleClick = () => {
        setToggleState((prevState) => (prevState + 1) % states.length);
    };

    return (
        <button
            onClick={handleClick}
            style={{ backgroundColor: states[toggleState].color }}
        >
            {states[toggleState].text}
        </button>
    );
};

export default ToggleButton;