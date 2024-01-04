import React from "react";

const Navbar = ({ quantity, updateQuantity }) => {
  return (
    <div>
      <div
        className="w-0 bg-white h-full transition-width duration-300 ease-in-out fixed top-0 left-0 z-30"
        id="menu-container"
      >
        <div className="hidden p-5" id="menu-content">
          <header className="flex items-end mb-10">
            <div
              className="cursor-pointer"
              id="close-btn"
              onClick={() => {
                const menuContainer = document.getElementById("menu-container");
                const menuContent = document.getElementById("menu-content");
                const overlay = document.getElementById("overlay");

                overlay.classList.add("hidden");
                menuContent.classList.add("hidden");
                menuContainer.classList.remove("w-60vw");
                menuContainer.classList.add("w-0");
              }}
            >
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#000"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </header>
          <div className="flex flex-col gap-5">
            <a href="#" className="relative no-underline">
              shop
            </a>
            <a href="#" className="relative no-underline">
              contact
            </a>
          </div>
        </div>
      </div>
      <nav className="fixed bg-violet-600 text-white font-semibold px-14 py-5 sm:px-8 lg:px-24 z-10 w-full flex justify-between items-center">
        <div
          className="flex flex-col gap-1 md:hidden cursor-pointer"
          id="menu"
          onClick={() => {
            const menuContainer = document.getElementById("menu-container");
            const menuContent = document.getElementById("menu-content");
            const overlay = document.getElementById("overlay");

            overlay.classList.remove("hidden");
            menuContent.classList.remove("hidden");
            menuContainer.classList.remove("w-0");
            menuContainer.classList.add("w-60vw");
          }}
        >
          <div className="bg-white h-1 w-10 sm:w-8 rounded-sm"></div>
          <div className="bg-white h-1 w-6 sm:w-4 rounded-sm"></div>
        </div>
        <div id="logo" className="sm:hidden md:block">
          <span className="text-xl font-bold italic uppercase">hyshoes!</span>
        </div>
        <div className="menu-items flex gap-10">
          <a href="#" className="relative no-underline active-section">
            shop
          </a>
          <a href="#" className="relative no-underline">
            contact
          </a>
        </div>
        <div
          id="cart"
          className="cursor-pointer"
          onClick={() => {
            const cart = document.getElementById("cart-card");
            const overlay = document.getElementById("overlay");
            const cartEmpty = document.getElementById("empty");
            const cartItemCon = document.getElementById("cart-item-con");

            cart.classList.toggle("hidden");
            overlay.classList.toggle("hidden");

            if (quantity > 0) {
              cartEmpty.classList.add("hidden");
              cartItemCon.classList.add("flex");
              cartItemCon.classList.remove("hidden");
            } else {
              cartEmpty.classList.remove("hidden");
              cartItemCon.classList.remove("flex");
              cartItemCon.classList.add("hidden");
            }
          }}
        >
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#fff"
              fill-rule="nonzero"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
