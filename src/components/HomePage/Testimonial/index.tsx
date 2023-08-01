"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import TestimonialList from "../../mocks/TestimonialList.json";

interface TestimonialProps {}

export default function Testimonial(props: TestimonialProps) {
  return (
    <Container>
      <Typography variant="h4" sx={{ py: 4 }}>
        Depoimentos
      </Typography>
      <Box
        sx={{
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
            <Box
              key={index}
              sx={{
                p: 2,
                display: { xs: "block", sm: "flex" },
                flexDirection: "row",
                justifyContent: "center",
                gap: 2,
                bgcolor: "primary.light",
                borderRadius: "2px",
                boxShadow: "2px 2px 7px rgba(0,0,0,0.07)",
              }}
            >
              <Box sx={{ float: "left", p: 1, mr: "5px" }}>
                <Image
                  src={t.image}
                  alt={`Foto de perfil de: ${t.name}`}
                  width={65}
                  height={65}
                  style={{ borderRadius: "2px" }}
                />
              </Box>
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
