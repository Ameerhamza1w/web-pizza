// /pages/api/products.js

export default function handler(req, res) {
  console.log("Fetching products...");
  const products = [
    {
      id: 1,
      name: "Tandoori Pizza",
      price: 10,
      image:
        "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    },
    {
      id: 2,
      name: "Pizza 2",
      price: 20,
      image:
        "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    },
    {
      id: 3,
      name: "Pizza 3",
      price: 30,
      image:
        "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    },
    {
      id: 4,
      name: "Pizza 4",
      price: 40,
      image:
        "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    },
    {
      id: 5,
      name: "Pizza 5",
      price: 50,
      image:
        "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    },
    {
      id: 6,
      name: "Pizza 6",
      price: 70,
      image:
        "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    },
  ];

  res.status(200).json(products);
}
