import { useContext } from 'react';
import { ShopContext } from '../../store/shop-context-provider';

export default function ConfirmedItem({ id }) {
  const { products } = useContext(ShopContext);

  return (
    <div className="confirmed-product">
      <div className="left-wrapper">
        <img
          src={products?.[id]?.image?.desktop}
          alt={[products?.[id]?.name, 'icon'].join(' ')}
        />
        <span className="item-name">{products?.[id]?.name}</span>
        <span className="amount">
          {parseFloat(products?.[id]?.amount).toFixed()}x
        </span>
        <span className="price-per-piece">
          @{parseFloat(products?.[id]?.price).toFixed(2)}
        </span>
      </div>
      <span className="total-price">
        $
        {(
          parseFloat(products?.[id]?.amount) * parseFloat(products?.[id]?.price)
        ).toFixed(2)}
      </span>
    </div>
  );
}
