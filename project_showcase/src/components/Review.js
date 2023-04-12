import React from "react";
import ReviewList from "./ReviewList";
function Review({projects}){
    console.log(projects)
    const list = projects.map((project)=> (
        <ReviewList  key = {project.id} project = {project}/>
    ));
    const filterNames = projects.filter((project) => project.id > 4);
    console.log(filterNames)
    return (
        <section>
        <h4>Project Names</h4>
        {list}
        </section>
    );
}
export default Review;