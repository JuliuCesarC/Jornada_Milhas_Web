"use client";

import { Box, Button, Chip, Typography } from "@mui/material";

interface ComponentNameProps {
  pageWidth: string;
  lastSearch: string;
  resetDestinationList: ()=> void
}

export default function SearchChip(props: ComponentNameProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: props.pageWidth,
        m: "auto",
        mb: 10,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          py: 1,
          px: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          backgroundColor: "grey.A200",
          borderRadius: 4,
        }}
      >
        <Typography component="div" fontSize="1.1rem">
          Voce pesquisou por:{" "}
        </Typography>
        <Typography component="div" fontSize="1.25rem" fontWeight="600">
          {props.lastSearch}
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: 30,
            minWidth: 30,
            height: 30,
            padding: "6px",
            ml: 1,
            bgcolor: "grey.400",
            borderRadius: "50%",
            ":hover": {bgcolor: "grey.A400"}
          }}
          onClick={props.resetDestinationList}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="1080.000000pt"
            height="1080.000000pt"
            viewBox="0 0 1080.000000 1080.000000"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: "100%" }}
          >
            <g
              fill="#000000"
              transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                d="M1372 10039 c-29 -5 -88 -25 -130 -44 -67 -32 -94 -53 -230 -188 -84
-84 -166 -173 -182 -198 -68 -104 -93 -243 -67 -366 35 -163 -114 -5 1896
-2015 l1826 -1828 -1826 -1827 c-1992 -1994 -1858 -1851 -1894 -2005 -18 -79
-19 -125 -1 -210 27 -126 55 -169 225 -341 223 -226 284 -260 471 -260 90 -1
115 3 173 26 38 15 83 36 100 48 18 12 850 839 1850 1838 l1817 1816 1818
-1816 c999 -999 1831 -1826 1849 -1838 17 -12 62 -33 100 -48 58 -23 83 -27
173 -26 186 0 247 34 467 255 129 131 157 164 186 226 69 144 71 290 5 437
-31 69 -67 106 -1857 1898 l-1826 1827 1826 1828 c1797 1798 1826 1828 1858
1898 46 104 59 207 38 308 -28 135 -53 173 -231 354 -145 148 -169 167 -241
202 -159 77 -303 75 -470 -7 -40 -20 -417 -391 -1872 -1846 l-1823 -1822
-1822 1822 c-1322 1320 -1835 1827 -1868 1843 -113 57 -234 78 -338 59z"
              />
            </g>
          </svg>
        </Button>
      </Box>
    </Box>
  );
}
