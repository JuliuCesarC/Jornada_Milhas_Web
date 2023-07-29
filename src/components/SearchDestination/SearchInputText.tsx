"use client";

import styled from "@emotion/styled";
import { IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import theme from "../ThemeRegistry/theme";

interface SearchInputTextProps {
  brPoint: number;
}

interface IconButtonProps {
  primary: string;
  primaryDark: string;
  fillSvg: string;
}
const InputBox = styled.div<IconButtonProps>`
  position: relative;
  width: 100%;
  #search_icon {
    z-index: 10;
    position: absolute;
    right: 7px;
    top: 50%;
    width: 40px;
    height: 40px;
    padding: 10px;
    transform: translateY(-50%);
    background-color: ${(props) => props.primary};
    :hover {
      background-color: ${(props) => props.primaryDark};
    }
    svg {
      width: 100%;
      height: 100%;
      fill: ${(props) => props.fillSvg};
    }
  }
`;

interface InputTextProps {
  color1: string;
  color2: string;
}

const InputTextStyled = styled(TextField)<InputTextProps>`
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${(props) => props.color1};
    }
    &:hover fieldset {
      border-color: ${(props) => props.color2};
    }
    &.Mui-focused fieldset {
      border-color: ${(props) => props.color2};
    }
  }
  & label.Mui-focused {
    color: ${(props) => props.color2};
  }
`;

export default function SearchInputText(props: SearchInputTextProps) {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const primaryColor = theme.palette.primary.main;
  const primaryColorDark = theme.palette.primary.dark;
  const greyColor = theme.palette.grey.A700;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <InputBox
      primary={windowWidth < props.brPoint ? primaryColor : "none"}
      primaryDark={windowWidth < props.brPoint ? primaryColorDark : "none"}
      fillSvg={windowWidth > props.brPoint ? greyColor : "white"}
    >
      <IconButton
        id="search_icon"
        disabled={windowWidth > props.brPoint}
        color="secondary"
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="1080.000000pt"
          height="1080.000000pt"
          viewBox="0 0 1080.000000 1080.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M4215 10480 c-852 -57 -1632 -352 -2295 -869 -688 -536 -1188 -1283
              -1430 -2134 -97 -339 -140 -639 -147 -1010 -11 -549 63 -1007 242 -1502 519
          -1435 1785 -2463 3300 -2679 176 -25 355 -36 582 -36 627 -1 1216 133 1778
          404 267 129 443 235 681 412 l111 82 1479 -1480 c813 -813 1499 -1494 1525
          -1513 96 -72 250 -102 365 -71 277 74 420 368 303 628 -32 72 -45 86 -1532
          1574 l-1499 1501 95 129 c428 578 693 1249 784 1986 22 178 25 669 5 853 -56
          521 -184 972 -402 1420 -483 994 -1367 1763 -2425 2108 -279 91 -559 151 -855
          182 -177 19 -503 26 -665 15z m675 -930 c865 -126 1620 -572 2138 -1263 337
          -449 549 -985 618 -1560 21 -171 23 -542 5 -697 -105 -908 -554 -1701 -1268
          -2236 -304 -229 -674 -413 -1048 -520 -296 -86 -541 -119 -880 -119 -341 0
          -576 32 -884 120 -1003 286 -1789 1022 -2145 2007 -193 534 -235 1106 -126
          1708 92 505 338 1020 688 1440 98 119 315 331 436 428 295 237 639 428 988
          548 211 73 494 135 729 159 191 20 558 13 749 -15z"
            />
          </g>
        </svg>
      </IconButton>
      <InputTextStyled
        id="search_input_text"
        label="Origem"
        variant="outlined"
        sx={{ width: "100%" }}
        color1={theme.palette.grey.A400}
        color2={theme.palette.grey.A700}
      />
    </InputBox>
  );
}
