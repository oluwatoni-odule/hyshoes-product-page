import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import logo from "./logo.svg";

function App() {

  let obj = {
    quantity: 0
  };

  return (
    <div>
      <div
        id="overlay"
        className="transparent-overlay hidden fixed top-0 left-0 bottom-0 right-0 z-20"
        onClick={() => {
          const menuContainer = document.getElementById("menu-container");
          const menuContent = document.getElementById("menu-content");
          const cart = document.getElementById("cart-card");
          const overlay = document.getElementById("overlay");

          cart.classList.add("hidden");
          overlay.classList.add("hidden");
          menuContent.classList.add("hidden");
          menuContainer.classList.remove("w-60vw");
          menuContainer.classList.add("w-0");
        }}
      ></div>
      <Navbar obj={obj} />
      <div className="max-w-7xl mx-auto p-6">
        <ProductPage obj={obj} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
