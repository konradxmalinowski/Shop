import { useContext, useRef } from 'react';
import AddButton from './AddButton';
import { ShopContext } from '../../store/shop-context-provider';

export default function Product({ id }) {
  const { products } = useContext(ShopContext);

  const addButton1 = useRef(null);
  const productSelected = useRef(null);
  const showCounterButton = () => {
    addButton1.current.style.animation =
      'showAmountButton .7s ease-in-out 1 0s normal forwards running';
  };
  return (
    <div className="product" ref={productSelected}>
      <figure>
        <img
          src={products?.[id]?.image?.desktop}
          alt={[products?.[id]?.name, 'icon'].join(' ')}
          className="product-image"
          loading="lazy"
        />
        <figcaption>
          <AddButton
            ref={addButton1}
            showCounterButton={showCounterButton}
            id={id}
          />
        </figcaption>
      </figure>
      <span className="product-category">{products?.[id]?.category}</span>
      <span className="product-name">{products?.[id]?.name}</span>
      <span className="product-price">{products?.[id]?.price} $</span>
    </div>
  );
}
