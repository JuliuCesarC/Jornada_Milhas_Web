"use client";

import styled from "@emotion/styled";
import { Box, Button, makeStyles } from "@mui/material";
import theme from "../ThemeRegistry/theme";
import { useEffect } from "react";

interface RegisterLoginButtonsProps {
  display: boolean;
}

interface ContainerProps {
  bgColor: string;
}

const ContainerButtons = styled.div<ContainerProps>`
  z-index: 10;
  position: absolute;
  top: 15px;
  right: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.bgColor};
  box-shadow: 2px 2px 12px ${(props) => props.bgColor};
  transition: transform 0.4s;

  @media (min-width: 600px) {
    position: static;
    transform: translateX(0);
  }
`;

export default function RegisterLoginButtons(props: RegisterLoginButtonsProps) {
  useEffect(() => {
    const buttonBox = document.querySelector(
      "#register_login_buttons"
    ) as HTMLElement;
    let pixels = props.display ? "300px" : "0";

    buttonBox.style.transform = `translateX(${pixels})`;
  }, [props.display]);

  return (
    <ContainerButtons
      id="register_login_buttons"
      bgColor={theme.palette.grey.A700}
    >
      <Button
        variant="contained"
        id="sign_in_button"
        sx={{
          minWidth: 135,
        }}
      >
        Cadastrar-se
      </Button>
      <Button
        variant="outlined"
        id="log_in_button"
        sx={{
          color: "white",
          borderWidth: 2,
          ":hover": { borderWidth: 2 },
        }}
      >
        Login
      </Button>
    </ContainerButtons>
  );
}
