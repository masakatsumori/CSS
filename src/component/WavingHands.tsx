import React from 'react';
import '../CSS/WavingHands.css'; // CSSファイルをインポート

interface WavingHandsProps {
    backgroundColor?: string;
    walk?: boolean;
}

const WavingHands: React.FC<WavingHandsProps> = ({ backgroundColor = '#3498db', walk = false }) => {
    const className = `circle ${walk ? 'circleWalk' : ''}`;

    return (
        <div className={className} style={{ backgroundColor }}>
            <div className="eyes left colorChange"></div>
            <div className="eyes right colorChange"></div>
            <div className="foot left" style={{ backgroundColor }}></div>
            <div className="foot right" style={{ backgroundColor }}></div>
            <div className="hand left" style={{ backgroundColor }}></div>
            <div className="hand right" style={{ backgroundColor }}></div>
        </div>
    );
};

export default WavingHands;
