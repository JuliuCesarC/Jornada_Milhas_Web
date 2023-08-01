"use client"

import { Box } from "@mui/material"

interface BannerFooterProps {
}

export default function BannerFooter(props : BannerFooterProps){
  return(
    <Box sx={{
      position: "relative",
      width: "100%",
      mt: {xs: 4, lg: 5, xl: 6}
    }}>
      <Box sx={{
        width: "100%",
        height: {xs: "300px", sm: "350px", md: "370px", lg: "400px", xl: "470px"},
        backgroundImage: "url(img/images/banner-bg-home-footer.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundPositionY: "top",
        backgroundSize: "cover"
      }}>
      </Box>
    </Box>
  )
}