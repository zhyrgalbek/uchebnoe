import { Box, css, Stack } from "@mui/system"
import styled from "styled-components";
import Logo from "../assets/logo/logo.svg";

export const LogoType = ({ footer }) => {
    return <Stack direction="row" alignItems="center">
        <Box sx={{ width: "30px", height: "30px", marginRight: "5px" }}>
            <Img src={Logo} alt="logo" />
        </Box>
        <LogoText footer={footer}>
            Министерство образования и науки Кыргызской республики
        </LogoText>
    </Stack>
}

const Img = styled("img")`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LogoText = styled("p")`
  /* border: 1px solid red; */
  text-transform: uppercase;
  width: 250px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 120%;
  ${props => props.footer && css`
    color: #fff;
  `}
`;