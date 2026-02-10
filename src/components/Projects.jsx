import projects from "../utils/projects";
import ProjectCard from "../commons/ProjectCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Projects() {
  const esp = useSelector((state) => state.lang.esp);
  const [resultados, setResultados] = useState([]);
  const [input, setInput] = useState("");
  const location = useLocation();
  const tech = location.state?.technologie;

  function handleSearch(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    setResultados(
      projects.filter((ele) => ele.tags.some((tag) => tag.startsWith(tech || input)))
    );
  }, [input, tech]);

  return (
    <main className="videos-page">
      <h1>{esp ? <>proyectos</> : <>projects</>}</h1>
      <div className="projects-container">
      {resultados.map((project) => (
        <ProjectCard {...{ project }} />
      ))}
      </div>
    </main>
  );
}

export default Projects;
