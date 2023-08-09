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
import Link from "next/link";
import ImageBase64 from "@/utils/ImageBase64";
import DestinationList from "./DestinationList";
import DestinationListSkeleton from "./DestinationListSkeleton";

export default function Destination() {
  const dContext = useContext(DestinationContext);
  const pageWidth = "90%";

  useEffect(() => {
    if(dContext.destinationList)return;
    updateInitialProps();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateInitialProps() {
    dContext.changeDestinationList(dContext.pageNumber);
  }

  async function paginationChange(
    event: React.ChangeEvent<unknown>,
    value: number
  ) {
    if (value < 0) return;
    dContext.changeDestinationList(value - 1);
    dContext.setPageNumber(value - 1);
  }
  return (
    <Container>
      <Typography variant="h4" sx={{ width: pageWidth, m: "auto", py: 4 }}>
        Destinos
      </Typography>
      {dContext.lastSearch && (
        <SearchChip
          pageWidth={pageWidth}
          lastSearch={dContext.lastSearch}
          resetDestinationList={dContext.resetDestinationList}
        />
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
        {dContext.destinationList && !dContext.LoadingState
          ? <DestinationList dContext={dContext} />
          : <DestinationListSkeleton />}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <Pagination
          count={dContext.destinationList?.totalPages}
          defaultPage={1}
          page={dContext.pageNumber + 1}
          boundaryCount={1}
          color="primary"
          size="large"
          onChange={paginationChange}
        />
      </Box>
    </Container>
  );
}
