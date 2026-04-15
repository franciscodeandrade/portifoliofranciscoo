import foto from "../assets/foto.jpg";
function Header() {
  return (
    <header>

      <img src={foto} alt="Minha foto" className="foto" />

      <h1>Francisco de Assis</h1>
      <p>Estudante de Sistemas para Internet</p>
    </header>
  );
}

export default Header;