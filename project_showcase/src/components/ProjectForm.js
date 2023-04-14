import React, {useState} from "react"
const ProjectForm = ({onAddProject}) => {
  const [name, setName] = useState(" ")
  const [about, setAbout] = useState(" ")
  const [phase, setPhase] = useState(" ")
  const [link, setLink] = useState(" ")
  const [image, setImage] = useState(" ")
 
  function handleName(e){
    setName(e.target.value)
  }
  function handleAbout(e){
    setAbout(e.target.value)
  }

  function handlePhase(e){
    setPhase(e.target.value)
  }

  function handleLink(e){
    setLink(e.target.value)
  }

  function handleImage(e){
    setImage(e.target.value)
  }


  function handleSubmit(e){
    e.preventDefault();
    setName(name)
    setAbout(about)
    setPhase(phase)
    setLink(link)
    setImage(image)

    fetch("http://localhost:3000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, about, phase, link, image})
    })
    .then((res) => res.json())
    .then((newProject) => {
      onAddProject(newProject)
    })

  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleName} />

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" value={about} onChange={handleAbout}/>
        <label>Phase</label>
        <select name="phase" id="phase" value={phase} onChange={handlePhase}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>
        <label>Project Homepage</label>
        <input id="link" name="link" value={link} onChange={handleLink}></input>
        <label>Screenshot</label>
        <input id="image" name="image" value={image} onChange = {handleImage}></input>

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
