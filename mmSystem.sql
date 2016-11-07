-- MySQL dump 10.13  Distrib 5.7.15, for Linux (x86_64)
--
-- Host: localhost    Database: mmSystem
-- ------------------------------------------------------
-- Server version	5.7.13-0ubuntu0.16.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) DEFAULT '1' COMMENT '状态，0:不可用, 1:可用',
  `premission` int(11) DEFAULT '1' COMMENT '权限 999:系统管理员,默认1普通',
  `admin_account` varchar(68) NOT NULL COMMENT '管理账号',
  `admin_password` varchar(258) DEFAULT NULL,
  `admin_phone` varchar(68) NOT NULL COMMENT '管理手机号',
  `admin_name` varchar(68) NOT NULL COMMENT '管理员姓名',
  PRIMARY KEY (`id`),
  UNIQUE KEY `admin_account` (`admin_account`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (4,'2016-09-07 07:47:55','2016-09-10 09:33:28',1,1,'1es1erresd82','NUUzQUU3QjhFNjQxNzdGQTJBNkZDQ0JBNTNCOTVBNTI3Q0U3ODI4QTQ5QTcxQTY2RUNBRDUxM0Q2NUJDMzVCNnNoYXhudWxsYmFzZTY0','1372','222'),(55,'2016-09-10 08:48:30','2016-09-10 09:34:13',1,1,'64','NUUzQUU3QjhFNjQxNzdGQTJBNkZDQ0JBNTNCOTVBNTI3Q0U3ODI4QTQ5QTcxQTY2RUNBRDUxM0Q2NUJDMzVCNnNoYXhudWxsYmFzZTY0','564vd825','cdv4654gvr25'),(70,'2016-09-12 02:12:17','2016-09-12 02:14:35',1,999,'admin','812B63837C93AB288C627DF3D19387F75B9876C43D1638B01757A534D5647047','15589517517','超级管理员');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consume_record`
--

DROP TABLE IF EXISTS `consume_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consume_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `order_number` varchar(68) NOT NULL COMMENT '订单编号',
  `card_number` varchar(68) NOT NULL COMMENT '会员账号',
  `member_name` varchar(68) NOT NULL COMMENT '会员姓名',
  `member_rank` varchar(68) NOT NULL COMMENT '会员等级',
  `goods_number` varchar(68) NOT NULL COMMENT '商品编号',
  `goods_name` varchar(68) NOT NULL COMMENT '商品名称',
  `goods_price` double NOT NULL COMMENT '商品价格',
  `goods_count` int(11) NOT NULL COMMENT '商品数量',
  `consume_money` double NOT NULL COMMENT '消费金额',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '状态：0,未购买，1已购买',
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_number` (`order_number`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consume_record`
--

LOCK TABLES `consume_record` WRITE;
/*!40000 ALTER TABLE `consume_record` DISABLE KEYS */;
INSERT INTO `consume_record` VALUES (1,'2016-09-18 12:23:52','2016-09-18 12:23:52','741852','a4271934','李四','金牌会员','98651','牛奶',25.3,2,35.42,0),(2,'2016-09-19 11:49:06','2016-09-19 11:56:21','123456','a4271934','李四','金牌会员','98651','牛奶',25.3,2,35.42,1),(4,'2016-09-24 12:01:37','2016-09-24 12:01:37','123456ww','a4271934','战士','铜牌会员','98651','牛奶',25.3,2,45.54,0);
/*!40000 ALTER TABLE `consume_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goods`
--

DROP TABLE IF EXISTS `goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `goods_number` varchar(68) NOT NULL COMMENT '商品编号',
  `goods_name` varchar(68) NOT NULL COMMENT '商品名称',
  `goods_price` double NOT NULL COMMENT '商品价格',
  `goods_count` int(11) NOT NULL COMMENT '商品数量',
  PRIMARY KEY (`id`),
  UNIQUE KEY `goods_number` (`goods_number`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goods`
--

LOCK TABLES `goods` WRITE;
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES (11,'2016-09-08 03:26:15','2016-09-10 07:00:39','11596355','哇哈哈',2.5,20),(12,'2016-09-08 05:32:25','2016-09-08 05:32:25','2054865','iphone7',5388,100),(13,'2016-09-08 05:40:59','2016-09-08 05:50:20','20154865','iphone7s',7288,5),(14,'2016-09-09 12:01:41','2016-09-19 11:56:21','98651','牛奶',25.3,16);
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) DEFAULT '1' COMMENT '状态,0:不可用，1:可用',
  `card_number` varchar(68) NOT NULL COMMENT '会员卡号(账号)',
  `member_rank` varchar(68) NOT NULL DEFAULT '铜牌会员' COMMENT '等级：铜银金钻，默认铜',
  `member_name` varchar(68) NOT NULL COMMENT '会员姓名',
  `member_phone` varchar(68) DEFAULT NULL COMMENT '会员手机',
  `member_password` varchar(256) DEFAULT NULL,
  `money` double DEFAULT '0' COMMENT '金额',
  PRIMARY KEY (`id`),
  UNIQUE KEY `card_number` (`card_number`),
  KEY `member_rank` (`member_rank`),
  CONSTRAINT `member_ibfk_1` FOREIGN KEY (`member_rank`) REFERENCES `members_rank` (`member_rank`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'2016-09-14 11:12:30','2016-09-24 08:31:48',1,'a4271934','铜牌会员','战士','1558952368','276A0DE2111A9A5CA909227D53A1ED32F7A281085D6827F943C9B150B422FE12',0),(2,'2016-09-15 08:04:45','2016-09-15 08:11:39',1,'a4271935','银牌会员','王五','17862822595','812B63837C93AB288C627DF3D19387F75B9876C43D1638B01757A534D5647047',20);
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members_rank`
--

DROP TABLE IF EXISTS `members_rank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `members_rank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `member_rank` varchar(68) NOT NULL DEFAULT '铜牌会员' COMMENT '会员等级',
  `discount` double DEFAULT '1' COMMENT '折扣',
  PRIMARY KEY (`member_rank`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members_rank`
--

LOCK TABLES `members_rank` WRITE;
/*!40000 ALTER TABLE `members_rank` DISABLE KEYS */;
INSERT INTO `members_rank` VALUES (3,'2016-09-14 09:58:14','2016-09-14 09:58:14','金牌会员',0.7),(4,'2016-09-14 09:59:40','2016-09-14 09:59:40','钻石会员',0.5),(1,'2016-09-13 23:32:50','2016-09-14 09:09:00','铜牌会员',0.9),(2,'2016-09-14 09:56:49','2016-09-14 09:56:49','银牌会员',0.8);
/*!40000 ALTER TABLE `members_rank` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-24 20:32:48
