import Button from "./button";
const Button_section = ({ handleChange }) => {
  return (
    <div className="button_section">
      <Button value={"0"} handleChange={handleChange}></Button>
      <Button value={"1"} handleChange={handleChange}></Button>
      <Button value={"2"} handleChange={handleChange}></Button>
      <Button value={"3"} handleChange={handleChange}></Button>
      <Button value={"4"} handleChange={handleChange}></Button>
      <Button value={"5"} handleChange={handleChange}></Button>
      <Button value={"6"} handleChange={handleChange}></Button>
      <Button value={"7"} handleChange={handleChange}></Button>
      <Button value={8} handleChange={handleChange}></Button>
      <Button value={9} handleChange={handleChange}></Button>
      <Button value={"C"} handleChange={handleChange}></Button>
      <Button value={"*"} handleChange={handleChange}></Button>
      <Button value={"+"} handleChange={handleChange}></Button>
      <Button value={"-"} handleChange={handleChange}></Button>
      <Button value={"/"} handleChange={handleChange}></Button>
      <Button value={"="} handleChange={handleChange}></Button>
    </div>
  );
};

export default Button_section;
