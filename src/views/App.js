// import logo from "./logo.svg";
import "../styles/App.scss";
import Nav from "../views/Nav.js";
import Register from "../views/Register";
import Login from "../views/Login.js";
import { ToastContainer, toast } from "react-toastify";
import ForgotPass from "./ForgotPass";
import "react-toastify/dist/ReactToastify.css";
import Information from "../components/Information";
import Shopping from "./Shopping";
import DetailItem from "../components/DetaiItem";
import Cart from "./Cart";
import OrderDetail from "../components/OrderDetail";
import CheckOut from "./CheckOut";
import Home from "./Home";
import IntroItem from "../components/IntroItem";
import { useState, createContext } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Personal from "./Personal";
// import { AuthProvider } from "./AuthContext";
import { useAuth, AuthProvider } from "../stores/AuthContext"; // Import useAuth từ context

import SuccessOrder from "./SuccessOrder";
import Footer from "../components/Footer";
// import { AuthProvider } from "./AuthContext";
const LogContext = createContext();

function App() {
  const [isLog, setIsLog] = useState(false);
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav value={isLog} />

            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/home" exact>
                <Personal />
              </Route>
              <Route path="/Register">
                <Register />
              </Route>
              <Route path="/Login">
                <Login isLog={isLog} setIsLog={setIsLog} />
              </Route>
              <Route path="/SuccessOrder">
                <SuccessOrder />
              </Route>
              <Route path="/ForgotPass">
                <ForgotPass />
              </Route>
              <Route path="/Info">
                <Information />
              </Route>
              <Route path="/Shopping" exact>
                <Shopping />
              </Route>
              <Route path="/Shopping/:id">
                <DetailItem />
              </Route>

              {/* <Route path="/OrderDetail/:id">
         
                render={(props) => <OrderDetail {...props} />}
              </Route> */}
              <Route path="/OrderDetail/:id" component={OrderDetail} />

              <Route path="/Cart">
                <Cart />
              </Route>

              {/* <Route path="/CheckOut">
                <CheckOut />
              </Route> */}

              <Route
                path="/Checkout"
                render={(props) => <CheckOut {...props} />}
              />
            </Switch>
          </header>

          {/* foooter */}
          <Footer />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
