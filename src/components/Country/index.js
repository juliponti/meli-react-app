import { Link } from "react-router-dom";
import "./country.scss";

function Country(props) {
  const { country, flag, code } = props.value;

  return (
    <li className="country">
      <img src={flag} alt="" />
      <Link to={`carousel/${code}`} alt="">
        {country}
      </Link>
    </li>
  );
}

export default Country;
