import { Box, Container, Typography } from "@mui/material";

import DestinationMock from "../../mocks/DestinationMock.json";
import Image from "next/image";
import ImageCardDestination from "./ImageCardDestination";

interface ContentDestinationProps {}

export default function ContentDestination(props: ContentDestinationProps) {
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
        {DestinationMock.title}
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
        {DestinationMock.target}
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
        <ImageCardDestination image={DestinationMock.imageOne} />
        <ImageCardDestination image={DestinationMock.imageTwo} />
      </Box>
      <Typography
        component="p"
        sx={{
          my: 6,
          fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
        }}
      >
        {DestinationMock.destinationDescription}
      </Typography>
    </Container>
  );
}
