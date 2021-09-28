//import { useEffect } from "react";
import Country from "../../components/Country";
import Logo from "../../assets/logo.png";
import "./App.css";
import arrCountries from "../../data/countries";

function App() {
  return (
    <section className="home">
      <div className="logo">
        <img src={Logo} alt="mercado libre logo" />
      </div>
      <div className="list__container">
        <ul className="countries__list">
          {arrCountries.map((value, key) => (
            <li>
              <Country value={value} key={key} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default App;
