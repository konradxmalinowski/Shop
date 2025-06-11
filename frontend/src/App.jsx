import Cart from './Components/Cart/Cart';
import Desserts from './Components/Desserts/Desserts';
import OrderConfirm from './Components/Confirm/OrderConfirm';
import History from './Components/History/History.jsx';
import '../index.css';

import { useContext } from 'react';
import { ShopContext } from './store/shop-context-provider.jsx';

function App() {
  const { products, orderConfirmRef, historyRef } = useContext(ShopContext);

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
      <OrderConfirm ref={orderConfirmRef} />
      <History ref={historyRef} />
    </div>
  );
}

export default App;
