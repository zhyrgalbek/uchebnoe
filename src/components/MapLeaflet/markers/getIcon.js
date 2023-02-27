import L from 'leaflet'

function getColor(percent) {
    if (!percent) {
        return '#279279';
    }
    let percentInt = parseInt(percent);
    if (percentInt >= 0 && percentInt < 20) {
        return '#279279'
    }
    if (percentInt >= 20 && percentInt < 40) {
        return '#56BF94';
    }
    if (percentInt >= 40 && percentInt < 60) {
        return '#FFCC4A';
    }
    if (percentInt >= 60 && percentInt < 80) {
        return '#FF9D29';
    }
    if (percentInt >= 80 && percentInt < 100) {
        return '#FF504C';
    }
    return '#279279';
}


export function getIcon(id, percent) {
    if (id === '1') {
        return new L.divIcon({
            html: `<svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="14.5" fill="${getColor(percent)}" stroke="white"/>
                <path d="M20.5321 20.467V16.4412C20.5261 15.8369 20.2802 15.2597 19.8487 14.8366C19.4172 14.4135 18.8353 14.1791 18.231 14.185H14.9305C14.5798 14.1838 14.2333 14.2624 13.9174 14.4149C13.6014 14.5673 13.3243 14.7896 13.107 15.065" stroke="white" stroke-miterlimit="10"/>
                <path d="M15.3385 17.2775C15.2684 16.6906 14.9856 16.1497 14.5435 15.7573C14.1014 15.3649 13.5308 15.1483 12.9397 15.1483H11.0323C10.3917 15.1483 9.77734 15.4028 9.32435 15.8558C8.87137 16.3088 8.61688 16.9232 8.61688 17.5638V20.467" stroke="white" stroke-miterlimit="10"/>
                <path d="M8.64307 17.2775C8.71312 16.6906 8.99598 16.1497 9.43807 15.7573C9.88015 15.3649 10.4508 15.1483 11.0419 15.1483H12.9492C13.5898 15.1483 14.2042 15.4028 14.6572 15.8558C15.1102 16.3088 15.3647 16.9232 15.3647 17.5638V20.467" stroke="white" stroke-miterlimit="10"/>
                <path d="M11.8173 13.5022C10.9279 13.5022 10.207 12.7813 10.207 11.8919C10.207 11.0026 10.9279 10.2816 11.8173 10.2816C12.7067 10.2816 13.4276 11.0026 13.4276 11.8919C13.4276 12.7813 12.7067 13.5022 11.8173 13.5022Z" stroke="white" stroke-miterlimit="10"/>
                <path d="M17.0956 12.7866C15.9592 12.7866 15.038 11.8653 15.038 10.7289C15.038 9.59255 15.9592 8.67133 17.0956 8.67133C18.232 8.67133 19.1532 9.59255 19.1532 10.7289C19.1532 11.8653 18.232 12.7866 17.0956 12.7866Z" stroke="white" stroke-miterlimit="10"/>
                <path d="M20.8903 12.8148C21.4827 13.4088 22.548 13.3188 22.548 13.3188C22.548 13.3188 22.6359 12.2525 22.0435 11.6584C21.451 11.0644 20.3877 11.1524 20.3877 11.1524C20.3877 11.1524 20.2982 12.2188 20.8903 12.8148Z" fill="white"/>
                </svg>`,
            iconAnchor: null,
            // popupAnchor: null,
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
            // iconSize: new L.Point(60, 75),
            iconSize: [24, 40],
            className: 'leaflet-div-icon'
        });
    }
    if (id === '2') {
        return new L.divIcon({
            html: `<svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14.5" fill="${getColor(percent)}" stroke="white"/>
            <path d="M9.66671 14.3333H9.00004C8.63337 14.3333 8.33337 14.0333 8.33337 13.6667V11.4533C8.33337 11.2067 8.52004 10.9267 8.75338 10.8333L14.7534 8.43334C14.8867 8.38001 15.1134 8.38001 15.2467 8.43334L21.2467 10.8333C21.48 10.9267 21.6667 11.2067 21.6667 11.4533V13.6667C21.6667 14.0333 21.3667 14.3333 21 14.3333H20.3334" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.6667 21.6667H8.33337V20.1667C8.33337 19.8917 8.63337 19.6667 9.00004 19.6667H21C21.3667 19.6667 21.6667 19.8917 21.6667 20.1667V21.6667Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.66663 19.6667V14.3333" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.3334 19.6667V14.3333" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.66663 21.6667H22.3333" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <g clip-path="url(#clip0_18_546)">
            <path d="M11.6666 12H13.6666C14.0202 12 14.3594 12.1405 14.6094 12.3905C14.8595 12.6406 15 12.9797 15 13.3333V18C15 17.7348 14.8946 17.4804 14.7071 17.2929C14.5195 17.1054 14.2652 17 14 17H11.6666V12Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.3333 12H16.3333C15.9797 12 15.6406 12.1405 15.3905 12.3905C15.1405 12.6406 15 12.9797 15 13.3333V18C15 17.7348 15.1054 17.4804 15.2929 17.2929C15.4804 17.1054 15.7348 17 16 17H18.3333V12Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_18_546">
            <rect width="8" height="8" fill="white" transform="translate(11 11)"/>
            </clipPath>
            </defs>
            </svg>
            `,
            iconAnchor: null,
            // popupAnchor: null,
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
            // iconSize: new L.Point(60, 75),
            iconSize: [24, 40],
            className: 'leaflet-div-icon'
        });
    }
    if (id === '3') {
        return new L.divIcon({
            html: `<svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14.5" fill="${getColor(percent)}" stroke="white"/>
            <path d="M12.7185 22.5907L20.0852 22.5907" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.6082 22.5971H9.15208C8.38582 22.5971 8 22.266 8 21.6085V16.2289C8 15.5714 8.38582 15.2404 9.15208 15.2404H11.4562C12.2225 15.2404 12.6082 15.5714 12.6082 16.2289V17.0795" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.0914 22.5844L12.6145 22.5971L12.6083 13.1159C12.6083 12.6907 12.8201 12.2972 13.1628 12.0624L15.6551 10.368C16.0726 10.0824 16.6209 10.0824 17.0383 10.368L19.5307 12.0624C19.8796 12.2972 20.0852 12.6907 20.0852 13.1159L20.0914 22.5844Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.3467 22.5907V20.2109" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.68103 19.4177L10.9272 19.4177" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.68103 17.8041L10.9272 17.8041" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.6083 17.5138H20.0852" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.3467 15.2927C16.8629 15.2927 17.2813 14.8665 17.2813 14.3407C17.2813 13.815 16.8629 13.3888 16.3467 13.3888C15.8306 13.3888 15.4121 13.815 15.4121 14.3407C15.4121 14.8665 15.8306 15.2927 16.3467 15.2927Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.3467 8.07693V10.1539" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.3467 6C17.4544 6.44308 18.7005 6.44308 19.8082 6V8.07692C18.7005 8.52 17.4544 8.52 16.3467 8.07692V6Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
            iconAnchor: null,
            // popupAnchor: null,
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
            // iconSize: new L.Point(60, 75),
            iconSize: [24, 40],
            className: 'leaflet-div-icon'
        });
    }
    if (id === '4') {
        return new L.divIcon({
            html: `<svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14.5" fill="${getColor(percent)}" stroke="white"/>
            <path d="M11.4 20.7839H8.07181C7.33393 20.7839 6.9624 20.4651 6.9624 19.8319V14.6516C6.9624 14.0184 7.33393 13.6996 8.07181 13.6996H10.2906C11.0285 13.6996 11.4 14.0184 11.4 14.6516V15.4707" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.5061 20.7778L18.6 20.7778" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.606 20.7717L11.406 20.7839L11.4 11.6539C11.4 11.2444 11.604 10.8655 11.934 10.6394L14.334 9.00776C14.736 8.73276 15.264 8.73276 15.666 9.00776L18.066 10.6394C18.402 10.8655 18.6 11.2444 18.6 11.6539L18.606 20.7717Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.4 15.8889H18.6" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 20.7778V18.4861" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 13.75C15.497 13.75 15.9 13.3396 15.9 12.8334C15.9 12.3271 15.497 11.9167 15 11.9167C14.5029 11.9167 14.1 12.3271 14.1 12.8334C14.1 13.3396 14.5029 13.75 15 13.75Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.606 20.7839H21.9342C22.672 20.7839 23.0436 20.4651 23.0436 19.8319V14.6516C23.0436 14.0184 22.672 13.6996 21.9342 13.6996H19.7154C18.9775 13.6996 18.606 14.0184 18.606 14.6516V15.4707" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.3022 17.7222L21.5022 17.7222" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.58118 17.7222L9.78118 17.7222" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.3022 16.1685L21.5022 16.1685" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.58118 16.1685L9.78118 16.1685" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.0031 6.80151V8.80151" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.0031 4.80151C16.0697 5.22818 17.2697 5.22818 18.3364 4.80151V6.80151C17.2697 7.22818 16.0697 7.22818 15.0031 6.80151V4.80151Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
            iconAnchor: null,
            // popupAnchor: null,
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
            // iconSize: new L.Point(60, 75),
            iconSize: [24, 40],
            className: 'leaflet-div-icon'
        });
    }
    if (id === '6') {
        return new L.divIcon({
            html: `<svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14.5" fill="${getColor(percent)}" stroke="white"/>
            <path d="M15.2467 8.43337L21.2467 10.8334C21.48 10.9267 21.6667 11.2067 21.6667 11.4534V13.6667C21.6667 14.0334 21.3667 14.3334 21 14.3334H9.00004C8.63337 14.3334 8.33337 14.0334 8.33337 13.6667V11.4534C8.33337 11.2067 8.52004 10.9267 8.75338 10.8334L14.7534 8.43337C14.8867 8.38004 15.1134 8.38004 15.2467 8.43337Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.6667 21.6667H8.33337V19.6667C8.33337 19.3 8.63337 19 9.00004 19H21C21.3667 19 21.6667 19.3 21.6667 19.6667V21.6667Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.66663 19V14.3333" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.3334 19V14.3333" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 19V14.3333" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.6666 19V14.3333" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.3334 19V14.3333" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.66663 21.6667H22.3333" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 12.6667C15.5523 12.6667 16 12.219 16 11.6667C16 11.1144 15.5523 10.6667 15 10.6667C14.4477 10.6667 14 11.1144 14 11.6667C14 12.219 14.4477 12.6667 15 12.6667Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
            iconAnchor: null,
            // popupAnchor: null,
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
            // iconSize: new L.Point(60, 75),
            iconSize: [24, 40],
            className: 'leaflet-div-icon'
        });
    }
    return new L.divIcon({
        html: `<svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="14.5" fill="${getColor(percent)}" stroke="white"/>
        <path d="M9.66671 14.3333H9.00004C8.63337 14.3333 8.33337 14.0333 8.33337 13.6667V11.4533C8.33337 11.2067 8.52004 10.9267 8.75338 10.8333L14.7534 8.43334C14.8867 8.38001 15.1134 8.38001 15.2467 8.43334L21.2467 10.8333C21.48 10.9267 21.6667 11.2067 21.6667 11.4533V13.6667C21.6667 14.0333 21.3667 14.3333 21 14.3333H20.3334" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.6667 21.6667H8.33337V20.1667C8.33337 19.8917 8.63337 19.6667 9.00004 19.6667H21C21.3667 19.6667 21.6667 19.8917 21.6667 20.1667V21.6667Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.66663 19.6667V14.3333" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.3334 19.6667V14.3333" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.66663 21.6667H22.3333" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.498 15.7228C14.4778 15.7228 14.4613 15.7064 14.4613 15.6861C14.4654 15.2964 14.5062 14.9862 14.5837 14.7557C14.6613 14.5251 14.7714 14.3384 14.9143 14.1956C15.0571 14.0528 15.2285 13.9212 15.4284 13.8008C15.5488 13.7274 15.6569 13.6407 15.7528 13.5407C15.8487 13.4387 15.9242 13.3213 15.9793 13.1887C16.0364 13.0561 16.065 12.9092 16.065 12.748C16.065 12.5481 16.0181 12.3746 15.9242 12.2277C15.8304 12.0808 15.7049 11.9676 15.5478 11.888C15.3907 11.8084 15.2162 11.7687 15.0244 11.7687C14.8571 11.7687 14.696 11.8033 14.5409 11.8727C14.3858 11.9421 14.2563 12.0512 14.1522 12.2002C14.1055 12.267 14.0676 12.3431 14.0386 12.4285C13.9727 12.6222 13.8127 12.7847 13.6081 12.7847C13.3861 12.7847 13.2038 12.5971 13.2579 12.3818C13.3031 12.2019 13.3737 12.0394 13.4697 11.8941C13.635 11.6473 13.8523 11.4585 14.1216 11.328C14.393 11.1974 14.6939 11.1321 15.0244 11.1321C15.3835 11.1321 15.6957 11.2035 15.961 11.3463C16.2282 11.4891 16.4343 11.685 16.5792 11.9339C16.7261 12.1828 16.7995 12.4665 16.7995 12.7847C16.7995 13.0092 16.7648 13.2122 16.6955 13.3938C16.6281 13.5754 16.5302 13.7376 16.4017 13.8804C16.2752 14.0232 16.1221 14.1497 15.9426 14.2599C15.763 14.3721 15.6192 14.4904 15.5111 14.6149C15.4029 14.7373 15.3244 14.8832 15.2754 15.0526C15.2264 15.2219 15.1999 15.4331 15.1958 15.6861C15.1958 15.7064 15.1794 15.7228 15.1591 15.7228H14.498ZM14.8531 17.5346C14.7021 17.5346 14.5725 17.4805 14.4644 17.3724C14.3562 17.2643 14.3022 17.1347 14.3022 16.9837C14.3022 16.8327 14.3562 16.7032 14.4644 16.595C14.5725 16.4869 14.7021 16.4328 14.8531 16.4328C15.004 16.4328 15.1336 16.4869 15.2417 16.595C15.3499 16.7032 15.4039 16.8327 15.4039 16.9837C15.4039 17.0837 15.3784 17.1755 15.3274 17.2592C15.2785 17.3428 15.2122 17.4101 15.1285 17.4612C15.0469 17.5101 14.9551 17.5346 14.8531 17.5346Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4613 15.6861C14.4654 15.2964 14.5062 14.9862 14.5837 14.7557C14.6613 14.5251 14.7714 14.3384 14.9143 14.1956C15.0571 14.0528 15.2285 13.9212 15.4284 13.8008C15.5488 13.7274 15.6569 13.6407 15.7528 13.5407C15.8487 13.4387 15.9242 13.3213 15.9793 13.1887C16.0364 13.0561 16.065 12.9092 16.065 12.748C16.065 12.5481 16.0181 12.3746 15.9242 12.2277C15.8304 12.0808 15.7049 11.9676 15.5478 11.888C15.3907 11.8084 15.2162 11.7687 15.0244 11.7687C14.8571 11.7687 14.696 11.8033 14.5409 11.8727C14.3858 11.9421 14.2563 12.0512 14.1522 12.2002C14.1055 12.267 14.0676 12.3431 14.0386 12.4285C13.9727 12.6222 13.8127 12.7847 13.6081 12.7847C13.3861 12.7847 13.2038 12.5971 13.2579 12.3818C13.3031 12.2019 13.3737 12.0394 13.4697 11.8941C13.635 11.6473 13.8523 11.4585 14.1216 11.328C14.393 11.1974 14.6939 11.1321 15.0244 11.1321C15.3835 11.1321 15.6957 11.2035 15.961 11.3463C16.2282 11.4891 16.4343 11.685 16.5792 11.9339C16.7261 12.1828 16.7995 12.4665 16.7995 12.7847C16.7995 13.0092 16.7648 13.2122 16.6955 13.3938C16.6281 13.5754 16.5302 13.7376 16.4017 13.8804C16.2752 14.0232 16.1221 14.1497 15.9426 14.2599C15.763 14.3721 15.6192 14.4904 15.5111 14.6149C15.4029 14.7373 15.3244 14.8832 15.2754 15.0526C15.2264 15.2219 15.1999 15.4331 15.1958 15.6861C15.1958 15.7064 15.1794 15.7228 15.1591 15.7228H14.498C14.4778 15.7228 14.4613 15.7064 14.4613 15.6861ZM15.3292 15.6875C15.3284 15.7808 15.2525 15.8561 15.1591 15.8561H14.498C14.4041 15.8561 14.328 15.78 14.328 15.6861H14.4613L14.328 15.6847C14.3321 15.2883 14.3735 14.9625 14.4574 14.7132C14.5401 14.4671 14.6599 14.2614 14.82 14.1013C14.9715 13.9499 15.1516 13.8119 15.3593 13.6868C15.4697 13.6194 15.5686 13.5401 15.6561 13.4489C15.7405 13.359 15.8072 13.2555 15.8562 13.1376L15.8568 13.136C15.906 13.0218 15.9317 12.8932 15.9317 12.748C15.9317 12.5697 15.8901 12.422 15.8119 12.2995C15.731 12.1729 15.6236 12.0759 15.4875 12.007C15.3507 11.9377 15.1972 11.902 15.0244 11.902C14.8762 11.902 14.7335 11.9326 14.5953 11.9944C14.4639 12.0532 14.3527 12.146 14.2615 12.2766C14.2227 12.3321 14.1903 12.3967 14.1648 12.4714C14.088 12.6972 13.89 12.9181 13.6081 12.9181C13.3205 12.9181 13.0485 12.6682 13.1286 12.3493C13.1772 12.1558 13.2536 11.9792 13.3585 11.8206L13.3589 11.82C13.5375 11.5533 13.773 11.3488 14.0634 11.208C14.3545 11.0679 14.6759 10.9987 15.0244 10.9987C15.4014 10.9987 15.7361 11.0738 16.0242 11.2289C16.3118 11.3827 16.5363 11.5954 16.6942 11.8665C16.8543 12.1379 16.9329 12.4452 16.9329 12.7847C16.9329 13.0227 16.8961 13.242 16.8203 13.4408C16.7472 13.6376 16.6407 13.814 16.5011 13.9692C16.3652 14.1225 16.202 14.2571 16.0128 14.3733C15.8417 14.4803 15.709 14.5903 15.6117 14.7024L15.611 14.7032C15.5169 14.8097 15.4474 14.9377 15.4035 15.0896C15.3589 15.2437 15.3332 15.442 15.3292 15.6875ZM15.1979 17.575L15.1971 17.5755C15.0933 17.6378 14.9774 17.6679 14.8531 17.6679C14.6662 17.6679 14.5029 17.5995 14.3701 17.4667C14.2373 17.3339 14.1688 17.1706 14.1688 16.9837C14.1688 16.7969 14.2373 16.6335 14.3701 16.5008C14.5029 16.368 14.6662 16.2995 14.8531 16.2995C15.0399 16.2995 15.2032 16.368 15.336 16.5008C15.4688 16.6335 15.5373 16.7969 15.5373 16.9837C15.5373 17.1073 15.5055 17.2228 15.4419 17.3276C15.3817 17.43 15.2998 17.5128 15.1979 17.575ZM15.3274 17.2592C15.3784 17.1755 15.4039 17.0837 15.4039 16.9837C15.4039 16.8327 15.3499 16.7032 15.2417 16.595C15.1336 16.4869 15.004 16.4328 14.8531 16.4328C14.7021 16.4328 14.5725 16.4869 14.4644 16.595C14.3562 16.7032 14.3022 16.8327 14.3022 16.9837C14.3022 17.1347 14.3562 17.2643 14.4644 17.3724C14.5725 17.4805 14.7021 17.5346 14.8531 17.5346C14.9551 17.5346 15.0469 17.5101 15.1285 17.4612C15.2122 17.4101 15.2785 17.3428 15.3274 17.2592Z" fill="white"/>
        </svg>
        `,
        iconAnchor: null,
        // popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        // iconSize: new L.Point(60, 75),
        iconSize: [24, 40],
        className: 'leaflet-div-icon'
    });
}