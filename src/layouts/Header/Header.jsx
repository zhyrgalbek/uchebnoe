import { Box, Grid, Modal, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

import { Filter } from "../../components/Filter";
import { LogoType } from "../../components/LogoType";
import HeaderButton from "../../components/ui/HeaderButton";

const style = {
  position: 'absolute',
  top: '80px',
  left: '0%',
  // transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid transparent',
  boxShadow: 'none',
  p: 4,
  height: '100vh',
  overflow: 'auto',
  background: '#fff'
};

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setMenuActive(prev => !prev)
    setOpen(prev => !prev)
  }
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onClickNav = (id) => {
    navigate(`${id}`)
  }
  return (
    <Block>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={4} xs={9}>
          <LogoType />
        </Grid>
        <Grid item md={8} xs={3}>
          <MenuMobile>
            <Stack direction="row" alignItems="center">
              <button className={`hamburger hamburger--collapse ${menuActive && `is-active`}`} type="button" onClick={handleOpen}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                  backgroundColor: 'transparent',
                  '& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': {
                    background: 'transparent'
                  },
                }}
              >
                <Box sx={style}>
                  <MobileContainer>
                    <Stack direction="column">
                      <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ padding: '40px', pl: '0', pr: '0' }}>
                        <HeaderButton secondary active>Кырг</HeaderButton>
                        <HeaderButton secondary>Рус</HeaderButton>
                      </Stack>
                      <Stack sx={{ paddingRight: "100px" }} direction="row" spacing={2} sx={{ padding: '40px', pl: '0', pr: '0' }}>
                        <HeaderButton variant="headerBtn" active={location.pathname === '/about'} onClick={() => onClickNav('about')}>О нас</HeaderButton>
                        <HeaderButton variant="headerBtn" active={location.pathname === '/'} onClick={() => onClickNav('/')}>
                          Статистические данные
                        </HeaderButton>
                      </Stack>
                      <Filter header />
                    </Stack>
                  </MobileContainer>
                </Box>
              </Modal>
            </Stack>
          </MenuMobile>
          <Menu>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              <Stack sx={{ paddingRight: "100px" }} direction="row" spacing={2}>
                <HeaderButton variant="headerBtn" active={location.pathname === '/about'} onClick={() => onClickNav('about')}>О нас</HeaderButton>
                <HeaderButton variant="headerBtn" active={location.pathname === '/'} onClick={() => onClickNav('/')}>
                  Статистические данные
                </HeaderButton>
              </Stack>
              <Stack direction="row" spacing={2}>
                <HeaderButton secondary active>Кырг</HeaderButton>
                <HeaderButton secondary>Рус</HeaderButton>
              </Stack>
            </Stack>
          </Menu>
        </Grid>
      </Grid>
    </Block >
  );
};

export default Header;

const MobileContainer = styled('div')`
  /* border: 1px solid red; */
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid red;
  min-height: 100vh;
  z-index: 10000;
  background: #fff;
  padding: 0 20px; */
`

const MenuMobile = styled('div')`
  display: none;
  padding: 0;
  /* border: 1px solid red; */
  @media screen and (max-width: 600px){
    display: block;
  }
`

const Menu = styled('div')`
  display: block;
  @media screen and (max-width: 600px){
    display: none;
  }
`

const Block = styled(Box)`
  /* border: 1px solid red; */
  background: "#6A8AFF";
  padding: 30px 0;
`;
