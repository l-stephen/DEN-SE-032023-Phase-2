import React, {useState, useEffect} from "react";
 const ProjectListItem = ({ id, about, image, link, name, phase, enterProjectEditModeFor}) => {
  const [clapCounts, setClapCounts] = useState(0);
  //Send a `PATCH` request when the `clapsCount` is updated through a click event
  //Update the `projects` state in the parent component `App` using the `.map` function
  //Make sure to update the `clapsCount` for the project that was clicked in the handleclap function

  function handleClap(){
    setClapCounts(clapCounts + 1)
    fetch(`http://localhost:3000/projects/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        claps: clapCounts + 1
      })
    })
    .then((res) => res.json())
    .then((updatedProject) => {
      console.log(updatedProject)
    })
    //setClapCounts(()=> clapCounts + 1)
  }


  const handleEditClick = () => {
    enterProjectEditModeFor(id);
  };
    
  function handleDeleteClick(){
    fetch(`http://localhost:3000/projects/${id}`,{
      method: "DELETE"
    })
    .then((res) => res.json())
    .then((deletedProject) => {
      console.log(deletedProject)
    })
  }
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick = {handleClap}>👏{clapCounts}</button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div>
          <button onClick={handleEditClick}>
            Edit
          </button>
          <button onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
