import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProjectListing from "./Components/ProjectListing";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MyFooter from "./Components/MyFooter";
import projectsList from "./projects.json";
import NavBar from "./Components/NavBar";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import { Fragment } from "react";
// import cool-background.png from '../public/images/cool-background.png'

function App() {
  //TODO: following code for passing active page to navbar, currently non-functional
  // const [pageSelected, setPageSelected] = useState("");
  // useEffect(() => {
  //   console.log(
  //     "🚀 ~ file: App.js ~ line 40 ~ useEffect ~ window.location.pathname.split('/')[1];",
  //     window.location.pathname.split("/")[1]
  //   );
  //   const currentPage = window.location.pathname.split("/")[1];
  //   setPageSelected(currentPage);
  //   console.log("🚀 ~ file: App.js ~ line 38 ~ useEffect ~ currentPage", currentPage);
  // }, []);

  return (
    <Fragment>
      <div className="content" >
        <Router>
          <NavBar> </NavBar>
          <Route exact path="/Resume">
            <Resume />
          </Route>
          <Route exact path="/ContactMe">
            <ContactMe />
          </Route>

          {/* <div id="above-the-fold" style={{ height: '100vh', backgroundImage: "url('/images/cool-background.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} > */}
          <Home />
          {/* </div> */}
          <div>

          </div>

          <Projects></Projects>


        </Router>
      </div>
      <MyFooter></MyFooter>
    </Fragment>
  );
}

export default App;
