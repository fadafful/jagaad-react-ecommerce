// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./hooks/UseAuth";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductCard from "./components/productCard/ProductCard";
import PrivateRoute from "./components/PrivateRoute";
import { ProductProvider } from "./context/ProductContext";
function App() {
  const [isAuthenticated] = useAuth();
  return (
    <ProductProvider>
      <Router>
        <div>
          <Nav />
          <Hero />
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
    </ProductProvider>
  );
}
export default App;
