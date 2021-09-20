function C2(props) {
  const { sendInfo } = props;
  function randomNum() {
    return Math.floor(Math.random() * (11 - 1)) + 1;
  }
  props.callback(randomNum(sendInfo));

  return <p>{randomNum(sendInfo)}</p>;
}

export default C2;
