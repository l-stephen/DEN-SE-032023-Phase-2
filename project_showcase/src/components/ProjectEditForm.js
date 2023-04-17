import {useState, useEffect} from "react"
function ProjectEditForm({projectId, completeEditing}){
    const [name,setName] = useState("")
    const [about,setAbout] = useState("")
    const [phase,setPhase] = useState("")
    const [link, setLink] = useState("")
    const [image,setImage] = useState("")
  
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
    //make a patch request using the use effect hook
    useEffect(() => {
        fetch(`http://localhost:3000/projects/${projectId}`)
        .then((res) => res.json())
        .then((project) => {
            setName(project.name);
            setAbout(project.about);
            setPhase(project.phase);
            setLink(project.link);
            setImage(project.image);
        });
    }, [projectId]);
    //make a patch request on submit
      function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/projects/${projectId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                about,
                phase,
                link,
                image,
            }),
        })
        .then((res) => res.json())
        .then((updatedProject) => {
            console.log(updatedProject);
        });
        // Add code here
        completeEditing();
      }

    return (
        <section>
          <form className="form" onSubmit={handleSubmit}>
            <h3>Edit Project</h3>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={handleName}/>
    
            <label htmlFor="about">About</label>
            <textarea id="about" name="about"  value={about} onChange={handleAbout}/>
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
    
            <button type="submit">Update Project</button>
          </form>
        </section>
      );

}
export default ProjectEditForm;