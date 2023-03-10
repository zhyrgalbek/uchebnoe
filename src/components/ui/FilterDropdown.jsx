import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import { useRef, useState } from "react";
import styled, { css } from "styled-components"
import frame from '../../assets/Filter/Frame.svg'

export const FilterDropdown = ({ header, text, icon, icon2, arr, mobile, ...props }) => {
    const [choiseText, setChoiseText] = useState(text);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event) => {
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
            <Span>{choiseText}</Span>
            <Img src={frame} alt="#" active={open} />
        </FilterDropdownButton>
        <MenuBlock
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
            sx={{ zIndex: '100' }}
        >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </MenuBlock>
    </DropdownContainer>
}

const MenuBlock = styled(Popper)`
    min-width: 100%;
    & div{
        margin-top: -6px;
        /* margin-left: -1px; */
        box-shadow: none;
        min-width: 100%;
    }
    & ul {
        border: 1px solid #3763FF;
        border-top: 1px solid transparent;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        overflow: hidden;
        /* min-width: 100%; */
    }
    & li {
        /* min-width: 318px; */
        /* min-width: 100%; */
    }
`

const DropdownContainer = styled('div')`
    position: relative;
    width: 320px;
    margin-right: 30px;
    @media screen and (max-width: 600px){
        width: 100%;
        margin-right: 0;
    }
`
const DropdownHeader = styled('h3')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    color: #292D32;
    margin-bottom: 5px;
`
const Span = styled('span')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
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
    border: 1px solid #3763FF;
    padding: 12px 10px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    width: 100%;
    margin-bottom: 30px;
`
