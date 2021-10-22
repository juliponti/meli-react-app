import { useState } from "react";
import "./card.scss";

function Card(props) {
  const { item } = props;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href={item.permalink}
        alt={item.title}
        target="_blank"
        rel="noreferrer"
      >
        <picture className="img__container">
          <img className="img" src={item.thumbnail} alt={item.title} />
        </picture>
        <div className="vector"></div>
        <div className="text__container">
          <div className="prices__container">
            {isOpen && item.original_price && (
              <h2 className="original_price">${item.original_price}</h2>
            )}
            <h1>${item.price}</h1>
            {item.shipping.free_shipping && (
              <h2 className="free_shipping"> Envío Gratis </h2>
            )}
          </div>
          {isOpen && <p>{item.title}</p>}
        </div>
      </a>
    </div>
  );
}

export default Card;
