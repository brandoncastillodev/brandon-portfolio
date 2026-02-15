import { useSelector } from "react-redux";
import projects from "../utils/projects";

function Videos() {
  const dark = useSelector((state) => state.theme.dark);
  // const base = "https://res.cloudinary.com/TU_CLOUD/video/upload/";
  // const qualityMap = {
  //   original: "q_100",
  //   high: "q_auto",
  //   low: "q_40",
  // };
  return (
    <main className="videos-page">
      <h1>Videos</h1>
      {projects.map((project) => (
        <div className="one-video-card" key={project.id}>
        <h2>
          <a href={project.web} target="_blank" rel="noopener noreferrer">
            <u>{project.name}</u>
          </a>
        </h2>
        <div className={dark? "iframe-dark":"iframe-light"}>
            {/* <source
            src={`${base}${qualityMap[quality]}/demo.mp4`}
            type="video/mp4"
          /> */}
          <iframe 
            width="560" 
            height="280" 
            src={`https://www.youtube-nocookie.com/embed/${project.youtube}?rel=0`}
            frameborder="0" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            loading="lazy">
          </iframe>
        </div>
        </div>
      ))}
    </main>
  );
}

export default Videos;
