import React from "react";
import Image from "next/image"

const DashNav = () => {
  return (
    <React.Fragment>
      <nav class="navbar bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <Image scr="/" />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default DashNav;
