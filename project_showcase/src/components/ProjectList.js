import ProjectListItem from "./ProjectListItem";
import React, {useState} from "react"
const ProjectList = ({ projects, search }) => {
  const [proj, setProjects] = useState([]);

  const projectListItems = projects.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

  /*const showSearch = projectListItems.filter((project)=>{
    console.log(project)
    if(searchQuery === ""){
      return project
    }
    else if (project.props.name.toLowerCase().includes(searchQuery.toLowerCase()))
    {
      return project
    }
  })*/

  function loadProjects(){
    fetch("http://localhost:3000/projects")
    .then((res)=> res.json())
    .then((proj)=> setProjects(proj))
  }

  function handleClick(){
    loadProjects();
  }

  return (
    <section>
      <button onClick = {handleClick}>Load Projects</button>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange = {(event)=> search(event.target.value)}/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
