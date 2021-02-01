import "./style.css";

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
        title='contact-form-frame'
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

export default ContactMe;
