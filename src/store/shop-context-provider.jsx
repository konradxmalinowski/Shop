import { createContext, useEffect, useRef, useState } from 'react';

export const ShopContext = createContext({
  products: [],
  handleOrderConfirm: () => {},
  sumPrices: () => {},
  setProducts: () => {},
  orderConfirmRef: () => {},
});

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    let items = localStorage.getItem('shop');
    return items ? JSON.parse(items) : [];
  });
  const orderConfirmRef = useRef(null);

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
    const condition = window.getComputedStyle(element).zIndex;
    if (condition === '3') {
      orderConfirmRef.current.style['z-index'] = -1;
      return;
    }

    orderConfirmRef.current.style['z-index'] = 3;
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
  };
  return <ShopContext value={shopCtx}>{children}</ShopContext>;
};

export default ShopContextProvider;
