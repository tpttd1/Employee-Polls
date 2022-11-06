import React, { memo } from "react";

const TabsItem = (props) => {
  const { className, handleClick, children } = props;
  return (
    <li className={`tabs-item ${className}`} onClick={handleClick}>
      {children}
    </li>
  );
};

export default memo(TabsItem);
