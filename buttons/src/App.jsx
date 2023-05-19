import React from 'react';


const Button = ({ buttonText, buttonStyle, onClick }) => {
  return (
    <div style={{marginLeft:"90vh"}}>
    <button
      style={{ color: 'white', background: buttonStyle, margin:"5px" }}
      onClick={onClick}
    >
      {buttonText}
    </button>
    </div>
  );
};
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
    </div>
  );
};

export default App;
