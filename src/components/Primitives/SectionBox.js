import React from "react";
import styled from "styled-components";

export const OuterBox = styled.div`
    padding: 1em 1em;
    grid-area: ${props => props.gridArea};
    border: 2px solid ${props => props.color ? props.color : 'black'};
    border-radius: 10px;
`

export const BoxTitle = styled.span`
    margin-top: -1.5em;
    padding: 0 1em;
    background-color: white;
    position: absolute;
    font-size: 1.25em;
    overflow: scroll;
    color: ${props => props.color ? props.color : 'black'};
`

