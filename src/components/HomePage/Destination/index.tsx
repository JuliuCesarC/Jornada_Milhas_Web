import getDestinationList, { IDestinationList } from "@/utils/getDestinationList";
import CardsDestination from "./CardsDestination";

interface DestinationProps {}

export default async function Destination(props: DestinationProps) {

const destinationList: IDestinationList = await getDestinationList();

  return (
    <CardsDestination dList={destinationList} />
  );
}
