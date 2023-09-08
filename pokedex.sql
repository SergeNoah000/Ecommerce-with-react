-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 08, 2023 at 02:54 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pokedex`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `nom`, `password`, `created`) VALUES
(1, 'komi2.0', '$2a$10$IYKEN/YN7cmdvlSBXGXdFuG9HvvfXN8zajvI46rZsB5C4KhpQfm4a', '2023-09-08 08:32:52'),
(2, 'parfait', '$2a$10$mPH1OOw5GSmimrZSXk3fLeYmtU5iC8dbvnteaQs.3jGpri35rzr5y', '2023-09-08 08:32:52');

-- --------------------------------------------------------

--
-- Table structure for table `CartItems`
--

CREATE TABLE `CartItems` (
  `id_prod` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `CommandeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

CREATE TABLE `categorie` (
  `id` int(11) NOT NULL,
  `nom_categorie` varchar(255) NOT NULL,
  `description_categorie` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorie`
--

INSERT INTO `categorie` (`id`, `nom_categorie`, `description_categorie`, `createdAt`, `updatedAt`) VALUES
(1, 'cat 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, deserunt quam sint amet sunt voluptate optio maxime possimus non, doloremque doloribus itaque, corporis dignissimos? Voluptatum eos id nihil dicta enim?\n', '2023-09-08 08:43:11', '2023-09-08 08:43:11'),
(2, 'cat 2', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat accusamus error quis in vel ea, rerum ipsa neque, vitae, consequuntur temporibus quidem corrupti aspernatur ad sequi non earum optio. Voluptatibus.\n', '2023-09-08 09:52:21', '2023-09-08 09:52:21'),
(3, 'cat 2', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat accusamus error quis in vel ea, rerum ipsa neque, vitae, consequuntur temporibus quidem corrupti aspernatur ad sequi non earum optio. Voluptatibus.\n', '2023-09-08 09:53:44', '2023-09-08 09:53:44'),
(4, 'Fruit', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis a rerum tempore numquam voluptate aperiam libero dolorem, tempora, voluptatum ab ullam vel! Molestias nisi eveniet eum reiciendis amet incidunt debitis?\n', '2023-09-08 09:58:24', '2023-09-08 09:58:24'),
(5, 'Legume', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dolores vero quam harum repellendus ipsa, sapiente consequuntur voluptatum beatae voluptatibus error provident consequatur laborum maxime deleniti soluta nam inventore facere!\n', '2023-09-08 10:07:12', '2023-09-08 10:07:12'),
(6, 'Legume de test', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dolores vero quam harum repellendus ipsa, sapiente consequuntur voluptatum beatae voluptatibus error provident consequatur laborum maxime deleniti soluta nam inventore facere!\n', '2023-09-08 10:15:44', '2023-09-08 10:15:44'),
(7, 'Legume de test 2', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dolores vero quam harum repellendus ipsa, sapiente consequuntur voluptatum beatae voluptatibus error provident consequatur laborum maxime deleniti soluta nam inventore facere!\n', '2023-09-08 10:17:39', '2023-09-08 10:17:39'),
(8, 'Legume de test 2 encore', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dolores vero quam harum repellendus ipsa, sapiente consequuntur voluptatum beatae voluptatibus error provident consequatur laborum maxime deleniti soluta nam inventore facere!\n', '2023-09-08 10:21:47', '2023-09-08 10:21:47'),
(9, 'Legume de test 2 encore ', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dolores vero quam harum repellendus ipsa, sapiente consequuntur voluptatum beatae voluptatibus error provident consequatur laborum maxime deleniti soluta nam inventore facere!\n', '2023-09-08 10:23:14', '2023-09-08 10:23:14');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id_client` int(11) NOT NULL,
  `nom_client` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `statut` varchar(255) DEFAULT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Commandes`
--

CREATE TABLE `Commandes` (
  `id` int(11) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `quartier` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `produits`
--

CREATE TABLE `produits` (
  `id` int(11) NOT NULL,
  `nom_produit` varchar(255) NOT NULL,
  `description_produit` varchar(255) NOT NULL,
  `prix_produit` int(11) NOT NULL,
  `image_produit` varchar(255) DEFAULT NULL,
  `created` datetime NOT NULL,
  `vendeurId` int(11) DEFAULT NULL,
  `categorieId` int(11) DEFAULT NULL,
  `PromotionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produits`
--

INSERT INTO `produits` (`id`, `nom_produit`, `description_produit`, `prix_produit`, `image_produit`, `created`, `vendeurId`, `categorieId`, `PromotionId`) VALUES
(1, 'Test', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae in vero id illo suscipit maxime, illum esse ullam non fugit alias minima sit ut explicabo reprehenderit laudantium veniam exercitationem.\r\n', 700, '1694163593776-529560110.jpg', '2023-09-08 09:59:53', 1, 1, NULL),
(2, 'Test 2', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quibusdam similique vitae veritatis voluptatum beatae temporibus cupiditate expedita distinctio iste. Pariatur iure minima fugit cupiditate at rerum voluptate distinctio deserunt.\r\n', 3200, '1694165796284-521832530.jpg', '2023-09-08 10:36:36', 1, 1, NULL),
(3, 'Another Test', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quibusdam similique vitae veritatis voluptatum beatae temporibus cupiditate expedita distinctio iste. Pariatur iure minima fugit cupiditate at rerum voluptate distinctio deserunt.\r\n', 5200, '1694165895977-968094225.png', '2023-09-08 10:38:16', 1, 1, NULL),
(4, 'Test Too', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat accusamus error quis in vel ea, rerum ipsa neque, vitae, consequuntur temporibus quidem corrupti aspernatur ad sequi non earum optio. Voluptatibus.\r\n', 1450, '1694166191586-635116913.jpg', '2023-09-08 10:43:11', 1, 1, NULL),
(5, 'Test 1 Vendors 1', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolorum impedit accusamus iste ullam? Tempore laudantium doloremque odit, fugit deleniti quisquam officiis voluptatibus sapiente, aut eveniet porro, itaque placeat exercitationem!\r\n', 575, '1694174240316-979084454.webp', '2023-09-08 12:57:20', 3, 5, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Promotion`
--

CREATE TABLE `Promotion` (
  `id` int(11) NOT NULL,
  `pourcentage_reduction` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vendeurs`
--

CREATE TABLE `vendeurs` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `information_vendeur` varchar(255) NOT NULL,
  `cathegorie_produit` varchar(255) NOT NULL,
  `profil` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `vendeurs`
--

INSERT INTO `vendeurs` (`id`, `nom`, `information_vendeur`, `cathegorie_produit`, `profil`, `password`, `created`) VALUES
(1, 'serge', 'ceci sont les information sur le vendeur', 'electronique', 'https://images.app.goo.gl/eG6Jr8k7vgyZH3oY8', '$2a$10$.CBSxViZMgsvOWcujaswiOSKLkVEJpO3E3GbUlOEwr4leLs4.klyG', '2023-09-08 08:32:52'),
(2, 'parfait', 'ceci sont les information sur le vendeur', 'electronique', 'https://images.app.goo.gl/eG6Jr8k7vgyZH3oY8', '$2a$10$cvg7Vl5A865xKAqV80ztFuNdWPrh8Rg5iaAGO7eQ/BSUNibKHdjA6', '2023-09-08 08:32:52'),
(3, 'Vendeur 1', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perspiciatis maxime facilis vitae? Ea voluptate veniam commodi obcaecati. Voluptatum fugit, totam provident voluptates ipsa accusantium consequatur corporis id laborum accusamus, ut hic.</p>', 'Electronique', '1694172963867-248420492.jpg', '$2a$10$2/BCyKYiovuTmFnFjc0JWuBsyxT820gD0HDpsaHTyveUv6Dwg/nti', '2023-09-08 11:36:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `CartItems`
--
ALTER TABLE `CartItems`
  ADD PRIMARY KEY (`id_prod`),
  ADD KEY `CommandeId` (`CommandeId`);

--
-- Indexes for table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id_client`);

--
-- Indexes for table `Commandes`
--
ALTER TABLE `Commandes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vendeurId` (`vendeurId`),
  ADD KEY `categorieId` (`categorieId`),
  ADD KEY `PromotionId` (`PromotionId`);

--
-- Indexes for table `Promotion`
--
ALTER TABLE `Promotion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendeurs`
--
ALTER TABLE `vendeurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Commandes`
--
ALTER TABLE `Commandes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `produits`
--
ALTER TABLE `produits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Promotion`
--
ALTER TABLE `Promotion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vendeurs`
--
ALTER TABLE `vendeurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `CartItems`
--
ALTER TABLE `CartItems`
  ADD CONSTRAINT `CartItems_ibfk_1` FOREIGN KEY (`CommandeId`) REFERENCES `Commandes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `produits`
--
ALTER TABLE `produits`
  ADD CONSTRAINT `produits_ibfk_1` FOREIGN KEY (`vendeurId`) REFERENCES `vendeurs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `produits_ibfk_2` FOREIGN KEY (`categorieId`) REFERENCES `categorie` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `produits_ibfk_3` FOREIGN KEY (`PromotionId`) REFERENCES `Promotion` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
