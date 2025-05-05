import DeleteButton from './DeleteButton';
import { ShopContext } from '../../store/shop-context-provider';

import { useContext } from 'react';

const CartItem = ({ id }) => {
  const { products } = useContext(ShopContext);

  return (
    <div className="cart-item">
      <div className="left-wrapper">
        <span className="item-name">{products?.[id]?.name}</span>
        <div>
          <span className="amount">
            {parseFloat(products?.[id]?.amount).toFixed()}x
          </span>
          <span className="price-per-piece">
            @{parseFloat(products?.[id]?.price).toFixed(2)}
          </span>
          <span className="total-price">
            {(
              parseFloat(products?.[id]?.amount) *
              parseFloat(products?.[id]?.price)
            ).toFixed(2)}
            $
          </span>
        </div>
      </div>
      <DeleteButton id={id} />
    </div>
  );
};

export default CartItem;
