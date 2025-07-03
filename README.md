# Shop - Dessert Store Application 🍰🛒

Shop is a modern and responsive web application built with **React** (Vite). It allows users to browse desserts, add them to a cart, and place orders. The backend is based on **PHP** and **MySQL**.

<br>

## Features ✨

- 🍩 **Browse products**: Various desserts with images, categories, and prices.
- ➕ **Add to cart**: Quickly add products to the cart.
- 🔢 **Manage quantities**: Change the quantity of products in the cart.
- 💵 **Order summary**: Display the total amount.
- ✅ **Order confirmation**: Finalize and save order history.
- 📜 **Order history**: View previous orders (via backend).

<br>

## Technologies 🛠️

- **Frontend**: React, Vite, CSS
- **Backend**: PHP (REST API), MySQL
- **Database**: `shop.sql` file (structure and sample data)

<br>

## Installation and Setup 🚀

### Frontend

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. By default, the app is available at [http://localhost:5173](http://localhost:5173)

> **Note:** If your backend runs on a different port or address, update the API URL in the frontend code accordingly.

<br>

### Backend

1. **Set up XAMPP:**
   - Download and install XAMPP: [https://www.apachefriends.org/](https://www.apachefriends.org/)
   - Start Apache and MySQL via the XAMPP control panel.
2. **Database:**
   - Open phpMyAdmin (`http://localhost/phpmyadmin`).
   - Create a database named `m42958_shop`.
   - Import the `shop.sql` file (located in the project root directory).
3. **Backend:**
   - Place the `backend` folder in the XAMPP `htdocs` directory (e.g., `C:/xampp/htdocs/Shop/backend`).
   - Configure the database connection in `backend/database.php` if needed.
   - The backend API will be available at e.g. [http://localhost/Shop/backend](http://localhost/Shop/backend)

<br>

## Database Structure 🗄️

- **Table `orders`**: orders (Id_o, date)
- **Table `products`**: products in orders (Id_p, name, amount, category, price, Id_o)
- See details in the `shop.sql` file.

<br>

## Backend Files 📂

- `add_items.php` – add products to an order
- `show_history.php` – fetch order history
- `database.php` – database connection configuration

<br>

## Contact ✉️

For any questions or feedback: [malinowski.konrad45@gmail.com](mailto:malinowski.konrad45@gmail.com)
