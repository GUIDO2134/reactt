const product = [
  {
    id: "1",
    name: "iphone 13 Pro",
    price: 1000,
    category: "celular",
    stock: 5,
    Description: "descripcion de iphone 13 Pro",
  },
  { id: "2", name: "iphone 15", price: 1299, category: "celular" },
  { id: "2", name: "samsung 23 plus", price: 899, category: "celular" },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product);
    }, 500);
  });
};
