import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../store/shop-context-provider';
import './styles/History.css';

const History = ({ ref }) => {
  const [history, setHistory] = useState([]);
  const { toggleHistory } = useContext(ShopContext);

  const getHistory = async () => {
    try {
      const response = await fetch(
        'http://localhost/Shop/backend/show_history.php',
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        if (Array.isArray(data)) {
          const groupedByID = Object.groupBy(data, (item) => item.ID);
          console.log(groupedByID);
          setHistory(groupedByID);
        } else {
          setHistory([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="history" ref={ref}>
      <button className="cart_button--history" onClick={toggleHistory}>
        Hide
      </button>
      {history &&
        Object.entries(history)
          .filter(([, items]) => items.length > 0)
          .map(([id, items]) => (
            <div key={id} className="history__group">
              <p className="history__ID">ID: {id}</p>
              <table className="history__table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((value, idx) => (
                    <tr key={id + '-' + idx}>
                      <td>{value.name}</td>
                      <td>{value.category}</td>
                      <td>{value.amount}</td>
                      <td>{value.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
    </div>
  );
};

export default History;
