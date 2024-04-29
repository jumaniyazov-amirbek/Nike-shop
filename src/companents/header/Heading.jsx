import { Link } from "react-router-dom";
import HeadingLogo from "../../assets/images/55f68e1fbbfb3a97de3447dea15fbe28.jpg";

export default function Heading() {
  return (
    <div className="Heading-all">
      <Link to="/">
        <div className="Heading-logo">
          <img src={HeadingLogo} alt="" />
        </div>
      </Link>
      <div className="Heading-sorche">
        <input placeholder="Search query..." type="text" />
        <button>Search</button>
      </div>
      <div className="Heading-link">
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/orders">Contact</Link>
      </div>
    </div>
  );
}
