import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Review from "./components/Review"
//import projects from "./projects";
import React, {useState, useEffect} from "react"

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([])

  function handleClick(){ 
    setIsDarkMode(!isDarkMode)
  }

  function onAddProject(newProject){
    console.log(newProject)
    setProjects([...projects, newProject])
  }
  console.log("Calling the useEffect")
  useEffect(() => {
    loadProjects();
    console.log("useEffect called");
    return function cleaned(){
      console.log("Cleaned up");
    }
  },[])

  function loadProjects(){
    fetch("http://localhost:3000/projects")
     .then((res)=> res.json())
     .then((proj) => setProjects(proj))
   }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode = {isDarkMode} onClick = {handleClick}/>
      <ProjectForm onAddProject = {onAddProject}/>
      <ProjectList projects={projects} />
      <Review projects = {projects}/>
    </div>
  );
};

export default App;

