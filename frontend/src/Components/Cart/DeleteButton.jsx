import deleteIcon from '../../images/icon-remove-item.svg';

import { ShopContext } from '../../store/shop-context-provider';
import { memo, useCallback, useContext } from 'react';

const DeleteButton = memo(function ({ id }) {
  const { products, setProducts } = useContext(ShopContext);

  const removeFromOrderList = useCallback(
    function removeFromOrderList() {
      let updatedProducts = [...products];
      updatedProducts[id].amount = 0;
      setProducts(updatedProducts);
    },
    [id, products, setProducts]
  );

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
});

export default DeleteButton;
