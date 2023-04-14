import { useEffect, useState } from "react"


export const ButtonFilter = ({ icon, icon2, text }) => {
    const [hover, setHover] = useState(false);
    const onChangeHover = () => {
        setHover(prev => true)
    }
    const onChangeNoHover = () => {
        setHover(prev => false)
    }
    const active = 'btn__ucheb__primary';
    const noActive = 'btn-outline-primary';
    return <button className={`btn w-100 btn-icon text-start ${noActive}`} onMouseOver={onChangeHover} onMouseOut={onChangeNoHover}>
        <img src={hover ? icon : icon2} className="icon_filter" alt="" />
        {text}
    </button>
}
