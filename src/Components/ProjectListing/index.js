import React from "react";
// import screenshot from "./Components/ProjectListing/screenshots/blogs-life-app-screenshot.png";

function ProjectListing({ project }) {
  const technologiesUsed = [];
  project.technologiesUsed.forEach((technology) => {
    technologiesUsed.push(technology);
  });
  console.log("technologiesUsed", technologiesUsed);

  return (
    <article className="jumbotron project-listing row py-3">
      {console.log("technologiesUsed", technologiesUsed)}
      <div className="col-md-9">
        <div className="row">
          <h3 className="mb-0">{project.title}</h3>
        </div>
        <hr className="my-2 mr-5"></hr>
        <div className="row">
          {technologiesUsed.forEach((technology) => {
            return <div className="border px-1 m-1"> {technology} </div>;
          })}
        </div>
        <hr className="my-2 mr-5"></hr>
        <div className="row mr-2 project-description">
          <p>{project.description}</p>
        </div>
        <div className="row ">
          <a className="github-link" target=" _blank" href={project.gitHubLink}>
            <div className="text-info rounded bg-dark  p-2 m-1"> GitHub Repo </div>
          </a>
        </div>
      </div>

      {/* <!-- right half of project listing - screenshot --> */}
      <div className="col-md-3 my-auto">
        <div className="row">
          {/* <!-- link to project page, link image --> */}
          <div className="hvr-grow mx-auto ">
            <a target="_blank" href={project.deployedLink}>
              <img
                style={{ maxHeight: "12rem" }}
                className=" project-link-pic border img-fluid"
                src={project.screenshot}
                alt={project.title}
              ></img>
              <div className="row deployed-app-link mx-auto ">
                <p className="font-weight-bold mx-auto text-dark text-center my-0">Click to see the deployed app</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectListing;
