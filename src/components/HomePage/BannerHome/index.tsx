"use client";

import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import frontBanner from "../../../../public/img/images/banner-front-home.png";

const BannerContainer = styled(Box)`
  #banner_principal_home {
    transform: translateX(-50%);
  }
`;

export default function BannerHome() {
  return (
    <BannerContainer sx={{
      position: "relative",
      width: "100%",
      height: {
        xs: "420px",
        sm: "450px",
        md: "470px",
        lg: "500px",
        xl: "550px",
      },
    }}>
      <Box
        id="banner_principal_home"
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "100%",
          height: "100%",
          backgroundImage: "url(img/images/banner-bg-home.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundPositionY: { xs: "top", xl: "bottom" },
          backgroundSize: "cover",
        }}
      ></Box>
      <Container sx={{ position: "relative", height: "100%" }}>
        <Typography
          variant="h1"
          color={"white"}
          fontWeight="400"
          sx={{
            zIndex: 10,
            position: "absolute",
            top: { xs: 80, sm: 110, md: 140, xl: 160 },
            left: { xs: 15, sm: 25 },
            fontSize: { xs: "3rem", sm: "3.5rem" },
          }}
        >
          Compartilhe milhas,
          <br />
          <span className="text_bold_1">compartilhe o mundo.</span>
        </Typography>
        <Box
          sx={{
            zIndex: 1,
            position: "absolute",
            bottom: { xs: 120, xl: 80 },
            right: { xs: 15, sm: 25 },
            width: { xs: 270, sm: 370, md: 470, xl: 550 },
            aspectRatio: "1.5/1",
          }}
        >
          <Image
            src={frontBanner}
            alt="Imagem de uma garota com uma mochila de viagem nas costas."
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Container>
    </BannerContainer>
  );
}
