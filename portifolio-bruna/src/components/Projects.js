import projects from "../data/projectsData";

function Projects() {
  return (
    <section className="projects">
      <h2>Meus Projetos</h2>

      <div className="projects-grid">
        {projects.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              Ver projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;