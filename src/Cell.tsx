import React from "react"
import styled from "styled-components"

const CellWrapper = styled.button`
    background-color: #fff;
    margin-bottom: -1px;
    border: 0;
    outline: none;
    cursor: pointer;
`

export type CellValue = "x" | "o" | undefined

type CellProps = {
    value: CellValue
    toggle(index: number): void
    index: number
}

export const Cell: React.FC<CellProps> = ({ value, toggle, index }) => {
    return (
        <CellWrapper
            onClick={() => {
                toggle(index)
            }}
        >
            {value == "o" ? "O" : value ? "X" : null}
        </CellWrapper>
    )
}
