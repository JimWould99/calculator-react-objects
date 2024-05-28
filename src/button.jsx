const Button = ({ value }) => {
  return (
    <>
      <button onClick={() => console.log("test")}>{value}</button>
    </>
  );
};

export default Button;
