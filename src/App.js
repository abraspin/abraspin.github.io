import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectListing from "./Components/ProjectListing";

const projectsList = [
  {
    title: "A Blog's Life",
    technologiesUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "MaterializeCSS",
      "PassportJS",
      "NodeJS",
      "ExpressJS",
      "MySQL",
      "BCrypt",
      "HandlebarsJS",
    ],
    description:
      "A full-stack weblog app built on NodeJS and powered by Heroku. Share your thoughts, find new friends, and give feedback to other's content in the form of comments and likes!",
    screenshot: "",
    gitHubLink: "https://github.com/Cenzo-cmd/A-Blogs-Life",
    deployedLink: "https://its-a-blogs-life.herokuapp.com",
  },
  {
    title: "Burger Logger",
    technologiesUsed: ["HTML", "CSS", "JavaScript", "jQuery", "MaterializeCSS", "NodeJS", "ExpressJS", "MySQL"],
    description:
      " A full-stack deployed app built on NodeJS and powered by Heroku and a home-made ORM. Keep track of every burger you ever wanted to eat, and keep track of which you've had!",
    screenshot: "",
    gitHubLink: "https://github.com/abraspin/burger",
    deployedLink: "https://blooming-citadel-89153.herokuapp.com",
  },
  {
    title: "SHAKR App",
    technologiesUsed: ["HTML", "CSS", "JavaScript", "Bulma.CSS", "jQuery"],
    description:
      "Enter your ingredients to see which recipes you can make! JS tracks viable cocktail objects, theCocktailDB.com and Google Maps API utilized.",
    screenshot: "",
    gitHubLink: "https://github.com/abraspin/Project-1-The-Silent-Marvels-/",
    deployedLink: "https://abraspin.github.io/Project-1-The-Silent-Marvels-/",
  },
  {
    title: "Weather Dashboard",
    technologiesUsed: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    description: "Weather dashboard app. Utilizes OpenWeather API and renders page on demand, stores searches locally.",
    screenshot: "",
    gitHubLink: "https://github.com/abraspin/Weather-Dashboard/",
    deployedLink: "https://abraspin.github.io/Weather-Dashboard",
  },
  {
    title: "UPDATEME!!!!!!!!!!!!! My Website",
    technologiesUsed: ["HTML", "CSS", "Bootstrap"],
    description: " A website containing my information. In fact...It's this very site!",

    screenshot: "",
    gitHubLink: "https://github.com/abraspin/abraspin.github.io",
    deployedLink: "https://abraspin.github.io/",
  },
  {
    title: "Workday Scheduler",
    technologiesUsed: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Moment.JS"],
    description:
      "   A super simple daily calendar app. Save your activities to the hour - line items are color coded by the time of day!",
    screenshot: "",
    gitHubLink: "https://github.com/abraspin/Work-Day-Scheduler",
    deployedLink: "https://abraspin.github.io/Work-Day-Scheduler",
  },
  {
    title: "Password Generator",
    technologiesUsed: ["HTML", "CSS", "JavaScript"],
    description:
      " Generates a secure password using psuedo-random numbers and user inputs to determine desired password length and character type preference.",
    screenshot: "",
    gitHubLink: "https://github.com/abraspin/password-generator",
    deployedLink: "https://abraspin.github.io/password-generator",
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  // export default function App() { //FIXME: ? should I do this and remove the export below?
  return (
    <Router>
      <div>
        {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul> */}
        <NavBar> </NavBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/Resume">
            <Resume />
          </Route>
          <Route exact path="/Projects">
            {/* {projectsList.map((project) => (
             return <ProjectListing project={project}></ProjectListing>
            )} */}

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
      </div>
    </Router>
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

function Home() {
  return <h2>Home</h2>;
}

function Resume() {
  return <h2>Resume</h2>;
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
