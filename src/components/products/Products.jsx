import { Link } from "react-router-dom";
import styles from "./products.module.css";
// img
import test from "../../data/imgs/test.png";
// font awesome
import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// react hooks
import { useEffect, useState } from "react";

function Products() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProduct();
  }, []);
  // get products from db
  let getAllProduct = () => {
    fetch("http://localhost:3000/products_data")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  return (
    <>
      <div className={styles.main_container}>
        <h2 className={styles.sec_title}>Popular Product</h2>
        <div className={styles.container}>
          {products.map((product) => {
            return (
              <>
                <div className={styles.box} key={product.id}>
                  <div className={styles.img}>
                    <img src={test} alt="" />
                  </div>
                  <div className={styles.icons}>
                    <div>
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <Link to={`/product_details/${product.id}`}>
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.star}>
                      <FontAwesomeIcon icon={faStar} />

                      <p>4.5</p>
                    </div>
                    <h3>{product.title}</h3>
                    <div className={styles.price}>
                      <div>{product.old_price}</div>
                      <div>{product.price}</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.btn_more}>More Products</div>
      </div>
    </>
  );
}

export default Products;
