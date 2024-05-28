import Button from "./button";
const Button_section = ({ numbers, setNumbers }) => {
  return (
    <div className="button_section">
      <Button value={0} numbers={numbers} setNumbers={setNumbers}></Button>
      <Button value={1}></Button>
      <Button value={2}></Button>
      <Button value={3}></Button>
      <Button value={4}></Button>
      <Button value={5}></Button>
      <Button value={6}></Button>
      <Button value={7}></Button>
      <Button value={8}></Button>
      <Button value={9}></Button>
      <Button value={"C"}></Button>
      <Button value={"X"}></Button>
      <Button value={"+"}></Button>
      <Button value={"-"}></Button>
      <Button value={"/"}></Button>
      <Button value={"="}></Button>
    </div>
  );
};

export default Button_section;
