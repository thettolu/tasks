import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attmptNum, incAttmpt] = useState<number>(4);
    const [quizRun, isRunning] = useState<boolean>(false);

    function startQuiz(): void {
        if (attmptNum > 0) {
            incAttmpt(attmptNum - 1);
            isRunning(true);
        }
    }
    function stopQuiz(): void {
        isRunning(false);
    }
    function mulligan(): void {
        incAttmpt(attmptNum + 1);
    }

    return (
        <>
            <div>{/* Number of attempts: attemptNum */}</div>
            <Button onClick={startQuiz} disabled={quizRun || attmptNum === 0}>
                Start Quiz
            </Button>
            <div></div>
            <Button onClick={stopQuiz} disabled={!quizRun}>
                Stop Quiz
            </Button>
            <div>
                <Button onClick={mulligan} disabled={quizRun}>
                    Mulligan
                </Button>
            </div>
        </>
    );
}
