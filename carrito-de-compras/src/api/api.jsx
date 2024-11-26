export const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Error fetching products');
    }
    const data = await response.json();
    return data;
  };
  