import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import styels from "./GetInTouch.module.css";

function GetInTouch() {
  return (
    <>

      <main className={styels.main}>
        <div className={styels.container}>
          <div className={styels.left}>
            <div className={styels.title}>
              <h3>
                Get in <span>Touch</span>
              </h3>
              <p>
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </p>
            </div>
            <form action="">
              <input className={styels.space} type="text" placeholder="Name *" />
             
              <input className={styels.space} type="text" placeholder="Email" />
              <input className={styels.space} type="text" placeholder="Phone Number" />
              <input className={styels.space} type="text" placeholder="Select Country" />
              <input className={styels.space} type="text" placeholder="Select city" />
   

              <button className={styels.btn}>Submit</button>
            </form>
          </div>
          <div className={styels.right}>
            <iframe
              className={styels.frame}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </main>

    </>
  );
}

export default GetInTouch;
