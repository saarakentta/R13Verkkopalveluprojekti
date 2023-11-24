-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 24, 2023 at 08:05 PM
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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_swedish_ci DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_swedish_ci DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_swedish_ci DEFAULT NULL,
  `pw` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_swedish_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_swedish_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `first_name`, `last_name`, `username`, `pw`) VALUES
(1, 'Anssi', 'Asiakas', NULL, NULL),
(2, 'Matti', 'Meikäläinen', NULL, NULL),
(3, 'Maija', 'Meikäläinen', NULL, NULL),
(4, 'John', 'Doe', NULL, NULL),
(5, 'Jane', 'Doe', NULL, NULL);

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
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_swedish_ci;

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_swedish_ci;

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
  `rekisteritunnus` varchar(7) CHARACTER SET utf8mb3 COLLATE utf8mb3_swedish_ci NOT NULL,
  `merkki` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_swedish_ci NOT NULL,
  `malli` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_swedish_ci NOT NULL,
  `korimalli` varchar(12) CHARACTER SET utf8mb3 COLLATE utf8mb3_swedish_ci NOT NULL,
  `vuosimalli` smallint NOT NULL,
  `hinta` decimal(10,2) DEFAULT NULL,
  `polttoaine` varchar(12) CHARACTER SET utf8mb3 COLLATE utf8mb3_swedish_ci NOT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_swedish_ci DEFAULT NULL,
  `väri` varchar(24) CHARACTER SET utf8mb3 COLLATE utf8mb3_swedish_ci NOT NULL,
  `Olemassaoleva` tinyint(1) NOT NULL,
  PRIMARY KEY (`rekisteritunnus`),
  KEY `category` (`merkki`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_swedish_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`rekisteritunnus`, `merkki`, `malli`, `korimalli`, `vuosimalli`, `hinta`, `polttoaine`, `image_url`, `väri`, `Olemassaoleva`) VALUES
('ADA-612', 'Audi', 'A6 Sedan 40 TDI MHEV quattro Progress', 'Sedan', 2023, '58993.00', 'Diesel', NULL, 'Hopea', 0),
('ADQ-834', 'Audi', 'Q8 e-tron Progress 50 quattro', 'Farmari', 2023, '76990.00', 'Sähkö', NULL, 'Musta', 0),
('ADQ-523', 'Audi', 'Q5 TFSI e Limited 50 quattro', 'Farmari', 2023, '59992.00', 'Hybridi', NULL, 'Punainen', 0),
('BMI-770', 'BMW', 'i7 M70 xDrive', 'Sedan', 2023, '175820.00', 'Sähkö', NULL, 'Sininen', 0),
('BMM-345', 'BMW', 'M3 Touring', 'Farmari', 2023, '153699.00', 'Bensiini', NULL, 'Valkoinen', 0),
('BMW-520', 'BMW', '520d xDrive', 'Sedan', 2023, '65162.00', 'Diesel', NULL, 'Musta', 0),
('MBC', 'Mercedes-Benz', 'C 220 d 4MATIC A', 'Sedan', 2023, '53568.00', 'Diesel', NULL, 'Valkoinen', 0),
('MBC-123', 'Mercedes-Benz', 'CLA  180 A Shooting Brake', 'Farmari', 2023, '47243.00', 'Bensiini', NULL, 'Punainen', 0),
('MBE-567', 'Mercedes-Benz', '220 d 4Matic pitkä A3 A', 'Pakettiauto', 2023, '111924.00', 'Bensiini', NULL, 'Hopea', 0),
('BOL-710', 'Audi', 'A4 1.8 TFSI', 'Sedan', 2010, '9490.00', 'Bensiini', 'https://www.auto1.fi/l/audi-a4_148197_1.jpg', 'Musta', 1),
('EPJ-624', 'Audi', 'RS3 2.5 TFSI quattro S tronic', 'Sedan', 2018, '63900.00', 'Bensiini', 'https://www.auto1.fi/l/audi-rs_3_119377_1.jpg', 'Sininen', 1),
('BRS-494', 'Audi', 'A3 1.6 TDI S-tronic', 'Sedan', 2014, '10490.00', 'Diesel', 'https://www.auto1.fi/l/audi-a3_147811_1.jpg', 'Punainen', 1),
('TZO-474', 'BMW', '520d xDrive', 'Sedan', 2015, '13440.00', 'Diesel', 'https://www.auto1.fi/l/bmw-520_159403_1.jpg', 'Valkoinen', 1),
('BTP-682', 'BMW', '318', 'Farmari', 2015, '14880.00', 'Diesel', 'https://www.auto1.fi/l/bmw-318_150509_1.jpg', 'Musta', 1),
('BTP-670', 'BMW', '318', 'Sedan', 2015, '14990.00', 'Bensiini', 'https://www.auto1.fi/l/bmw-3-sarja_119983_1.jpg', 'Punainen', 1),
('ZMA-268', 'Mercedes-Benz', 'Sprinter 314 CDI', 'Pakettiauto', 2020, '41800.00', 'Diesel', 'https://www.auto1.fi/l/mercedes-benz-sprinter_146439_1.jpg', 'Valkoinen', 1),
('GLP-843', 'Mercedes-Benz', 'Vito 109 CDI', 'Pakettiauto', 2015, '12900.00', 'Diesel', 'https://www.auto1.fi/l/mercedes-benz-vito_131528_1.jpg', 'Sininen', 1),
('LYV-676', 'Mercedes-Benz', 'E 200 CDI', 'Sedan', 2010, '5990.00', 'Diesel', 'https://www.auto1.fi/l/mercedes-benz-e_143192_1.jpg', 'Hopea', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
