import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = ({ open, data }) => {

  console.log(open)
  return (
    <>
      <p>Some content to render</p>
      {open && <ChildComponent open={open} data={data} />}
    </>
  );
};

export default ParentComponent;
