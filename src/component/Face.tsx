import React from 'react';

interface FaceProps {
    eyeStyle?: React.CSSProperties;
    mouthStyle?: React.CSSProperties;
}

const Face: React.FC<FaceProps> = ({ eyeStyle, mouthStyle }) => {
    return (
        <div style={styles.Container}>
            <div style={styles.Face}>
                <div style={styles.Eyes}>
                    <div style={{ ...styles.eye, ...eyeStyle }}></div>
                    <div style={{ ...styles.eye, ...eyeStyle }}></div>
                </div>
                <div style={{ ...styles.Mouth, ...mouthStyle }}></div>
            </div>
        </div>
    );
};

const styles = {
    Container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    Face: {
        width: '200px',
        height: '200px',
        backgroundColor: 'yellow',
        borderRadius: '50%',
        position: 'relative' as 'relative',
    },
    Eyes: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute' as 'absolute',
        top: '50px',
        width: '60%',
        padding: '0 40px',
    },
    eye: {
        width: '30px',
        height: '30px',
        backgroundColor: 'black',
        borderRadius: '50%',
    },
    Mouth: {
        width: '100px',
        height: '50px',
        border: '5px solid black',
        borderTop: 'none',
        borderRadius: '0 0 50px 50px',
        position: 'absolute' as 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
    },
};

export default Face;