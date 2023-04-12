import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Review from "./components/Review";
import projects from "./projects";
import React, {useState} from "react"
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  function handleClick(){
    console.log(isDarkMode)
    setIsDarkMode(!isDarkMode)
    console.log(isDarkMode)
  }

  function search(e){
    console.log(e)
    setSearchQuery(e)
  }

  const showSearch = searchQuery === "" ? projects : 
  projects.filter((project) => project.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="App">
      <Header handleClick = {handleClick}/>
      <ProjectForm />
      <ProjectList projects={showSearch} search={search} />
      <Review projects = {projects}/>
    </div>
  );
}

export default App;

