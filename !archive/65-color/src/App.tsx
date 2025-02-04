import { useState } from 'react';
import { RgbaColorPicker } from 'react-colorful';

const App = () => {
  const [color, setColor] = useState({ r: 170, g: 187, b: 204, a: 1 }); // Початковий колір

  return (
    <div>
      <h2>Виберіть колір:</h2>
      <RgbaColorPicker color={color} onChange={setColor} />
      <h3>
        Вибраний колір: rgba({color.r}, {color.g}, {color.b}, {color.a})
      </h3>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
          border: '1px solid black'
        }}
      />
    </div>
  );
};

export default App;
