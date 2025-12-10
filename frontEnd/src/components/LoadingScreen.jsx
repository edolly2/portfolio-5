import { useState, useEffect } from "react";
import SiteBrand from "./SiteBrand";

// Styles moved to LoadingScreen.css (keyframes included there)

const LoadingScreen = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div
      className="loading-overlay"
      style={{ display: loading ? "flex" : "none" }}
    >
      {loading ? (
        <div className="loading-container">
          <div className="loading-content">
            <SiteBrand className="loading-logo" />
            <h1 className="loading-content-title">
              <span className="primary">&lt;</span>{" "}
              <span className="primary">Eric</span>{" "}
              <span className="secondary">Dollinger</span>{" "}
              <span className="primary">/&gt;</span>
            </h1>
          </div>
          <div className="loading-bar" />
          <span className="loading-text"></span>
        </div>
      ) : null}
    </div>
  );
};

export default LoadingScreen;
