async function getData(page: number) {
  const res = await fetch("http://localhost:8080/destinos?page="+page);

  if (!res.ok) {
    throw new Error("Falha ao executar a requisição");
  }

  return res.json();
}

export interface IDestinationList {
  content: [
    {
      id: number;
      imageOne: string;
      imageTwo: string;
      name: string;
      target: string;
      price: number;
    }
  ];
  pageNumber: number;
  totalPages: number;
}

export default async function getDestinationList(page?: number) {
  const data: any = await getData(page || 0);

  const destinationList : IDestinationList = {
    content: data.content,
    pageNumber: data.number,
    totalPages: data.totalPages
  };

  return destinationList;
}
