"use client";

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
import { useContext, useEffect, useState } from "react";
import { DestinationContext } from "../Context/DestinationContext";
import SearchChip from "./SearchChip";

export default function Destination() {
  const dContext = useContext(DestinationContext);
  const pageWidth = "90%";

  useEffect(() => {
    updateInitialProps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateInitialProps() {
    dContext.changeDestinationList(0);
  }

  async function paginationChange(
    event: React.ChangeEvent<unknown>,
    value: number
  ) {
    if (value < 0) return;
    console.log("Valor navegação: "+value);
    console.log("Valor state: "+dContext.pageNumber);
    
    dContext.changeDestinationList(value - 1);
    dContext.setPageNumber(value-1);
  }
  return (
    <Container>
      <Typography variant="h4" sx={{ width: pageWidth, m: "auto", py: 4 }}>
        Destinos
      </Typography>
      {dContext.lastSearch && (
        <SearchChip pageWidth={pageWidth} lastSearch={dContext.lastSearch} resetDestinationList={dContext.resetDestinationList} />
      )}
      <Box
        sx={{
          width: pageWidth,
          margin: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          justifyItems: "center",
          gap: 3,
        }}
      >
        {dContext.destinationList
          ? dContext.destinationList.content.map((destination, index) => {
              if (index > 5) return;
              return (
                <Card
                  className="card_destination"
                  sx={{
                    width: "100%",
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
                    image={"data:image/png;base64," + destination.imageOne}
                    title={`Imagem card destino: ${destination.name}`}
                  />
                  <CardContent sx={{}}>
                    <Typography
                      variant="h5"
                      fontSize="1.6rem"
                      fontWeight="500"
                      textAlign={"center"}
                    >
                      {destination.name}
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
                      {destination.target}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      textAlign={"center"}
                      color="grey.800"
                      fontSize="2rem"
                    >
                      {destination.price &&
                        destination.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
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
            })
          : null}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <Pagination
          count={dContext.destinationList?.totalPages}
          defaultPage={1}
          page={(dContext.pageNumber+1)}          
          boundaryCount={1}
          color="primary"
          size="large"
          onChange={paginationChange}
        />
      </Box>
    </Container>
  );
}
