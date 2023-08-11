"use client";

import {
  Box,
  Container,
  Pagination,
  Typography
} from "@mui/material";
import { useContext, useEffect } from "react";
import { DestinationContext } from "../../Context/DestinationContext";
import DestinationList from "./DestinationList";
import DestinationListSkeleton from "./DestinationListSkeleton";
import SearchChip from "./SearchChip";

export default function Destination() {
  const dContext = useContext(DestinationContext);
  const pageWidth = "90%";

  useEffect(() => {
    if(dContext.destinationList)return;
    dContext.changeDestinationList(dContext.pageNumber);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
