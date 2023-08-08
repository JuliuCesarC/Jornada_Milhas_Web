"use client";

import { Box, Container, Typography } from "@mui/material";

import getDestination, { DestinationType } from "@/utils/getDestination";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ImageCardDestination from "./ImageCardDestination";

export default function ContentDestination() {
  const router = useSearchParams();
  const [destination, setDestination] = useState<DestinationType>();

  useEffect(() => {
    loadDestination();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadDestination() {
    if (!router.get("id")) return;
    setDestination(
      await getDestination(router.get("id")!.replace(/[^0-9]/g, ""))
    );
  }
  return (
    <Container>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          my: { xs: 2, sm: 4, md: 5, lg: 6 },
          fontSize: { xs: "2.7rem", sm: "3rem", md: "3.2rem" },
          fontWeight: 400,
        }}
      >
        {destination?.name}
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          mb: { xs: 2, sm: 3 },
          fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.25rem" },
          fontWeight: { xs: 400, sm: 500 },
        }}
      >
        {destination?.target}
      </Typography>
      <Box
        sx={{
          width: "100%",
          p: { xs: 1, sm: 2 },
          mb: 4,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 2,
          bgcolor: "grey.A200",
          borderRadius: 2,
        }}
      >
        {destination && (
          <>
            <ImageCardDestination image={destination.imageOne} />
            <ImageCardDestination image={destination.imageTwo} />
          </>
        )}
      </Box>
      <Typography
        component="p"
        sx={{
          my: 6,
          fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
        }}
      >
        {destination?.destinationDescription}
      </Typography>
    </Container>
  );
}
