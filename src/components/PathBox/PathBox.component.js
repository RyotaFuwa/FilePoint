import React, {useState} from "react";
import styled from "styled-components";

const OuterBox = styled.div`
    grid-area: path-box;
    display: grid;
    justify-items: center;
    align-items: center;
`

const InputBox = styled.input`
    width: 40%;
    padding: 0.25em 0.2em;
    border-radius: 0.1em;
    border: 1px solid lightgray;
    text-align: center;
    font-size: 1.4em;
    font-family: Arial;
    box-shadow: 0.02em 0.02em 0.05em #777777;
    transition: all 0.25s;
    &:focus {
        text-align: left;
        outline: none;
    }
    &:hover {
        transform: scale(1.05);
        box-shadow: 0.05em 0.1em 0.2em #777777;
    }
`

const PathBox = props => {
    const [path, setPath] = useState(props.currentPath);
    const handleKeyDown = key => {
        if(key === 'Enter') {
            console.log(path);
        }
    }
    return (
        <OuterBox className='path-box' onKeyDown={event => handleKeyDown(event.key)}>
            <InputBox value={path} onChange={e => setPath(e.target.value)} />
        </OuterBox>
    )
}

export default PathBox;

