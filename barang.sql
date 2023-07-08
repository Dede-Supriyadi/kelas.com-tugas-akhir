-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Jul 2023 pada 11.52
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `barang`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `stock_barang`
--

CREATE TABLE `stock_barang` (
  `id` int(11) NOT NULL,
  `nama_barang` varchar(255) NOT NULL,
  `deskripsi_barang` varchar(255) NOT NULL,
  `qty` varchar(10) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `stock_barang`
--

INSERT INTO `stock_barang` (`id`, `nama_barang`, `deskripsi_barang`, `qty`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Baju Kekinian', 'Baju Kekinian kekinian trends 2023', '100', '2023-07-08 07:36:31', '2023-07-08 12:36:46', NULL),
(2, 'Celana Kulot', 'Celana kuolt kekinian trends 2023', '3', '2023-07-08 14:25:30', '2023-07-08 14:25:30', NULL),
(3, 'Celana Levis', 'Celana Levis kekinian trends 2023', '100', '2023-07-08 14:26:46', '2023-07-08 14:26:46', NULL),
(4, 'Celana Pendek', 'Celana Pendek kekinian trends 2023', '100', '2023-07-08 16:28:53', '2023-07-08 16:28:53', NULL),
(5, 'Kemeja fashion Korea', 'Korean style kekinian trends 2023', '50', '2023-07-08 16:46:19', '2023-07-08 16:46:19', NULL),
(6, 'Kemeja Krop', 'Korean krop style kekinian trends 2023', '100', '2023-07-08 16:46:53', '2023-07-08 16:46:53', NULL),
(7, 'Kemeja panel', 'Korean panel kemeja style kekinian trends 2023', '100', '2023-07-08 16:47:11', '2023-07-08 16:47:11', NULL),
(8, 'Anting fashion korea', 'Anting korean style kekinian trends 2023', '100', '2023-07-08 16:48:40', '2023-07-08 16:48:40', NULL),
(9, 'Sendal swalow korea', 'Sendal swalow import korean style kekinian trends 2023', '100', '2023-07-08 16:49:39', '2023-07-08 16:49:39', NULL),
(10, 'Bandana trends swag 2023', 'Bandana import korean style kekinian trends 2023', '100', '2023-07-08 16:50:21', '2023-07-08 16:50:21', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `stock_barang_keluar`
--

CREATE TABLE `stock_barang_keluar` (
  `id` int(11) NOT NULL,
  `nama_barang` varchar(255) NOT NULL,
  `deskripsi_barang` varchar(255) NOT NULL,
  `qty` varchar(10) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `stock_barang_keluar`
--

INSERT INTO `stock_barang_keluar` (`id`, `nama_barang`, `deskripsi_barang`, `qty`, `created_at`) VALUES
(2, 'Celana Kulot', 'Celana kuolt kekinian trends 2023', '3', '2023-07-08 16:17:36');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `stock_barang`
--
ALTER TABLE `stock_barang`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `stock_barang_keluar`
--
ALTER TABLE `stock_barang_keluar`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `stock_barang`
--
ALTER TABLE `stock_barang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `stock_barang_keluar`
--
ALTER TABLE `stock_barang_keluar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
