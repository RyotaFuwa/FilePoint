import React from "react";
import styled from "styled-components";

const OuterBox = styled.div`
    height: 100%;
    width: 100%;
    grid-area: drop-box;
    border: 2px solid lightgray;
    border-radius: 10px;
`

const DropBox = props => {
    return (
        <OuterBox />
    )
}

export default DropBox;

