import projects from "../data/projectsData";

function Projects() {
  return (
    <section>
      <h2>Meus Projetos</h2>

      {projects.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>

          <a href="#">Ver projeto</a>

        </div>
      ))}

    </section>
  );
}

export default Projects;