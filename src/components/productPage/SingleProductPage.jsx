import React, { useContext, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { ProductsContext } from "../../context/products-context";
import { CartContext } from "../../context/cart-context";
import { isInCart } from "../../helpers";

const SingleProductPage = ({ match, history: { push } }) => {
  const { products } = useContext(ProductsContext);
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));

    // se produto não existe redirecionar para página do produto
    if (!product) {
      return push("/");
    }

    setProduct(product);
  }, [id, product, products, push]);
  if (!product) {
    return null;
  }
  const { imageURL, title, price, description } = product;
  const itemInCart = isInCart(product, cartItems);
  return (
    <section className="product__page__wrap">
      <div className="product__page__container">
        <div className="product__page__wrapper">
          <div className="product__page__img__wrap">
            <img src={imageURL} alt={title} className="product__page__img" />
          </div>

          <div className="product__page__title">
            <h1>{title}</h1>
            <p className="product__page__price">R$ {price}</p>
          </div>
          <div className="product__page__description">
            <h3 className="product__page__description__h3">Sobre o prato</h3>
            <p className="product__description">{description}</p>
          </div>
          <div className="product__page__btn">
            {!itemInCart && (
              <button
                className="btn__product btn__sg__primary"
                onClick={() => addProduct(product)}
              >
                {""}
                pedir
              </button>
            )}
            {itemInCart && (
              <button
                className="btn__product btn__sg__primary"
                onClick={() => increase(product)}
              >
                {" "}
                pedir mais um?
              </button>
            )}
            <Link to="/cozinha" className="btn__product btn__sg__secondary">
              <p>checkout</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(SingleProductPage);
