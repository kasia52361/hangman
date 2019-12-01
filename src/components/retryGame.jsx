import React, { Component } from "react";
import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    text-align: center;
    background: #add8e6de;
`;

const BtnPrimary = styled.button`
    appearance: none;
    background: lightpink;
    border: 0;
    border-radius: 5px;
    box-shadow: none;
    color: white;
    font-size: 16px;
    padding: 7px 35px;
`;

class Retry extends Component {
    state = {};
    render() {
        const win = this.props.win;

        return (
            <Overlay>
                <div>
                    <h2
                        className="text-center mb-4"
                        style={{ fontSize: "50px" }}
                    >
                        {win ? "You won!" : "You loose"}
                    </h2>
                    {/* <BtnPrimary type="button">Retry</BtnPrimary> */}
                </div>
            </Overlay>
        );
    }
}

export default Retry;
