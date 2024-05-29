const Button = ({ value, handleChange }) => {
  return (
    <>
      <button onClick={() => handleChange(value)}>{value}</button>
    </>
  );
};

export default Button;
