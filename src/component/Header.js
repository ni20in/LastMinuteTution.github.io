import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>Last Minute Tution</h1>
      <main>
        <HashLink to={"/"}>HOME</HashLink>
        <Link to={"/Contact"}>CONTACT</Link>
        <HashLink to={"/about"}>ABOUT</HashLink>
        <HashLink to={"/view-courses"}>VIEW COURSES</HashLink>
        <HashLink to={"/add-course"}>ADD COURSES</HashLink>
      </main>
    </nav>
  );
};

export default Header;