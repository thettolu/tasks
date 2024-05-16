import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setNextHoliday] =
        useState<Holidays>("New Year's Day");
    type Holidays =
        | "New Year's Day"
        | "Valentine's Day"
        | "Labor Day"
        | "Christmas"
        | "Thanksgiving";

    const changeAlpha: Record<Holidays, Holidays> = {
        "New Year's Day": "Thanksgiving",
        "Valentine's Day": "Christmas",
        "Labor Day": "New Year's Day",
        Christmas: "Labor Day",
        Thanksgiving: "Valentine's Day"
    };

    const changeChrono: Record<Holidays, Holidays> = {
        "New Year's Day": "Valentine's Day",
        "Valentine's Day": "Labor Day",
        "Labor Day": "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "New Year's Day"
    };

    function nextAlpha(): void {
        const newHoliday = changeAlpha[currentHoliday];
        setNextHoliday(newHoliday);
    }

    function nextChrono(): void {
        const newHoliday = changeChrono[currentHoliday];
        setNextHoliday(newHoliday);
    }

    function rotateHoliday(): string {
        // inputHoliday === "New Year's Day"
        //                     ? "🎆"
        //                     : outputHoliday = "Valentine's Day"
        //                     ? "💝"
        //                     : outputHoliday = "Labor Day"
        //                     ? "🪑"
        //                     : outputHoliday = "Thanksgiving"
        //                     ? "🦃"
        //                     : "🎁"

        let outputHoliday = "";
        if (currentHoliday === "New Year's Day") {
            const outputHoliday = "🎆";
        } else if (currentHoliday === "Valentine's Day") {
            const outputHoliday = "💝";
        } else if (currentHoliday === "Labor Day") {
            const outputHoliday = "🪑";
        } else if (currentHoliday === "Thanksgiving") {
            const outputHoliday = "🦃";
        } else {
            const outputHoliday = "🎁";
        }
        return outputHoliday;
    }

    return (
        <div>
            <div>
                <Button onClick={nextAlpha}>Advance by Alphabet</Button>
                <Button onClick={nextChrono}>Advance by Year</Button>
            </div>
            <span>Holiday: {rotateHoliday()}</span>
        </div>
    );
}
