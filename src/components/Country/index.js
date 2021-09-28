import { Link } from "react-router-dom";
import "./index.css";

function Country(props) {
  const { country, flag, code } = props.value;

  return (
    <li className="country">
      <img src={flag} alt="" />
      <Link to={`carrousel/${code}`} alt="">
        {country}
      </Link>
    </li>
  );
}

export default Country;
