import './confirm.css';
import ConfirmedItems from './ConfirmedItems';
import checkedIcon from '../../images/icon-order-confirmed.svg';
import { useContext } from 'react';
import { ShopContext } from '../../store/shop-context-provider';

export default function OrderConfirm({ ref }) {
  const { products, setProducts, handleOrderConfirm } = useContext(ShopContext);

  async function clearOrder() {
    let updatedArray = products.map((product) => {
      product.amount = 0;
      return product;
    });

    setProducts(updatedArray);
    handleOrderConfirm();
    window.document.location.reload();
  }
  return (
    <div className="order-confirm" ref={ref}>
      <img src={checkedIcon} alt="checked icon" />
      <h1>Order Confirmed</h1>
      <p className="grey">We hope you enjoy your food!</p>
      <ConfirmedItems />
      <button className="start-new-order-button" onClick={clearOrder}>
        Start new order
      </button>
    </div>
  );
}
