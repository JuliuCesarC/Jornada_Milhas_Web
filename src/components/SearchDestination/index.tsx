"use client";

import styled from "@emotion/styled";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import SearchInputText from "./SearchInputText";

interface SearchDestinationProps {}

const SearchBox = styled.div``;

export default function SearchDestination(props: SearchDestinationProps) {
  return (
    <Container>
      <Box bgcolor="grey.A200" sx={{ width: "100%", p: 3, mt: 4, borderRadius: "20px" }}>
        <Typography variant="h4" sx={{fontSize: "2rem", fontWeight: "400", mb: 4}}>Encontre seu próximo destino</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 120px",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <SearchInputText />
          <Button variant="contained" sx={{height: "70%"}}>Buscar</Button>
        </Box>
      </Box>
    </Container>
  );
}
