import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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

export default NavBar;
