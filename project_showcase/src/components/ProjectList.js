import ProjectListItem from "./ProjectListItem";
import React, {useState}  from "react";
const ProjectList = ({ projects }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const projectListItems = projects.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));
    function search(e){
      setSearchQuery(e)
    }
    /*const showSearch = projectListItems.filter((project) => {
      if (searchQuery === "") {
        return project;
      } else if (
        project.props.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return project;
      }
    });*/

    //A shorter way to write the above code
    const showSearch = searchQuery === "" ? projectListItems : projectListItems.filter((project) => project.props.name.toLowerCase().includes(searchQuery.toLowerCase()))

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
      <input type="text" placeholder="Search..." onChange={(e)=>search(e.target.value)}/>

      <ul className="cards">{showSearch}</ul>
    </section>
  );
};

export default ProjectList;
