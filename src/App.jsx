import { useState } from "react";
import Display from "./display";
import Button_section from "./button_section";
const App = () => {
  let [startCalc, setStartCalc] = useState(true);

  let [numbers, setNumbers] = useState({
    firstNumber: "",
    operator: "",
    secondNumber: "",
  });

  function add() {
    let newNumber =
      parseFloat(numbers.firstNumber) + parseFloat(numbers.secondNumber);
    setNumbers((prevState) => ({
      ...prevState,
      firstNumber: String(newNumber),
    }));
  }

  function subtract() {
    let newNumber =
      parseFloat(numbers.firstNumber) - parseFloat(numbers.secondNumber);
    setNumbers((prevState) => ({
      ...prevState,
      firstNumber: String(newNumber),
    }));
  }

  function divide() {
    let newNumber =
      parseFloat(numbers.firstNumber) / parseFloat(numbers.secondNumber);
    setNumbers((prevState) => ({
      ...prevState,
      firstNumber: String(newNumber),
    }));
  }

  function multiply() {
    let newNumber =
      parseFloat(numbers.firstNumber) * parseFloat(numbers.secondNumber);
    setNumbers((prevState) => ({
      ...prevState,
      firstNumber: String(newNumber),
    }));
  }

  function setFirst(digit) {
    let current = numbers.firstNumber;
    let newDigit = current + digit;
    setNumbers((prevState) => ({
      ...prevState,
      firstNumber: newDigit,
    }));
  }

  function setSecond(digit) {
    let current = numbers.secondNumber;
    let newDigit = current + digit;
    setNumbers((prevState) => ({
      ...prevState,
      secondNumber: newDigit,
    }));
  }

  function setOperator(digit) {
    setNumbers((prevState) => ({
      ...prevState,
      operator: digit,
    }));
  }

  function calculate() {
    if (numbers.operator == "+") {
      add();
    } else if (numbers.operator == "-") {
      subtract();
    } else if (numbers.operator == "/") {
      divide();
    } else if (numbers.operator == "*") {
      multiply();
    }
  }

  const handleChange = (digit) => {
    console.log(numbers);
    const operators = ["+", "-", "/", "*"];
    if (digit == "=") {
      calculate();
      numbers.operator = "";
      numbers.secondNumber = "";
      return;
    }
    if (operators.includes(digit)) {
      setOperator(digit);
      setStartCalc(false);
      return;
    }

    if (startCalc) {
      setFirst(digit);
    } else {
      setSecond(digit);
    }
  };

  return (
    <div className="calculator">
      <h1>calculator</h1>
      <Display numbers={numbers}></Display>
      <Button_section handleChange={handleChange}></Button_section>
    </div>
  );
};

export default App;
