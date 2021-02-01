import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  // TODO: pass in active page prop to highlight that one in the nav bar

  // const [pageSelected, setPageSelected] = useState("");

  //   useEffect(() => {
  //     console.log(
  //       "🚀 ~ file: App.js ~ line 40 ~ useEffect ~ window.location.pathname.split('/')[1];",
  //       window.location.pathname.split("/")[1]
  //     );
  //     const currentPage = window.location.pathname.split("/")[1];
  //     setPageSelected(currentPage);
  //   }, []);

  return (
    // Navigation Bar, containing links to Home page, Resume page, Projects page, and contact me page

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="col-md-6 pl-5">
        <a className="navbar-brand" href={"/"}>
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
      <div className="col-md-6 float-right pr-5">
        <div className="row float-right ">
          <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
            <ul className="navbar-nav  float-right">
              <li className="nav-item ">
                {/* <a className="nav-link" href="../index.html">
                TODO:ternary operator? Switch? Map and make each link a component?  TODO:  Home <span className="sr-only">(current)</span>
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
              <li className="nav-item ">
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
      </div>
    </nav>
  );
}

export default NavBar;
