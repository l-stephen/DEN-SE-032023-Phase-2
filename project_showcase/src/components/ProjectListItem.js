<<<<<<< HEAD
import React, {useState, useEffect} from "react";
 const ProjectListItem = ({ id, about, image, link, name, phase, enterProjectEditModeFor}) => {
=======
import React, {useState} from "react";
 const ProjectListItem = ({ id, about, image, link, name, phase,enterProjectEditForm, handleDelete }) => {
>>>>>>> 06_PATCH_DELETE
  const [clapCounts, setClapCounts] = useState(0);
  //Send a `PATCH` request when the `clapsCount` is updated through a click event
  //Update the `projects` state in the parent component `App` using the `.map` function
  //Make sure to update the `clapsCount` for the project that was clicked in the handleclap function

  function handleClap(){
<<<<<<< HEAD
=======
    
>>>>>>> 06_PATCH_DELETE
    setClapCounts(clapCounts + 1)
    fetch(`http://localhost:3000/projects/${id}`,{
      method: "PATCH",
      headers: {
<<<<<<< HEAD
        "Content-Type": "application/json",
=======
        "Content-Type": "application/json"
>>>>>>> 06_PATCH_DELETE
      },
      body: JSON.stringify({
        claps: clapCounts + 1
      })
    })
<<<<<<< HEAD
    .then((res) => res.json())
    .then((updatedProject) => {
      console.log(updatedProject)
    })
    //setClapCounts(()=> clapCounts + 1)
=======
    .then((res)=> res.json())
    .then((update)=> console.log(update))
  }

  function handleEditClick(){
    enterProjectEditForm(id)
  }

  function handleDeleteClick(){
    console.log(id)
    handleDelete(id)
    fetch(`http://localhost:3000/projects/${id}`,{
      method: "DELETE"
    })
    //.then((res)=> res.json())
    //.then((deleted)=> handleDelete(deleted))

>>>>>>> 06_PATCH_DELETE
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
<<<<<<< HEAD
          <button onClick={handleEditClick}>
            Edit
          </button>
          <button onClick={handleDeleteClick}>
            Delete
          </button>
=======
          <button onClick = {handleEditClick}>Edit </button>
          <button onClick = {handleDeleteClick}>Delete</button>
>>>>>>> 06_PATCH_DELETE
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
