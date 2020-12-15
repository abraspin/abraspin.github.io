import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProjectListing from "./Components/ProjectListing";
import Home from "./pages/Home";
import MyFooter from "./Components/MyFooter";
import projectsList from "./projects.json";
import NavBar from "./Components/NavBar";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import { useEffect, useState } from "react";

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
    <div>
      <Router>
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
        <br></br>
      </Router>
    </div>
  );
}

export default App;
