import React from "react";
import './NotFound';

const NotFound = () => {
  return (
    <div>
      <div className="error-page">
        <div>
          <h1 data-h1="404">404</h1>
          <p data-p="NOT FOUND">NOT FOUND</p>
        </div>
      </div>

      <a href="/" class="back">
        GO BACK
      </a>

      <div id="tsparticles"></div>

      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/tsparticles@2.3.4/tsparticles.bundle.min.js"
      ></script>
      <script type="text/javascript" src="../styles/NotFound.js"></script>
    </div>
  );
};

export { NotFound };
