import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { elimiCarro, limCarro } from './carroSlice'; 
import '../../style.css'

const Carro = () => {
  const dispatch = useDispatch();
  const carroItems = useSelector((state) => state.carro.items); 
  const handleelimiCarro = (product) => {
    dispatch(elimiCarro(product)); 
  };

  const handlelimCarro = () => {
    dispatch(limCarro()); 
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carroItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul className='cardsca'>
            {carroItems.map((item) => (
              <li key={item.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                    <img src={item.image} alt={item.title} width={50} />
                    <p>{item.title}</p>
                    <p>{item.quantity} x ${item.price}</p>
                  </div>
                  <button className='boton' onClick={() => handleelimiCarro(item)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '20px' }}>
            <button className='boton' onClick={handlelimCarro}>Vaciar Carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carro;
