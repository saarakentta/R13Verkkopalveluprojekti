-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 04, 2023 at 12:27 PM
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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `merkki` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `malli` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `korimalli` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `vuosimalli` smallint NOT NULL,
  `hinta` decimal(10,2) DEFAULT NULL,
  `kayttovoima` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vari` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Olemassaoleva` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category` (`merkki`(250))
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

DROP TABLE IF EXISTS customer;
CREATE TABLE customer(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    pw VARCHAR(255)
);

INSERT INTO `customer` (`id`, `first_name`, `last_name`, `username`, `pw`) VALUES 
(NULL, 'Baby', 'Simpson', 'baby', '$2b$10$vTqnEHTpdVAlq4X2ckLiAOR3wCCx5bnCJf/05.B1qfHsSEViT67Hy'),
(NULL, 'Bart', 'Simpson', 'bart', '$2b$10$rCrp7gl65afWi/ks1kiXJuwSY.nqLem9OLvmnpp27M73pzPEbHiJa'), 
(NULL, 'Homer', 'Simpson', 'homer', '$2b$10$zeZRehkZ2e/wXbyZgvISluZ5iW2qZhknDVwG1vo3phsptAZw3D.sO'), 
(NULL, 'Lisa', 'Simpson', 'lisa', '$2b$10$wLE2iHfOVT..PkAaw.jm1uGwkyhDFMRLSXq7VuFge4P21udijJcBi'), 
(NULL, 'Marge', 'Simpson', 'marge', '$2b$10$r6/WFt1pACtgCXTppl0C5uPbBjLkY6P4J6MI2MJlLr71Ow/ejZ.si');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
