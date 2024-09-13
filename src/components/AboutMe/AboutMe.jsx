import './index.css';

const AboutMe = () => {

  return (
    <div id="AboutMe" className="AboutMe-Container">
      <div className="Section">
        {/* image */}
        <img src="https://images.unsplash.com/photo-1621089178205-02d3b4127a3e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="John Smith" width={300} height={200}/>
      </div>
      <div className="Section">
        <h1>Hi, I'm John Smith! 👋🏽</h1>
        <p>
          I am a software engineer with a passion for creating and developing web applications. I have experience with front-end and back-end technologies, and I am always looking to learn and grow as a developer. I am a team player and I enjoy working with others to achieve a common goal. I am also a quick learner and I am always looking for new challenges.
        </p>
      </div>
    </div>
  );
}

export default AboutMe