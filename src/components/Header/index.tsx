"use client";

import styled from "@emotion/styled";
import { Box, Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../../public/img/logo/Logo-branco.png";
import theme from "../ThemeRegistry/theme";
import MenuIcon from "./MenuIcon";
import { useState } from "react";
import RegisterLoginButtons from "./RegisterLoginButtons";

interface HeaderProps {}

interface ContainerProps {
  bgColor: string;
}

const TagHeader = styled.header<ContainerProps>`
  height: 70px;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.bgColor};
  button {
    height: 40px;
  }
  #menu_icon_header {
    width: 40px;
    border: 2px solid;
    border-color: var(--primary);
  }
`;

export default function Header(props: HeaderProps) {
  const [toggleDisplay, setToggleDisplay] = useState<boolean>(false);

  function showButtons() {
    setToggleDisplay(toggleDisplay ? false : true);
  }
  return (
    <TagHeader bgColor={theme.palette.grey.A700}>
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
              width: "150px",
              height: "50px",
              position: "relative",
            }}
          >
            <Image
              src={LogoImg}
              fill
              style={{ objectFit: "contain" }}
              alt="Logo Jornada Milhas"
            />
          </Box>
        </Link>
        <RegisterLoginButtons display={toggleDisplay} />
        <Button
          aria-label="menu"
          id="menu_icon_header"
          sx={{ display: { sm: "none" }, minWidth: 40 }}
          onClick={showButtons}
        >
          <MenuIcon iconColor={theme.palette.primary.main} />
        </Button>
      </Container>
    </TagHeader>
  );
}
