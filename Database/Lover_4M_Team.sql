-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th7 06, 2021 lúc 10:55 AM
-- Phiên bản máy phục vụ: 10.3.29-MariaDB-0ubuntu0.20.04.1
-- Phiên bản PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `Lover_4M_Team`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accounts`
--

CREATE TABLE `accounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `mooney` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `accounts`
--

INSERT INTO `accounts` (`id`, `mooney`, `created_at`, `updated_at`) VALUES
(2, 9999, '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(5, 99999999, '2021-07-05 19:18:12', '2021-07-05 19:18:12'),
(6, 51999999, '2021-07-05 19:32:09', '2021-07-05 19:36:15'),
(7, 99999999, '2021-07-05 19:38:34', '2021-07-05 19:38:34'),
(8, 99999999, '2021-07-05 19:41:29', '2021-07-05 19:41:29'),
(9, 99999999, '2021-07-05 19:44:47', '2021-07-05 19:44:47'),
(10, 99999999, '2021-07-05 19:53:21', '2021-07-05 19:53:21'),
(11, 99999999, '2021-07-05 19:56:50', '2021-07-05 19:56:50');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `albums`
--

CREATE TABLE `albums` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `filePath` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `messages`
--

CREATE TABLE `messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `service_provider_id` bigint(20) UNSIGNED NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `messages`
--

INSERT INTO `messages` (`id`, `user_id`, `service_provider_id`, `message`, `created_at`, `updated_at`) VALUES
(1, 6, 6, 'Người yêu mà bạn thuê đã xác nhận đơn rồi', '2021-07-05 19:36:21', '2021-07-05 19:36:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
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
(11, '2021_07_05_161502_create_messages_table', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `service_provider_id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `service_provider_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 6, 6, 'accepted', '2021-07-05 19:36:15', '2021-07-05 19:36:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` double(8,2) NOT NULL,
  `start_time` time NOT NULL,
  `start_at` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_details`
--

INSERT INTO `order_details` (`id`, `order_id`, `address`, `time`, `start_time`, `start_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'Ha noi', 8.00, '09:36:00', '2021-07-06', '2021-07-05 19:36:15', '2021-07-05 19:36:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(17, 'App\\Models\\User', 11, 'nami@gmail.com', '0fda17eb60e26b39ec2efd8e634727ce0f6cd8f7b80b1d09f42dfbf6b7954225', '[\"*\"]', NULL, '2021-07-05 19:56:50', '2021-07-05 19:56:50'),
(18, 'App\\Models\\User', 11, 'nami@gmail.com', 'dd8ecd8782886fceb98d77a950aa15963428ecfdb82a3a27cb05e585aa278773', '[\"*\"]', '2021-07-05 20:51:26', '2021-07-05 19:57:10', '2021-07-05 20:51:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `services`
--

INSERT INTO `services` (`id`, `name`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Ra mắt người nhà', 'default', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(2, 'Ra mắt bạn bè', 'default', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(3, 'Du lịch chung cùng nhóm bạn', 'default', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(4, 'Đi chơi chung', 'default', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(5, 'Tham dự sinh nhật', 'default', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(6, 'Trò chuyện offline', 'default', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(7, 'Trò chuyện online', 'default', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(8, 'Đi chơi tết', 'default', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(9, 'Đi chơi ngày lễ', 'default', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(10, 'Nắm tay', 'free', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(11, 'Nói yêu', 'free', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(12, 'Nhìn mắt', 'free', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(13, 'Hôn tay', 'extra', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(14, 'Ôm', 'extra', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(15, 'Nhõng nhẽo', 'extra', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(16, 'Cử chỉ thân mật', 'extra', '2021-07-05 19:00:35', '2021-07-05 19:00:35');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birth_day` date DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'images/users/1625537597.png',
  `height` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `weight` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `hobby` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `introducion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `requirement` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `is_admin` int(11) NOT NULL DEFAULT 0,
  `is_service_provider` int(11) NOT NULL DEFAULT 0,
  `is_active` int(11) NOT NULL DEFAULT 1,
  `is_vip` int(11) NOT NULL DEFAULT 0,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `birth_day`, `gender`, `city`, `nation`, `avatar`, `height`, `weight`, `hobby`, `introducion`, `requirement`, `facebook`, `is_admin`, `is_service_provider`, `is_active`, `is_vip`, `price`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@gmail.com', NULL, '$2y$10$Zk9GmMu.o.wpzC4q4bKEe..pT/xHgYok9e3lPIp1YwzES7AAMhgZ2', NULL, '1991-02-02', 'male', 'Hanoi', 'Vietnam', 'images/users/1625537597.png', NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 1, 0, 'null', '2021-07-05 19:00:35', '2021-07-05 19:13:17'),
(2, 'Chung', 'chung@gmail.com', NULL, '$2y$10$BqnXGfIozJxoT/1w6ZSR7eKVoAkVSdKUgHrsTIWA.Y9F2hDb5T4Na', NULL, '1991-02-02', NULL, 'Hanoi', 'Vietnam', 'user_avatar', '', '', '', '', '', '', 0, 0, 1, 0, '10', '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(3, 'Thanh', 'thanh@gmail.com', NULL, '$2y$10$McUxVZSMN5530KawYqXi/ORlAqDKY6DDP75ZCB08uIDTQipR5miTy', NULL, '1991-02-02', 'lgbt', 'Hanoi', 'Vietnam', 'images/users/1625537829.jpg', '172', '68', 'the thao', 'thich the thao va di du lich', 'tre trung xinh dep', NULL, 0, 1, 1, 0, '30000', '2021-07-05 19:00:35', '2021-07-05 19:17:09'),
(4, 'Nhung', 'nhung@gmail.com', NULL, '$2y$10$snDXB/nCJ1dvSzDFfp5sZOgA0tEjziXYJQAsejs4ORnSv5IS5XP5.', NULL, '1991-02-02', 'Female', 'Hanoi', 'Vietnam', 'images/users/1625537742.jpg', '167', '54', 'Du lich', 'xin chao moi nguoi, em la be Nhung', 'lich su', NULL, 0, 1, 1, 1, '500000', '2021-07-05 19:00:35', '2021-07-05 19:15:42'),
(5, 'hani', 'hani@gmail.com', NULL, '$2y$10$uQa/GzJL.vtmZGfaZafuRuTF1EgABc6zfGGl4rJj1P3NIgQpPV8Ru', NULL, '2002-11-14', 'Female', 'Nam Dinh', 'Viet Nam', 'images/users/1625538049.jpg', '161', '53', 'an va ngu', 'chao moi nguoi, em la Hani dang yeu', 'trang treo dep trai', NULL, 0, 1, 1, 0, '1200000', '2021-07-05 19:18:12', '2021-07-05 19:34:47'),
(6, 'ziny', 'ziny@gmail.com', NULL, '$2y$10$0obPiR6cJX5XvyrOJD8pyONHo.LYn.TlcBScfS2EHTVzSbNiTLqpa', NULL, '2004-02-06', 'Female', 'ha noi', 'Viet Nam', 'images/users/1625538846.jpg', '168', '50', 'ca hat', '1 co be dang yeu', 'lich su', NULL, 0, 1, 1, 0, '6000000', '2021-07-05 19:32:09', '2021-07-05 19:34:48'),
(7, 'jamie', 'jamie@gmail.com', NULL, '$2y$10$Je3xTUPGmpRWmGMLbcc7PegiEMpt7JbpNqL5yglpCrNMjercR7fLi', NULL, '2000-01-06', 'Female', 'Thai Nguyen', 'Viet Nam', 'images/users/1625539215.jpg', '170', '54', 'yeu mau hong, ghet su gia doi', 'chao moi nguoi, minh la Jamie^^', 'trang treo, cao to', NULL, 0, 1, 1, 0, '1000000', '2021-07-05 19:38:34', '2021-07-05 19:43:07'),
(8, 'quynh tran', 'quynhtranjp@gmail.com', NULL, '$2y$10$P8sqZ8TogilkMjpGMa70M.kY/4780ee4x3ylu5vRsyX3Lm2Q5MQcm', NULL, '2004-11-06', 'Female', 'ha noi', 'Viet Nam', 'images/users/1625539374.jpg', '168', '68', 'Du lich', 'minh la quynh tran JP', 'vietnamese', NULL, 0, 1, 1, 0, '750000', '2021-07-05 19:41:29', '2021-07-05 19:43:28'),
(9, 'Quan Le', 'quanle@gmail.com', NULL, '$2y$10$RHiGkei0VmwW2O8ja4beAe935lTpOC6QZfEc9P6wKQ6KycvxhA/cW', NULL, '1997-12-06', 'male', 'Thai Nguyen', 'Viet Nam', 'images/users/1625539893.jpg', '172', '68', 'an va ngu', 'chao moi nguoi! minh la QUanle <3', 'quai vat ba dau', NULL, 0, 1, 1, 0, '50000', '2021-07-05 19:44:47', '2021-07-05 19:51:52'),
(10, 'XuKa', 'xuka@gmail.com', NULL, '$2y$10$7ERoTXCfxXURSNZwuWOgu.1mbyjIsJ7g8B1tJ10B9YmW03gOtBqHu', NULL, '2006-12-06', 'Female', 'ha noi', 'Viet Nam', 'images/users/1625540126.jpg', '168', '52', 'ca hat va nghe thuat', 'chao moi nguoi, minh la xuka ^^', 'trang treo, lich su', NULL, 0, 1, 1, 0, '10000000', '2021-07-05 19:53:21', '2021-07-05 19:55:36'),
(11, 'nami', 'nami@gmail.com', NULL, '$2y$10$qa95cRxWg0cnykZrOfxcxeESRNSkGwUPnL2b.bTCGnkZKE1i46hsG', NULL, '1993-12-06', 'Female', 'HCM', 'Viet Nam', 'images/users/1625540329.jpg', '154', '46', 'thich duoc cung chieu', 'anh phai chieu em chu', 'anh phai chieu em chu', NULL, 0, 1, 0, 0, '720000', '2021-07-05 19:56:50', '2021-07-05 20:51:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_services`
--

CREATE TABLE `user_services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `service_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_services`
--

INSERT INTO `user_services` (`id`, `user_id`, `service_id`, `created_at`, `updated_at`) VALUES
(1, 2, 1, '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(2, 2, 2, '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(3, 2, 3, '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(4, 2, 4, '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(5, 2, 5, '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(6, 2, 7, '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(7, 2, 6, '2021-07-05 19:00:35', '2021-07-05 19:00:35'),
(8, 2, 8, '2021-07-05 19:00:35', '2021-07-05 19:00:35');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `albums_user_id_foreign` (`user_id`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messages_user_id_foreign` (`user_id`),
  ADD KEY `messages_service_provider_id_foreign` (`service_provider_id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`),
  ADD KEY `orders_service_provider_id_foreign` (`service_provider_id`);

--
-- Chỉ mục cho bảng `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_details_order_id_foreign` (`order_id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Chỉ mục cho bảng `user_services`
--
ALTER TABLE `user_services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_services_user_id_foreign` (`user_id`),
  ADD KEY `user_services_service_id_foreign` (`service_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `albums`
--
ALTER TABLE `albums`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `user_services`
--
ALTER TABLE `user_services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_id_foreign` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_service_provider_id_foreign` FOREIGN KEY (`service_provider_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `messages_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_service_provider_id_foreign` FOREIGN KEY (`service_provider_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Các ràng buộc cho bảng `user_services`
--
ALTER TABLE `user_services`
  ADD CONSTRAINT `user_services_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`),
  ADD CONSTRAINT `user_services_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
