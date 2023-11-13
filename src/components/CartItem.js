// CartItem.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CartItem = (props) => {
  const { item, token, setCart, updateCart, selected, onSelect } = props;
  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(item.quantity * item.product.price);

  const handleQuantityItemPlus = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8521/api/v1/shoppingCartDetails/saveOrUpdate",
        {
          id: item.id,
          product: { id: item.product.id },
          shoppingCart: { id: item.shoppingCart.id },
          quantity: quantity + 1,
        }
      );

      setQuantity(quantity + 1);
      setPrice((quantity + 1) * item.product.price);
      props.updateCart();
      toast.success("Cập nhật sản phẩm thành công");
    } catch (error) {
      console.error(error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };

  const handleQuantityItemMinus = async () => {
    if (quantity === 1) {
      try {
        await axios.delete(
          `http://localhost:8521/api/v1/shoppingCartDetails/delete/${item.id}`
        );

        props.updateCart();

        toast.success("Xóa sản phẩm khỏi giỏ hàng thành công");
      } catch (error) {
        console.error(error);
        toast.error("Có lỗi xảy ra, vui lòng thử lại sau!");
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8521/api/v1/shoppingCartDetails/saveOrUpdate",
          {
            id: item.id,
            product: { id: item.product.id },
            shoppingCart: { id: item.shoppingCart.id },
            quantity: quantity - 1,
          }
        );

        setQuantity(quantity - 1);
        setPrice((quantity - 1) * item.product.price);
        props.updateCart();
        toast.success("Cập nhật sản phẩm thành công");
      } catch (error) {
        console.error(error);
        toast.error("Có lỗi xảy ra, vui lòng thử lại sau!");
      }
    }
  };

  return (
    <div className="row">
      <div className="col-lg-1 col-md-12 mb-4 mb-lg-0">
        <input type="checkbox" checked={selected} onChange={onSelect} />
      </div>
      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
        <img
          src={
            item.product.imageProducts.length > 0
              ? item.product.imageProducts[0].imageLink
              : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-32.png"
          }
          className="w-100"
        />
      </div>

      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
        <p>
          <strong>{item.product.productName}</strong>
        </p>
        <p>{`Đơn giá : ${item.product.price} VND`}</p>
        <button
          type="button"
          className="btn btn-primary btn-sm me-1 mb-2"
          onClick={props.removeItemCart}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
          <button
            type="button"
            className="btn btn-primary px-2 me-2"
            onClick={handleQuantityItemMinus}
          >
            <i className="fas fa-minus"></i>
          </button>

          <div className="form-outline">
            <input
              id="form2"
              min="0"
              name="quantity"
              value={quantity}
              type="number"
              className="form-control"
            />
            <label className="form-label" htmlFor="form1">
              Số lượng
            </label>
          </div>

          <button
            type="button"
            className="btn btn-primary px-2 ms-2"
            onClick={handleQuantityItemPlus}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>

        <p className="text-start text-md-center">
          <strong>{price} VND</strong>
        </p>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default CartItem;
