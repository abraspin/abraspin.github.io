import "./style.css";

function MyFooter() {
  return (
    <div className="row">
      <footer className="page-footer font-small cyan darken-3 d-flex justify-content-center ">
        {/* <div className="row"> */}
        <a href={"/"}>
          <span className="footer-copyright text-center py-3">2020 Abraham Spindel</span>
        </a>

        <a href="https://www.linkedin.com/in/abrahamspindel/">
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a href={"Resume"}>
          <i class="fas fa-file-pdf fa-2x"></i>
        </a>
        <a href="mailto:AbrahamSpindel@gmail.com">
          <i class="fas fa-envelope-square fa-2x"></i>
        </a>
        <a href="https://www.github.com/abraspin/">
          <i class="fab fa-github-square fa-2x"></i>
        </a>
        {/* </div> */}
      </footer>
    </div>
  );
}

export default MyFooter;
