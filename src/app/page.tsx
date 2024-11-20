import ProductCard from "./components/ProductCard";

const Home = () => {
  const products = [
    {
      id: 1,
      image: "/Images/Luxurywatch.png",
      title: "Product 1",
      price: "20.00",
    },
    {
      id: 2,
      image: "/Images/Luxurywatch.png",
      title: "Product 2",
      price: "35.00",
    },
    {
      id: 3,
      image: "/Images/Luxurywatch.png",
      title: "Product 3",
      price: "15.00",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-200 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 ">Our Products</h1>
      <div className="flex flex-wrap lg:mx-8">
        {products.map((product) => (
          <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
