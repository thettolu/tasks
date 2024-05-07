import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

export function ColoredBox(): JSX.Element {
    const colorLoop: Record<string, string> = {
        red: "blue",
        blue: "green",
        green: "red"
    };

    const [currentColor, setCurrentColor] = useState<string>(
        COLORS[DEFAULT_COLOR_INDEX]
    );
    // const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    function cycleColor(currentIndex: string): void {
        setCurrentColor(colorLoop[currentIndex]);
    }

    return (
        <div>
            <Button onClick={() => cycleColor(currentColor)}>Next Color</Button>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: currentColor,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>

            <div>
                <h3>Colored Box</h3>
                <span>The current color is: {currentColor}</span>
                {/* <div>
                    <ChangeColor></ChangeColor>
                    <ColorPreview></ColorPreview>
                </div> */}
            </div>
        </div>
    );
}

// function ColorPreview(): JSX.Element {
//     return (
//         <div
//             data-testid="colored-box"
//             style={{
//                 width: "50px",
//                 height: "50px",
//                 backgroundColor: COLORS[DEFAULT_COLOR_INDEX],
//                 display: "inline-block",
//                 verticalAlign: "bottom",
//                 marginLeft: "5px"
//             }}
//         ></div>
//     );
// }

// export function ColoredBox(): JSX.Element {
//     return (
//         <div>
//             <h3>Colored Box</h3>
//             <span>The current color is: {currentColor}</span>
//             <div>
//                 <ChangeColor></ChangeColor>
//                 <ColorPreview></ColorPreview>
//             </div>
//         </div>
//     );
// }
