import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";

export default function DestinationListSkeleton() {
  const elements = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {elements.map((e, index) => {
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
            <CardMedia sx={{ height: 250 }}>
              <Skeleton
                sx={{
                  width: "100%",
                  height: "450px",
                  mb: "-10px",
                  mt: "-100px",
                }}
              />
            </CardMedia>
            <CardContent>
              <Skeleton
                sx={{
                  width: "70%",
                  height: "3.5rem",
                  mx: "auto",
                  my: 1,
                }}
              />
              <Box
                sx={{
                  my: 1,
                }}
              >
                <Skeleton width="90%" height="1.2rem" />
                <Skeleton width="75%" height="1.2rem" />
              </Box>
              <Skeleton width="85%" height="4rem" sx={{ m: "auto", mb: "-25px" }} />
            </CardContent>
            <CardActions>
              <Skeleton width="95%" height="4.2rem" sx={{ mx: "auto", mb: 1 }} />
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
