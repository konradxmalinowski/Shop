import { useContext } from 'react';
import { ShopContext } from '../../store/shop-context-provider';
import CartItems from './CartItems';

import './styles/cart.css';
import cakeImage from '../../images/illustration-empty-cart.svg';
import carbonNeutralImage from '../../images/icon-carbon-neutral.svg';

export default function Cart() {
  const { products, sumPrices, handleOrderConfirm, toggleHistory } =
    useContext(ShopContext);

  const numberOfAddedProducts = (
    <h3>
      Your card ({products.filter((product) => product.amount > 0).length})
    </h3>
  );

  return (
    <div className="cart">
      <button className="cart_button--history" onClick={toggleHistory}>
        History
      </button>
      {products.filter((product) => product.amount > 0).length === 0 ? (
        <img src={cakeImage} alt="empty card illustration" loading="lazy" />
      ) : (
        <>
          {numberOfAddedProducts}
          <CartItems />

          <div className="order-total">
            <span className="grey">Order Total</span>
            <span className="weight-900">
              {sumPrices(products).toFixed(2)}$
            </span>
          </div>

          <div className="info">
            <img
              src={carbonNeutralImage}
              alt="carbon neutral icon"
              loading="lazy"
            />
            <span className="grey">
              This is <span className="weight-800">carbon neutral</span>
              delivery
            </span>
          </div>

          <button
            className="confirm-delivery-button"
            onClick={handleOrderConfirm}
          >
            Confirm order
          </button>
        </>
      )}
    </div>
  );
}
