import React from "react";
import { Cart } from "../components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmptyState from "../components/EmptyState";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const shippingPrice = useSelector((state) => state.cart.shippingPrice);
  const { cartItems } = cart;
  return (
    <section className="container mx-auto my-4 md:my-10 h-auto max-w-[85%] ">
      <h2 className="my-3 container text-lg font-semibold  ">Your Cart</h2>
      {cartItems.length === 0 ? (
        <EmptyState />
      ) : (
        <Cart cartItems={cartItems} shippingPrice={shippingPrice} />
      )}
    </section>
  );
};

export default CartPage;
