import "./Footer.scss";
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaStackOverflow,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer position-relative">
      <a
        href="https://www.linkedin.com/in/adem-bekci/"
        className="text-primary"
      >
        <FaLinkedin className="fs-1" />
      </a>
      <a href="https://github.com/BecooOn" className="text-dark">
        <FaGithub className="fs-1" />
      </a>
      <a href="https://medium.com/@becooOn" className="text-white">
        <FaMedium className="fs-1" />
      </a>
      <a
        href="https://stackoverflow.com/users/23137995/becooon"
        className="text-warning"
      >
        <FaStackOverflow className="fs-1" />
      </a>
      <figcaption className="fs-6 text-light">
        Copyright {new Date().getFullYear()}
      </figcaption>
    </div>
  );
}

export default Footer;
