import React, { useState, useEffect, useRef } from 'react';
import WavingHands from './WavingHands';

const MovableCharacter: React.FC = () => {
    const [position, setPosition] = useState({ top: 50, left: 50 });
    const [direction, setDirection] = useState({ top: 0, left: 0 });
    const requestRef = useRef<number>();

    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                setDirection((prev) => ({ ...prev, top: -1 }));
                break;
            case 'ArrowDown':
                event.preventDefault();
                setDirection((prev) => ({ ...prev, top: 1 }));
                break;
            case 'ArrowLeft':
                event.preventDefault();
                setDirection((prev) => ({ ...prev, left: -1 }));
                break;
            case 'ArrowRight':
                event.preventDefault();
                setDirection((prev) => ({ ...prev, left: 1 }));
                break;
        }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
                setDirection((prev) => ({ ...prev, top: 0 }));
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                setDirection((prev) => ({ ...prev, left: 0 }));
                break;
        }
    };

    const animate = () => {
        setPosition((prev) => ({
            top: prev.top + direction.top * 0.5,
            left: prev.left + direction.left * 0.5,
        }));
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [direction]);

    return (
        <div
            style={{
                position: 'absolute',
                top: `${position.top}%`,
                left: `${position.left}%`,
                // width: '50px',
                // height: '50px',
                // backgroundColor: 'red',
            }}
        >
            <WavingHands backgroundColor="red" />
        </div>
    );
};

export default MovableCharacter;