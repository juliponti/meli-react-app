import { Link } from "react-router-dom";
import "./country.scss";

function Country(props) {
  const { country, flag, code } = props.value;

  return (
    <li className="country" key={props.key}>
      <img src={flag} alt={`bandera de ${code}`} />
      <Link to={`carousel/${code}`} alt="">
        {country}
      </Link>
    </li>
  );
}

export default Country;
