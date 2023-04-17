import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Review from "./components/Review"
//import projects from "./projects";
import React, {useState, useEffect} from "react"
import ProjectEditForm from "./components/ProjectEditForm";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([])
  const [projectId, setProjectId] = useState(null)

  function handleClick(){
    setIsDarkMode(!isDarkMode)
  }

  function handleUpdate(updatedProject){
    const update = projects.map((project)=> project.id === updatedProject.id ? updatedProject : project);
    setProjects(update)
  }

  function handleDelete(deletedProject){
    const deleted = projects.filter((project)=> project.id !== deletedProject)
    console.log(deleted)
    setProjects(deleted)
  }

  function onAddProject(newProject){
    console.log(newProject)
    setProjects([...projects, newProject])
  }
  console.log("Running the useEffect")
  useEffect(()=> {
    loadProjects()
  },[])

  function loadProjects(){
    fetch("http://localhost:3000/projects")
     .then((res)=> res.json())
     .then((proj) => setProjects(proj))
    //console.log("useEffect called")
    return function (){
      console.log("Cleaned Up")
    }
    
   }

   function renderForm(){
    if(projectId){
      return <ProjectEditForm projectId={projectId} handleUpdate = {handleUpdate}/>
    }
    else{
      return <ProjectForm onAddProject = {onAddProject}/>
    }
   }
   function enterProjectEditForm(projectId){
    setProjectId(projectId)
   }
  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode = {isDarkMode} onClick = {handleClick}/>
      {renderForm()}
      <ProjectList projects={projects} enterProjectEditForm = {enterProjectEditForm} handleDelete = {handleDelete}/>
      <Review projects = {projects}/>
    </div>
  );
};

export default App;

