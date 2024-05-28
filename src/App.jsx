import { useState } from "react";
import Display from "./display";
import Button_section from "./button_section";
const App = () => {
  let [startCalc, setStartCalc] = useState(true);

  let [numbers, setNumbers] = useState({
    firstNumber: undefined,
    operator: undefined,
    secondNumber: undefined,
  });

  return (
    <div className="calculator">
      <h1>calculator</h1>
      <Display numbers={numbers}></Display>
      <Button_section
        numbers={numbers}
        setNumbers={setNumbers}
      ></Button_section>
    </div>
  );
};

export default App;
