import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

import logoTagline from "../../../public/img/logo/Logo-branco-com-tagline.png";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <Box sx={{ py: 4, bgcolor: "grey.A700", color: "white" }}>
      <Container
        sx={{
          py: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box>
          <Image
            src={logoTagline}
            alt="Logo jornada milhas"
            width={200}
            style={{ marginBottom: "10px" }}
          />
          <Typography component="p" fontSize="1rem" marginBottom="10px">
            Horário de atendimento: 08h - 20h (Segunda a Sábado)
          </Typography>
          <Typography component="p" fontSize="0.9rem" fontWeight={500}>
            Desenvolvido por Alura. Projeto fictício sem fins comerciais.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography component="p" fontSize="1rem">
            Acesse nossas redes:
          </Typography>
          <SocialMedia gitHubLink="https://github.com/JuliuCesarC/Jornada_Milhas_Web" />
        </Box>
      </Container>
    </Box>
  );
}
