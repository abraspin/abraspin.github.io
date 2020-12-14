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

function App() {
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
