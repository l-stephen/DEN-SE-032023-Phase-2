import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Review from "./components/Review"
//import projects from "./projects";
import React, {useState} from "react"

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([])

  function handleClick(){
    console.log(isDarkMode)
    setIsDarkMode(!isDarkMode)
    console.log(isDarkMode)
  }
  console.log(projects)

  function onAddProject(newProject){
    console.log(newProject)
    setProjects([...projects, newProject])
  }
  function loadProjects(){
    fetch("http://localhost:3000/projects")
     .then((res)=> res.json())
     .then((proj) => setProjects(proj))
   }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode = {isDarkMode} onClick = {handleClick}/>
      <ProjectForm onAddProject = {onAddProject}/>
      <button onClick={loadProjects}>Load Projects</button>
      <ProjectList projects={projects} />
      <Review projects = {projects}/>
    </div>
  );
};

export default App;

