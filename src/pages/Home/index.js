import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  let technologiesKnown = [ "HTML",

  'BootstrapCSS',
   'Bulma.CSS',
   'CSS3',
   'ES6',
   'ExpressJS',
   'HandlebarsJS',
   'Heroku',
   'HTML5',
   'JavaScript',
   'jQuery',
   'JSX',
   'MaterializeCSS',
 'Moment.JS',
   'MongoDB',
   'MongoDBAtlas',
   'Mongoose',
   'MySQL',
   'NodeJS',
   'PassportJS',
'React-Router',
   'ReactJS',
   'Chart.JS',
   'ESLint'
  ];

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-1">
            <div className="card" style={{ width: "100%" }}>
              <img id="profile-pic" src="/images/my-face.PNG" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h3 className="card-title">Abraham Spindel</h3>
                <hr></hr>
                <p className="card-text">My name is Abraham Spindel and I am a full-stack web developer.</p>
                <p>
                  <strong> I earned a certificate in full-stack development from the
               University of Texas-Austin Full-Stack Coding Bootcamp</strong>. I am a former Manufacturing Engineer
                  for plastic automotive component manufacturing.
                </p>
                <p>
                  I have a B.S. in Mechanical Engineering from the University of Wisconsin-Madison, with a background in composite
                  polymers and computer science.
                 

                </p>
<p> I am a proven leader with high interpersonal skills and the ability to effectively work and communicate cross-functionally.</p>
                <hr></hr>

                <div className="row">
                  <a href="mailto:AbrahamSpindel@gmail.com" id="email-me-button" className="btn hvr-grow email-me-button">
                    E-mail me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Links to rest of website, right half of this row --> */}
          <aside className="  col-md-3">
          <div className = " card mt-1 container card-deck justify-content-center mx-auto py-2"> 
          <h4 className = "font-italic mt-2" style = {{color:"lightgray"}}>Technologies Known:</h4>
          {technologiesKnown.map((technology) => {
            return (
              <div 
                style={{ width: "auto", backgroundColor:"lightgray" }}
                className="border m-2 px-1"
              >
                {technology}
              </div>
            );
          })}
          
          </div>

</aside>
          <aside className="col-md-3">
            <div className="row my-4">
              {/* <a className="btn  link-button hvr-grow" href={"Resume"}>
                Resume
              </a> */}
              <Link to="/Resume" className=" btn  link-button hvr-grow">
                Resume
              </Link>
            </div>
            <div className="row my-4">
              {/* <a className="btn  link-button hvr-grow" href={"Projects"}>
                Projects
              </a> */}
              <Link to="/Projects" className=" btn  link-button hvr-grow">
                Projects
              </Link>
            </div>
            <div className="row my-4">
              <a
                className="btn   justify-content-center link-button hvr-grow"
                href="https://www.linkedin.com/in/abrahamspindel/"
                rel="noreferrer noopener"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <div className="row my-4">
              <a
                className="btn justify-content-center link-button hvr-grow"
                href="https://github.com/abraspin"
                rel="noreferrer noopener"
                target="_blank"
              >
                GitHub
              </a>
            </div>
            <div className="row my-4">
              {/* <a className="btn  link-button hvr-grow" href={"ContactMe"}>
                Contact
              </a> */}
              <Link to="/ContactMe" className=" btn  link-button hvr-grow">
                Contact
              </Link>
            </div>
          </aside>
       
        </div>
      </div>

      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default Home;
