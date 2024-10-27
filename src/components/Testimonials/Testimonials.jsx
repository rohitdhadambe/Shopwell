import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Rohit Dhadambe",
    text:"A wonderful shopping experience! The site is easy to navigate, and the products are of great quality. My orders always arrive on time, and the packaging is excellent. I especially appreciate the attention to detail and care in every order.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Rohan Deshmukh",
    text:"I’ve been shopping here for months, and the customer service is top-notch. They respond quickly and help with any questions. Sometimes, items go out of stock fast, but they restock quickly. Overall, very satisfied with my experience!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Riya Rathod",
    text:"Absolutely amazing! The variety of products is fantastic, and I always find exactly what I need. The checkout process is quick and smooth, and I love the discounts. Highly recommended for anyone looking for quality and convenience!",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "sanika Mile",
    text:"A wonderful shopping experience! The site is easy to navigate, and the products are of great quality. My orders always arrive on time, and the packaging is excellent. I especially appreciate the attention to detail and care in every order.",
    img: "https://picsum.photos/101/101",
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
