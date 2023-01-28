import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Logo from "../../assets/logo/logo.svg";
import HeaderButton from "../../components/ui/HeaderButton";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onClickNav = (id) => {
    navigate(`${id}`)
  }
  const MenuClick = () => {
    setMenuActive(prev => !prev)
  }
  return (
    <Block>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={4} xs={9}>
          <Stack direction="row" alignItems="center">
            <Box sx={{ width: "30px", height: "30px", marginRight: "5px" }}>
              <Img src={Logo} alt="logo" />
            </Box>
            <LogoText>
              Министерство образования и науки Кыргызской республики
            </LogoText>
          </Stack>
        </Grid>
        <Grid item md={8} xs={3}>
          <MenuMobile>
            <Stack direction="row" alignItems="center">
              <button className={`hamburger hamburger--collapse ${menuActive && `is-active`}`} type="button" onClick={MenuClick}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
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
    </Block>
  );
};

export default Header;

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

const LogoText = styled("p")`
  /* border: 1px solid red; */
  text-transform: uppercase;
  width: 250px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 120%;
`;

const Img = styled("img")`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Block = styled(Box)`
  /* border: 1px solid red; */
  background: "#6A8AFF";
  padding: 30px 0;
`;
