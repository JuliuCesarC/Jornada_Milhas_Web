import { Box, Button, ButtonProps } from "@mui/material";
import theme from "../ThemeRegistry/theme";

// To normal html elements:
// interface ButtonMenuProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

// To MUI elements:
interface ButtonMenuProps extends ButtonProps {}

export default function NavMenuButton(props: ButtonMenuProps) {
  return (
    <Button
      {...props}
      sx={{
        width: 40,
        minWidth: 40,
        height: 40,
        display: { sm: "none" },
        border: "2px solid",
        borderColor: "primary.main",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="1080.000000pt"
          height="1080.000000pt"
          viewBox="0 0 1080.000000 1080.000000"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100%",
            height: "100%",
            fill: theme.palette.primary.main,
          }}
        >
          <g
            transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path d="M550 8950 l0 -1000 4850 0 4850 0 0 1000 0 1000 -4850 0 -4850 0 0 -1000z" />
            <path d="M550 5400 l0 -1000 4850 0 4850 0 0 1000 0 1000 -4850 0 -4850 0 0 -1000z" />
            <path d="M550 1850 l0 -1000 4850 0 4850 0 0 1000 0 1000 -4850 0 -4850 0 0 -1000z" />
          </g>
        </svg>
      </Box>
    </Button>
  );
}
