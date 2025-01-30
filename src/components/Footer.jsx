import Logo from "../images/logos/logo.png";
import "../styles/footer-style.css";

export default function Footer() {
  return (
    <footer>
        <a href="#App"><img src={Logo} alt="" /></a>
        <p>Copyright © 1996 - 2025 - Zubigaray, Juan Simon</p>
    </footer>
  )
}
