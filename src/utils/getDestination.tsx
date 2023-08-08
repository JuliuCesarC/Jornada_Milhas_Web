export default async function getDestination(id: string) {
  const res = await fetch("http://localhost:8080/destinos/"+id);

  if (!res.ok) {
    throw new Error("Falha ao executar a requisição");
  }

  return res.json();
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
