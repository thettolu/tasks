import React, { useState } from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice, d6 } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
    // function ChangeType(): void {
    //     setQuestType(
    //         questType === "multiple_choice_question"
    //             ? "short_answer_question"
    //             : "multiple_choice_question"
    //     );
    // }

    // const [attmptNum, incAttmpt] = useState<number>(4);
    // const [quizRun, isRunning] = useState<boolean>(false);

    // function startQuiz(): void {
    //     if (attmptNum > 0) {
    //         incAttmpt(attmptNum - 1);
    //         isRunning(true);
    //     }
    // }
    // function stopQuiz(): void {
    //     isRunning(false);
    // }
    // function mulligan(): void {
    //     incAttmpt(attmptNum + 1);
    // }

    // const [dieOne, rollDieOne] = useState<number>(3);
    // const [dieTwo, rollDieTwo] = useState<number>(5);

    // function rollFirst(): void {
    //     rollDieOne(d6);
    // }
    // function rollSecond(): void {
    //     rollDieTwo(d6);
    // }

    // const [currentHoliday, setNextHoliday] =
    //     useState<Holidays>("New Year's Day");
    // type Holidays =
    //     | "New Year's Day"
    //     | "Valentine's Day"
    //     | "Labor Day"
    //     | "Christmas"
    //     | "Thanksgiving";

    // const changeAlpha: Record<Holidays, Holidays> = {
    //     "New Year's Day": "Thanksgiving",
    //     "Valentine's Day": "Christmas",
    //     "Labor Day": "New Year's Day",
    //     Christmas: "Labor Day",
    //     Thanksgiving: "Valentine's Day"
    // };

    // const changeChrono: Record<Holidays, Holidays> = {
    //     "New Year's Day": "Valentine's Day",
    //     "Valentine's Day": "Labor Day",
    //     "Labor Day": "Thanksgiving",
    //     Thanksgiving: "Christmas",
    //     Christmas: "New Year's Day"
    // };

    // function nextAlpha(): void {
    //     const newHoliday = changeAlpha[currentHoliday];
    //     setNextHoliday(newHoliday);
    // }

    // function nextChrono(): void {
    //     const newHoliday = changeChrono[currentHoliday];
    //     setNextHoliday(newHoliday);
    // }

    // return (
    //     <>
    //         <Button onClick={addOne}>{counter}</Button>
    //         <div>
    //             <Button onClick={RevealAnswer}>Reveal Answer</Button>
    //             {visible && <div>42</div>}
    //         </div>
    //         <Button onClick={ChangeType}>Change Type</Button>
    //         <div>
    //             {questType === "short_answer_question" ? (
    //                 <span>Short Answer</span>
    //             ) : (
    //                 <span>Multiple Choice</span>
    //             )}
    //         </div>
    //         <Button onClick={startQuiz} disabled={quizRun || attmptNum === 0}>
    //             Start Quiz
    //         </Button>

    //         <div></div>
    //         <Button onClick={stopQuiz} disabled={!quizRun}>
    //             Stop Quiz
    //         </Button>
    //         <div>
    //             <Button onClick={mulligan} disabled={quizRun}>
    //                 Mulligan
    //             </Button>
    //         </div>
    //         <div>
    //             <Button onClick={rollFirst}>Roll Left</Button>
    //             <span data-testid="left-die">{dieOne}</span>
    //             <div></div>
    //             <Button onClick={rollSecond}>Roll Right</Button>
    //             <span data-testid="right-die">{dieTwo}</span>
    //             <div></div>
    //             {dieOne === dieTwo ? (
    //                 <span>You Lose...</span>
    //             ) : (
    //                 <span>You Win!</span>
    //             )}
    //         </div>
    //         <div>
    //             <Button onClick={nextAlpha}>Advance by Alphabet</Button>
    //             <Button onClick={nextChrono}>Advance by Year</Button>
    //         </div>
    //         <div></div>
    //         <span>
    //             Holiday:{" "}
    //             {currentHoliday === "New Year's Day"
    //                 ? "🎆"
    //                 : currentHoliday === "Valentine's Day"
    //                 ? "💝"
    //                 : currentHoliday === "Labor Day"
    //                 ? "🪑"
    //                 : currentHoliday === "Thanksgiving"
    //                 ? "🦃"
    //                 : "🎁"}
    //         </span>
    //     </>
    //);

    //     <>
    //         <>
    //             <>
    //                 <>
    //                     <>
    //                         <>
    //                             <>
    //                                 <>
    //                                     <></>
    //                                     <div className="App">
    //                                         <header className="App-header">
    //                                             UD CISC275 with React Hooks and
    //                                             TypeScript - Hello world -
    //                                             Created by Tolu Akin
    //                                         </header>
    //                                         <p>
    //                                             Edit <code>src/App.tsx</code>{" "}
    //                                             and save. This page will
    //                                             automatically reload.
    //                                         </p>
    //                                     </div>
    //                                     <div>
    //                                         <Button
    //                                             onClick={() =>
    //                                                 console.log("Hello World!")
    //                                             }
    //                                         >
    //                                             Log Hello World
    //                                         </Button>
    //                                     </div>
    //                                 </>
    //                                 <>
    //                                     <p>
    //                                         This is just a paragraph of text. It
    //                                         can go onto multiple lines, if you
    //                                         want.
    //                                     </p>
    //                                 </>
    //                             </>
    //                             <>
    //                                 <div>
    //                                     <h1>Hello World</h1>
    //                                     <p>How are you doing today?</p>
    //                                 </div>
    //                             </>
    //                         </>
    //                         <div>
    //                             List:
    //                             <ul>
    //                                 <li>item 1</li>
    //                                 <li>item 2</li>
    //                                 <li>item 3</li>
    //                             </ul>
    //                         </div>
    //                     </>
    //                     <div>
    //                         <img src="verse.jpg" alt="cool bg" />
    //                     </div>
    //                 </>
    //                 <div style={{ border: "1px solid blue", padding: "4px" }}>
    //                     this will be surrounded by a border and padding.
    //                 </div>
    //             </>
    //             <div>
    //                 This is <span style={{ color: "red" }}>colored text</span>.
    //             </div>
    //         </>
    //         <div>
    //             <Container>
    //                 <Row>
    //                     <Col>
    //                         <div
    //                             style={{
    //                                 width: "40px",
    //                                 height: "80px",
    //                                 backgroundColor: "#FF1818"
    //                             }}
    //                         ></div>
    //                         First column.
    //                     </Col>
    //                     <Col>
    //                         <div
    //                             style={{
    //                                 width: "40px",
    //                                 height: "80px",
    //                                 backgroundColor: "#FF4848"
    //                             }}
    //                         ></div>
    //                         Second column.
    //                     </Col>
    //                 </Row>
    //             </Container>
    //         </div>
    //     </>
    // );
}

export default App;
