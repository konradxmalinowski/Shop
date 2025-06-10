import { useContext } from 'react';
import addToCartIcon from '../../images/icon-add-to-cart.svg';
import { ShopContext } from '../../store/shop-context-provider';

export default function AddButton({ showCounterButton, id, ref }) {
  const { products, setProducts } = useContext(ShopContext);

  function validateNumber(id, updatedArray) {
    let newObject;

    if (updatedArray[id].amount < 0) {
      newObject = { ...products[id] };
      newObject.amount = 0;

      return [...products].with(id, newObject);
    } else if (updatedArray[id].amount > 50) {
      newObject = { ...products[id] };
      newObject.amount = 50;

      return [...products].with(id, newObject);
    }

    return updatedArray;
  }

  function updateProducts(sign) {
    let newObject = { ...products[id] };
    if (sign === '+') newObject.amount = parseFloat(newObject.amount) + 1;
    else if (sign === '-') newObject.amount = parseFloat(newObject.amount) - 1;

    let updatedArray = [...products];
    updatedArray[id] = newObject;
    updatedArray = validateNumber(id, updatedArray);
    setProducts(updatedArray);
  }

  return (
    <>
      <div
        className="add-product-button add-product-button1"
        onClick={showCounterButton}
        ref={ref}
      >
        <img src={addToCartIcon} alt="shopping card icon" loading="lazy" />
        Add to Cart
      </div>

      <div className="add-product-button add-product-button2">
        <button
          onClick={() => {
            updateProducts('-');
          }}
        >
          -
        </button>
        <span>{products[id].amount}</span>
        <button
          onClick={() => {
            updateProducts('+');
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
