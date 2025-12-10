const HomeInfo = (props) => {
  return (
    <div className={`homeinfo-container ${props.className || ""}`}>
      <h2 className="homeinfo-title">
        <span className="primary">{"//"}</span>{" "}
        <span className="secondary">Web Developer</span>
      </h2>
      <div>
        <ul>
          <li>
            <span className="blue">Name:</span> Eric Dollinger
          </li>
          <li>
            <span className="blue">From:</span> Omaha, Nebraska
          </li>
          <li>
            <span className="blue">Age:</span> 32
          </li>
          <li>
            <span className="blue">Title:</span> Web Developer
          </li>
        </ul>
        <h3 className="homeinfo-paratitle">
          <span className="primary">{"//"}</span>{" "}
          <span className="secondary">Bio</span>
        </h3>
        <p>
          I am a 32 year old Web Developer based out of Omaha, Nebraska. I
          specialize in the Front End side using ReactJS but I am familiar with
          a lot of the Back End as well as many other languages, frameworks, and
          libraries. Feel free to look around to find out more, see my work and
          projects, shoot me a message, and much more.
        </p>
      </div>
    </div>
  );
};

export default HomeInfo;
