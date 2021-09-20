function C2(props) {
  function randomNum() {
    return Math.floor(Math.random() * (11 - 1)) + 1;
  }

  const result = randomNum();
  props.callback(result);

  return <p>{result}</p>;
}

export default C2;
