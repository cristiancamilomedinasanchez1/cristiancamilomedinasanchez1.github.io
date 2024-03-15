import React, { useEffect, useState } from 'react';
import axios from 'axios';


function CarToBuy({ setCarBuy ,carBuy, totalPrice, setTotalPrice }) {
const urlPay = 'http://localhost:4000/create-checkout-session'

  useEffect(() => {
    if (!carBuy) return; // Evitar que se ejecute si carBuy es null

    const totalProducts = carBuy.map(product => {
      return product;
    });

    const totalPrice = carBuy.reduce((total, product) => {
      // Asegúrate de que el precio sea un número válido
      const productPrice = parseFloat(product.price);
      if (!isNaN(productPrice)) {
        console.log(`Precio del producto '${product.name}': ${productPrice}`);
        return total + productPrice;
      } else {
        console.error(`El precio del producto '${product.name}' no es un número válido.`);
        return total; // Si el precio no es válido, no lo sumes al total
      }
    }, 0);

    setTotalPrice({ products: totalProducts, pay: totalPrice });
  }, [carBuy]);

  const handlePurchase = async () => {
    try {
      const response = await axios.post(urlPay, {
        pay: totalPrice.pay,
        products: totalPrice.products
      });
      console.log('Compra exitosa:', response.data);
      // Realiza cualquier acción adicional después de una compra exitosa
    } catch (error) {
      console.error('Error al realizar la compra:', error);
      // Maneja el error de manera adecuada (por ejemplo, muestra un mensaje al usuario)
    }
  };

  const deleteItem = (itemThrash) => {
    const filterCar =carBuy.filter((item) =>  { return item.name !== itemThrash} ) 
    setCarBuy(filterCar)
  }


  return (
    <div className='car-buy-container'>
      <h1>Carbuy</h1>
      {
        carBuy.map((buy, index) => {
          return (
            <div key={index}>
              <h2>name product: {buy.name} price product: {buy.price} <button onClick={() => deleteItem(buy.name)}>x</button></h2>
            </div>
          );
        })
      }
      <h2>Total Price: ${totalPrice.pay}<button onClick={handlePurchase}>Do Buy</button> </h2>
      
    </div>
  );
}

export default CarToBuy;