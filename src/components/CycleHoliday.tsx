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

    return (
        <>
            <>
                <Button onClick={nextAlpha}>Advance by Alphabet</Button>
                <Button onClick={nextChrono}>Advance by Year</Button>
            </>
            <span>
                Holiday:{" "}
                {
                currentHoliday === "New Year's Day"
                    ? "🎆"
                    : currentHoliday === "Valentine's Day"
                        ? "💝"
                        : currentHoliday === "Labor Day"
                            ? "🪑"
                            : currentHoliday === "Thanksgiving"
                                ? "🦃"
                                : "🎁"
                                }
            </span>
        </>
    );
}
