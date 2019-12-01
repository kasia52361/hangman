import React, { Component } from "react";
import styled from "styled-components";

import KittyHead from "../assets/kitty-head.png";
import KittyRightHand from "../assets/kitty-hand-right.png";
import KittyLeftHand from "../assets/kitty-hand-left.png";
import KittyBody from "../assets/kitty-body.png";
import KittyRightLeg from "../assets/kitty-leg-right.png";
import KittyLeftLeg from "../assets/kitty-leg-left.png";

const KittyContainer = styled.div`
    position: relative;
    width: 20rem;
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        width: 30rem;
    }

    > .img {
        max-width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 0.5s;

        &.-shown {
            opacity: 1;
        }

        &:first-of-type {
            position: static;
        }
    }
`;

class Kitty extends Component {
    state = {};
    render() {
        return (
            <KittyContainer>
                <img src={KittyHead} className="img hangmanBodyPart" alt="" />
                <img src={KittyBody} className="img hangmanBodyPart" alt="" />
                <img
                    src={KittyRightHand}
                    className="img hangmanBodyPart"
                    alt=""
                />
                <img
                    src={KittyLeftHand}
                    className="img hangmanBodyPart"
                    alt=""
                />
                <img
                    src={KittyRightLeg}
                    className="img hangmanBodyPart"
                    alt=""
                />
                <img
                    src={KittyLeftLeg}
                    className="img hangmanBodyPart"
                    alt=""
                />
            </KittyContainer>
        );
    }
}

export default Kitty;
