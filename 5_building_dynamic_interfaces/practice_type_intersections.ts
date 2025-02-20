// type Product = {
//   name: string;
//   price: number;
// };

// type Shipping = {
//   weight: number;
//   shippingCost: number;
// };

// type ShippableProduct = Product & Shipping;

interface Product {
  name: string;
  price: number;
}

interface Shipping {
  weight: number;
  shippingCost: number;
};

interface ShippableProduct extends Product, Shipping {}