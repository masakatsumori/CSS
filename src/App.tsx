import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from './component/Select';
import ToggleButton from './component/Button';
import SSEComponent from './component/SSE';
import Face from './component/Face';
import FadeIn from './component/FadeIn';
import WavingHands from './component/WavingHands';
import MovableCharacter from './component/MovableCharacter';

function App() {
  const [color, setColor] = useState('#3498db');
  const [selectedValue1, setSelectedValue1] = useState<string>("");
  const [selectedValue2, setSelectedValue2] = useState<string>("");
  const [selectedValue3, setSelectedValue3] = useState<string>("");

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (value: string) => {
    setter(value);
  };

  const [toggleState, setToggleState] = useState(0);
  const states = [
    { text: 'OFF', color: 'red' },
    { text: 'ON', color: 'blue' },
    { text: 'MAYBE', color: 'green' }
  ];

  const [expression, setExpression] = useState('happy');

  useEffect(() => {
    const expressions = ['sad', 'happy', 'surprised'];
    setExpression(expressions[toggleState] || 'happy');
  }, [toggleState]);

  const getStyles = () => {
    switch (expression) {
      case 'sad':
        return {
          eyeStyle: {},
          mouthStyle: {
            borderRadius: '50px 50px 0 0',
            borderBottom: 'none',
            borderTop: '5px solid black',
            top: '100px',
            bottom: 'auto',
          },
        };
      case 'surprised':
        return {
          eyeStyle: {
            width: '40px',
            height: '40px',
          },
          mouthStyle: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
          },
        };
      default:  // 'happy' and default
        return {
          eyeStyle: {},
          mouthStyle: {},
        };
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ textAlign: "center", marginTop: "5vh" }}>
          <form>
            <input type="text" placeholder="Text input" />
            <input type="number" placeholder="Number input" />
            <input type="checkbox" />
            <input type="radio" />
            {/* <input type="submit" /> */}
          </form>
          <MovableCharacter />
          <Select options={['Option 1', 'Option 2', 'Option 3']} selectedValue={selectedValue1} onChange={handleChange(setSelectedValue1)} />
          <Select options={['Option 4', 'Option 5', 'Option 6']} selectedValue={selectedValue2} onChange={handleChange(setSelectedValue2)} />
          <Select options={['Option 7', 'Option 8', 'Option 9']} selectedValue={selectedValue3} onChange={handleChange(setSelectedValue3)} />
          <div>
            <p>Selected Value 1: {selectedValue1}</p>
            <p>Selected Value 2: {selectedValue2}</p>
            <p>Selected Value 3: {selectedValue3}</p>
          </div>
          <ToggleButton toggleState={toggleState} setToggleState={setToggleState} states={states} />
          <FadeIn />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <div style={{ position: 'relative', overflow: 'hidden', width: '100vw', height: '100vh' }}>
            <div style={{ display: 'flex', marginTop: '10vh' }}>
              <WavingHands backgroundColor={color} walk={true} />
              <WavingHands backgroundColor={color} walk={true} />
              <WavingHands backgroundColor={color} walk={true} />
              <WavingHands backgroundColor={color} walk={true} />
              <WavingHands backgroundColor={color} walk={true} />
              <div className="wall"></div>
              <div className="door"></div>
              <div className="room"></div>
            </div>
          </div>
          <SSEComponent />
          <Face {...getStyles()} />
        </div>
      </header>
    </div>
  );
}

export default App;
