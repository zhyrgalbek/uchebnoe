import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components"
import frame from '../../assets/Filter/Frame.svg'

export const FilterDropdown = ({ header, text, icon, icon2, arr, mobile, items, type, onClick, ...props }) => {
    // const [choiseText, setChoiseText] = useState(text);
    const menuRef = useRef();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    // useEffect(() => {
    //     setChoiseText(text)
    // }, [text]);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event, elem, value) => {
        if (elem) {
            onClick({ type, text: elem, value });
            // setChoiseText(elem);
        }
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target)
        ) {
            return;
        }
        setOpen(false);
    };
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    return <DropdownContainer>
        <DropdownHeader>{header}</DropdownHeader>
        <FilterDropdownButton onClick={handleToggle} ref={anchorRef} aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true">
            <Span>{text}</Span>
            <Img src={frame} alt="#" active={open} />
        </FilterDropdownButton>
        <MenuBlock
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
            sx={{ zIndex: '1000', width: '345px' }}
        >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                >
                    <Paper
                        // elevation={0} 
                        sx={{
                            // border: '1px solid rgba(55, 99, 255, 0.4)',
                            // borderTopLeftRadius: placement === 'bottom-start' ? '0' : '6px',
                            // borderTopRightRadius: placement === 'bottom-start' ? '0' : '6px',
                            // borderBottomLeftRadius: placement === 'bottom-start' ? '6px' : '0',
                            // borderBottomRightRadius: placement === 'bottom-start' ? '6px' : '0',
                            // borderTopColor: placement === 'bottom-start' ? '#fff' : 'rgba(55, 99, 255, 0.4)',
                            // borderBottomColor: placement === 'bottom-start' ? 'rgba(55, 99, 255, 0.4)' : '#fff',
                            // marginTop: placement === 'bottom-start' ? '-2px' : '0',
                            // marginBottom: placement === 'bottom-start' ? '0' : '-2px',
                            // paddingTop: placement === 'bottom-start' ? '0' : '10px',
                            // paddingBottom: placement === 'bottom-start' ? '10px' : '0',
                        }}
                    >
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                                sx={{ margin: '0', padding: '0', pb: '10px', pt: '10px', minHeight: '100px', maxHeight: '345px', overflowX: 'hidden' }}
                            >
                                {
                                    items?.map((elem) => {
                                        if (elem.name) {
                                            return <MenuItem key={elem.id} sx={{ fontSize: '0.875rem', fontFamily: 'Inter', lineHeight: '140%', display: 'flex', flexWrap: 'wrap' }} onClick={(e) => handleClose(e, elem.name, elem.id)}>{elem.name}</MenuItem>
                                        }
                                        return <MenuItem key={Math.random().toString()} sx={{ fontSize: '0.875rem', fontFamily: 'Inter', lineHeight: '140%' }} onClick={(e) => handleClose(e, elem)}>{elem}</MenuItem>
                                    })
                                }
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </MenuBlock>
    </DropdownContainer >
}

const MenuBlock = styled(Popper)`
    min-width: 100%;
    & > div{
        /* margin-top: -6px; */
        /* margin-left: -1px; */
        /* box-shadow: none; */
        min-width: 100%;
    }
    & ul {
        /* border: 1px solid #3763FF; */
        /* border-top: 1px solid transparent; */
        /* border-bottom-left-radius: 6px; */
        /* border-bottom-right-radius: 6px; */
        /* overflow: hidden; */
        /* min-width: 100%; */
    }
    & li {
        /* min-width: 318px; */
        /* min-width: 100%; */
    }
`

const DropdownContainer = styled('div')`
    position: relative;
    width: clamp(15.9375rem, 4.910714285714285rem + 22.61904761904762vw, 21.875rem);
    margin-right: 20px;
    @media screen and (max-width: 780px){
        width: 100%;
        /* margin-right: 30px; */
        /* margin-left: 30px; */
    }
`
const DropdownHeader = styled('h3')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 130%;
    color: #292D32;
    margin-bottom: 5px;
`
const Span = styled('span')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 140%;
    color: #5A5A5A;
`
const Img = styled('img')`
    transition: 0.2s ease;
    ${props => props.active && css`
        transform: rotateX(180deg);
    `}
`
const FilterDropdownButton = styled('button')`
    border: 1px solid rgba(55, 99, 255, 0.4);
    padding: 0.75rem 0.625rem;
    padding: 0.5625rem;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    width: 100%;
    margin-bottom: 1.25rem;
`
