import React from "react";
import ReviewList from "./ReviewList";
function Review({projects}) {
    const list = projects.map((project)=> (
        <ReviewList key={project.id} project={project}/>
    ));
    const filterNames = list.filter((project)=> project.props.project.id > 4);

    return(
        <div>
        <h4>Project Names</h4>
        {filterNames}
        </div>
    );
}
export default Review;