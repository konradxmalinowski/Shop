import { useContext } from 'react';
import ConfirmedItem from './ConfirmedItem.jsx';
import { ShopContext } from '../../store/shop-context-provider.jsx';

export default function ConfirmedItems() {
  const { products, sumPrices } = useContext(ShopContext);

  const cartItems = products.map((product, idx) => {
    if (product.amount > 0) {
      return <ConfirmedItem id={idx} key={idx} />;
    }
  });

  return (
    <div className="confirmed-products">
      {cartItems}
      <div className="summary-price">
        <span>Order total</span>
        <span className="weight-800">${sumPrices(products).toFixed(2)}</span>
      </div>
    </div>
  );
}
