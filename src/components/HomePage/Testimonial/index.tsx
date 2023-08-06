import getTestimonialList from "@/utils/getTestimonialList";
import CardsTestimonial from "./CardsTestimonial";

export default async function Testimonial() {
  const testimonialList: any = await getTestimonialList();
  return <CardsTestimonial testimonialList={testimonialList} />;
}
