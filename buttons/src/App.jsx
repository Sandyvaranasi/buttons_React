import React from 'react';
import Button from '../components/button';
import Counter from '../components/Counter';


const App = () => {
  const handleClickButton1 = () => {
    alert('I am Button 1 clicked');
  };

  const handleClickButton2 = () => {
    alert('I am Button 2 clicked');
  };

  return (
    <div>
      <Button
        buttonText="Button 1"
        buttonStyle="red"
        onClick={handleClickButton1}
      />
      <Button
        buttonText="Button 2"
        buttonStyle="blue"
        onClick={handleClickButton2}
      />
      <Counter/>
    </div>
  );
};

export default App;
