import { useEffect } from "react";
import Country from "../../components/Country";
import Logo from "../../assets/logo.png";
import "./App.css";
import arrCountries from "../../countries.js";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(site, product) {
    const getData = await fetch(`https://api.mercadolibre.com/sites/`);
    const dataToJson = await getData.json();
    return console.log(dataToJson);
  }

  return (
    <section className="home">
      <div className="logo">
        <img src={Logo} alt="mercado libre logo" />
      </div>
      <div className="list__container">
        <ul className="countries__list">
          {arrCountries.map((country, code, flag) => (
            <li>
              <Country title={country} img={flag} code={code} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default App;
