export default async function getDestination(id: string) {
  try {
    const res = await fetch("http://localhost:8080/destinos/" + id);
    return res.json();
  } catch (error) {
    return undefined;
  }
}

export type DestinationType = {
  id: number;
  imageOne: string;
  imageTwo: string;
  name: string;
  target: string;
  destinationDescription: string;
  price: number;
};
