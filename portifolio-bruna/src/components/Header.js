import foto from "../assets/foto.jpg";

function Header() {
  return (
    <header className="header">
      <img src={foto} alt="Bruna Kaena" className="foto" />

      <h1>Bruna Kaena</h1>
      <p>Estudante de Marketing Digital e Tecnologia</p>
      <p>São Félix do Piauí - PI</p>

      <div className="social">
        <a
          href="https://www.instagram.com/brunakaena"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>

        <a
          href="https://wa.me/5586999755543"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

        <a
          href="mailto:brunakaena5@gmail.com"
        >
          Email
        </a>
      </div>
    </header>
  );
}

export default Header;