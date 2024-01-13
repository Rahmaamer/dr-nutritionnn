import React, { useState } from 'react';
import styles from "./Quantity.module.css";

const QuantityCounter = () => {
    const [quantity, setQuantity] = useState(0);


    //for quantity counter
      const increment = () => {
        setQuantity(quantity + 1);
      };
    
      const decrement = () => {
        if (quantity > 0) {
          setQuantity(quantity - 1);
        }
      };
    
  return (
    <div className={styles.quantityCounter} style={{ display: 'flex', flexDirection: 'column' }}>
  <h5 style={{ fontSize: '16px', marginBottom: '5px' }}>Quantity</h5>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <button
      className={styles.quantityBtns}
      onClick={decrement}
      style={{borderRadius:'33%'}}
    >
      -
    </button>
    <span>{quantity}</span>
    <button
      className={styles.quantityBtns}
      onClick={increment}
      style={{borderRadius:'33%'}}
    >
      +
    </button>
  </div>
</div>
   
  )
}

export default QuantityCounter