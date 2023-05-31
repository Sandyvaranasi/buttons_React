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

export default Button;