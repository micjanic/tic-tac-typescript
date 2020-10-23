import React, { useState } from "react"
//import logo from './logo.svg';
import "./App.css"
import styled from "styled-components"
import { Board, Winner } from "./Board"
import { StartScreen } from "./StartScreen"
import { ResetScreen } from "./ResetScreen"

const BoardWrapper = styled.div`
    background: #fff;
    width: 500px;
    height: 500px;
    border-radius: 16px;
    box-shadow: -6px 10px 30px 4px #00000033;
    border: 20px solid #fff;
`

type GameState = "start" | "game" | "reset"

function App() {
    const [winner, setWinner] = useState<Winner>()
    const [gameState, setGameState] = useState<GameState>("start")

    const onStart = () => {
        setGameState("game")
    }

    const onGameEnd = (winner: Winner) => {
        setWinner(winner)
        setGameState("reset")
    }

    const onReset = () => {
        setWinner(undefined)
        setGameState("game")
    }

    return (
        <BoardWrapper>
            {
                {
                    start: <StartScreen onStart={onStart} />,
                    game: <Board onGameEnd={onGameEnd} />,
                    reset: <ResetScreen winner={winner} onReset={onReset} />,
                }[gameState]
            }
        </BoardWrapper>
    )
}

export default App
