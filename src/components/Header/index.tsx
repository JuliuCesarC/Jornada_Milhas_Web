"use client";

import { Box, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoImg from "../../../public/img/logo/Logo-branco.png";
import NavMenuButton from "./NavMenuButton";
import RegisterLoginButtons from "./RegisterLoginButtons";

export default function Header() {
  const [toggleDisplay, setToggleDisplay] = useState<boolean>(false);

  function showButtons() {
    setToggleDisplay(toggleDisplay ? false : true);
    
  }
  return (
    <Box
      sx={{
        height: 70,
        m: 0,
        p: 0,
        bgcolor: "grey.A700",
      }}
    >
      <Container
        sx={{
          position: "relative",
          height: "100%",
          px: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Link href="/">
          <Box
            sx={{
              position: "relative",
              height: "50px",
            }}
          >
            <Image
              src={LogoImg}
              width={150}
              height={50}
              style={{ objectFit: "contain" }}
              alt="Logo Jornada Milhas"
            />
          </Box>
        </Link>
        <RegisterLoginButtons display={toggleDisplay} />
        <NavMenuButton onClick={showButtons} />
      </Container>
    </Box>
  );
}
