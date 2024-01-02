import React, { useState } from "react";

const ProductPage = ({quantity, updateQuantity}) => {
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5d780ab4-8114-4778-a011-e2d1cbf63ff5/invincible-3-mens-road-running-shoes-4xHjXL.png",
    img2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/invincible-3-mens-road-running-shoes-4xHjXL.png",
    img3: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/44fc74b6-0553-4eef-a0cc-db4f815c9450/invincible-3-mens-road-running-shoes-4xHjXL.png",
    img4: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d3eb254d-0901-4158-956a-4610180545e5/invincible-3-mens-road-running-shoes-4xHjXL.png",
  });

  const [activeImg, setActiveImg] = useState(images.img1);
  const [amount, setAmount] = useState(1);
  

  return (
    <div
      className="flex relative flex-col justify-between gap-16 lg:flex-row mt-16"
      id="shop"
    >
      {/* Cart card */}
      <div
        className="fixed shadow-md border-t-2 md:w-4/5 h-60 lg:w-1/2 p-2 rounded-md right-5 top-18 hidden z-30 bg-white sm:w-5/6 sm:right-4"
        id="cart-card"
      >
        <div className="flex flex-col" id="cart-content">
          <header className="flex justify-between px-2 py-1 border-b-2">
            <span className="italic font-semibold text-sm">Cart items</span>
            <div
              className="cursor-pointer"
              id="close-btn"
              onClick={() => {
                const overlay = document.getElementById("overlay");
                const cart = document.getElementById("cart-card");

                cart.classList.add("hidden");
                overlay.classList.add("hidden");
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
          <div
            className="flex items-center py-5 flex-col"
            id="cart-item-container"
          >
            <p className="font-semibold" id="empty">
              Empty
            </p>
            <div
              className="flex flex-col w-full gap-10 p-5 font-semibold"
              id="cart-item-con"
            >
              <div id="cart-item" className="flex justify-between">
              <span>
                Nike Invincible <b>x</b> {quantity} = ${quantity * 190}.00
              </span>
              <div
                className=""
                id="delete"
                onClick={() => {
                  const cartEmpty = document.getElementById("empty");
                  const cartItem = document.getElementById("cart-item-con");

                  cartEmpty.classList.remove('hidden');
                  cartItem.classList.add('hidden');

                  updateQuantity(0);
                }}
              >
                <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    id="a"
                    fill="#000"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
              </div>
              <button
                className="bg-violet-600 text-white font-semibold py-3 w-full rounded-md"
                id="checkout"
                onClick={() => {
                  const cart = document.getElementById("cart-card");
                  const overlay = document.getElementById('overlay');

                  updateQuantity(0);
                  cart.classList.add("hidden");
                  overlay.classList.add('hidden');

                  alert('Order recieved!')
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Page Body */}
      <div className="flex flex-col gap-6">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between h-20 items-center">
          <img
            src={images.img1}
            alt=""
            className="w-14 h-14 md:w-24 md:h-24 lg:w-14 lg:h-14 xl:w-24 xl:h-24  rounded-md cursor-pointer"
            onClick={() => {
              setActiveImg(images.img1);
            }}
          />
          <img
            src={images.img2}
            alt=""
            className="w-14 h-14 md:w-24 md:h-24 lg:w-14 lg:h-14 xl:w-24 xl:h-24 rounded-md cursor-pointer"
            onClick={() => {
              setActiveImg(images.img2);
            }}
          />
          <img
            src={images.img3}
            alt=""
            className="w-14 h-14 md:w-24 md:h-24 lg:w-14 lg:h-14 xl:w-24 xl:h-24  rounded-md cursor-pointer"
            onClick={() => {
              setActiveImg(images.img3);
            }}
          />
          <img
            src={images.img4}
            alt=""
            className="w-14 h-14 md:w-24 md:h-24 lg:w-14 lg:h-14 xl:w-24 xl:h-24  rounded-md cursor-pointer"
            onClick={() => {
              setActiveImg(images.img4);
            }}
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-6 lg:justify-center">
        <div>
          <span className="text-violet-600 font-semibold uppercase">
            Special Sneaker
          </span>
          <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
        </div>
        <p className="text-gray-700 font-semibold">
          With maximum cushioning to support every mile, the Invincible 3 has
          our highest level of comfort underfoot. Its plush and bouncy ZoomX
          foam helps you stay stable and fresh. In other words—it's going to
          feel good all day, no matter what you're doing. It has everything you
          need so you can propel down your preferred path and come back for your
          next run feeling ready and reinvigorated.
        </p>
        <h6 className="text-2xl font-semibold">$190.00</h6>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex gap-6 justify-between items-center bg-gray-100 lg:w-1/2">
            <button
              className="bg-gray-200 rounded-lg text-violet-600 text-xl font-bold px-6 py-2"
              onClick={() => {
                if (amount > 1) {
                  setAmount(amount - 1);
                }
              }}
            >
              -
            </button>
            <span className="text-xl font-bold" id="amount">
              {amount}
            </span>
            <button
              className="bg-gray-200 rounded-lg text-violet-600 text-xl font-bold px-6 py-2"
              onClick={() => {
                setAmount(amount + 1);
                console.log(quantity, amount)
              }}
            >
              +
            </button>
          </div>

          {/* ADD TO CART */}
          <button
            className="bg-gray-700 rounded-md font-semibold text-white py-2 flex-1 hover:bg-gray-500"
            onClick={() => {
              // const cartItem = document.getElementById("cart-item-con");
              // const cartEmpty = document.getElementById("empty");

              // cartEmpty.classList.add("hidden");
              // cartItem.classList.remove("hidden");
              // cartItem.classList.add("flex");
            // 
           
            updateQuantity(amount + quantity);
            setAmount(1);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
