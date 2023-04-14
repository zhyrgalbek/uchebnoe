import React, { useState } from 'react'
import line from '../assets/podelitsya/line.svg'
import whatsapp from '../assets/podelitsya/whatsapp.svg'
import instagram from '../assets/podelitsya/instagram.svg'
import gmail_logo from '../assets/podelitsya/gmail_logo.svg'
import sms from '../assets/podelitsya/sms.png'
import copy from '../assets/podelitsya/copy.png'
import Slider from "react-slick";
import { Paper } from '@mui/material'
import styled from 'styled-components'
import prev from '../assets/Carousel/prev.svg'



function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Next onClick={onClick}>
            <i className='icon-chevron-thin-left'></i>
        </Next>
    );
}

const Next = styled('div')`
    position: absolute;
    top: 50%;
    left: -40px;
    transform: translateY(-50%);
    /* border: 1px solid red; */
    /* width: 40px; */
    /* height: 40px; */
    border-radius: 50%;
    color: #000;
    font-size: 1rem;
    padding: 10px;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Right onClick={onClick}>
            <i className='icon-chevron-thin-right'></i>
        </Right>
    );
}

const Right = styled(Next)`
    left: auto;
    right: -40px;
`


export const SimpleSlider = ({ children }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div style={{ width: '350px' }}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

function Podelitsya() {
    const [copy, setCopy] = useState(false);
    const onClickCopy = () => {
        setCopy(true)
    }
    const onClickBufer = () => {
        navigator.clipboard.writeText('http://check.edu.gov.kg')
            .then(() => {
                setCopy(true)
            })
            .catch(err => {
                console.log('Something went wrong', err);
            });
    }
    return (
        <div className="w-100" style={{}}>
            {/* <div className="line text-center">
                <img src={line} alt="" />
            </div> */}
            <p className="share">
                Поделиться
            </p>
            <div className="d-flex carousel__custom row-cols-3 row-cols-sm-4 row-cols-md-5 border-bottom mb-3">
                <SimpleSlider>
                    <div className="">
                        <div className="text-center p-1 pt-4 rounded-pill fs-2 mb-1">
                            <a href="https://wa.me/" className='icon-socset whatsapp' target="newframe"><i className='icon-whatsapp'></i></a>
                        </div>
                        <p className="text-center podelitsya_text">WhatsApp</p>
                    </div>
                    <div className="">
                        <div className=" text-center p-1 pt-4 rounded-pill fs-2 mb-1">
                            <a href="https://www.facebook.com/" className='icon-socset facebook' target="newframe"><i className='icon-facebook'></i></a>
                        </div>
                        <p className="text-center podelitsya_text">Facebook</p>
                    </div>
                    <div className="">
                        <div className=" text-center p-1 pt-4 rounded-pill fs-2 mb-1">
                            <a href="#" className='icon-socset twitter'><i className='icon-twitter'></i></a>
                        </div>
                        <p className="text-center podelitsya_text">Twitter</p>
                    </div>
                    <div className="">
                        <div className="text-center p-1 pt-4 rounded-pill fs-2 mb-1">
                            <a href="#" className='icon-socset instagram'><i className='icon-instagram'></i></a>
                        </div>
                        <p className="text-center podelitsya_text">Instagram</p>
                    </div>
                    <div className="">
                        <div className="text-center p-1 pt-4 rounded-pill fs-2 mb-1">
                            <a href="#" className='icon-socset telegram'><i className='icon-message-typing'></i></a>
                        </div>
                        <p className="text-center podelitsya_text">Telegram</p>
                    </div>
                </SimpleSlider>
            </div>
            <div className="d-flex align-content-center justify-content-start ms-2" onClick={onClickBufer}>
                <a href="#" className={`icon-copy ${copy && 'hover'}`}><i className='icon-content_copy'></i></a>
                <p className="my-auto ms-2 copy-text">Скопировать ссылку</p>
            </div>
        </div>
    )
}

export default Podelitsya