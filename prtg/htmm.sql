/*
 Navicat Premium Data Transfer

 Source Server         : meiko
 Source Server Type    : MySQL
 Source Server Version : 50635
 Source Host           : localhost:3306
 Source Schema         : htmm

 Target Server Type    : MySQL
 Target Server Version : 50635
 File Encoding         : 65001

 Date: 20/12/2017 00:45:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blocker
-- ----------------------------
DROP TABLE IF EXISTS `blocker`;
CREATE TABLE `blocker` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for limit
-- ----------------------------
DROP TABLE IF EXISTS `limit`;
CREATE TABLE `limit` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `download` int(10) unsigned NOT NULL,
  `upload` int(10) unsigned NOT NULL,
  `created_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
