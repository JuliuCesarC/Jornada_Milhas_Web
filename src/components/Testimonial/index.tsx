"use client";

import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import TestimonialList from "../mocks/TestimonialList.json";
import Image from "next/image";
import theme from "../ThemeRegistry/theme";

interface TestimonialProps {}

interface CardProps {
  bgColor: string;
}
const CardStyled = styled.div<CardProps>`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  background-color: ${(props) => props.bgColor};
  border-radius: 2px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.07);
`;

export default function Testimonial(props: TestimonialProps) {
  const pageWidth = "90%";

  return (
    <Container>
      <Typography variant="h4" sx={{ width: pageWidth, m: "auto", py: 4 }}>
        Depoimentos
      </Typography>
      <Box
        sx={{
          width: pageWidth,
          margin: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "auto",
            md: "auto auto",
            lg: "auto auto auto",
          },
          justifyItems: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        {TestimonialList.list.map((t, index) => {
          return (
            // <CardStyled bgColor={theme.palette.primary.light} key={index}>
            <Box
              key={index}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 2,
                bgcolor: "primary.light",
                borderRadius: "2px",
                boxShadow: "2px 2px 7px rgba(0,0,0,0.07)",
              }}
            >
              <Image
                src={t.image}
                alt={`Foto de perfil de: ${t.name}`}
                width={65}
                height={65}
              />
              <Box>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ lineHeight: "1.2rem" }}
                >
                  {t.testimonial}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  fontWeight="700"
                  fontSize="1.1rem"
                >
                  {t.name}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
