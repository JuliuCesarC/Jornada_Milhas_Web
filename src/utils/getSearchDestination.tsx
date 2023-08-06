export default async function getSearchDestination(page: number, name: string) {
  const res = await fetch(`http://localhost:8080/destinos/buscar?name=${name}&page=${page}`);

  if (!res.ok) {
    throw new Error("Falha ao executar a requisição");
  }

  return res.json();
}