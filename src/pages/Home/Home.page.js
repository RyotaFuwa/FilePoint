import React from "react";
import PathBox from "../../components/PathBox/PathBox.component";
import Recent from "../../components/Recent/Recent.component";
import Favorite from "../../components/Favorite/Favorite.component";
import DropBox from "../../components/DropBox/DropBox.component";
import HomeDiv from "./components/HomeDiv.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";

const Home = props => {
    return (
        <HomeDiv>
            <PathBox currentPath={'/'}/>
            <Recent />
            <DropBox />
            <Favorite />
            <Sidebar />
        </HomeDiv>
    )
}

export default Home;