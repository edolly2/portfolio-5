const HomeInfo = (props) => {
  return (
    <div className={`home-info-container ${props.className || ""}`}>
      <h2 className="home-info-title">
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
            <span className="blue">Age:</span> 34
          </li>
          <li>
            <span className="blue">Title:</span> Web Developer
          </li>
        </ul>
        <h3 className="home-info-paratitle">
          <span className="primary">{"//"}</span>{" "}
          <span className="secondary">Bio</span>
        </h3>
        <p>
          I’m a web developer based in Omaha, Nebraska, specializing in
          front-end development with React. I bring a well-rounded skill set
          that includes back-end development and experience with a wide range of
          modern technologies. Explore my work, view my projects, and feel free
          to reach out.
        </p>
      </div>
    </div>
  );
};

export default HomeInfo;
