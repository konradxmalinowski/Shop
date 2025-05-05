import Cart from './Components/Cart/Cart';
import Desserts from './Components/Desserts/Desserts';
import OrderConfirm from './Components/Confirm/OrderConfirm';
import '../index.css';

import { useContext } from 'react';
import { ShopContext } from './store/shop-context-provider.jsx';

function App() {
  const { products } = useContext(ShopContext);

  return (
    <div className="container">
      {products ? (
        <>
          <Desserts />
          <Cart />
        </>
      ) : (
        <p>Fetching data</p>
      )}
      <OrderConfirm />
    </div>
  );
}

export default App;
