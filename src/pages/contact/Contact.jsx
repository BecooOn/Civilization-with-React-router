import "./Contact.scss";
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaStackOverflow,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact">
      <p className="fs-1">Contact us for more information</p>
      <div className="contact-href">
        <a
          href="https://www.linkedin.com/in/adem-bekci/"
          className="text-primary"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/BecooOn" className="text-dark">
          <FaGithub />
        </a>
        <a href="https://medium.com/@becooOn" className="text-white">
          <FaMedium />
        </a>
        <a
          href="https://stackoverflow.com/users/23137995/becooon"
          className="text-warning"
        >
          <FaStackOverflow />
        </a>
      </div>
    </div>
  );
};

export default Contact;
