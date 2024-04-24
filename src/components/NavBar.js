import React from "react";

function NavBar() {

  const links = ["home", "about", "projects"];

   const anchorTags = links.map((link, index) => {
    const id = index + 1;
    return <a key={id} href={`#${link}`}>{link}</a>;
  });

  return (
  <>
    <nav>{anchorTags}</nav>
  </>
);
}

export default NavBar;
