import React from "react";
import styled from 'styled-components';

const FailBox = styled.div`display:none;`;

const Fail = () => {
    return (
        <FailBox>
            <h2>Uh Oh!</h2>
            <h2>This.item goes in the this.bin.</h2>
            <img alt="image of this.item" src="" />
            <p>Fun fact about this.item</p>
            <button>OK</button>
        </FailBox>
    )
}

export default Fail;