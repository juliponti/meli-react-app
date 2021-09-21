import { useState } from "react";
import C1 from "./components/C1";
import C2 from "./components/C2";

function App() {
  const [title, setTitle] = useState(false);
  const [number1, setNumber1] = useState(false);
  const [number2, setNumber2] = useState(false);
  // estados del título y ambos números que quero comparar

  function handleClick() {
    if (number1 > number2) {
      setTitle("El primer número es mayor");
    } else if (number2 > number1) {
      setTitle("El segundo número es mayor");
    } else if (number1 === number2) {
      setTitle("Ambos números son iguales");
    }
  }

  function handleCallback(number, origin) {
    if (origin == "dos") {
      setNumber2(number);
    } else {
      setNumber1(number);
    }
  }

  function handleReset() {
    setNumber1(false);
    setNumber2(false);
  }

  return (
    <div>
      <h1>{!title ? "Generar números " : title}</h1>
      <hr />
      <C1
        sendInfo="Primer número: "
        callback={handleCallback}
        number={number1}
      />
      <C2
        sendInfo="Segundo número: "
        callback={handleCallback}
        number={number2}
      />
      <br />
      <button onClick={handleClick}>Comparar números</button>
      <button onClick={handleReset}> Reset</button>
    </div>
  );
}
export default App;
