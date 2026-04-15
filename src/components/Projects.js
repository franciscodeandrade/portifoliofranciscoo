import projects from "../data/projectsData";

function Projects() {
  return (
    <section>
      <h2>Meus Projetos</h2>

      {projects.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>

          {item.link ? (
            <a href={item.link} target="_blank" rel="noreferrer">
              Ver projeto
            </a>
          ) : (
            <p>Link em breve</p>
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;