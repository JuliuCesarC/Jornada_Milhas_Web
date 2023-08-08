import ImageBase64 from "@/utils/ImageBase64";
import { Box } from "@mui/material";

interface ImageCardDestinationProps {
  image: string;
}

export default function ImageCardDestination(props: ImageCardDestinationProps) {
  return (
    <Box
      sx={{
        width: "100%",
        aspectRatio: "2/1",
        border: "1px solid",
        borderColor: "grey.400",
        borderRadius: 1,
        overflow: "hidden",
        backgroundImage: "url(" + ImageBase64(props.image) + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
    </Box>
  );
}
