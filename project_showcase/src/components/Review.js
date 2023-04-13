import React from "react";
import ReviewList from "./ReviewList";
function Review({projects}) {
    console.log(projects);
    const list = projects.map((project)=> (
        <ReviewList key={project.id} project={project}/>
    ));
    console.log(list.props)
    const filterNames = list.filter((project)=> project.props.project.id > 4);
    console.log(filterNames);

    return(
        <div>
        <h4>Project Names</h4>
        {filterNames}
        </div>
    );
}
export default Review;