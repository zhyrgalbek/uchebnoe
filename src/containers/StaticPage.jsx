import styled from "styled-components"


import { MapLeaflet } from "../components/MapLeaflet"
import { Filter } from "../components/Filter"
import { useState } from "react"
import AnalizeCompoent from "../components/AnalizeComponent"
import SchoolComponent from "../components/SchoolComponent"
import schoolImage from '../assets/empty-classroom_elementary-school-middle-school-high-school.webp'
import { TopFilter } from "../components/TopFilter" 


export const StaticPage = () => {
    
    return <StaticBlock>
        <StaticHeader>
            Статистические данные по учебным заведениям кыргызской республики
        </StaticHeader>
        <MapHeader>Тепловая карта Кыргызстана</MapHeader>
        <MapFilterHeader>Классификация учебных заведений</MapFilterHeader>
        <TopFilter />
        <Map>
            <MapCont>
                <MapLeaflet />
            </MapCont>
        </Map>
        <Filter />
        <SchoolComponent imageSchool={schoolImage} />
        <AnalizeCompoent />
    </StaticBlock>
}



const MapCont = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @media screen and (max-width: 600px){
        left: -18px;
        right: -18px;
    }
`

const Map = styled('div')`
    /* border: 1px solid red; */
    position: relative;
    /* display: block; */
    width: 100%;
    height: 706px;
    margin: 40px 0;
    @media screen and (max-width: 600px){
        height: 360px;
    }
`

const MapFilterHeader = styled('h4')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 30px;
    @media screen and (max-width: 600px){
        font-size: 16px;
        color: #5A5A5A;
    }
`

const MapHeader = styled('h3')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 40px;
    @media screen and (max-width: 600px){
        font-size: 18px;
    }
`

const StaticHeader = styled('h2')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 130%;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 70px;
    margin-top: 70px;
    @media screen and (max-width: 600px){
        font-size: 22px;
    }
`
const StaticBlock = styled('div')`
    /* border: 1px solid red; */
`