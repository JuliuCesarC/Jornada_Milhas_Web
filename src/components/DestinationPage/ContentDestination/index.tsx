"use client";

import { Box, Container, Skeleton, Typography } from "@mui/material";

import getDestination, { DestinationType } from "@/utils/getDestination";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ImageCardDestination from "./ImageCardDestination";
import { DestinationPageContext } from "@/components/Context/DestinationPageContext";

export default function ContentDestination() {
  const dContext = useContext(DestinationPageContext);

  useEffect(() => {
    dContext.loadDestination();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {dContext.destination && !dContext.loadingState ? (
          dContext.destination!.name
        ) : (
          <Skeleton width="40%" height="4rem" />
        )}
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
        {dContext.destination && !dContext.loadingState ? (
          dContext.destination!.target
        ) : (
          <Skeleton width="70%" height="1.8rem" />
        )}
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
        {dContext.destination && !dContext.loadingState ? (
          <>
            <ImageCardDestination
              image={dContext.destination.imageOne}
              mockDestination={dContext.mockDestination}
            />
            <ImageCardDestination
              image={dContext.destination.imageTwo}
              mockDestination={dContext.mockDestination}
            />
          </>
        ) : (
          <>
            <Skeleton
              variant="rounded"
              sx={{ width: "100%", height: "100%", aspectRatio: "2/1" }}
            />
            <Skeleton
              variant="rounded"
              sx={{ width: "100%", height: "100%", aspectRatio: "2/1" }}
            />
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
        {dContext.destination && !dContext.loadingState ? (
          dContext.destination!.destinationDescription
        ) : (
          <>
            <Skeleton width="97%" height="1.2rem" />
            <Skeleton width="99%" height="1.2rem" />
            <Skeleton width="96%" height="1.2rem" />
            <Skeleton width="94%" height="1.2rem" />
          </>
        )}
      </Typography>
    </Container>
  );
}
