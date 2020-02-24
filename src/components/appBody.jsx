import React, { Component } from "react";
import styled from "styled-components";
import Letters from "./letters";
import Answer from "./answer";
import Kitty from "./kitty";
import RetryGame from "./retryGame";

const LoadingBlend = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(#fff, 0.8);
    color: black;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class appBody extends Component {
    state = {
        loss: 0,
        chances: 6,
        result: {},
        win: false,
        endGame: false,
        isLoading: false
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
            .then(res => res.json())
            .then(res =>
                this.setState({ result: res.message, isLoading: false })
            );
    }

    checkLetter = e => {
        e.preventDefault();

        let chosenLetter = e.target,
            answer = Array.from(this.state.result),
            hangman = document.getElementsByClassName("hangmanBodyPart"),
            hangmanVisible = document.getElementsByClassName(
                "hangmanBodyPart -shown"
            ).length,
            hangmanLength = hangman.length;

        console.log(answer);

        chosenLetter.classList.add("-disabled");

        if (this.state.chances > 1) {
            let shot = answer.filter(e => {
                return e.toLowerCase() == chosenLetter.text;
            });

            if (shot.length >= 1) {
                for (let i = 0; i < shot.length; i++) {
                    document
                        .getElementsByClassName(
                            `answerSingleSpacer -${shot[0].toLowerCase()}`
                        )
                        [i].classList.add("-shown");
                }
            } else {
                hangman[this.state.loss].classList.add("-shown");
                let loss = this.state.loss + 1;
                let chances = this.state.chances - 1;
                this.setState({ loss: loss, chances: chances });
            }
        } else {
            this.setState({ chances: 0 });
            hangman[hangmanLength - 1].classList.add("-shown");
            console.log("game over");
            this.setState({ endGame: true });
        }

        let guessedAnswers = document.getElementsByClassName(
            "answerSingleSpacer -shown"
        ).length;

        console.log(guessedAnswers);
        console.log(answer);
        console.log(answer.length);

        const alphaNumeric = Array.from(
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        );

        let alphaAnswer = answer.filter(e => alphaNumeric.indexOf(e) > -1);
        console.log(alphaAnswer);

        if (guessedAnswers == alphaAnswer.length) {
            console.log("good job!");
            this.setState({ endGame: true, win: true });
        }
    };
    render() {
        console.log(this.state.result);
        if (this.state.isLoading) {
            return <LoadingBlend>Loading ...</LoadingBlend>;
        }
        return (
            <div>
                <div className="container">
                    <div className="text-right mt-3">
                        <h4>
                            Chances:{" "}
                            <b style={{ color: "lightpink" }}>
                                {this.state.chances}
                            </b>
                        </h4>
                    </div>
                    <h1 className="text-center my-5 pb-5">Hangman</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <Kitty />
                        </div>
                        <div className="col-sm-6">
                            <h2 className="text-center">Choose the letter</h2>
                            <Letters checkLetter={this.checkLetter} />
                        </div>
                    </div>
                    <div>
                        <Answer answersList={this.state.result} />
                    </div>
                </div>
                {this.state.endGame ? <RetryGame win={this.state.win} /> : null}
            </div>
        );
    }
}

export default appBody;
