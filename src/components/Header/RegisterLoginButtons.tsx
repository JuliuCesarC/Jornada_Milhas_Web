import styled from "@emotion/styled";
import { Box, BoxProps, Button } from "@mui/material";
import theme from "../ThemeRegistry/theme";

interface RegisterLoginButtonsProps {
  display: boolean;
}

interface ContainerProps extends BoxProps {
  move: string;
  breakpoint: number;
}

const ContainerButtons = styled(Box)<ContainerProps>`
  transform: translateX(${(props) => props.move});
  @media (min-width: ${(props) => props.breakpoint + "px"}) {
    transform: translateX(0);
  }
`;

export default function RegisterLoginButtons(props: RegisterLoginButtonsProps) {
  let moveX: string = props.display ? "0px" : "300px";
  return (
    <ContainerButtons
      move={moveX}
      breakpoint={theme.breakpoints.values.sm}
      sx={{
        zIndex: 10,
        position: { xs: "absolute", sm: "static" },
        top: 15,
        right: 65,
        height: 40,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
        bgcolor: "grey.A700",
        transition: "transform 0.4s",
      }}
      boxShadow={2}
    >
      <Button
        variant="contained"
        id="sign_in_button"
        sx={{
          minWidth: 135,
          height: "100%",
        }}
      >
        Cadastrar-se
      </Button>
      <Button
        variant="outlined"
        id="log_in_button"
        sx={{
          height: "100%",
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
