import React, { Component } from "react";
import styled from "styled-components";

const LettersContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const LetterBtn = styled.a`
    border-radius: 8px;
    border: 2px solid lightpink;
    font-size: 2rem;
    background: transparent;
    box-shadow: none;
    padding: 5px 0;
    color: #3d3838;
    margin: 10px;
    display: block;
    width: 40px;
    text-align: center;
    &:hover {
        color: #3d3838;
        text-decoration: none;
    }

    &.-disabled {
        color: grey;
        background-color: pink;
        cursor: default;
    }
`;

class Letters extends Component {
    state = {
        letters: [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z"
        ]
    };
    render() {
        return (
            <LettersContainer>
                {this.state.letters.map(i => (
                    <li key={i}>
                        <LetterBtn href="/" onClick={this.props.checkLetter}>
                            {i}
                        </LetterBtn>
                    </li>
                ))}
            </LettersContainer>
        );
    }
}

export default Letters;
