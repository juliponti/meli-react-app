function C2(props) {
  let { sendInfo, secondNum } = props;
  function randomNum() {
    return Math.floor(Math.random() * (11 - 1)) + 1;
  }

  secondNum = randomNum();
  return (
    <div>
      <span>{sendInfo}</span>
      <span>{secondNum}</span>
    </div>
  );
}

export default C2;
