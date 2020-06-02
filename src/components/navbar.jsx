import React from "react";

//stateless functional component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light m-auto ">
      <a
        className="navbar-brand navbar-text center"
        href="https://unsplash.com/s/photos/el-chalt%C3%A9n"
      >
        Pictures of El Chatén on Unsplash{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
