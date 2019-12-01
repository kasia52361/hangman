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

        let answerArray = Array.from(this.props.answersList).map((e, index) => {
            let letter = alphaNumeric.indexOf(e);

            if (letter > -1) {
                return (
                    <LetterSpace
                        key={`${e} ${index}`}
                        className={`answerSingleSpacer -${e.toLowerCase()}`}
                    >
                        <span>{e}</span>
                    </LetterSpace>
                );
            } else {
                return (
                    <BlankSpace key={`${e} ${index}`}>
                        <span style={{ opacity: "1" }}>{e}</span>
                    </BlankSpace>
                );
            }
        });
        return (
            <div>
                <h3 className="text-center mt-5 text-uppercase">
                    What Does Trump Think?
                </h3>
                <div className="mb-5">
                    <BlankSpaceContainer>{answerArray}</BlankSpaceContainer>
                </div>
            </div>
        );
    }
}

export default Answer;
