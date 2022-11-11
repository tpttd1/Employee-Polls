import React from "react";
import { connect } from "react-redux";
import LeaderBoard from "../Leaderboard";
import New from "../New";
import Question from "../Question";
import TabsContent from "./TabsContent";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <div className="wrapper-tabs__content">
        <TabsContent tabId="0" activeTab={props?.selectedTab}>
          <Question />
        </TabsContent>
        <TabsContent tabId="1" activeTab={props?.selectedTab}>
          <LeaderBoard />
        </TabsContent>
        <TabsContent tabId="2" activeTab={props?.selectedTab}>
          <New author={props.auth.user} update={props} />
        </TabsContent>
      </div>
    </div>
  );
};

export default connect((state) => state)(Dashboard);
