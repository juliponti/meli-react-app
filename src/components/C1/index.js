function C1(props) {
  let { sendInfo, firstNum, callback } = props;
  function randomNum() {
    return Math.floor(Math.random() * (11 - 1)) + 1;
  }

  firstNum = randomNum();
  callback({ firstNum });
  return (
    <div>
      <span>{sendInfo}</span>
      <span>{firstNum}</span>
    </div>
  );
}

export default C1;
