/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import LeaderBoard from "../Leaderboard";
import New from "../New";
import Question from "../Question";
import TabsContent from "./TabsContent";

const Dashboard = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === "/leaderboard") setSelectedTab(1);
    if (pathname === "/add") setSelectedTab(2);
    if (pathname === "/" || pathname.includes("questions")) setSelectedTab(0);
  }, [window.location.pathname]);

  return (
    <div className="dashboard">
      <div className="wrapper-tabs__content">
        <TabsContent tabId="0" activeTab={selectedTab}>
          <Question />
        </TabsContent>
        <TabsContent tabId="1" activeTab={selectedTab}>
          <LeaderBoard />
        </TabsContent>
        <TabsContent tabId="2" activeTab={selectedTab}>
          <New author={props.auth.user} update={props} />
        </TabsContent>
      </div>
    </div>
  );
};

export default connect((state) => state)(Dashboard);
