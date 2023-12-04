-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 04, 2023 at 12:18 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `r13autokauppa`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer_order`
--

DROP TABLE IF EXISTS `customer_order`;
CREATE TABLE IF NOT EXISTS `customer_order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_date` datetime NOT NULL,
  `customer_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `customer_order`
--

INSERT INTO `customer_order` (`id`, `order_date`, `customer_id`) VALUES
(1, '2023-11-24 19:27:41', 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_line`
--

DROP TABLE IF EXISTS `order_line`;
CREATE TABLE IF NOT EXISTS `order_line` (
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`order_id`,`product_id`),
  KEY `product_id` (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `order_line`
--

INSERT INTO `order_line` (`order_id`, `product_id`, `quantity`) VALUES
(1, 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `merkki` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `malli` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `korimalli` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `vuosimalli` smallint NOT NULL,
  `hinta` decimal(10,2) DEFAULT NULL,
  `kayttovoima` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `vari` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Olemassaoleva` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category` (`merkki`(250))
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `merkki`, `malli`, `korimalli`, `vuosimalli`, `hinta`, `kayttovoima`, `image_url`, `vari`, `Olemassaoleva`) VALUES
(1, 'Audi', 'Progress Plus 40 TDI MHEV quattro', 'Sedan', 2023, '62590.00', 'Diesel', NULL, 'Hopea', 0),
(2, 'Audi', 'Q8 e-tron Progress 50 quattro', 'Farmari', 2023, '76990.00', 'Sähkö', NULL, 'Musta', 0),
(3, 'Audi', 'Q5 TFSI e Limited 50 quattro', 'Farmari', 2023, '59992.00', 'Hybridi', NULL, 'Punainen', 0),
(4, 'BMW', 'i7 M70 xDrive', 'Sedan', 2023, '175820.00', 'Sähkö', NULL, 'Sininen', 0),
(5, 'BMW', 'M3 Touring', 'Farmari', 2023, '153699.00', 'Bensiini', NULL, 'Valkoinen', 0),
(6, 'BMW', '520d xDrive', 'Sedan', 2023, '65162.00', 'Diesel', NULL, 'Musta', 0),
(7, 'Mercedes-Benz', 'C 220 d 4MATIC A', 'Sedan', 2023, '53568.00', 'Diesel', NULL, 'Valkoinen', 0),
(8, 'Mercedes-Benz', 'CLA  180 A Shooting Brake', 'Farmari', 2023, '47243.00', 'Bensiini', NULL, 'Punainen', 0),
(9, 'Mercedes-Benz', '220 d 4Matic pitkä A3 A', 'Pakettiauto', 2023, '111924.00', 'Bensiini', NULL, 'Hopea', 0),
(10, 'Audi', 'A4 1.8 TFSI', 'Sedan', 2010, '9490.00', 'Bensiini', 'https://www.auto1.fi/l/audi-a4_148197_1.jpg', 'Musta', 1),
(11, 'Audi', 'RS3 2.5 TFSI quattro S tronic', 'Sedan', 2018, '63900.00', 'Bensiini', 'https://www.auto1.fi/l/audi-rs_3_119377_1.jpg', 'Sininen', 1),
(12, 'Audi', 'A3 1.6 TDI S-tronic', 'Sedan', 2014, '10490.00', 'Diesel', 'https://www.auto1.fi/l/audi-a3_147811_1.jpg', 'Punainen', 1),
(13, 'BMW', '520d xDrive', 'Sedan', 2015, '13440.00', 'Diesel', 'https://www.auto1.fi/l/bmw-520_159403_1.jpg', 'Valkoinen', 1),
(14, 'BMW', '318', 'Farmari', 2015, '14880.00', 'Diesel', 'https://www.auto1.fi/l/bmw-318_150509_1.jpg', 'Musta', 1),
(15, 'BMW', '318', 'Sedan', 2015, '14990.00', 'Bensiini', 'https://www.auto1.fi/l/bmw-3-sarja_119983_1.jpg', 'Punainen', 1),
(16, 'Mercedes-Benz', 'Sprinter 314 CDI', 'Pakettiauto', 2020, '41800.00', 'Diesel', 'https://www.auto1.fi/l/mercedes-benz-sprinter_146439_1.jpg', 'Valkoinen', 1),
(17, 'Mercedes-Benz', 'Vito 109 CDI', 'Pakettiauto', 2015, '12900.00', 'Diesel', 'https://www.auto1.fi/l/mercedes-benz-vito_131528_1.jpg', 'Sininen', 1),
(18, 'Mercedes-Benz', 'E 200 CDI', 'Sedan', 2010, '5990.00', 'Diesel', 'https://www.auto1.fi/l/mercedes-benz-e_143192_1.jpg', 'Hopea', 1),
(21, 'oldMb', '', '', 0, NULL, '', '/images/kuvatulossa.png', '', 0),
(22, 'höpöhöpö', '', '', 0, NULL, '', NULL, '', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
