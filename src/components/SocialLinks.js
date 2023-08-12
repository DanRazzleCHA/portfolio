import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/DanRazzleCHA">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/DanRazzleCHA?mibextid=ZbWKwL">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://instagram.com/mr.drcha?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;