import React from "react";
import Navigation from "./Navigation";

function Layout({ Children }) {
  return (
    <div>
      <Navigation />
      {Children}
    </div>
  );
}

export default Layout;
