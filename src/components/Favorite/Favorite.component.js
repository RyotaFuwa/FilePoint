import React from "react";
import styled from "styled-components";

const OuterBox = styled.div`
    height: 100%;
    width: 100%;
    grid-area: favorite;
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
    border: 2px solid royalblue;
    border-radius: 10px;
`

const Favorite = props => {
    return (
        <OuterBox>
            {[]}
        </OuterBox>
    )
}

export default Favorite;

