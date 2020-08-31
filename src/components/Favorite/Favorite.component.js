import React from "react";
import {BoxTitle, OuterBox} from "../Primitives/SectionBox";

const Favorite = props => {
    const themeColor = 'royalblue';
    return (
        <OuterBox gridArea='favorite' color={themeColor}>
            <BoxTitle color={themeColor}>Favorite</BoxTitle>
            {[]}
        </OuterBox>
    )
}

export default Favorite;

