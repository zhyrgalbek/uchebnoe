import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo/logo.svg";
import HeaderButton from "../../components/ui/Button";

const Header = () => {
  return (
    <Block>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Stack direction="row" alignItems="center">
            <Box sx={{ width: "30px", height: "30px", marginRight: "5px" }}>
              <Img src={Logo} alt="logo" />
            </Box>
            <LogoText>
              Министерство образования и науки Кыргызской республики
            </LogoText>
          </Stack>
        </Grid>
        <Grid item md={8}>
          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <Stack sx={{ paddingRight: "100px" }} direction="row" spacing={2}>
              <HeaderButton variant="headerBtn" active>О нас</HeaderButton>
              <HeaderButton variant="headerBtn">
                Статические данные
              </HeaderButton>
            </Stack>
            <Stack direction="row" spacing={2}>
              <HeaderButton secondary active>Кырг</HeaderButton>
              <HeaderButton secondary>Рус</HeaderButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Block>
  );
};

export default Header;

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
