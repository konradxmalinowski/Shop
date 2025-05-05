import '../index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import ShopContextProvider from './store/shop-context-provider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </StrictMode>
);
