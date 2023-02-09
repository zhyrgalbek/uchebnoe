import React from 'react'
import line from '../assets/podelitsya/line.svg'
import whatsapp from '../assets/podelitsya/whatsapp.svg'
// import telegram from '../assets/podelitsya/telegram.svg'
import instagram from '../assets/podelitsya/instagram.svg'
import gmail_logo from '../assets/podelitsya/gmail_logo.svg'
import sms from '../assets/podelitsya/sms.png'
import copy from '../assets/podelitsya/copy.png'




function Podelitsya() {
    return (
        <div className="w-100" style={{}}>
            {/* <div className="line text-center">
                <img src={line} alt="" />
            </div> */}
            <p className="share">
                Поделиться
            </p>
            <div className="d-flex  carousel__custom row-cols-3 row-cols-sm-4 row-cols-md-5  border-bottom mb-3">
                <div className="col-1 mx-2">
                    <div className="text-center p-1 rounded-pill fs-2 mb-1">
                        <img src={whatsapp} height="55" />
                    </div>
                    <p className="text-center podelitsya_text">WhatsApp</p>
                </div>
                {/* <div className="col-1 mx-2">
                    <div className=" text-center p-1 rounded-pill fs-2 mb-3">
                        <img src={telegram} height="35" />
                    </div>
                    <p className="text-center ">Telegram</p>
                </div> */}
                <div className="col-1 mx-2">
                    <div className=" text-center p-1 rounded-pill fs-2 mb-1">
                        <img src={instagram} height="55" />
                    </div>
                    <p className="text-center podelitsya_text">Instagram</p>
                </div>
                <div className="col-1 mx-2">
                    <div className=" text-center p-1 rounded-pill fs-2 mb-1">
                        <img src={gmail_logo} height="55" />
                    </div>
                    <p className="text-center podelitsya_text">Gmail</p>
                </div>
                <div className="col-1 mx-2">
                    <div className="text-center p-1 rounded-pill fs-2 mb-1">
                        <img src={sms} height="55" />
                    </div>
                    <p className="text-center podelitsya_text">Message</p>
                </div>
            </div>
            <div className="d-flex align-content-center justify-content-start ms-2">
                <img src={copy} height="50" alt="" />
                <p className="my-auto ms-2">Скопировать текст</p>
            </div>
        </div>
    )
}

export default Podelitsya