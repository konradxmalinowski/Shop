import deleteIcon from '../../images/icon-remove-item.svg';

import { ShopContext } from '../../store/shop-context-provider';
import { useContext } from 'react';

export default function DeleteButton({ id }) {
  const { products, setProducts } = useContext(ShopContext);
  function removeFromOrderList() {
    let updatedProducts = [...products];
    updatedProducts[id].amount = 0;
    setProducts(updatedProducts);
  }

  return (
    <button className="delete-product-button">
      <img
        src={deleteIcon}
        alt="remove button"
        onClick={removeFromOrderList}
        loading="lazy"
      />
    </button>
  );
}
