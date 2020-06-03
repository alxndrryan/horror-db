import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container-fluid">
        <p>Copyright ⓒ {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
