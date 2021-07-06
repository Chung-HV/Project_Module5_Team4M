-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 06, 2021 at 08:33 AM
-- Server version: 8.0.25-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lover`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` bigint UNSIGNED NOT NULL,
  `mooney` bigint NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `mooney`, `created_at`, `updated_at`) VALUES
(2, 9989, '2021-07-04 04:23:19', '2021-07-04 04:41:19'),
(6, 99999999, '2021-07-04 06:23:42', '2021-07-04 06:23:42'),
(7, 99999999, '2021-07-04 08:26:54', '2021-07-04 08:26:54'),
(8, 99999999, '2021-07-04 17:46:46', '2021-07-04 17:46:46'),
(9, 99999999, '2021-07-04 17:52:45', '2021-07-04 17:52:45'),
(10, 99999999, '2021-07-04 18:01:55', '2021-07-04 18:01:55'),
(11, 99999999, '2021-07-04 18:12:54', '2021-07-04 18:12:54'),
(12, 99999999, '2021-07-04 18:14:57', '2021-07-04 18:14:57'),
(13, 99999949, '2021-07-04 18:49:29', '2021-07-04 19:04:00'),
(14, 99999979, '2021-07-05 01:45:00', '2021-07-05 03:22:21');

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `filePath` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `service_provider_id` bigint UNSIGNED NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `user_id`, `service_provider_id`, `message`, `created_at`, `updated_at`) VALUES
(1, 14, 7, 'Người yêu mà bạn thuê đã xác nhận đơn rồi', '2021-07-05 18:20:24', '2021-07-05 18:20:24'),
(2, 14, 10, 'Người yêu mà bạn thuê đã xác nhận đơn rồi', '2021-07-05 18:23:13', '2021-07-05 18:23:13');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2021_06_29_015035_create_albums_table', 1),
(6, '2021_06_29_015419_create_services_table', 1),
(7, '2021_06_30_004141_create_user_services_table', 1),
(8, '2021_06_30_005614_create_orders_table', 1),
(9, '2021_06_30_011559_create_order_details_table', 1),
(10, '2021_07_03_033259_create_accounts_table', 1),
(11, '2021_07_05_161502_create_messages_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `service_provider_id` bigint UNSIGNED NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `service_provider_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 2, 'pending', '2021-07-04 04:41:17', '2021-07-04 04:41:17'),
(2, 2, 2, 'pending', '2021-07-04 04:41:19', '2021-07-04 04:41:19'),
(3, 13, 13, 'accepted', '2021-07-04 18:55:36', '2021-07-04 18:55:58'),
(4, 13, 2, 'accepted', '2021-07-04 19:04:00', '2021-07-04 19:06:06'),
(5, 14, 2, 'pending', '2021-07-05 03:22:21', '2021-07-05 03:22:21'),
(6, 14, 7, 'pending', '2021-07-05 03:38:50', '2021-07-05 03:38:50'),
(7, 14, 9, 'pending', '2021-07-05 03:47:42', '2021-07-05 03:47:42'),
(8, 14, 7, 'accepted', '2021-07-05 18:06:03', '2021-07-05 18:20:24'),
(9, 14, 10, 'accepted', '2021-07-05 18:22:32', '2021-07-05 18:23:13');

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` double(8,2) NOT NULL,
  `start_time` time NOT NULL,
  `start_at` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `order_id`, `address`, `time`, `start_time`, `start_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'Gia lam', 0.50, '18:42:00', '2021-07-07', '2021-07-04 04:41:17', '2021-07-04 04:41:17'),
(2, 2, 'Gia lam', 0.50, '18:42:00', '2021-07-07', '2021-07-04 04:41:19', '2021-07-04 04:41:19'),
(3, 3, 'Cầu Giấy', 1.00, '20:56:00', '2021-07-07', '2021-07-04 18:55:36', '2021-07-04 18:55:36'),
(4, 4, 'Gia lam', 5.00, '09:04:00', '2021-07-08', '2021-07-04 19:04:00', '2021-07-04 19:04:00'),
(5, 5, 'Gia lam', 2.00, '17:23:00', '2021-07-05', '2021-07-05 03:22:21', '2021-07-05 03:22:21'),
(6, 6, 'Gia lam', 6.00, '17:39:00', '2021-07-08', '2021-07-05 03:38:50', '2021-07-05 03:38:50'),
(7, 7, 'Gia lam', 4.00, '17:48:00', '2021-07-07', '2021-07-05 03:47:42', '2021-07-05 03:47:42'),
(8, 8, 'Gia lam', 3.00, '08:06:00', '2021-07-05', '2021-07-05 18:06:03', '2021-07-05 18:06:03'),
(9, 9, 'Phu Tho', 3.00, '08:23:00', '2021-07-05', '2021-07-05 18:22:32', '2021-07-05 18:22:32');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(7, 'App\\Models\\User', 6, 'cho@gmail.com', '0c9e409f39b8c286608dcc651616d6584cec94e1dee853222966c4919053da69', '[\"*\"]', NULL, '2021-07-04 06:23:42', '2021-07-04 06:23:42'),
(8, 'App\\Models\\User', 6, 'cho@gmail.com', '31a911d5e26b1d21a00ca422288669eea432e37d00aaf1c2904eafe3a44e73a2', '[\"*\"]', '2021-07-04 06:25:29', '2021-07-04 06:23:50', '2021-07-04 06:25:29'),
(35, 'App\\Models\\User', 14, 'thanh@gmail.com', 'a72d5f36439c6ed6f5721fcab1c04204f94617e3c0ca48618388827461490caa', '[\"*\"]', '2021-07-05 18:33:13', '2021-07-05 02:30:00', '2021-07-05 18:33:13'),
(37, 'App\\Models\\User', 10, 'khanhphuong@gmail.com', '4d5174fd7ca8226994aeeb72708590c547f437bfd6bfa8eca42a04e2ab31f41f', '[\"*\"]', NULL, '2021-07-05 18:22:57', '2021-07-05 18:22:57');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Ra mắt người nhà', 'default', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(2, 'Ra mắt bạn bè', 'default', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(3, 'Du lịch chung cùng nhóm bạn', 'default', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(4, 'Đi chơi chung', 'default', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(5, 'Tham dự sinh nhật', 'default', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(6, 'Trò chuyện offline', 'default', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(7, 'Trò chuyện online', 'default', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(8, 'Đi chơi tết', 'default', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(9, 'Đi chơi ngày lễ', 'default', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(10, 'Nắm tay', 'free', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(11, 'Nói yêu', 'free', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(12, 'Nhìn mắt', 'free', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(13, 'Hôn tay', 'extra', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(14, 'Ôm', 'extra', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(15, 'Nhõng nhẽo', 'extra', '2021-07-04 04:23:19', '2021-07-04 04:23:19'),
(16, 'Cử chỉ thân mật', 'extra', '2021-07-04 04:23:19', '2021-07-04 04:23:19');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birth_day` date DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'images/users/1625412624.jpg',
  `height` double(8,2) DEFAULT NULL,
  `weight` double(8,2) DEFAULT NULL,
  `hobby` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `introducion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `requirement` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_admin` int NOT NULL DEFAULT '0',
  `is_service_provider` int NOT NULL DEFAULT '0',
  `is_active` int NOT NULL DEFAULT '1',
  `is_vip` int NOT NULL DEFAULT '0',
  `price` double(8,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `birth_day`, `gender`, `city`, `nation`, `avatar`, `height`, `weight`, `hobby`, `introducion`, `requirement`, `facebook`, `is_admin`, `is_service_provider`, `is_active`, `is_vip`, `price`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@gmail.com', NULL, '$2y$10$s/yWxDeuSMD/tMZYGpDiG.TUo9eqrJXFlVEMeSMLLyh3f8D/BW1dm', NULL, '1991-02-02', NULL, 'Hanoi', 'Vietnam', 'user_avatar', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 1, 0, 10.00, '2021-07-04 04:23:18', '2021-07-04 04:23:18'),
(2, 'Chung', 'Chung@gmail.com', NULL, '$2y$10$C3uUVhm.kB751i1zsAitqu3.LFH9EPtvK3yeIJ8FahnvdzLuWsf7C', NULL, '1991-02-02', 'Female', 'Hanoi', 'Vietnam', 'images/users/1625399579.jpeg', 34.00, 34.00, 'choi gai', '34', '34', '34', 0, 1, 1, 1, 10.00, '2021-07-04 04:23:18', '2021-07-04 17:57:50'),
(6, 'cho', 'cho@gmail.com', NULL, '$2y$10$dyFhx.ZTpIXI1gPJER97rOW1j.xZBRLT.QQ0E4OjhszvT5Eztuxcu', NULL, '2021-06-30', 'Female', 'Hanoi', 'Vietnam', 'images/users/1625405127.jpeg', 12.00, 34.00, 'null', 'null', 'null', 'null', 0, 0, 1, 0, NULL, '2021-07-04 06:23:42', '2021-07-04 06:25:27'),
(7, 'Thanh Ha', 'thanhha@gmail.com', NULL, '$2y$10$1u09ykkAEGMjh.2oVHy8jOxH6D8.MttCRPEuXhtzulsJ6nByBlD66', NULL, '2021-06-09', 'Female', 'Hanoi', 'Vietnam', 'images/users/1625412624.jpg', 170.00, 48.00, 'nghe nhạc', 'thích nghe nhạc', 'Trai thẳng', 'http://localhost:4200/frontend/user/profile', 0, 1, 1, 1, NULL, '2021-07-04 08:26:54', '2021-07-04 17:57:53'),
(8, 'gau', 'gau@gmail.com', NULL, '$2y$10$WTI9Me00za7bQSUm1c3qeulQyBOKkgFeI0YpLbALMUpE5nsWXqrya', NULL, '2002-06-05', 'Female', 'Hanoi', 'Vietnam', 'images/users/1625446232.jpg', 169.00, 45.00, 'LOL + TFT ( VN + NA ), PUBG MB, TỐC CHIẾN, LIÊN QUÂN, COD MB, Genshin, ALL GAME STEAM COOP.', 'Tên: Gấu ( giọng miền Nam or Tây đảm bảo ngọt sâu răng )', 'KHÔNG CHƠI FREE, CHAT SEX ĐỪNG HỎI MẮC CÔNG!', 'https://www.facebook.com/profile.php?id=100014820198233', 0, 0, 1, 0, NULL, '2021-07-04 17:46:46', '2021-07-04 17:50:32'),
(9, 'chin', 'chin@gmail.com', NULL, '$2y$10$5pGSJI/hUZTw5xxfzqTZY.gDqLe8REI4NcIYDW6yPZ7c30hr1q1O6', NULL, '2000-02-02', 'Female', 'Hanoi', 'Vietnam', 'images/users/1625446493.jpg', 155.00, 51.00, 'Trai thẳng', '- Gọi em là Chin ❤\n- Em ở Nam Định ..\n- Không Bánh Bèo - Không Biết Hát 🖤', 'PUBG PC+ LOL +TFT + AmongUS + ARK +Fall Guys + Farm Together + Deceit + Human Fall Flat', 'null', 0, 1, 1, 1, NULL, '2021-07-04 17:52:45', '2021-07-04 18:57:07'),
(10, 'Khanh Phuong', 'khanhphuong@gmail.com', NULL, '$2y$10$1CqJdsTArweRWgdfr4S5q.2OFAj75mytYKJBu6o.wgNK/THJ30zTa', NULL, '2001-02-07', 'Female', 'Hanoi', 'Vietnam', 'images/users/1625447110.jpg', 157.00, 46.00, 'mèo', 'mình tên Khánh Phương', 'Trai thẳng', 'null', 0, 1, 1, 1, NULL, '2021-07-04 18:01:55', '2021-07-05 01:21:55'),
(11, 'minn', 'minn@gmail.com', NULL, '$2y$10$ARmEDmVNU/QKCXpUkF9RMO0HooyJhlkbaE0rVvmOu3cBG5BI6yQnC', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 1, 0, NULL, '2021-07-04 18:12:54', '2021-07-04 18:12:54'),
(12, 'Neil', 'neil@gmail.com', NULL, '$2y$10$bzLt54A2kmAidJgOqMCqCe4hr7kGmmrta/fYvsgqk9wBd3O4U.nrG', NULL, '2005-06-09', 'Female', 'Hanoi', 'Vietnam', 'images/users/1625447842.jpg', 165.00, 47.00, 'Trai thẳng', 'Em Thích Chơi Game', 'Trai Thẳng', 'null', 0, 1, 1, 0, NULL, '2021-07-04 18:14:57', '2021-07-04 19:09:41'),
(13, 'Giang', 'giang@gmail.com', NULL, '$2y$10$bciI8KQlIPRBpQVagsApZOrWwNm8IAvNmj1iDRZLoHtpyFSipT7Ly', NULL, '2002-06-08', 'Female', 'Hanoi', 'Vietnam', 'images/users/1625449870.jpeg', 169.00, 52.00, 'LOL + TFT ( VN + NA ), PUBG MB, TỐC CHIẾN, LIÊN QUÂN, COD MB, Genshin, ALL GAME STEAM COOP.', 'Mình tên Giang', 'Trai', 'null', 0, 1, 1, 0, NULL, '2021-07-04 18:49:29', '2021-07-04 18:51:50'),
(14, 'thanh', 'thanh@gmail.com', NULL, '$2y$10$0VTES/CZOvNzi9wd25sy8ueVlsMHVgbqRxzkzydPolEfF8vJ.NykC', NULL, NULL, NULL, NULL, NULL, 'images/users/1625412624.jpg', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 1, 0, NULL, '2021-07-05 01:45:00', '2021-07-05 01:45:00');

-- --------------------------------------------------------

--
-- Table structure for table `user_services`
--

CREATE TABLE `user_services` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `service_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_services`
--

INSERT INTO `user_services` (`id`, `user_id`, `service_id`, `created_at`, `updated_at`) VALUES
(9, 2, 1, NULL, NULL),
(10, 2, 2, NULL, NULL),
(11, 2, 3, NULL, NULL),
(12, 2, 4, NULL, NULL),
(13, 2, 5, NULL, NULL),
(14, 2, 6, NULL, NULL),
(15, 2, 7, NULL, NULL),
(16, 2, 8, NULL, NULL),
(17, 2, 9, NULL, NULL),
(18, 2, 11, NULL, NULL),
(19, 2, 12, NULL, NULL),
(20, 2, 15, NULL, NULL),
(21, 13, 1, NULL, NULL),
(22, 13, 2, NULL, NULL),
(23, 13, 3, NULL, NULL),
(24, 13, 4, NULL, NULL),
(25, 13, 5, NULL, NULL),
(26, 13, 6, NULL, NULL),
(27, 13, 7, NULL, NULL),
(28, 13, 8, NULL, NULL),
(29, 13, 9, NULL, NULL),
(30, 13, 11, NULL, NULL),
(31, 13, 12, NULL, NULL),
(32, 13, 15, NULL, NULL),
(33, 13, 14, NULL, NULL),
(34, 12, 1, NULL, NULL),
(35, 12, 2, NULL, NULL),
(36, 12, 3, NULL, NULL),
(37, 12, 4, NULL, NULL),
(38, 12, 5, NULL, NULL),
(39, 12, 6, NULL, NULL),
(40, 12, 7, NULL, NULL),
(41, 12, 8, NULL, NULL),
(42, 12, 9, NULL, NULL),
(43, 12, 12, NULL, NULL),
(44, 12, 11, NULL, NULL),
(45, 12, 16, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `albums_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messages_user_id_foreign` (`user_id`),
  ADD KEY `messages_service_provider_id_foreign` (`service_provider_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`),
  ADD KEY `orders_service_provider_id_foreign` (`service_provider_id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_details_order_id_foreign` (`order_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_services`
--
ALTER TABLE `user_services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_services_user_id_foreign` (`user_id`),
  ADD KEY `user_services_service_id_foreign` (`service_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user_services`
--
ALTER TABLE `user_services`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_id_foreign` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Constraints for table `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_service_provider_id_foreign` FOREIGN KEY (`service_provider_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `messages_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_service_provider_id_foreign` FOREIGN KEY (`service_provider_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Constraints for table `user_services`
--
ALTER TABLE `user_services`
  ADD CONSTRAINT `user_services_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`),
  ADD CONSTRAINT `user_services_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
