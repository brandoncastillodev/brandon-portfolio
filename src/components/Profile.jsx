import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const esp = useSelector((state) => state.lang.esp);
  const dark = useSelector((state) => state.theme.dark);
  const navigate = useNavigate();

  function handleClickTechnologie(tech){
    navigate("/projects", { 
      state: { 
        technologie: tech
      } 
    })
  }

  return (
    <main className="profile-page">
      <h1>{esp ? "Perfil" : "Profile"}</h1>
      <div className="profile-pic center">
        <img src={"https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1750214101/pp-sin-fondo_t4p1qz.png"} loading="lazy" alt="profile-pic"></img>
      </div>
      <section>
        <h2>bio</h2>
        <p className="profile-description">
          {esp ? (
            <>
              1 año de experiencia especializado
              en realizar diseños ui de manera pixel perfect 
              asegurando funcionalidad, optimización y responsividad.
            </>
          ) : (
            <>
             1 year of experience specializing in creating pixel-perfect 
             UI designs, ensuring functionality, optimization, and responsiveness.
            </>
          )}
        </p>
      </section>
      <br />
      <section>
        <h2>{esp ? <>tecnologías</> : <>technologies</>}</h2>

        <div className={dark ? "contact-links-dark" : "contact-links-light"}>
        <ul clkassName="lists" style={{display: "flex", flexDirection: "column", lineHeight: "2.2rem"}}>
          <a onClick={()=>handleClickTechnologie("nodejs")}>NodeJs</a>
          <a onClick={()=>handleClickTechnologie("express")}>Express</a>
          <a onClick={()=>handleClickTechnologie("sequelize")}>Sequelize</a>
          <a onClick={()=>handleClickTechnologie("jwt")}>JWT</a>
          <a onClick={()=>handleClickTechnologie("react")}>React</a>
          <a onClick={()=>handleClickTechnologie("redux")}>Redux</a>
          <a onClick={()=>handleClickTechnologie("sass")}>Sass</a>
          <a onClick={()=>handleClickTechnologie("html/css")}>Html/Css</a>
          <a onClick={()=>handleClickTechnologie("figma")}>Figma</a>
          <a onClick={()=>handleClickTechnologie("visual studio code")}>Visual Studio Code</a>
          <a onClick={()=>handleClickTechnologie("github")}>Github</a>
        </ul>
        </div>
      </section>
    </main>
  );
}

export default Profile;
