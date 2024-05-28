const Display = ({ numbers }) => {
  return (
    <div className="display">
      <h1>
        {numbers.firstNumber} {numbers.operator} {numbers.secondNumber}
      </h1>
    </div>
  );
};

export default Display;
