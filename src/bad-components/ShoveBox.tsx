import React, { useState } from "react";
import { Button } from "react-bootstrap";

// function ShoveBoxButton({
//     position,
//     setPosition
// }: {
//     position: number;
//     setPosition: (newPosition: number) => void;
// }) {
//     return (<div>
//         <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
// <div
//             data-testid="moveable-box"
//             style={{
//                 width: "50px",
//                 height: "50px",
//                 backgroundColor: "lightblue",
//                 border: "1px solid blue",
//                 display: "inline-block",
//                 verticalAlign: "bottom",
//                 marginLeft: position + "px"
//             }}
//         ></div>

//     </div>);
// }

// function MoveableBox(): JSX.Element {
//     const [position, setPosition] = useState<number>(10);
//     return (
//         <div
//             data-testid="moveable-box"
//             style={{
//                 width: "50px",
//                 height: "50px",
//                 backgroundColor: "lightblue",
//                 border: "1px solid blue",
//                 display: "inline-block",
//                 verticalAlign: "bottom",
//                 marginLeft: position + "px"
//             }}
//         ></div>
//     );
// }

export function ShoveBox(): JSX.Element {
    // const box = MoveableBox();
    const [position, setPosition] = useState<number>(10);
    <div
        data-testid="moveable-box"
        style={{
            width: "50px",
            height: "50px",
            backgroundColor: "lightblue",
            border: "1px solid blue",
            display: "inline-block",
            verticalAlign: "bottom",
            marginLeft: position + "px"
        }}
    ></div>;

    // function ShoveBoxButton({
    //     position,
    //     setPosition
    // }: {
    //     position: number;
    //     setPosition: (newPosition: number) => void;
    // });
    return (
        <div>
            <Button onClick={() => setPosition(4 + position)}>
                Shove the Box
            </Button>
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: position + "px"
                }}
            ></div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <Button
                    onClick={() => setPosition(4 + position)}
                    // position={box.position}
                    // setPosition={box.setPosition}
                >
                    Shaove the Box
                </Button>
                {/* {box} */}

            </div>
        </div>
    );
}
