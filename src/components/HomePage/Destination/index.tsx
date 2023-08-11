"use client";

import { Box, Container, Pagination, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { DestinationListContext } from "../../Context/DestinationListContext";
import DestinationList from "./DestinationList";
import DestinationListSkeleton from "./DestinationListSkeleton";
import SearchChip from "./SearchChip";
import { DestinationPageContext } from "@/components/Context/DestinationPageContext";

export default function Destination() {
  const destinationContext = useContext(DestinationListContext);
  const destinationPageContext = useContext(DestinationPageContext);
  const pageWidth = "90%";

  useEffect(() => {
    if (destinationContext.destinationList) return;
    destinationContext.changeDestinationList(destinationContext.pageNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function paginationChange(
    event: React.ChangeEvent<unknown>,
    value: number
  ) {
    if (value < 0) return;
    destinationContext.changeDestinationList(value - 1);
    destinationContext.setPageNumber(value - 1);
  }
  return (
    <Container>
      <Typography variant="h4" sx={{ width: pageWidth, m: "auto", py: 4 }}>
        Destinos
      </Typography>
      {destinationContext.lastSearch && (
        <SearchChip
          pageWidth={pageWidth}
          lastSearch={destinationContext.lastSearch}
          resetDestinationList={destinationContext.resetDestinationList}
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
        {destinationContext.destinationList &&
        !destinationContext.LoadingState ? (
          <DestinationList
            destinationContext={destinationContext}
            destinationPageContext={destinationPageContext}
          />
        ) : (
          <DestinationListSkeleton />
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <Pagination
          count={destinationContext.destinationList?.totalPages}
          defaultPage={1}
          page={destinationContext.pageNumber + 1}
          boundaryCount={1}
          color="primary"
          size="large"
          onChange={paginationChange}
        />
      </Box>
    </Container>
  );
}
