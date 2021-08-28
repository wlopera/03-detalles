import React, { useState } from "react";
import { operations } from "../../helpers/Operations";
import NumberInput from "./NumberInput";
import Result from "./Result";

const Calc = () => {
  const [numbers, setNumbers] = useState({
    number1: 0,
    number2: 0,
  });

  // const handleChangeNumbers = (e) => {
  //   setNumbers({
  //     ...numbers,
  //     [e.target.name]: parseFloat(e.target.value),
  //   });
  // };

  // const { number1, number2 } = numbers;

  // let error = null;

  // const sum = () => parseFloat(number1) + parseFloat(number2);
  // const subtraction = () => parseFloat(number1) - parseFloat(number2);
  // const multiplication = () => parseFloat(number1) * parseFloat(number2);
  // const division = () => {
  //   if (number2 !== 0) {
  //     return parseFloat(number1) / parseFloat(number2);
  //   } else {
  //     error = "Error división por cero";
  //     return parseFloat(0);
  //   }
  // };

  const {
    handleChangeNumbers,
    sum,
    subtraction,
    multiplication,
    division,
    number1,
    number2,
    error,
  } = operations(numbers, setNumbers);

  const err = error();
  return (
    <div>
      <NumberInput
        text="Número 1"
        name="number1"
        value={parseFloat(number1)}
        handleChange={handleChangeNumbers}
      />

      <NumberInput
        text="Número 2"
        name="number2"
        value={parseFloat(number2)}
        handleChange={handleChangeNumbers}
      />

      <Result operation="Suma" calculation={sum()} />
      <Result operation="Resta" calculation={subtraction()} />
      <Result operation="Multiplicación" calculation={multiplication()} />
      <Result operation="División" calculation={division()} />
      <br />
      {err && (
        <span style={{ backgroundColor: "red", color: "white" }}>{err}</span>
      )}
    </div>
  );
};

export default Calc;
