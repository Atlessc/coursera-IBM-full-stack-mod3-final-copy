import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Recommendations from "./components/Recommendations/Recommendations";
import LeaveRecommendation from "./components/LeaveRecommendation/LeaveRecommendation";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="main-content">
          <AboutMe />
          <Skills />
          <Projects />
          <Recommendations />
          <LeaveRecommendation />
        </div>
      </div>
    </>
  );
}

export default App;
