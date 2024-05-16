import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setNextHoliday] =
        useState<Holidays>("New Year's Day");
    const [currentEmoji, setNextEmoji] = useState<HolidayEmoji>("🎆");
    type Holidays =
        | "New Year's Day"
        | "Valentine's Day"
        | "Labor Day"
        | "Christmas"
        | "Thanksgiving";

    type HolidayEmoji = "🎆" | "💝" | "🪑" | "🦃" | "🎁";

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

    const wordToEmoji: Record<Holidays, HolidayEmoji> = {
        Christmas: "🎁",
        "Labor Day": "🪑",
        "New Year's Day": "🎆",
        Thanksgiving: "🦃",
        "Valentine's Day": "💝"
    };

    function nextAlpha(): void {
        const newHoliday = changeAlpha[currentHoliday];
        setNextHoliday(newHoliday);
        rotateHoliday();
    }

    function nextChrono(): void {
        const newHoliday = changeChrono[currentHoliday];
        setNextHoliday(newHoliday);
        rotateHoliday();
    }

    function rotateHoliday(): void {
        setNextEmoji(wordToEmoji[currentHoliday]);
    }

    return (
        <div>
            <div>
                <Button onClick={nextAlpha}>Advance by Alphabet</Button>
                <Button onClick={nextChrono}>Advance by Year</Button>
            </div>
            <span>Holiday: {currentEmoji}</span>
        </div>
    );
}
