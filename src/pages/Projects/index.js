import React from 'react'
import projectsList from "../../projects.json";
import ProjectListing from "../../Components/ProjectListing";


export default function Projects() {
    return (
        <div className='container'>

            <h1 className=" font-italic font-weight-bold mt-2 text-left" style={{ color: "black" }}>
                Projects:
          </h1>

            {projectsList.map((project) => {
                return <ProjectListing project={project}></ProjectListing>;
            })}

        </div>
    )
}
