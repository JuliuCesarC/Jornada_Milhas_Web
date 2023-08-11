export default async function getDestinationList(page: number) {
  try {
    const res = await fetch("http://localhost:8080/destinos?page=" + page);
    return res.json();
  } catch (error) {
    return undefined;
  }
}

export interface IDestinationList {
  content: {
    id: number;
    imageOne: string;
    name: string;
    target: string;
    price: number;
  }[];
  number: number;
  totalPages: number;
}
