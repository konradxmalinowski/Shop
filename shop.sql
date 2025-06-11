-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2025 at 06:34 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `Id_o` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`Id_o`, `date`) VALUES
(34, '2025-06-11');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `Id_p` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `amount` smallint(6) NOT NULL,
  `category` varchar(50) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `Id_o` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`Id_p`, `name`, `amount`, `category`, `price`, `Id_o`) VALUES
(1, 'Waffle with Berries', 0, 'Waffle', 7, 34),
(2, 'Vanilla Bean Crème Brûlée', 4, 'Crème Brûlée', 7, 34),
(3, 'Macaron Mix of Five', 3, 'Macaron', 8, 34),
(4, 'Classic Tiramisu', 0, 'Tiramisu', 6, 34),
(5, 'Pistachio Baklava', 0, 'Baklava', 4, 34),
(6, 'Lemon Meringue Pie', 0, 'Pie', 5, 34),
(7, 'Red Velvet Cake', 0, 'Cake', 5, 34),
(8, 'Salted Caramel Brownie', 0, 'Brownie', 5, 34),
(9, 'Vanilla Panna Cotta', 3, 'Panna Cotta', 7, 34);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`Id_o`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`Id_p`),
  ADD KEY `Id_o_2` (`Id_o`),
  ADD KEY `Id_o` (`Id_o`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `Id_o` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `Id_p` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `key_product_order` FOREIGN KEY (`Id_o`) REFERENCES `orders` (`Id_o`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
