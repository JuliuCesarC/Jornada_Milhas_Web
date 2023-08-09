"use client";

import { Box, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoImg from "../../../public/img/logo/Logo-branco.png";
import NavMenuButton from "./NavMenuButton";
import RegisterLoginButtons from "./RegisterLoginButtons";
import LoginSection from "./LoginSection";

export default function Header() {
  const [toggleDisplay, setToggleDisplay] = useState<boolean>(false);
  const [loginState, setLoginState] = useState<boolean>(false);

  function showButtons() {
    setToggleDisplay(!toggleDisplay);
  }
  function showLoginSection() {
    setLoginState(!loginState);
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
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1
        }}>
          {loginState ? (
            <LoginSection
              display={toggleDisplay}
              showLoginSection={showLoginSection}
            />
          ) : (
            <RegisterLoginButtons
              display={toggleDisplay}
              showLoginSection={showLoginSection}
            />
          )}
          <NavMenuButton onClick={showButtons} />
        </Box>
      </Container>
    </Box>
  );
}
