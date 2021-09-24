import { Link } from "react-router-dom";
import "./index.css";

function Country(props) {
  const { title, img, code } = props;

  return (
    <li className="country">
      <img src={img} alt="" />
      <Link to={`carrousel/${code}`} alt="">
        {title}
      </Link>
    </li>
  );
}

export default Country;
