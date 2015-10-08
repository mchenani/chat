-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 08, 2015 at 09:13 AM
-- Server version: 5.5.44-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `chat`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` text COLLATE utf8_bin NOT NULL,
  `username` varchar(31) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=21 ;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `message`, `username`) VALUES
(1, '2', '2'),
(2, '2', '2'),
(3, 'o', '1'),
(4, 'first', '1'),
(5, 'second', '1'),
(6, 'first', '1'),
(7, 'second', '1'),
(8, 'third', '1'),
(9, 'yes', '1'),
(10, 'a', '1'),
(11, 'Hi Hitler', '1'),
(12, 'Hello', '1'),
(13, 'How are u?', '1'),
(14, 'Hello', '1'),
(16, 'W', '1'),
(17, 'S', '1'),
(18, 'sasa', '1'),
(19, 'sadsada', '1'),
(20, 'Hi', '1');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
