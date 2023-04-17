import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Review from "./components/Review"
//import projects from "./projects";
import ProjectEditForm from "./components/ProjectEditForm";
import React, {useState, useEffect} from "react"

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([])
  const [projectId, setProjectId] = useState(null)

  function handleClick(){
    setIsDarkMode(!isDarkMode)
  }

  function onAddProject(newProject){
    console.log(newProject)
    setProjects([...projects, newProject])
  }
  console.log("Running the useEffect")
  useEffect(()=> {
    loadProjects()
    //console.log("useEffect called")
    return function (){
      console.log("Cleaned Up")
    }
  },[])

  function loadProjects(){
    fetch("http://localhost:3000/projects")
     .then((res)=> res.json())
     .then((proj) => setProjects(proj))
   }
   const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

   function renderForm(){
    if(projectId){
      return <ProjectEditForm projectId = {projectId} completeEditing = {completeEditing}/>
    }
    else{
      return <ProjectForm onAddProject = {onAddProject}/>
    }
   }


  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode = {isDarkMode} onClick = {handleClick}/>
      {renderForm()}
      <ProjectList projects={projects} enterProjectEditModeFor = {enterProjectEditModeFor}/>
      <Review projects = {projects}/>
    </div>
  );
};

export default App;

