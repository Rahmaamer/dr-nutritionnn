
// components
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer.jsx"
import Product_slider from "./Product_slider.jsx";
// img
import test from "../../data/imgs/test.png";
// style
import styles from "./product_details.module.css";
// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { Link, useParams } from "react-router-dom";
// font awesome
import {
  faHeart,
  faMessage,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  faBagShopping,
  faCheck,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";


function Product_details() {
  // import data
  let [product, setProduct] = useState({});
  let { productID } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/products_data/${productID}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);

  // usecart
  

  return (
    <>

      <main>
        <section className={styles.main} key={product.id}>
          <div className={styles.left}>
            <div>
              <div className={styles.img}>
                <img src={test} alt="" />
              </div>
            </div>
            <div className={styles.swiper}>
              <Swiper
              
              slidesPerView={"auto"}
              spaceBetween={60}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              
              
              
              >
                
                
                <SwiperSlide className={styles.slide}>
                  <Link to="/product_details">
                    <img src={test} alt="" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <Link to="/product_details">
                    <img src={test} alt="" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                  <Link to="/product_details">
                    <img src={test} alt="" />
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.header}>
              <div className={styles.title}>
                <h3>{product.title}</h3>
                <p>Wheyprotein</p>
              </div>
              <div className={styles.heart}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faHeart} />{" "}
                  <span> {product.heart}</span>
                </div>
              </div>
            </div>

            <div className={styles.sec_header}>
              <div className={styles.price_container}>
                <div> {product.price}</div>
                <div style={{ textDecoration: "line-through" }}>
                  {product.old_price}
                </div>
              </div>

              <div className={styles.details}>
                <div className={styles.icons}>
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                    {product.star}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faMessage} />
                    {product.review}
                  </span>
                </div>
                <div className={styles.persntage}>
                  <span style={{ color: "green" }}>93%</span> of buyers have
                  recommended this.
                </div>
              </div>
            </div>

            <div className={styles.size}>
              <h2>Choose a Size</h2>
              <form action="">
                <div>
                  <input type="radio" id="Small" value="Small" name="size" />
                  <label htmlFor="Small"> Small</label>
                </div>
                <div>
                  <input type="radio" id="Medium" value="Medium" name="size" />
                  <label htmlFor="Medium"> Medium</label>
                </div>
                <div>
                  <input type="radio" id="Large" value="Large" name="size" />
                  <label htmlFor="Large"> Large</label>
                </div>
              </form>
            </div>

            <div className={styles.cart_item}>
              <div className={styles.quantity}>
                <button
                  className={styles.btn}
                 
                >
                  -
                </button>
                <span className={styles.qu}> {product.quantity}</span>
                <button
                  style={{ color: " #1594f8" }}
                  className={styles.btn}
                
                >
                  +
                </button>
              </div>

              <div className={styles.add_item}>
                <span>
              
                  <FontAwesomeIcon icon={faBagShopping} />
                </span>
                <button
                  style={{ color: "white" }}
                  className={styles.btn}
               
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div className={styles.delivery}>
              <div className={styles.content}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faTruck} />
                </span>
                <div>
                  <h4>Free Delivery</h4>
                  <p>Enter your Postal code for Delivery Availability</p>
                </div>
              </div>

              <div className={styles.content}>
                <span className={styles.icon}>
                  {" "}
                  <FontAwesomeIcon icon={faBagShopping} />
                </span>
                <div>
                  <h4>Return Delivery</h4>
                  <p>Free 30 days Delivery Return. Details</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.desc}>
          <div className={styles.title}>
            <h4>Description</h4>
          </div>
          <div className={styles.product_inf}>
            <div className={styles.title}>
              <h2>Product Description</h2>
              <p>
                Whey protein offers numerous health advantages due to its rich
                content of macronutrients and vitamins, making it a valuable
                nutritional source. Low-sugar whey protein is an excellent
                protein source, supplying essential nutrients. Protein plays a
                crucial role in bone maintenance, muscle strengthening, hair
                growth, and supporting various organs within the body
              </p>
            </div>
            <div className={styles.content}>
              <div className={styles.sec_title}>
                <h3>Benefits</h3>
              </div>
              <ul className={styles.ul}>
                <li>
                  {" "}
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  It aids muscle repair and strengthening
                </li>
                <li>
                  {" "}
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  It aids muscle repair and strengthening
                </li>
                <li>
                  {" "}
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  It aids muscle repair and strengthening
                </li>
                <li>
                  {" "}
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  It aids muscle repair and strengthening
                </li>
                <li>
                  {" "}
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  It aids muscle repair and strengthening
                </li>
                <li>
                  {" "}
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  It aids muscle repair and strengthening
                </li>
                <li>
                  {" "}
                  <span className={styles.icon}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  It aids muscle repair and strengthening
                </li>
              </ul>
              <div className={styles.third_title}>
                <h4>Product Details</h4>
                <ul className={styles.ul}>
                  <li>
                    {" "}
                    <span className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    It aids muscle repair and strengthening
                  </li>
                  <li>
                    {" "}
                    <span className={styles.icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    It aids muscle repair and strengthening
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.swiper}>
          <Product_slider/>
        </section>
      </main>
    </>
  );
}

export default Product_details;
