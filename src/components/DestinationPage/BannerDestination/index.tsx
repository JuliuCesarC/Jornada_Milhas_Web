import { Box } from "@mui/material";

export default function BannerDestination() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "80px", md: "90px", lg: "100px", xl: "120px" },
        backgroundImage: "url(img/images/banner-destination.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundPositionY: "bottom",
        backgroundSize: "cover",
      }}
    ></Box>
  );
}
