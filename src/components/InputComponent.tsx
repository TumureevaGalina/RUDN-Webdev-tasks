import { ChangeEventHandler } from "react";

function InputComponent() {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue = parseFloat(event.target.value);
    const randomNumber = Math.random();
    const sum = inputValue + randomNumber;
    console.log(sum);
  };

  return <input type="number" onChange={handleChange} />;
}

export default InputComponent;
