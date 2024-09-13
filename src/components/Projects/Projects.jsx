import './index.css';

const Projects = () => {

  const Project = ({ title, description, imgSrc, imgAlt }) => {
    return (
      <div className="project">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }

  return (
    <section id="Projects" className='Projects-Container'>
      <h2>Projects</h2>
      <div className="projects">
        <Project
          title="Project 1"
          description="This is a project description"
          imgSrc="https://via.placeholder.com/150"
          imgAlt="Project 1"
        />
        <hr />
        <Project
          title="Project 2"
          description="This is a project description"
          imgSrc="https://via.placeholder.com/150"
          imgAlt="Project 2"
        />
        <hr />
        <Project
          title="Project 3"
          description="This is a project description"
          imgSrc="https://via.placeholder.com/150"
          imgAlt="Project 3"
        />
        <hr />
      </div>
    </section>
  );
}

export default Projects