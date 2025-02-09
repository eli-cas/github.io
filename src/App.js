import logo from './logo.svg';
import './App.css';
import projects from "./projects.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        {projects.map((project) => (
          <div key={project.name}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
            <img src={project.image} alt={project.name} />
          </div>
        ))}
        </div>
      </header>
    </div>
  );
}

export default App;
