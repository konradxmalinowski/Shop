import { useContext } from 'react';
import { ShopContext } from '../../store/shop-context-provider';
import Product from './Product';
import './styles/desserts.css';

const Deserts = () => {
  const { products } = useContext(ShopContext);

  const desserts = products.map((product, idx) => (
    <Product key={idx} id={idx} />
  ));

  return (
    <div className="desserts">
      <h1>Deserts</h1>
      <div className="desserts-list">
        {products ? desserts : <p>Fetching data</p>}
      </div>
    </div>
  );
};

export default Deserts;
