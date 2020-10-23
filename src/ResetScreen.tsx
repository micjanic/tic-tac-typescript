import React, { FC } from "react"
import { Winner } from "./Board"

type ResetScreenProps = {
    winner: Winner
    onReset(): void
}

//use FC when you want to use children
export const ResetScreen: FC = ({ winner, onReset }) => {
    return (
        <>
            <h2>{winner} is a winner</h2>
            <button onClick={onReset}>Restart</button>
        </>
    )
}
