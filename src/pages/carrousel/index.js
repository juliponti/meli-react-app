import { useParams } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/small-logo.png";
import img from "../../assets/cat.png";
import Card from "../../components/Card";
import "./index.css";

function Carrousel() {
  const { site } = useParams();
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function fetchData() {
    const getData = await fetch(
      `https://api.mercadolibre.com/sites/${site}/search?q=${inputValue}`
    );
    const dataToJson = await getData.json();
    setSearchResults(dataToJson.results);
    console.log(dataToJson);
  }

  return (
    <>
      <nav className="navbar">
        <img src={Logo} />
        <div className="right__container">
          <span>{site}</span>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Buscar producto..."
          />
          <button onClick={fetchData}>Buscar</button>
        </div>
      </nav>
      <main className="main">
        <h1 className="main_h1">Busque su producto</h1>
        <img className="main_img" src={img} />
        <div className="arrow">
          <div className="left-line"></div>
          <div className="right-line"></div>
        </div>
        <ul className="carrousel">
          {searchResults.map((item) => (
            <li key={item.id} className="card__container">
              <Card item={item} />
            </li>
          ))}
        </ul>
        <div className="arrow2">
          <div className="left-line2"></div>
          <div className="right-line2"></div>
        </div>
      </main>
    </>
  );
}
export default Carrousel;
