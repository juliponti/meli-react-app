function C2(props) {
  let { sendInfo, callback, number } = props;
  function randomNum() {
    callback(Math.floor(Math.random() * (11 - 1)) + 1, "dos");
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
