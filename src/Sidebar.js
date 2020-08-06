import React from 'react';
import "./Sidebar.css";
import SideBarRow from "./SideBarRow";
import WhatShotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
function Sidebar() {
    return (
        <div className="sidebar">
          
            <SideBarRow selected title="Home" Icon={HomeIcon} />
            <SideBarRow title="Trending" Icon={WhatShotIcon} />
            <SideBarRow title="Subscription" Icon={SubscriptionsIcon} />
            <hr />
            <SideBarRow title="Library" Icon={VideoLibraryIcon} />
            <SideBarRow title="History" Icon={HistoryIcon} />
            <SideBarRow title="Your videos" Icon={OndemandVideoIcon} />
            <SideBarRow title="watch Later" Icon={WatchLaterIcon} />
            <SideBarRow title="Liked videos" Icon={ThumbUpAltOutlinedIcon} />
            <SideBarRow title="Show more" Icon={ExpandMoreOutlinedIcon} />
            <hr />

        </div>
    )
}

export default Sidebar;
