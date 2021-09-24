import { useParams } from "react-router-dom";
import Logo from "../../assets/small-logo.png";
import img from "../../assets/cat.png";
import "./index.css";

function Carrousel() {
  const { site } = useParams();

  return (
    <>
      <nav className="navbar">
        <img src={Logo} />
        <div className="right__container">
          <span>{site}</span>
          <input type="text" />
          <button>Buscar</button>
        </div>
      </nav>
      <main className="main">
        <h1>Busque su producto</h1>
        <img src={img} />
      </main>
    </>
  );
}
export default Carrousel;
