import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const PrevBtn = () => {
    const { update_time } = useSelector(store => store.institutionsStore)
    return (
        <PrevBtnBlock>Время обновления: {update_time}</PrevBtnBlock>
    )
}

export default PrevBtn

const PrevBtnBlock = styled('div')`
    /* border: 1px solid red;  */
    position: absolute;
    top: -5px;
    left: 0px;
    color: #6A8AFF;
    @media (max-width: 992px){
        position: static;
        margin-bottom: 5px;
    }
`