--Create Schema Query

CREATE DATABASE `codebrahmanews` /*!40100 DEFAULT CHARACTER SET utf8 */;

--Create Table Query

CREATE TABLE `news` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `url` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `language` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;