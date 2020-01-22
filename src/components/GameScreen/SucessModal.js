import React from "react";
import styled from 'styled-components'

const SuccessBox = styled.div`display:none;`;

const Success = () => {
    return (
        <SuccessBox>
            <h2>Well Done!</h2>
            <h2>This.item goes in the this.bin.</h2>
            <img alt="image of this.item" src="" />
            <p>Fun fact about this.item</p>
            <button>OK</button>
        </SuccessBox>
    )
}

export default Success;