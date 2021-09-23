import { Link } from "react-router-dom";
import "./index.css";

function Countries(props) {
  const { title, img, code } = props;

  return (
    <>
      <li className="countries">
        <img src={img} alt="" />
        <Link to={`carrousel/${code}`} alt="">
          {title}
        </Link>
      </li>
    </>
  );
}

export default Countries;
