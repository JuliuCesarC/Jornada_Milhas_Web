export default async function getTestimonialList() {
  const res = await fetch("http://localhost:8080/depoimentos-home", {
    next: {
      revalidate: 600,
    },
  });

  if (!res.ok) {
    throw new Error("Falha ao trazer os depoimentos");
  }

  return res.json();
}
export type TTestimonialList = [
  {
    id: number;
    name: string;
    picture: string;
    testimonial: string;
  }
];
