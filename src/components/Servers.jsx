import React from "react";

const Servers = (props) => {
  // console.log(props);
  const { title, link, logo } = props;
  return (
    <div className="border border-slate-600 px-7 py-2 rounded-lg w-fit bg-indigo-600">
      <h1>{title}</h1>
    </div>
  );
};

export default Servers;
