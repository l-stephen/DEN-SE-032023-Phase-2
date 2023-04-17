import React, {useState} from "react";
 const ProjectListItem = ({ id, about, image, link, name, phase,enterProjectEditForm, handleDelete }) => {
  const [clapCounts, setClapCounts] = useState(0);

  function handleClap(){
    
    setClapCounts(clapCounts + 1)
    fetch(`http://localhost:3000/projects/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        claps: clapCounts + 1
      })
    })
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
          <button onClick = {handleEditClick}>Edit </button>
          <button onClick = {handleDeleteClick}>Delete</button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
