import React from "react";
import styled from "styled-components";

const OuterBox = styled.div`
    height: 100%;
    width: 100%;
    grid-area: sidebar;
    border-right: 2px solid lightgray;
`

const Sidebar = props => {
    return (
        <OuterBox />
    )
}

export default Sidebar;

