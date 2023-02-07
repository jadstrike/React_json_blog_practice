import { Link } from "react-router-dom";
import { Button } from "antd/es/radio";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="text-white font-bold">Digital Base Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">
          <Button>New Blog</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
