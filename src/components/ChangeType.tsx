import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questType, setQuestType] = useState<QuestionType>(
        "short_answer_question"
    );
    function ChangeType(): void {
        setQuestType(
            questType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }
    return (
        <>
            <Button onClick={ChangeType}>Change Type</Button>
            <div>
                {questType === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </>
    );
}
