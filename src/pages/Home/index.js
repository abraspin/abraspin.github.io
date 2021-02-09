import "./style.css";
import { Link } from "react-router-dom";

function Home() {
  let technologiesKnown = [
    "HTML",

    "BootstrapCSS",
    "Bulma.CSS",
    "CSS3",
    "ES6",
    "ExpressJS",
    "HandlebarsJS",
    "Heroku",
    "HTML5",
    "JavaScript",
    "jQuery",
    "JSX",
    "MaterializeCSS",
    "Moment.JS",
    "MongoDB",
    "MongoDBAtlas",
    "Mongoose",
    "MySQL",
    "NodeJS",
    "PassportJS",
    "React-Router",
    "ReactJS",
    "Chart.JS",
    "ESLint",
  ];

  return (
    <div id="about-me-component">
      <div
        id="above-the-fold"
        className="pt-5"
        style={{
          height: "95vh",
          backgroundImage: "url('/images/cool-background.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          {/* <h1 className="display-1 mt-5 font-weight-bold d-flex justify-content-center ">
            Abraham Spindel
          </h1> */}
          <div
            id="fa-link-icons"
            className=" d-flex justify-content-between"
            style={
              {
                // padding: "0 10rem 0 10rem",
                // paddingLeft: "3rem",
                // paddingRight: "3rem",
              }
            }
          >
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/abrahamspindel/"
              target="_blank"
            >
              <i class="fab fa-linkedin fa-4x" style={{ color: "#2a2a2a" }}></i>
            </a>
            <a href={"Resume"}>
              <i class="fas fa-file-pdf fa-4x" style={{ color: "#2a2a2a" }}></i>
            </a>
            <a href="mailto:AbrahamSpindel@gmail.com">
              <i
                class="fas fa-envelope-square fa-4x"
                style={{ color: "#2a2a2a" }}
              ></i>
            </a>
            <a
              rel="noreferrer noopener"
              href="https://www.github.com/abraspin/"
              target="_blank"
            >
              <i
                class="fab fa-github-square fa-4x"
                style={{ color: "#2a2a2a" }}
              ></i>
            </a>
          </div>

          <h1 className="font-weight-bold text-center ">
            Full Stack Web Development
          </h1>
          <h2 className="font-weight-bold text-center">
            with an engineering edge
          </h2>
          <hr style={{ marginTop: "5vh", marginBottom: "5vh" }}></hr>

          <h3 className="d-flex justify-content-center">
            Thanks for visiting!
          </h3>

          <h5 className="d-flex justify-content-center"> Learn more below </h5>
          <h3 className="d-flex justify-content-center">
            <i className="fas fa-arrow-down mx-2"></i>
          </h3>
        </div>

        {/* ///////////////////////////////////////////////////// */}
      </div>

      <div
        id="home-page-links-container"
        className=" px-5 my-5 d-flex justify-content-between  "
      >
        <Link to="/Resume" className=" btn  link-button hvr-grow">
          Resume
        </Link>

        <Link to="/Projects" className=" btn link-button hvr-grow">
          Projects
        </Link>
        <a
          className="btn  link-button justify-content-center  hvr-grow"
          href="https://www.linkedin.com/in/abrahamspindel/"
          rel="noreferrer noopener"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="btn link-button justify-content-center  hvr-grow"
          href="https://github.com/abraspin"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub
        </a>

        <Link to="/ContactMe" className=" btn  link-button hvr-grow">
          Contact
        </Link>
      </div>

      <div className="container">
        {/* <h1 className="d-flex justify-content-center text-light" > About Me</h1> */}

        <div className="row">
          {/* <div className="mt-1">
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
          </div> */}
          <div
            id="about-me-jumbotron"
            className="jumbotron  bg-dark text-white py-4"
          >
            {/* ///////////////////////////////////////////////////////////////////////////////// */}
            <div className="row">
              <div className="col-md-10">
                <h1 className="display-4 text-center">Hello, world!</h1>
                <p className="lead text-center">
                  My name is Abraham Spindel and I am a full-stack web
                  developer.
                </p>
              </div>
              <div className="col-md-2">
                <img
                  id=""
                  src="/images/my-face.PNG"
                  className="card-img-top"
                  alt="my-face"
                ></img>
              </div>
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////// */}
            <hr className="my-4"></hr>
            <p>
              <strong>
                I earned a certificate in full-stack development from the
                University of Texas-Austin Full-Stack Coding Bootcamp
              </strong>
              . I am a former Manufacturing Engineer for plastic automotive
              component manufacturing.
            </p>
            <p>
              I have a B.S. in Mechanical Engineering from the University of
              Wisconsin-Madison, with a background in composite polymers and
              computer science.
            </p>
            <p>
              I am a proven leader with high interpersonal skills and the
              ability to effectively work and communicate cross-functionally.
            </p>
            <hr className="my-4"></hr>
            {/* <div className="row">
              <a
                href="mailto:AbrahamSpindel@gmail.com"
                id="email-me-button"
                className="btn hvr-grow email-me-button mt-4"
              >
                E-mail me
              </a>
            </div> */}
          </div>

          {/* <hr className=""></hr> */}

          <h1
            className=" font-italic font-weight-bold mt-4 text-left"
            style={{ color: "black" }}
          >
            Key Languages and Technologies:
          </h1>

          {/* <!-- Links to rest of website, right half of this row --> */}
          <div className=" card mt-1 container card-deck justify-content-center mx-auto py-2">
            <div className="row"></div>
            <div className="row justify-content-center">
              {technologiesKnown.map((technology) => {
                return (
                  <div
                    style={{ width: "auto", backgroundColor: "lightgray" }}
                    className="border m-2 px-1"
                  >
                    {technology}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <hr className="my-4"></hr> */}
        <br></br>
        <br></br>
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
