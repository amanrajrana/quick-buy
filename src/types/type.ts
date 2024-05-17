export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CartItem = {
  id: number;
  quantity: number;
};
