import React from "react";
import styled from "styled-components";
import {BoxTitle, OuterBox} from "../Primitives/SectionBox";

const DropBox = props => {
    const themeColor = 'darkseagreen';
    return (
        <OuterBox gridArea='drop-box' color={themeColor}>
            <BoxTitle color={themeColor}>Upload</BoxTitle>
        </OuterBox>
    )
}

export default DropBox;

