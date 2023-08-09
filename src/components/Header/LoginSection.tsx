import styled from "@emotion/styled";
import { Box, BoxProps, Button, Link } from "@mui/material";
import theme from "../ThemeRegistry/theme";

interface LoginSectionProps {
  display: boolean;
  showLoginSection: () => void;
}

interface BoxUserProps extends BoxProps {
  move: string;
  breakpoint: number;
}
const BoxUser = styled(Box)<BoxUserProps>`
  transform: translateX(${(props) => props.move});
  @media (min-width: ${(props) => props.breakpoint + "px"}) {
    transform: translateX(0);
  }
`;

export default function LoginSection(props: LoginSectionProps) {
  let moveX: string = props.display ? "0px" : "400px";
  return (
    <BoxUser
      move={moveX}
      breakpoint={theme.breakpoints.values.sm}
      sx={{
        zIndex: 10,
        position: { xs: "absolute", sm: "static" },
        top: 15,
        right: 60,
        height: 40,
        p: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
        bgcolor: "grey.A700",
        opacity: 0.95,
        transition: "transform 0.6s",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          gap: 1,
        }}
      >
        <LinkStyled url="#" content="Vender milhas" />
        <LinkStyled url="#" content="Sobre" />
      </Box>
      <Box
        sx={{
          width: 40,
          minWidth: 40,
          height: 40,
          backgroundImage: "url(img/icons/user_images.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "50%",
        }}
      ></Box>
      <Button
        variant="outlined"
        sx={{
          height: 40,
          color: "white",
          borderWidth: 2,
          ":hover": { borderWidth: 2 },
        }}
        onClick={props.showLoginSection}
      >
        sair
      </Button>
    </BoxUser>
  );
}
function LinkStyled({ url, content }: { url: string; content: string }) {
  return (
    <Link
      href={url}
      sx={{
        minWidth: { xw: 110, sm: 70 },
        p: "2px",
        fontSize: { xs: "0.9rem", sm: "1rem" },
        textAlign: "center",
        textDecoration: "none",
        color: "white",
        ":hover": { textDecoration: "underline" },
      }}
    >
      {content}
    </Link>
  );
}
