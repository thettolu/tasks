import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieOne, rollDieOne] = useState<number>(3);
    const [dieTwo, rollDieTwo] = useState<number>(5);

    function rollFirst(): void {
        rollDieOne(d6);
    }
    function rollSecond(): void {
        rollDieTwo(d6);
    }

    return (
        <div>
            <Button onClick={rollFirst}>Roll Left</Button>
            <span data-testid="left-die">{dieOne}</span>
            <div></div>
            <Button onClick={rollSecond}>Roll Right</Button>
            <span data-testid="right-die">{dieTwo}</span>
            <div></div>
            {dieOne === dieTwo ? (
                <span>You Lose...</span>
            ) : (
                <span>You Win!</span>
            )}
        </div>
    );
}
