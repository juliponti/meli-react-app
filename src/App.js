import { useState } from "react";
import Title from "./components/Title";
import C1 from "./components/C1";
import C2 from "./components/C2";

function App() {
  const [showInfo, setShowInfo] = useState(false);
  function handleClick() {
    showInfo === false && setShowInfo(true);
    showInfo === true && setShowInfo(false);
  }

  function handleCallback(data) {
    console.log(data);
  }
  return (
    <div>
      <button onClick={handleClick}>Show Info</button>
      {showInfo === true && <Title title="Este es el título" />}
      <C1 sendInfo="Primer número: " firstNum="" callback={handleCallback} />
      <C2 sendInfo="Segundo número: " secondNum="" />
    </div>
  );
}

export default App;
