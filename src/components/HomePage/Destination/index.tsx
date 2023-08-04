import getDestinationList from "@/utils/getDestinationList";
import CardsDestination from "./CardsDestination";

export default async function Destination() {
  const destinationList: any = await getDestinationList(0);

  return <CardsDestination dList={destinationList} />;
}
