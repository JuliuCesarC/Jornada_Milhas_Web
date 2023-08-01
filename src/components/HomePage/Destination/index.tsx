"use client";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Pagination,
  Typography,
} from "@mui/material";
import DestinationList from "../../mocks/DestinationList.json";
import theme, { BreakPoints } from "../../ThemeRegistry/theme";
import { useState } from "react";

interface DestinationProps {}

interface FrameProps extends BreakPoints {
  borderColor: string;
}
const DestinationFrame = styled.div<FrameProps>``;

export default function Destination(props: DestinationProps) {
  const [pageNumber, setPageNumber] = useState<number>(DestinationList.number+1);
  const pageWidth = "90%";

  const paginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
  };
  return (
    <Container>
      <Typography variant="h4" sx={{ width: pageWidth, m: "auto", py: 4 }}>
        Destinos
      </Typography>
      <Box
        sx={{
          width: pageWidth,
          margin: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "auto",
            sm: "auto auto",
            md: "auto auto auto",
          },
          justifyItems: "center",
          gap: 3,
        }}
      >
        {DestinationList.list.slice(pageNumber*6-6,pageNumber*6).map((destination, index) => {
          if (index > 5) return;
          return (
            <Card
              className="card_destination"
              sx={{
                maxWidth: 370,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid",
                borderColor: "grey.400",
                bgcolor: "primary.light",
                boxShadow: "2px 2px 7px rgba(0, 0, 0, 0.1)",
              }}
              key={index}
            >
              <CardMedia
                sx={{ height: 270 }}
                image={destination.imageBytes}
                title={`Imagem card destino: ${destination.title}`}
              />
              <CardContent sx={{ }}>
                <Typography
                  variant="h5"
                  fontSize="1.6rem"
                  fontWeight="500"
                  textAlign={"center"}
                >
                  {destination.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  fontSize={"1rem"}
                  fontWeight={"400"}
                  sx={{
                    maxHeight: { xs: 137 },
                    overflow: "hidden",
                    my: 2,
                    lineHeight: "1.2rem",
                  }}
                >
                  {destination.text}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  textAlign={"center"}
                  color="grey.800"
                  fontSize="2rem"
                >
                  {destination.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  sx={{ width: "95%", mx: "auto", mb: 3 }}
                >
                  ver detalhes
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <Pagination
          count={DestinationList.totalPages}
          defaultPage={pageNumber}
          boundaryCount={1}
          color="primary"
          size="large"
          onChange={paginationChange}
        />
      </Box>
    </Container>
  );
}
