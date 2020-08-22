import React from "react";
import styled from "styled-components";

const OuterBox = styled.div`
    height: 100%;
    display: flex;
    grid-area: recent;
    flex-direction: row;
    overflow-y: scroll;
    border: 2px solid lightgray;
    border-radius: 10px;
`

const Recent = props => {
    return (
        <OuterBox>
            {[]}
        </OuterBox>
    )
}

export default Recent;

