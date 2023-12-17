-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 17, 2023 at 01:36 PM
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
  `first_name` varchar(255) COLLATE utf8mb3_swedish_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb3_swedish_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb3_swedish_ci DEFAULT NULL,
  `pw` varchar(255) COLLATE utf8mb3_swedish_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_swedish_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `first_name`, `last_name`, `username`, `pw`) VALUES
(1, 'Baby', 'Simpson', 'baby', '$2b$10$vTqnEHTpdVAlq4X2ckLiAOR3wCCx5bnCJf/05.B1qfHsSEViT67Hy'),
(2, 'Bart', 'Simpson', 'bart', '$2b$10$rCrp7gl65afWi/ks1kiXJuwSY.nqLem9OLvmnpp27M73pzPEbHiJa'),
(3, 'Homer', 'Simpson', 'homer', '$2b$10$zeZRehkZ2e/wXbyZgvISluZ5iW2qZhknDVwG1vo3phsptAZw3D.sO'),
(4, 'Lisa', 'Simpson', 'lisa', '$2b$10$wLE2iHfOVT..PkAaw.jm1uGwkyhDFMRLSXq7VuFge4P21udijJcBi'),
(5, 'Marge', 'Simpson', 'marge', '$2b$10$r6/WFt1pACtgCXTppl0C5uPbBjLkY6P4J6MI2MJlLr71Ow/ejZ.si');

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
CREATE TABLE IF NOT EXISTS `feedback` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `nickname` varchar(255) COLLATE utf8mb3_swedish_ci DEFAULT NULL,
  `feedback_text` text COLLATE utf8mb3_swedish_ci,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_swedish_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `nickname`, `feedback_text`) VALUES
(1, 'HomerSimpson', 'Kiitos hyvästä palvelusta!'),
(2, 'Marge', 'Kiitos hyvistä kaupoista!'),
(3, 'Pekka Pouta', 'Aurinkoinen kauppahetki sateen keskellä! '),
(4, 'Pipsa Possu', 'Röh röh saatiin ostettua hieno uusi auto! '),
(5, 'Baby Simpson', 'Tympeitä myyjiä. ');

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

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `merkki` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `malli` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `korimalli` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hinta` decimal(10,2) NOT NULL,
  `kayttovoima` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vari` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category` (`merkki`(250))
) ENGINE=MyISAM AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `merkki`, `malli`, `korimalli`, `hinta`, `kayttovoima`, `image_url`, `vari`) VALUES
(1, 'Audi', 'A6 Sedan 50 TFSI e', 'Sedan', '63990.00', 'Hybridi', 'https://www.audi.fi/dam/nemo/fi/kuvia/2023/leadoo/730x730_a6_sedan_tfsie_leadoo.jpg?imwidth=730', 'Hopea'),
(2, 'Audi', 'Q8 SUV 50 e-tron', 'Farmari', '76990.00', 'Sähkö', 'https://www.audi.fi/dam/nemo/models/q8/q8-tfsi-e/my-2021/1920x1920-mtc-xl-1-1/1920x1920-audi-q8-tfsi-e-my2021-1444.jpg?imwidth=1920', 'Hopea'),
(3, 'Audi', 'Q5 50 TFSI e quattro', 'Farmari', '61995.00', 'Hybridi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-RUMy5iIrpVN6QymxAN-QsaMS2cIfF2wnJpDm2-vXAzDNYDLek2W5lLfJ1tGW2LxsXI&usqp=CAU', 'Punainen'),
(4, 'BMW', 'i7 M70 xDrive', 'Sedan', '175820.00', 'Sähkö', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnVGO6V6fE1-YmdX0AUKNdh0xPST59Uc4jkm9xbMFQ2LGyAMtMybKepNJDkvQkaciZHbM&usqp=CAU', 'Sininen'),
(5, 'BMW', 'M3 Touring', 'Farmari', '153699.00', 'Bensiini', 'https://cdn.bmwblog.com/wp-content/uploads/2020/09/2025-bmw-m3-touring-renderings-12.jpg', 'Punainen'),
(6, 'BMW', '520d xDrive', 'Sedan', '65162.00', 'Diesel', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFn_K7ZQP5TyKPJ1d30UJQz7Z4S_tQS_dD4FmM1e4vm7A6BLYL-bJYjxHpjtRMr9ZMMZ4&usqp=CAU', 'Musta'),
(7, 'Mercedes-Benz', 'C 300 e 4MATIC', 'Sedan', '87158.00', 'Hybridi', 'https://veho.studio.crasman.cloud/pub/system/files/new-vehicles/100/1000293602/65733284eb4d71_1000293602.jpg?c=system_x1080', 'Hopea'),
(8, 'Mercedes-Benz', 'CLA 200 d 4MATIC A Shooting Brake', 'Farmari', '49043.00', 'Diesel', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMYhWjUi4y9CWwmjbMnMxSHeu7FbyQXcFvFgM_CFyK0H274H63YV4SomPoL5T6sKkRwo&usqp=CAU', 'Punainen'),
(9, 'Mercedes-Benz', '300 e pitkä A3', 'Pakettiauto', '98200.00', 'Sähkö', 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_554,h_369,q_auto,c_fill,f_auto,fl_lossy/auto-client/604634bd14145c6e9cc9fd1a985bbdc1/5627761_vans507795.jpg', 'Hopea'),
(10, 'Audi', 'A3 Sedan 30 TFSI MHEV Progress', 'Sedan', '33989.00', 'Bensiini', 'https://www.audi.fi/dam/nemo/fi/kuvia/2023/leadoo/730x730_rs3_sedan_leadoo.jpg?imwidth=730', 'Hopea');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
