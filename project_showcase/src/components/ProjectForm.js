import React, {forwardRef, useState} from "react"
const ProjectForm = ({onAddProject}) => {
  /*const [name,setName] = useState("")
  const [about,setAbout] = useState("")
  const [phase,setPhase] = useState("")
  const [link, setLink] = useState("")
  const [image,setImage] = useState("")*/

  const [formData, setFormData] = useState({
    name: " ",
    about: " ", 
    phase: " ",
    link: " ",
    image: " ",
  })

  function handleChange(e){
    const {name, value} = e.target
    setFormData((formData) => ({...formData, [name]: [value]}))
  }

  function handleSubmit(e){
    e.preventDefault();
    
    setFormData({
      name: formData.name,
      about: formData.about,
      phase: formData.phase,
      link: formData.link,
      image: formData.image,
    })
    onAddProject(formData)

  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" value={formData.about} onChange={handleChange}/>
        <label>Phase</label>
        <select name="phase" id="phase" value={formData.phase} onChange={handleChange}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>
        <label>Project Homepage</label>
        <input id="link" name="link" value={formData.link} onChange={handleChange}></input>
        <label>Screenshot</label>
        <input id="image" name="image" value={formData.image} onChange = {handleChange}></input>

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
