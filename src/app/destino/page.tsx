import BannerDestination from "@/components/DestinationPage/BannerDestination";
import ContentDestination from "@/components/DestinationPage/ContentDestination";
import { Box } from "@mui/material";

interface DestinoProps {
}

export default function Destino(props : DestinoProps){

  return(
    <Box>
      <BannerDestination />
      <ContentDestination />
    </Box>
  )
}