import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiAncientColumns } from "react-icons/gi";
import { ImAddressBook } from "react-icons/im";
import { HiPencilAlt } from "react-icons/hi";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <NavLink to="/" className="navbar-home">
          <AiFillHome className="fs-5 me-1 mb-1" />
          Home
        </NavLink>
        {/* <NavLink to="/about" className="navbar-about">
          <ImAddressBook className="fs-5 me-1 mb-1" />
          About
        </NavLink> */}
        <NavLink to="/civilizations" className="navbar-civilizations">
          <GiAncientColumns className="fs-4 me-1 mb-1" />
          Civilizations
        </NavLink>
        <NavLink to="/contact" className="navbar-contact">
          <HiPencilAlt className="fs-5 me-1 mb-1" />
          Contact
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
