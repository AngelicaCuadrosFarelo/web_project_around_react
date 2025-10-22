import Title from "../../images/Title.png";
import Linea from "../../images/Line.png";

function Header() {
  return (
    <header className="header">
      <img src={Title} alt="vector" className="header__vector" />
      <img src={Linea} alt="linea" className="header__line" />
    </header>
  );
}

export default Header;
