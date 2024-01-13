import { Routes, Route } from "react-router-dom";
import Sign_in from "./components/sign/Sign_in";
import Sign_up from "./components/sign/Sign_up";
import Second_sign_up from "./components/sign/Second_sign_up";
import Home from "./pages/home/Home";
import Product_details from "./pages/product/Product_details";
import About from "./pages/about/About";
import Address from "./pages/address/Address";
import Profile from "./pages/profile/Profile";
import Fit from "./pages/fit/fit";
import HealthPackages from "./pages/Health package/HealthPackages";
import GetInTouch from "./pages/Getintouch/GetInTouch";
import BmiCalc from './pages/Bmi/BmiCalc';
import Paymentinfo from "./pages/payment/Paymentinfo";
import Root from "./components/Root";
<<<<<<< Updated upstream
import Edit from "./pages/Edit/DashboardEdit";

=======
import Favorite from "./pages/favorite/Favorite";
>>>>>>> Stashed changes

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Root />}>
        {/* <Route index element={<Sign_in />} />
        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/second_sign_up" element={<Second_sign_up />} /> */}
        <Route index element={<Home />} />
        <Route
          path="/product_details/:productID"
          element={<Product_details />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/address" element={<Address />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/fit" element={<Fit />} />
        <Route path="/health_packeges" element={<HealthPackages />} />
        <Route path="/get_in_touch" element={<GetInTouch />} />
        <Route path="/edit" element={<Edit/>} />

        <Route path="/bmi" element={<BmiCalc />} />
        <Route path="/payment" element={<Paymentinfo />} />
        <Route path="/favorite" element={<Favorite/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
