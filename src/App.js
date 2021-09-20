import { useState } from "react";
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
      {showInfo === true && (
        <>
          <C1 title="Primer número:" />
          <C2 callback={handleCallback} />
          <C1 title="Segundo número:" />
          <C2 callback={handleCallback} />
        </>
      )}
    </div>
  );
}

export default App;
