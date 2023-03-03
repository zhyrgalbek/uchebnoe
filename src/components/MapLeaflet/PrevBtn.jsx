import React from 'react'
import styled from 'styled-components'

const PrevBtn = () => {
    return (
        <PrevBtnBlock>Hello world</PrevBtnBlock>
    )
}

export default PrevBtn

const PrevBtnBlock = styled('div')`
    border: 1px solid red;
    position: absolute;
    top: -30px;
    left: -40px;
`