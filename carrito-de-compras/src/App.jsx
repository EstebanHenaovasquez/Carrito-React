import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './api/api.jsx';
import { aggCarro } from './carac/carro/carroSlice.jsx';
import { elimiCarro } from './carac/carro/carroSlice.jsx';
import { limCarro } from './carac/carro/carroSlice.jsx';
import Carro from './carac/carro/carro.jsx'

function App() {
  const [products, setProducts] = useState([]);
  const carro = useSelector((state) => state.carro.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadProducts();
  }, []);

  const handleaggCarro = (product) => {
    dispatch(aggCarro(product));
  };
  const handleelimiCarro = (product) => {
    dispatch(elimiCarro(product));
  };
  const handlelimCarro = (product) => {
    dispatch(limCarro(product - 1));
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <div>
        <h2>Productos</h2>
        <div className='cards'>
          {products.map((product) => (
            <div key={product.id} className='cardP'>
              <img src={product.image} alt={product.title}  />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button className='botonP' onClick={() => handleaggCarro(product)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Carrito</h2>
        {carro.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            <Carro />
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

