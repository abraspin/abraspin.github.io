import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProjectListing from "./Components/ProjectListing";
import Home from "./pages/Home";
import MyFooter from "./Components/MyFooter";
import projectsList from "./projects.json";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  // export default function App() { //FIXME: ? should I do this and remove the export below?
  return (
    //FIXME:TODO: There is surely a better way to style the whole thing
    <div>
      <Router>
        {/* <div> */}
        <NavBar> </NavBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/Resume">
            <Resume />
          </Route>
          <Route exact path="/Projects">
            {projectsList.map((project) => {
              return <ProjectListing project={project}></ProjectListing>;
            })}
          </Route>
          <Route exact path="/ContactMe">
            <ContactMe />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <MyFooter></MyFooter>
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;

function NavBar() {
  // TODO: pass in active page prop to highlight that one in the nav bar
  return (
    // Navigation Bar, containing links to Home page, Resume page, Projects page, and contact me page

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="col-md-6">
        <a className="navbar-brand" href="../index.html">
          Abraham Spindel
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      {/* Navigation menu items  */}
      <div className="col-md-6 float-right">
        <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto float-right">
            <li className="nav-item ">
              {/* <a className="nav-link" href="../index.html">
              TODO:TODO:TODO: ternary operator? Switch? Map and make each link a component? aw yeah TODO:TODO:TODO:  Home <span className="sr-only">(current)</span>
              </a> */}
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="./Resume.html">
                Resume
              </a> */}
              <Link to="/Resume" className="nav-link">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="./Projects.html">
                Projects
              </a> */}
              <Link to="/Projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item active">
              {/* <a className="nav-link" href="./Contact.html">
                Contact Me
              </a> */}
              <Link to="/ContactMe" className="nav-link">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Resume() {
  return (
    // <h1>Hi I'm the Resume Page</h1>
    <section>
      <iframe className="embedResume" src="/assets/Abraham-Spindel-Resume.pdf"></iframe>
    </section>
  );
}

function ContactMe() {
  const contactFormStlyle = {
    width: "100%",
    height: "1000px",
    position: "relative",
    margin: "0px",
    padding: "0px",
    border: "0px",
  };
  return (
    <div>
      <br></br>

      {/* Embedded google form for contacting me  */}

      <iframe
        className=" contact-me-form"
        style={contactFormStlyle}
        src="https://docs.google.com/forms/d/e/1FAIpQLSezAu7bhHoJc12DVU4D0FrrGjGCMoXUZq1Rqrao5AVqQZVo4A/viewform?embedded=true"
      ></iframe>

      {/* Javascript references  */}
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
