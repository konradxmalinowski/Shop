import CartItem from './CartItem';

import { useContext } from 'react';
import { ShopContext } from '../../store/shop-context-provider';

export default function CartItems() {
  const { products } = useContext(ShopContext);

  const cartItems = products.map((product, idx) => {
    if (product.amount > 0) {
      return <CartItem id={idx} key={idx} />;
    }
  });

  return <div className="added-items">{cartItems}</div>;
}
