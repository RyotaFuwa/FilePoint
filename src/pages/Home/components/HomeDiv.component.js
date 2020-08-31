import React from "react";
import styled from "styled-components";

const InnerBox = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-gap: 2.5vmin;
    grid-template-columns: 1fr 5fr 3fr;
    grid-template-rows: 0.5fr 1fr 2fr;
    grid-template-areas:
    "sidebar path-box path-box"
    "sidebar recent drop-box"
    "sidebar favorite favorite";
`

const OuterBox = styled.div`
    height: 96vh;
    width: 90vw;
    padding: 2vh 5vw;
`

const HomeDiv = ({children}) => {
    return (
        <OuterBox>
            <InnerBox>
                {children}
            </InnerBox>
        </OuterBox>
    )
}

export default HomeDiv;
