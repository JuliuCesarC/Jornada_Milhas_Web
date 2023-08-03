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
import DestinationList from "../../mocks/DestinationListMock.json";
import { useState } from "react";
import getDestinationList, { IDestinationList } from "@/utils/getDestinationList";

interface CardsDestinationProps {
  dList: IDestinationList
}

export default function CardsDestination(props: CardsDestinationProps) {
  const [destinationList, setDestinationList] = useState(props.dList.content);
  const [pageNumber, setPageNumber] = useState<number>(
    props.dList.pageNumber + 1
  );
  const totalPages = props.dList.totalPages
  const pageWidth = "90%";  

  async function paginationChange(event: React.ChangeEvent<unknown>, value: number) {
    const getList: IDestinationList = await getDestinationList(value - 1);
    setDestinationList(getList.content)
    setPageNumber(value);
  }
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
        {destinationList.map((destination, index) => {
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
                  image={"data:image/png;base64,"+destination.imageOne}
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
                    {/* {destination.price} */}
                    R$ 9347,08
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
          count={totalPages}
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