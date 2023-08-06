"use client";

import { TTestimonialList } from "@/utils/getTestimonialList";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

interface CardsTestimonialProps {
  testimonialList: TTestimonialList;
}

export default function CardsTestimonial(props: CardsTestimonialProps) {
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
        {props.testimonialList.map((t, index) => {
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
              <Box
                sx={{
                  float: "left",
                  p: 1,
                  mr: "5px",
                }}
              >
                <Image
                  src={"data:image/png;base64," + t.picture}
                  alt={`Foto de perfil de: ${t.name}`}
                  width={65}
                  height={65}
                  style={{ borderRadius: "2px", objectFit: "cover" }}
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
