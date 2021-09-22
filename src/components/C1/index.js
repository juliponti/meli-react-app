import { randomNumOneToTen } from "../../utils";

function C1(props) {
  const { sendInfo, callback, number } = props;
  function randomNum() {
    callback(randomNumOneToTen());
  }

  return (
    <div>
      <h2>{sendInfo}</h2>
      <button onClick={randomNum}> Generar número </button>
      {number && <span> {number}</span>}
    </div>
  );
}

export default C1;
