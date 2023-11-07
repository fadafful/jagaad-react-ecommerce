// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/UseAuth";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductCard from "./components/productCard/ProductCard";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from 'react-redux';
function App() {
  const [isAuthenticated] = useAuth();
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Nav />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/login"
              exact
              element={isAuthenticated ? <Dashboard /> : <Login />}
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductCard />} />{" "}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
