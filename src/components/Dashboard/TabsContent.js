import React, { memo } from "react";

const TabsContent = (props) => {
  return (
    <div
      className={`tabs__content ${
        props.activeTab === Number(props.tabId) ? "active" : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default memo(TabsContent);
