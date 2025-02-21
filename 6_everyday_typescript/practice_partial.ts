interface Product {
  id: number; // Omitted
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    id: 0,
    name: 'Sample Product',
    price: 49.99,
    description: 'A sample product for demonstration',
  }
];

type UpdateableProductFields = Partial<Omit<Product, 'id'>>;

function updateProduct(
  productId: number,
  updatedValues: UpdateableProductFields
): void {
  let product: Product = products[productId];

  if (product) {
    products[productId] = {
      ...product,
      ...updatedValues,
    }
  } else {
    console.log('Product not found');
  }
}

updateProduct(0, {
  name: 'Updated Product Name',
  price: 99.99,
});

console.log(products[0]);