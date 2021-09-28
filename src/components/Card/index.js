import "./card.css";

function Card(props) {
  const { item } = props;
  return (
    <div className="card">
      <a href={item.permalink} alt={item.title} target="_blank">
        <picture className="img__container">
          <img className="img" src={item.thumbnail} alt={item.title} />
        </picture>
        <div className="vector"></div>
        <div className="text__container">
          <h1>${item.price}</h1>
          <p>{item.title}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
