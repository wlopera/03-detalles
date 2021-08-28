export const operations = (numbers, setNumbers) => {
  const { number1, number2 } = numbers;

  const handleChangeNumbers = (e) => {
    setNumbers({
      ...numbers,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const sum = () => parseFloat(number1) + parseFloat(number2);
  const subtraction = () => parseFloat(number1) - parseFloat(number2);
  const multiplication = () => parseFloat(number1) * parseFloat(number2);
  const division = () => {
    return parseFloat(number1) / parseFloat(number2);
  };

  const error = () => {
    if (number2 !== 0) {
      return null;
    } else {
      return "Error división por cero";
    }
  };
  return {
    handleChangeNumbers,
    sum,
    subtraction,
    multiplication,
    division,
    number1,
    number2,
    error,
  };
};
