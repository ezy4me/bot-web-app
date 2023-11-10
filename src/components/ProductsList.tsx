import ProductItem from "./ProductItem";

const products = [
  {
    id: "1",
    brand: "Toyota",
    model: "Camry",
    price: 30000,
    description: "Седан, бензин",
  },
  {
    id: "2",
    brand: "Honda",
    model: "Civic",
    price: 25000,
    description: "Хэтчбек, гибрид",
  },
  {
    id: "3",
    brand: "Ford",
    model: "Escape",
    price: 35000,
    description: "Внедорожник, бензин",
  },
  {
    id: "4",
    brand: "Chevrolet",
    model: "Malibu",
    price: 28000,
    description: "Седан, бензин",
  },
  {
    id: "5",
    brand: "Tesla",
    model: "Model 3",
    price: 50000,
    description: "Электрокар, седан",
  },
  {
    id: "6",
    brand: "Nissan",
    model: "Rogue",
    price: 32000,
    description: "Внедорожник, бензин",
  },
  {
    id: "7",
    brand: "BMW",
    model: "X5",
    price: 60000,
    description: "Внедорожник, дизель",
  },
  {
    id: "8",
    brand: "Mercedes-Benz",
    model: "C-Class",
    price: 45000,
    description: "Седан, дизель",
  },
];

const ProductsList = () => {
  const onAdd = (product: any) => {
    console.log(product);
  };

  return (
    <div className="products">
      <div className="products__list">
        {products.map((item) => (
          <ProductItem product={item} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
