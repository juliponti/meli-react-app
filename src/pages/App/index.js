import Country from "../../components/Country";
import Logo from "../../assets/logo.png";
import "./App.scss";
import arrCountries from "../../data/countries";

function App() {
  return (
    <section className="home">
      <div className="logo__container">
        <img className="logo" src={Logo} alt="mercado libre logo" />
      </div>
      <div className="list__container">
        <ul className="countries__list">
          {arrCountries.map((value, key) => (
            <Country value={value} key={key} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default App;
