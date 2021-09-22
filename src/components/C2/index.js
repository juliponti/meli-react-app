import { randomNumOneToTen } from "../../utils";

function C2(props) {
  let { sendInfo, callback, number } = props;
  function randomNum() {
    callback(randomNumOneToTen(), "dos");
  }

  return (
    <div>
      <h2>{sendInfo}</h2>
      <button onClick={randomNum}>Generar número</button>
      {number && <span> {number}</span>}
    </div>
  );
}

export default C2;
