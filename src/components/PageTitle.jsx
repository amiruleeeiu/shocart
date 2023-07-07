import React from "react";

function PageTitle({ title, children }) {
  document.title = title;
  return <div>{children}</div>;
}

export default PageTitle;
