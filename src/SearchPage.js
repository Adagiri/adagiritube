import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import OpticalIllusion from "./assets/opticalillusion.jpg";
import VideoRow from "./VideoRow";
import Strange from "./assets/strange.jpg";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
            image={OpticalIllusion}
            channel="Optical illusion"
            verified
            subs="980k"
            noOfVideos={226}
            description="Strange sightings and happenings around the globe, we are not alone."
            />
            <hr />

            <VideoRow
            views="1.5M"
            subs="700k"
            description="The strangest videos on the internet"
            timestamp="2 mins ago"
            channel="Optical illusion"
            title="10 strangest sightings of 2020"
            image={Strange}
            />
        </div>
    )
}

export default SearchPage
