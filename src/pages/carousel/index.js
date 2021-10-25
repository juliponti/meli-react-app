import { useParams } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/small-logo.png";
import LogoResponsive from "../../assets/responsive-logo.png";
import img from "../../assets/cat.png";
import Notification from "../../assets/mla-menu-desktop-notification-picture-86b2b844-4c2d-4b7c-8649-4fef867e0b9d.png";
import Swiper from "../../components/Swiper";
import "./carousel.scss";

function Carousel() {
  const { site } = useParams();
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function fetchData(e) {
    e.preventDefault();
    const getData = await fetch(
      `https://api.mercadolibre.com/sites/${site}/search?q=${inputValue}`
    );
    const dataToJson = await getData.json();
    setSearchResults(dataToJson.results);
    setInputValue("");
  }

  return (
    <main className="main">
      <nav className="navbar">
        <img src={Logo} alt="mercado libre logo" className="logo" />
        <img
          src={LogoResponsive}
          alt="mercado libre logo"
          className="logo-responsive"
        />
        <form className="form__container">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Buscar producto..."
          />
          <button onClick={fetchData}>Buscar</button>
        </form>
      </nav>

      {!searchResults.length ? (
        <div className="empty">
          <h1 className="main_h1">Busque su producto</h1>
          <img
            className="main_img"
            src={img}
            alt="animated cat with yellow bills"
          />
        </div>
      ) : (
        <>
          <div className="notification__container">
            <img src={Notification} alt="Comprá en 12 cuotas sin tarjeta" />
          </div>
          <div className="product__list">
            <Swiper results={searchResults} />
          </div>
        </>
      )}
    </main>
  );
}
export default Carousel;
