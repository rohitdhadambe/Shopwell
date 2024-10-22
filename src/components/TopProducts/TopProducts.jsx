import { AiOutlineHeart } from "react-icons/ai";

const ProductData = [
  {
    id: 1,
    img: "https://picsum.photos/200/200?random=1",
    title: "Product 1",
    price: "$25.00",
  },
  {
    id: 2,
    img: "https://picsum.photos/200/200?random=2",
    title: "Product 2",
    price: "$30.00",
  },
  {
    id: 3,
    img: "https://picsum.photos/200/200?random=3",
    title: "Product 3",
    price: "$15.00",
  },
  {
    id: 4,
    img: "https://picsum.photos/200/200?random=4",
    title: "Product 4",
    price: "$20.00",
  },
  {
    id: 5,
    img: "https://picsum.photos/200/200?random=5",
    title: "Product 5",
    price: "$50.00",
  },
  {
    id: 6,
    img: "https://picsum.photos/200/200?random=6",
    title: "Product 6",
    price: "$40.00",
  },
];

const Products = () => {
  return (
    <div className="container py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProductData.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-xl font-bold">{product.price}</p>
              <button className="bg-primary text-white py-2 px-4 rounded-full mt-2 flex items-center justify-center gap-2">
                Add to Cart <AiOutlineHeart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
