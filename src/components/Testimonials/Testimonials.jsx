import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="container py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        What Our Customers Say
      </h2>
      <Slider {...settings}>
        {TestimonialData.map((testimonial) => (
          <div key={testimonial.id} className="text-center p-4">
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-lg italic mb-2">{testimonial.text}</p>
            <h3 className="font-bold">{testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
