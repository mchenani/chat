-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 02, 2015 at 01:38 PM
-- Server version: 5.5.46-0ubuntu0.14.04.2
-- PHP Version: 5.5.9-1ubuntu4.14

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
  `username_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=43 ;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `message`, `username`, `username_id`) VALUES
(2, 'Hi ', 'eadomestic', 4),
(3, 'Test', 'ehsangazar', 6),
(4, 'Hi', 'Another1', 5),
(5, 'Test2', 'A2', 1),
(6, 'Hi 2', 'A3', 1),
(7, 'Yes', 'A4', 5),
(8, 'sasa', 'A4', 5),
(9, 'saas', 'Default', 6),
(10, 'gdfgdgdf', 'A4', 5),
(11, 'Hi', 'me', 2),
(12, 'assssssssssssssssssssssssdasd', 'fazeli', 4),
(13, 'dasdasd', 'fazeli', 4),
(14, 'asdsd', 'fazeli', 4),
(15, 'dasdsd', 'fazeli', 4),
(16, 'sdasd', 'fazeli', 4),
(17, 'asdasd', 'fazeli', 4),
(18, 'sdasd', 'fazeli', 4),
(19, 'dsd', 'fazeli', 4),
(20, 'sds', 'fazeli', 4),
(21, 'gft54423434', 'fazeli', 4),
(22, 'sadsadsa', 'me', 2),
(23, 'shadusahdsa', 'me', 2),
(24, 'sjad', 'me', 2),
(25, 'sjaidas', 'me', 2),
(26, 'iosjaodjaisdjsa', 'me', 2),
(27, 'kh', 'narges', 4),
(28, 'salam', 'narges', 4),
(29, 'nbm bnmbnmhjg', 'me', 2),
(30, 'che khosh rang', 'narges', 4),
(31, 'ghjghjhg', 'me', 2),
(32, '\\gfhfgf', 'me', 2),
(33, 'fghgfgfgf', 'me', 2),
(34, 'ba socket?', 'narges', 4),
(35, 'Hi ', 'ehsangazar', 2),
(36, 'hiiiii', 'narges', 4),
(37, ':D', 'narges', 4),
(38, 'how r u?', 'ehsangazar', 2),
(39, 'i am fine', 'narges', 4),
(40, 'sjdknfkdsl', 'ehsangazar', 2),
(41, 'gmdflkmsglkdf', 'ehsangazar', 2),
(42, 'dmfklgmdflkg', 'ehsangazar', 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
