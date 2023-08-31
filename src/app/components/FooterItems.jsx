import React from "react";

const FooterItems = ({
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  li1,
  li2,
  li3,
  li4,
  li5,
  li6,
}) => {
  const commonStyles = `hover:font-bold hover:underline`;
  return (
    <div>
      <ul className="flex flex-row gap-4 items-center text-xs my-5 flex-wrap">
        <li className={commonStyles}>
          <a href={{ link1 }}>{li1}</a>
        </li>
        <li className={commonStyles}>
          <a href={{ link2 }}>{li2}</a>
        </li>
        <li className={commonStyles}>
          <a href={{ link3 }}>{li3}</a>
        </li>
        <li className={commonStyles}>
          <a href={{ link4 }}>{li4}</a>
        </li>
        <li className={commonStyles}>
          <a href={{ link5 }}>{li5}</a>
        </li>
        <li className={commonStyles}>
          <a href={{ link6 }}>{li6}</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterItems;
