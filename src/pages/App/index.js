import { useEffect, useState } from "react";

import Countries from "../../components/Countries";
import Logo from "../../assets/logo.png";
import "./App.css";
import "../../assets/img";
import img from "../../assets/img";

function App() {
  const { user, setUser } = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getData = await fetch(
      "https://api.mercadolibre.com/sites/SITE/search?q=BUSQUEDA"
    );
    const dataToJson = await getData.json();
    return console.log(dataToJson);
  }

  return (
    <div>
      <main className="main">
        <div className="logo">
          <img src={Logo} alt="mercado libre logo" />
        </div>
        <div className="list__container">
          <ul className="countries__list">
            <Countries title="Argentina" img={img.Argentina} code="Argentina" />
            <Countries title="Bolivia" img={img.Bolivia} code="Bolivia" />
            <Countries title="Brasil" img={img.Brasil} code="Brasil" />
            <Countries title="Chile" img={img.Chile} code="Colombia" />
            <Countries title="Colombia" img={img.Colombia} />
            <Countries title="Costa Rica" img={img.CostaRica} />
            <Countries title="Dominicana" img={img.RepDom} />
            <Countries title="Ecuador" img={img.Ecuador} />
            <Countries title="Guatemala" img={img.Guatemala} />
            <Countries title="Honduras" img={img.Honduras} />
            <Countries title="México" img={img.Mexico} />
            <Countries title="Nicaragua" img={img.Nicaragua} />
            <Countries title="Panamá" img={img.Panama} />
            <Countries title="Paraguay" img={img.Paraguay} />
            <Countries title="Perú" img={img.Peru} />
            <Countries title="Salvador" img={img.Salvador} />
            <Countries title="Uruguay" img={img.Uruguay} />
            <Countries title="Venezuela" img={img.Venezuela} />
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
