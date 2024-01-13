import React, { useState } from 'react';
//import css
import styles from "./paymentinfo.module.css";
//img
import creditCard from "../../data/imgs/credit-card-1.png";
import pay from "../../data/imgs/paypal-1.png";
import itemImg from "../../data/imgs/rectangle-4.png";
import QuantityCounter from './QuantityCounter';
import PaymentFormm from './PaymentForm';

const Paymentinfo = () => {
  const [isProceed, setIsProceed] = useState(false);


  const myOrders = [
    {
      title: "ISPURE",
      paragraph: "Whey protein offers numerous benefits, making it a valuable nutritional source.",
      price: "$165.00",

    },
    {
      title: "ISPURE",
      paragraph: "Whey protein offers numerous benefits, making it a valuable nutritional source.",
      price: "$120.00",
    },
  ];

  const subtotalData = [
    { label: 'Subtotal', amount: '$654.00' },
    { label: 'Shipping', amount: '$654.00' },
    { label: 'Vat,tax', amount: '$654.00' },
  ];

  const handleCancelClick = () => {
    setIsProceed(false);
  };


  return (
    <>

      <section className={styles.paymentSection} >

        <div className={styles.paymentDiv}>

          {isProceed ? (

//payment methods
            <form className= {styles.payMethods}>
              <h3 className={styles.paymentMethodTitle}>Payment Methods</h3>
              <div className={styles.paymentRadio} >
                <label style={{ marginRight: '1rem', display: "flex" }}>
                  <input type="radio" name="group1" />
                  <img src={creditCard} alt="credit" style={{ maxWidth: '100%' }} />
                </label>

                <label style={{ display: "flex" }}>
                  <input type="radio" name="group1" />
                  <img src={pay} alt="pay" style={{ maxWidth: '100%' }} />
                </label>
              </div>

              <h3 className={styles.paymentDetailsPara}>
                Payment Details
              </h3>

              <div style={{ marginBottom: '1rem', textAlign: "left" }}>
                <label htmlFor="CardName" >
                  Name on card
                </label>
                <input
                  type="text"
                  id={styles.CardName}
                  placeholder="Enter Name of Card"
                />
              </div>

              <div style={{ marginBottom: '1rem', textAlign: "left" }}>
                <label htmlFor="visaCardNumber">Card number</label>
                <input
                  type="text"
                  id={styles.visaCardNumber}
                  placeholder="Enter Visa Card Number"
                  maxLength="16"
                />
              </div>

              <div style={{ display: 'flex', marginBottom: '1rem', textAlign: "left" }}>
                <div style={{ flex: 1 }}>
                  <label className={styles.expirationLabel} htmlFor="expirationDate" >
                    Expiration Date (MM/YY)
                  </label>
                  <input
                    type="text"
                    id={styles.expirationDate}
                    placeholder="MM/YY"
                    maxLength="5"
                  />
                </div>

                <div style={{ flex: 1, marginLeft: '1rem', textAlign: "left" }}>
                  <label className={styles.cvcText} htmlFor="cvc" >CVC</label>
                  <input
                    type="text"
                    id={styles.cvc}
                    placeholder="CVC"
                    maxLength="3"
                  />
                </div>
              </div>

              <p className={styles.paymentAgreement}>
                By Clicking "Confirm Payment" I agree to the companies term of services
              </p>

              <div className={styles.paymentBtns}>
                <button className={styles.cancelBtn} type="button" onClick={handleCancelClick} style={{ marginRight: '1rem' }}>Cancel order</button>
                <button className={styles.completeBtns} type="submit">Complete order</button>
              </div>
            </form>
          ) : (


//payment form infp
            <PaymentFormm setIsProceed={setIsProceed} />
          )}


          {/* right card */}

          <div className={styles.orders} >
            <div className={styles.orderCard}>
              <h3  className={styles.orderTitles}>
                Your Order
              </h3>
              <hr/>

              {myOrders.map((item, index) => (
                <div key={index} style={{ margin: '20px 0' }}>
                  <h4 style={{ textAlign: 'left', marginLeft: '20px' }} className={styles.orderTitle}>
                    {item.title}
                  </h4>

                  <div style={{ display: 'flex' }}>
                    <img className={styles.orderImgs} src={itemImg} alt="itemImg" />

                    <p style={{ textAlign: 'left', marginLeft: '20px', marginTop: '20px' }} className={styles.orderParagraph}>
                      {item.paragraph}
                    </p>

                    <QuantityCounter />
                  </div>


                  <div style={{
                    display: 'flex',

                    justifyContent: "space-between"
                  }} className={styles.sizeDropDown}>
                    <h5 style={{ fontSize: '16px', marginBottom: '30px' }}>Size:</h5>
                    <select className={styles.sizeSelection}>
                      <option value="">Select Size</option>
                      <option value="small">Small Size</option>
                      <option value="medium">Medium Size</option>
                      <option value="big">Big Size</option>
                    </select>
                    <p style={{ fontSize: '20px' }} >
                      {item.price}
                    </p>
                  </div>
                  <hr/>
                </div>
              ))}
              {subtotalData.map((data, index) => (
                <div key={index} className={styles.subtotalData}>
                  <p>{data.label}</p>
                  <p>{data.amount}</p>
                </div>
              ))}
              <hr/>
              <div className={styles.totalDiv}>
                <p>Total</p>
                <p>$778.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Paymentinfo;