import React, { Component } from "react";
import styled from "styled-components";

const BlankSpaceContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    font-size: 2rem;
    line-height: 1;
`;

const BlankSpace = styled.div`
    width: 3rem;
    height: 3rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const LetterSpace = styled.span`
    width: 3rem;
    height: 3rem;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-align: center;
    margin: 0 5px;

    &.-shown {
        > span {
            opacity: 1;
        }
    }

    > span {
        opacity: 0;
        transition: opacity 0.5s;
    }
`;

class Answer extends Component {
    state = {};
    render() {
        const alphaNumeric = Array.from(
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        );
        let arrayByWords = this.props.answersList
            .toString()
            .trim()
            .split(" ");

        let arrayByLetters = arrayByWords.map(words => {
            return (
                <div style={{ display: "flex", margin: "0 1rem" }}>
                    {Array.from(words).map((character, index) => {
                        let letter = alphaNumeric.indexOf(character);
                        if (letter > -1) {
                            return (
                                <LetterSpace
                                    key={`${character} ${index}`}
                                    className={`answerSingleSpacer -${character.toLowerCase()}`}
                                >
                                    <span>{character}</span>
                                </LetterSpace>
                            );
                        } else {
                            return (
                                <BlankSpace key={`${character} ${index}`}>
                                    <span style={{ opacity: "1" }}>
                                        {character}
                                    </span>
                                </BlankSpace>
                            );
                        }
                    })}
                </div>
            );
        });
        console.log(arrayByLetters);

        return (
            <div>
                <h3 className="text-center mt-5 text-uppercase">
                    What Does Trump Think?
                </h3>
                <div className="mb-5">
                    <BlankSpaceContainer>{arrayByLetters}</BlankSpaceContainer>
                </div>
            </div>
        );
    }
}

export default Answer;
