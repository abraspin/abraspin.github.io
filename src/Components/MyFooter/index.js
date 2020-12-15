import "./style.css";

function MyFooter() {
  return (
    <footer className="page-footer font-small cyan darken-3 d-flex justify-content-center ">
      {/* <div className="row"> */}

      <div className="copyright-wrapper">
        <a href={"/"}>
          <span className="footer-copyright text-center">2020 Abraham Spindel</span>
        </a>
      </div>

      <div>
        <a rel="noreferrer noopener" href="https://www.linkedin.com/in/abrahamspindel/" target="_blank">
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a href={"Resume"}>
          <i class="fas fa-file-pdf fa-2x"></i>
        </a>
        <a href="mailto:AbrahamSpindel@gmail.com">
          <i class="fas fa-envelope-square fa-2x"></i>
        </a>
        <a rel="noreferrer noopener" href="https://www.github.com/abraspin/" target="_blank">
          <i class="fab fa-github-square fa-2x"></i>
        </a>
      </div>
    </footer>
  );
}

export default MyFooter;
