"use client";

import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import frontBanner from "../../../public/img/images/banner-front-home.png";
import theme, { BreakPoints } from "../ThemeRegistry/theme";

interface BannerHomeProps {}

const BannerContainer = styled.div<BreakPoints>`
  position: relative;
  width: 100%;
  height: 450px;

  #banner_principal_home {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    min-width: 700px;
    height: 100%;
    background-image: url("img/images/banner-bg-home.png");
    background-position: center;
    background-position-y: top;
    background-repeat: no-repeat;
    background-size: cover;

    transform: translateX(-50%);
  }
  h1 {
    z-index: 10;
    position: absolute;
    top: 100px;
    left: 15px;
    font-size: 3rem;
  }
  #banner_front_home {
    z-index: 1;
    position: absolute;
    bottom: 100px;
    right: 15px;
    width: 270px;
    aspect-ratio: 1.5/1;
    img{
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: ${(props) => props.brp.sm + "px"}) {
    h1{
      left: 25px;
      font-size: 3.5rem;
    }
    #banner_front_home {
      width: 350px;
      right: 25px;
    }
  }
  @media (min-width: ${(props) => props.brp.md + "px"}) {
    h1{
      font-size: 4rem;
    }
    #banner_front_home {
      width: 400px;
    }
  }
  @media (min-width: ${(props) => props.brp.xl + "px"}) {
    height: 500px;
    #banner_principal_home {
      background-position-y: bottom;
    }
    #banner_front_home {
      width: 500px;
    }
  }
  @media (min-width: 2000px) {
    height: 550px;
  }
`;

export default function BannerHome(props: BannerHomeProps) {
  return (
    <BannerContainer
      brp={theme.breakpoints.values}
    >
      <Box id="banner_principal_home"></Box>
      <Container sx={{ position: "relative", height: "100%" }}>
        <Typography
          variant="h1"
          color={"white"}
        >
          <span className="text_bold_3">Compartilhe milhas,</span>
          <br />
          <span className="text_bold_1">compartilhe o mundo.</span>
        </Typography>
        <Box
          id="banner_front_home"
        >
          <Image
            src={frontBanner}
            alt="Imagem de uma garota com uma mochila de viagem nas costas."
          />
        </Box>
      </Container>
    </BannerContainer>
  );
}
