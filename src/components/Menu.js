export default function Menu( {setPage }){

  const handleClickBio = () => {
    setPage("bio")
  }

  const handleClickTools = () => {
    setPage("tools")
  }

  const handleClickResume = () => {
    setPage("resume")
  }

  const handleClickProjects = () => {
    setPage("projects")
  }

  const handleClickContact = () => {
    setPage("contact")
  }

  return(
    <div>
      <div id="bio" className="box" onClick={handleClickBio}>
        <h2>Bio</h2>
        <p>A full stack developer based in Tulsa with a celebrated record of making good things great</p>
        <hr/>
      </div>
      <div id="projects" className="box"  onClick={handleClickProjects}>
        <h2>Projects</h2>
        <p>Curated examples of my work</p>
        <hr/>
      </div>
      <div id="tools" className="box"  onClick={handleClickTools}>
        <h2>Tools</h2>
        <p>Stacks, languages, and libraries I maintain in my tool belt</p>
        <hr/>
      </div>
      <div id="resume" className="box"  onClick={handleClickResume}>
        <h2>Resume</h2>
        <p>David Chaney, Software Engineer, People-Leader</p>
        <hr/>
      </div>
      <div id="contact" className="box"  onClick={handleClickContact}>
        <h2>Contact</h2>
        <p>Email me, or find me on LinkedIn</p>
        <hr/>
      </div>
    </div>
  )
}