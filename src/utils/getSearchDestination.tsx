export default async function getSearchDestination(page: number, name: string) {
  try {
    const res = await fetch(
      `http://localhost:8080/destinos/buscar?name=${name}&page=${page}`
    );
    return res.json();
  } catch (error) {
    return undefined;
  }
}
