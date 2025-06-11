import { createContext, useEffect, useRef, useState } from 'react';

export const ShopContext = createContext({
  products: [],
  handleOrderConfirm: () => {},
  sumPrices: () => {},
  setProducts: () => {},
  orderConfirmRef: () => {},
  toggleHistory: () => {},
});

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    let items = localStorage.getItem('shop');
    return items ? JSON.parse(items) : [];
  });
  const orderConfirmRef = useRef(null);
  const historyRef = useRef(null);

  async function fetchData() {
    await fetch('src/data.json')
      .then((response) => {
        if (!response.ok) {
          console.error('error while fetching data');
          return null;
        }

        return response.json();
      })
      .then((data) => {
        return data.map((product, idx) => {
          product.amount = parseInt(
            JSON.parse(localStorage.getItem('shop'))?.[idx]?.amount ?? 0
          );
          return product;
        });
      })
      .then((data) => {
        setProducts(data);
        return data;
      });
  }

  function sumPrices(products) {
    let sum = 0;
    products.map((product) => {
      sum += parseFloat(product.price) * parseFloat(product.amount);
    });

    return sum;
  }

  function handleOrderConfirm() {
    const element = orderConfirmRef.current;
    if (!element) {
      console.error('orderConfirmRef is not attached to any DOM element!');
      return;
    }
    const condition = window.getComputedStyle(element).zIndex;
    if (condition === '3') {
      element.style['z-index'] = -1;
      document
        .querySelectorAll('#root > div > *')
        .forEach((item) => item.classList.toggle('blur'));
      return;
    }
    element.style['z-index'] = 3;
    document
      .querySelectorAll('#root > div >*')
      .forEach((item) => item.classList.toggle('blur'));
    saveToDatabase();
  }

  function toggleHistory() {
    const element = historyRef.current;
    if (!element) {
      console.error('historyRef is not attached to any DOM element!');
      return;
    }
    const condition = window.getComputedStyle(element).zIndex;
    if (condition === '3') {
      element.style['z-index'] = -1;
      document
        .querySelectorAll('#root > div > *')
        .forEach((item) => item.classList.toggle('blur'));
      return;
    }
    element.style['z-index'] = 3;
    document
      .querySelectorAll('#root > div > *')
      .forEach((item) => item.classList.toggle('blur'));
  }

  async function saveToDatabase() {
    try {
      const result = await fetch(
        'http://localhost/Shop/backend/add_items.php',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            products,
          }),
        }
      );

      const response = await result.json();

      console.log(response);
    } catch (error) {
      console.log('Failed saving data to database', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('shop', JSON.stringify(products));
  }, [products]);

  const shopCtx = {
    products,
    handleOrderConfirm,
    sumPrices,
    setProducts,
    orderConfirmRef,
    historyRef,
    toggleHistory,
  };
  return <ShopContext value={shopCtx}>{children}</ShopContext>;
};

export default ShopContextProvider;
