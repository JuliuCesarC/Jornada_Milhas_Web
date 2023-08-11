import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { DestinationContextType } from "../../Context/DestinationContext";
import Link from "next/link";
import ImageBase64 from "@/utils/ImageBase64";

interface DestinationListProps {
  dContext: DestinationContextType;
}

export default function DestinationList(props: DestinationListProps) {
  return (
    <>
      {props.dContext.destinationList!.content.map((destination, index) => {
        if (index > 5) return;
        return (
          <Card
            sx={{
              width: "100%",
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
              image={
                !props.dContext.mockDestinationList
                  ? ImageBase64(destination.imageOne)
                  : destination.imageOne
              }
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
                {destination.price &&
                  destination.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                sx={{ width: "95%", p: 0, mx: "auto", mb: 3 }}
              >
                <Link
                  href={{
                    pathname: "/destino",
                    query: { id: destination.id.toString() },
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "6px 16px",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  ver detalhes
                </Link>
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
