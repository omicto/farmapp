const items = [{
  images: [
    { imgUrl: "https://via.placeholder.com/149" },
    { imgUrl: "https://via.placeholder.com/150" },
    { imgUrl: "https://via.placeholder.com/151" },
  ],
  name: "IBUPROFENO 400 MG",
  brand: "Algidol",
  unitPrice: 25.0,
  description: "Caja con 10 cápsulas",
  id: 0, // URL
}];

export const getItems = () => items;

export const getItemWithId = (id) => items[id];
