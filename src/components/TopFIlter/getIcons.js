function getColor(hover, primary) {
    const blue = '#3763FF';
    const white = '#fff';
    if (hover || primary) {
        return white;
    }
    return blue;
}

export function getIcons(icon, hover, primary) {

    if (icon === 'all') {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19.5H21" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11 12.5H21" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11 5.5H21" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 5.5L4 6.5L7 3.5" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 12.5L4 13.5L7 10.5" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 19.5L4 20.5L7 17.5" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>;
    }
    if (icon === 'average') {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.19997 22.3785H2.76242C1.77858 22.3785 1.2832 21.9535 1.2832 21.1093V14.2021C1.2832 13.3579 1.77858 12.9329 2.76242 12.9329H5.7208C6.70464 12.9329 7.19997 13.3579 7.19997 14.2021V15.2943" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.34155 22.3704L16.8 22.3704" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.808 22.3622L7.20796 22.3785L7.19995 10.2052C7.19995 9.65927 7.47196 9.15406 7.91196 8.85258L11.112 6.67704C11.648 6.31037 12.3519 6.31037 12.8879 6.67704L16.0879 8.85258C16.5359 9.15406 16.8 9.65927 16.8 10.2052L16.808 22.3622Z" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.19995 15.8519H16.8" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 22.3704V19.3148" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 13C12.6628 13 13.2 12.4528 13.2 11.7778C13.2 11.1027 12.6628 10.5555 12 10.5555C11.3373 10.5555 10.8 11.1027 10.8 11.7778C10.8 12.4528 11.3373 13 12 13Z" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.8081 22.3785H21.2456C22.2295 22.3785 22.7249 21.9535 22.7249 21.1093V14.2021C22.7249 13.3579 22.2295 12.9329 21.2456 12.9329H18.2873C17.3034 12.9329 16.8081 13.3579 16.8081 14.2021V15.2943" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.44165 18.2963L5.04165 18.2963" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.0696 16.2246L20.6696 16.2246" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.44165 16.2246L5.04165 16.2246" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.0039 3.73535V6.40202" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.0039 1.06866C13.4261 1.63755 15.0261 1.63755 16.4484 1.06866V3.73533C15.0261 4.30422 13.4261 4.30422 12.0039 3.73533V1.06866Z" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>;
    }
    if (icon === 'childrens') {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_486_623)">
                <path d="M4.5 12H10.899L14.649 7.5H20.25C20.8466 7.5006 21.4185 7.73784 21.8403 8.15967C22.2622 8.5815 22.4994 9.15345 22.5 9.75V14.25C22.4996 14.6477 22.3414 15.029 22.0602 15.3102C21.779 15.5914 21.3977 15.7496 21 15.75V21C20.9996 21.3977 20.8414 21.779 20.5602 22.0602C20.279 22.3414 19.8977 22.4996 19.5 22.5H16.5C16.1023 22.4996 15.721 22.3414 15.4398 22.0602C15.1586 21.779 15.0004 21.3977 15 21V15.75H16.5V21H19.5V14.25H21V9.75C21 9.55109 20.921 9.36032 20.7803 9.21967C20.6397 9.07902 20.4489 9 20.25 9H15.351L11.601 13.5H4.5C4.30109 13.5 4.11032 13.579 3.96967 13.7197C3.82902 13.8603 3.75 14.0511 3.75 14.25V16.5H5.25V21H7.5V16.5H9V21C8.9996 21.3977 8.84144 21.779 8.56022 22.0602C8.279 22.3414 7.8977 22.4996 7.5 22.5H5.25C4.8523 22.4996 4.471 22.3414 4.18978 22.0602C3.90856 21.779 3.7504 21.3977 3.75 21V18C3.3523 17.9996 2.971 17.8414 2.68978 17.5602C2.40856 17.279 2.2504 16.8977 2.25 16.5V14.25C2.2506 13.6534 2.48784 13.0815 2.90967 12.6597C3.3315 12.2378 3.90345 12.0006 4.5 12Z" fill={getColor(hover, primary)} />
                <path d="M6.375 11.25C6.89417 11.25 7.40169 11.096 7.83337 10.8076C8.26505 10.5192 8.6015 10.1092 8.80018 9.62955C8.99886 9.14989 9.05085 8.62209 8.94956 8.11289C8.84827 7.60369 8.59827 7.13596 8.23115 6.76885C7.86404 6.40173 7.39631 6.15173 6.88711 6.05044C6.37791 5.94915 5.85011 6.00114 5.37045 6.19982C4.8908 6.3985 4.48083 6.73495 4.19239 7.16663C3.90395 7.59831 3.75 8.10583 3.75 8.625C3.75079 9.32095 4.02761 9.98817 4.51972 10.4803C5.01183 10.9724 5.67905 11.2492 6.375 11.25ZM6.375 7.5C6.5975 7.5 6.81501 7.56598 7.00002 7.6896C7.18502 7.81321 7.32921 7.98892 7.41436 8.19448C7.49951 8.40005 7.52179 8.62625 7.47838 8.84448C7.43497 9.06271 7.32783 9.26316 7.17049 9.4205C7.01316 9.57783 6.8127 9.68498 6.59447 9.72839C6.37625 9.77179 6.15005 9.74952 5.94448 9.66437C5.73891 9.57922 5.56321 9.43502 5.4396 9.25002C5.31598 9.06501 5.25 8.84751 5.25 8.625C5.2504 8.32676 5.36905 8.04084 5.57994 7.82995C5.79083 7.61905 6.07675 7.5004 6.375 7.5ZM18 6.75C18.5933 6.75 19.1734 6.57405 19.6667 6.24441C20.1601 5.91477 20.5446 5.44623 20.7716 4.89805C20.9987 4.34987 21.0581 3.74667 20.9424 3.16473C20.8266 2.58279 20.5409 2.04824 20.1213 1.62868C19.7018 1.20912 19.1672 0.923401 18.5853 0.807646C18.0033 0.69189 17.4001 0.7513 16.8519 0.978363C16.3038 1.20543 15.8352 1.58994 15.5056 2.08329C15.1759 2.57664 15 3.15666 15 3.75C15.0008 4.54541 15.3171 5.30801 15.8796 5.87045C16.442 6.43288 17.2046 6.74921 18 6.75ZM18 2.25C18.2967 2.25 18.5867 2.33797 18.8334 2.5028C19.08 2.66762 19.2723 2.90189 19.3858 3.17598C19.4993 3.45007 19.5291 3.75167 19.4712 4.04264C19.4133 4.33361 19.2704 4.60088 19.0607 4.81066C18.8509 5.02044 18.5836 5.1633 18.2926 5.22118C18.0017 5.27906 17.7001 5.24935 17.426 5.13582C17.1519 5.02229 16.9176 4.83003 16.7528 4.58336C16.588 4.33668 16.5 4.04667 16.5 3.75C16.5004 3.3523 16.6586 2.971 16.9398 2.68978C17.221 2.40856 17.6023 2.2504 18 2.25Z" fill={getColor(hover, primary)} />
            </g>
            <defs>
                <clipPath id="clip0_486_623">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>;
    }
    if (icon === 'general_education') {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11H3C2.45 11 2 10.55 2 10V6.68C2 6.31 2.28 5.89 2.63 5.75L11.63 2.15003C11.83 2.07003 12.17 2.07003 12.37 2.15003L21.37 5.75C21.72 5.89 22 6.31 22 6.68V10C22 10.55 21.55 11 21 11H20" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 22H2V19.75C2 19.3375 2.45 19 3 19H21C21.55 19 22 19.3375 22 19.75V22Z" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 19V11" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 19V11" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1 22H23" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <g clip-path="url(#clip0_486_1620)">
                <path d="M7 7.5H10C10.5304 7.5 11.0391 7.71071 11.4142 8.08579C11.7893 8.46086 12 8.96957 12 9.5V16.5C12 16.1022 11.842 15.7206 11.5607 15.4393C11.2794 15.158 10.8978 15 10.5 15H7V7.5Z" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 7.5H14C13.4696 7.5 12.9609 7.71071 12.5858 8.08579C12.2107 8.46086 12 8.96957 12 9.5V16.5C12 16.1022 12.158 15.7206 12.4393 15.4393C12.7206 15.158 13.1022 15 13.5 15H17V7.5Z" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_486_1620">
                    <rect width="12" height="12" fill="white" transform="translate(6 6)" />
                </clipPath>
            </defs>
        </svg>;
    }
    if (icon === 'group') {
        return <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.20027 17.3785H2.76029C1.77592 17.3785 1.28027 16.9535 1.28027 16.1093V9.20214C1.28027 8.35793 1.77592 7.93286 2.76029 7.93286H5.72029C6.70467 7.93286 7.20027 8.35793 7.20027 9.20214V10.2943" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.3418 17.3704L16.8003 17.3704" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.8082 17.3622L7.2082 17.3785L7.2002 5.20514C7.2002 4.65921 7.47221 4.154 7.91221 3.85252L11.1122 1.67698C11.6482 1.31031 12.3522 1.31031 12.8882 1.67698L16.0882 3.85252C16.5362 4.154 16.8002 4.65921 16.8002 5.20514L16.8082 17.3622Z" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.2002 10.8518H16.8002" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.0005 17.3704V14.3148" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.0003 7.99999C12.663 7.99999 13.2003 7.45278 13.2003 6.77776C13.2003 6.10275 12.663 5.55554 12.0003 5.55554C11.3376 5.55554 10.8003 6.10275 10.8003 6.77776C10.8003 7.45278 11.3376 7.99999 12.0003 7.99999Z" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.808 17.3785H21.248C22.2324 17.3785 22.728 16.9535 22.728 16.1093V9.20214C22.728 8.35793 22.2324 7.93286 21.248 7.93286H18.288C17.3036 7.93286 16.808 8.35793 16.808 9.20214V10.2943" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.9683 12.6557L20.5683 12.6557" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.44043 12.6557L5.04043 12.6557" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>;
    }
    if (icon === 'higher') {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.2037 8.76387L11.9104 4.15705C11.6305 4.01833 11.302 4.01833 11.0221 4.15705L3.53618 7.86791C2.79503 8.2353 2.79503 9.29243 3.53618 9.65983L4.59273 10.1836M21.2037 8.76387C21.2037 8.76387 22.9221 9.64723 22.9221 10.1836C22.9221 10.7199 22.9221 16.2725 22.9221 16.2725M21.2037 8.76387L18.3398 10.1836M18.3398 10.1836L11.9104 13.3707C11.6305 13.5094 11.302 13.5094 11.0221 13.3707L4.59273 10.1836M18.3398 10.1836V16.2156C18.3398 16.5813 18.1401 16.9179 17.8191 17.0932L11.9456 20.3013C11.6469 20.4645 11.2856 20.4645 10.9869 20.3013L5.11337 17.0932C4.79239 16.9179 4.59273 16.5813 4.59273 16.2156L4.59273 10.1836" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>;
    }
    if (icon === 'other') {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.70001 18H4.15002C2.72002 18 2 17.28 2 15.85V4.15002C2 2.72002 2.72002 2 4.15002 2H8.45001C9.88001 2 10.6 2.72002 10.6 4.15002V6" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.3702 8.41998V19.58C17.3702 21.19 16.5702 22 14.9602 22H9.12018C7.51018 22 6.7002 21.19 6.7002 19.58V8.41998C6.7002 6.80998 7.51018 6 9.12018 6H14.9602C16.5702 6 17.3702 6.80998 17.3702 8.41998Z" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.3999 6V4.15002C13.3999 2.72002 14.1199 2 15.5499 2H19.8499C21.2799 2 21.9999 2.72002 21.9999 4.15002V15.85C21.9999 17.28 21.2799 18 19.8499 18H17.3699" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 11H14" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 14H14" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 22V19" stroke={getColor(hover, primary)} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>;
    }
    return '';
}