import "./style.css";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-1">
            <div className="card" style={{ width: "100%" }}>
              <img id="profile-pic" src="/images/my-face.PNG" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h3 className="card-title">Abraham Spindel</h3>
                <hr></hr>
                <p className="card-text">My name is Abraham Spindel and I am an aspiring full-stack web developer.</p>
                <p>
                  I will soon complete the
                  <strong>University of Texas-Austin Full-Stack Coding Bootcamp</strong>. I am a former Manufacturing Engineer for
                  plastic automotive component manufacturing.
                </p>
                <p>
                  I have a B.S. in Mechanical Engineering from the University of Wisconsin-Madison, with a background in composite
                  polymers and computer science.
                </p>

                <hr></hr>

                <div className="row">
                  <a href="mailto:AbrahamSpindel@gmail.com" id="email-me-button" className="btn hvr-grow email-me-button">
                    E-mail me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Links to rest of website, right half of this row --> */}

          <aside className="col-md-6">
            <div className="row my-4">
              <a className="btn  link-button hvr-grow" href="./pages/Resume.html">
                Resume
              </a>
            </div>
            <div className="row my-4">
              <a className="btn  link-button hvr-grow" href="./pages/Projects.html">
                Projects
              </a>
            </div>
            <div className="row my-4">
              <a className="btn  link-button hvr-grow" href="https://www.linkedin.com/in/abrahamspindel/" target="_blank">
                LinkedIn
              </a>
            </div>
            <div className="row my-4">
              <a className="btn  link-button hvr-grow" href="https://github.com/abraspin" target="_blank">
                GitHub
              </a>
            </div>
            <div className="row my-4">
              <a className="btn  link-button hvr-grow" href="./pages/Contact.html" target="_blank">
                Contact
              </a>
            </div>
          </aside>
        </div>
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
