import React from "react";

const Servers = (props) => {
  // console.log(props);
  const { title, link, logo } = props;
  return (
    <div className="border border-slate-600 px-4 py-3 w-fit">
      <h1>{title}</h1>
    </div>
  );
};

export default Servers;
