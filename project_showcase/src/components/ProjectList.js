import ProjectListItem from "./ProjectListItem";
import React, {useState} from "react"
const ProjectList = ({ projects}) => {
  
  const [searchQuery, setSearchQuery] = useState("");

  const showSearch = searchQuery === "" ? projects : 
  projects.filter((project) => project.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const projectListItems = showSearch.map((project) => (
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

  function handleChange(e){
    setSearchQuery(e.target.value)
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange = {handleChange}/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
