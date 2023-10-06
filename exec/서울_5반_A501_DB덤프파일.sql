CREATE DATABASE  IF NOT EXISTS `bangle_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bangle_db`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: database-1.c4jdluaykrgh.ap-northeast-2.rds.amazonaws.com    Database: bangle_db
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `follower` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `income` bigint DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  `introduction` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_hygguo0ul34xn24ac5stplaa0` (`member_id`),
  CONSTRAINT `FKprb0sud0w9y3k3f0r5uafqx2b` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (0,1,0,1,''),(0,4,0,3,'상상을 좋아하는 홍재연 작가'),(0,5,0,5,'인천 앞바다의 반대말은? 인천 엄마다. 깔깔'),(0,6,0,6,'글을 쓰는 행위 자체가 큰 재미나 영감을 얻거나 따위는 하지 않지만 죽기 전에 해내고 싶은 일이라던가 즉 거창하게 그리고 거칠게 표현해보자면 죽기 전에 글 다운 글 그러니까 책을 쓰고 죽고 싶더라고요. 그래서 지속적으로 글을 작성하고 있습니다.'),(0,7,0,7,''),(0,8,0,9,''),(0,10,0,11,''),(0,11,0,12,''),(0,12,0,13,''),(0,13,0,15,''),(0,14,0,16,'좋은 글을 쓰려 노력합니다 ^^'),(0,15,0,17,'(간지나는 소개글)개쩌는 사람입니다.');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `average_score` float DEFAULT NULL,
  `purchase_price` int DEFAULT NULL,
  `rental_price` int NOT NULL,
  `total_pages` int DEFAULT NULL,
  `author_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `publication_date` datetime(6) DEFAULT NULL,
  `sale_count` bigint DEFAULT NULL,
  `introduction` varchar(1024) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_search` (`genre`,`title`),
  KEY `FKklnrv3weler2ftkweewlky958` (`author_id`),
  CONSTRAINT `FKklnrv3weler2ftkweewlky958` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (0,5,1,200,4,1,'2023-10-04 09:12:42.000000',NULL,'집착과 광기에 사로잡힌 한 인간의 투쟁과 파멸을 그린 허먼 멜빌의 모험소설 『모비 딕』을 완역한 책. 고래학과 포경업에 대한 치밀한 기록을 그대로 수록한 이 책은 그동안의 축약판으로는 느낄 수 없었던 『모비 딕』의 심오한 세계를 음미하게 해준다. 거대한 흰생 고래 \'모비 딕\'에게 한쪽 다리를 빼앗긴 뒤 복수를 위해 추적을 거듭하는 에이해브 선장과 그와 한 배를 탄 선원들의 처절한 결투를 그리고 있다. 고래의 생태와 활동, 포경 기술과 포획한 고래의 처리 및 가공 등에 대한 설명이 생생하게 펼쳐진다.\n고래에 대한 어원 탐구에서 시작되는 이 소설은 이어서 문헌에서 발췌한 고래에 대한 글들을 소개하고, 본격적인 줄거리가 전개되는 중에도 고래의 종류와 생태, 서식 환경, 포경의 역사와 기술, 포경 방법과 장비 등의 자세한 정보를 제공한다. 고래에 대한 백과전서적인 작품이라 할 수 있다. 고래와 포경업에 관해 인류가 탐색하고 축적해온 지식들과, 우주와 인간에 대한 철학적 명상들이 가득 담겨 있다.','QmeG5nAyhuyDPAY4DsFHYGCydyiHQGKUURAxd7hB2p4LuS','https://bangle.s3.ap-northeast-2.amazonaws.com/2c79c51c-0369-43f5-aee8-b42dd717e914.jpg','소설','모비 딕'),(0,5,1,200,4,2,'2023-10-04 01:46:00.730492',NULL,'Evie:\n\nThey say small town life is uneventful. I’m not sure who “they” are, but they’ve never seen Van Michaels. He and his friends, all over the top, muscle-bound and mysterious, strut down the street across from my office every day, driving everybody crazy. My boss wants him as a client, and I want him as a lover. But would he ever be interested in a plus-sized girl like me?\n\nVan:\n\nEvie Evans is the hottest woman I’ve ever seen. With her nonstop curves and flaming red hair, I can’t keep her out of my thoughts. My mortal enemy is lurking nearby, and I have a secret mission that must succeed, but nothing is going to keep me from making her mine.\n\nLOVING HIS WORKOUT is an instalove short story romance chock full of suspense and steamy heat. If you like strong heroes, curvy heroines, and happily ever afters, you won’t want to miss this fast-paced exciting story.','Qmca7XgRN3j3vgRLJ5h9fViSMiqCHiJV1v9FSABgTHkfx1','https://bangle.s3.ap-northeast-2.amazonaws.com/7c004cac-c5d1-41b8-b1ff-bc50c127a775.jpg','소설','Loving his workout'),(0,6,1,200,14,4,'2023-10-04 04:03:52.682957',NULL,'비가 오면 열리는 상점','QmeG5nAyhuyDPAY4DsFHYGCydyiHQGKUURAxd7hB2p4LuS','https://bangle.s3.ap-northeast-2.amazonaws.com/65744d15-f3a1-40fc-b717-66a9ee81fa4f.jpg','일반','비가 오면 열리는 상점비가 오면 열리는 상점'),(0,7,1,200,14,5,'2023-10-05 04:06:07.766460',NULL,'눈을 떠보니 소설 속이었다.\n\n그것도 망나니로 유명한 백작가 도련님 몸으로.\n\n\n\n하지만,\n\n그렇다고 망나니가 될 순 없잖아?','QmYvk2UMNACh3BWL2NRF2k1YsXP3HrCnWpvrhipjH136jj','https://bangle.s3.ap-northeast-2.amazonaws.com/a342c73f-6c5f-4c35-9183-96f7d21dff1d.png','SF','별들의 전쟁'),(0,5,1,200,6,6,'2023-10-05 04:09:03.241768',NULL,'\"화랑 가운데 만약 흉신이 하나 있다면 그게 누구겠소?\n바로, 귀신을 부리는 주술을 쓰는 설영랑이지!\"\n\n어느 날 대재앙을 일으킬 흉신으로 지목된 화랑 설영.\n누명을 벗고 본래의 자리로 돌아갈 방법은,\n괴변들을 해결해 흉신이 아님을 증명하는 것뿐.\n\n그런 설영 앞에 8년 전 대악령을 처단하고 자취를 감추었던,\n전대 화랑의 우두머리 자하가 찾아오는데...','QmQzcp8uaahwdwYGud4w8FsYbBro17NCqQomsk56Wfhz7e','https://bangle.s3.ap-northeast-2.amazonaws.com/8683ef55-7cf5-4436-a79a-850045e94346.png','SF','SPLAY TREE'),(0,6,1,200,5,7,'2023-10-05 04:10:37.429125',NULL,'이우혁의 대표작이자 한국 판타지의 명실상부한 대표작 <퇴마록 - 세계편> 소장판. 이집트 고대 석실 발굴에 얽힌 비밀을 파헤치는 \'세크메트의 눈\', 아더 왕 전설을 새롭게 해석한 \'왕은 아발론 섬에 잠들고\', 드라큘라와 흡혈귀 전설을 실감나는 스토리로 구성한 \'왈라키아의 밤\', 블랙서클과의 숨 막히는 마지막 대결을 그린 \'아스타로트의 약속\' 등 총 11편을 수록하고 있다.\n\n이번에 엘릭시르에서 나온 <퇴마록 - 세계편>(전3권)은 네 권이었던 구판을 세 권으로 새롭게 구성한 소장판이며, \'얼음의 악령\'과 \'아스타로트의 약속\'을 전면 개정하고, 권말에 <퇴마록 해설집>에 실렸던 용어 해설을 다듬어 실었다. 전반적인 이야기 흐름은 그대로이지만 소소한 오류들을 바로잡았고, 문장도 다듬어 소장판으로서의 가치를 높이고 있다.','QmVPFnpmd76TQPUifBVRDX5UQKF5nSi1T2ek4v7rbxHutU','https://bangle.s3.ap-northeast-2.amazonaws.com/ed8df1db-c844-4adb-9dfb-153bee9cca31.png','SF','인간 시대의 끝이 도래했다'),(0,7,1,200,6,8,'2023-10-05 04:11:29.100241',NULL,'아드리아스 크롬웰.\n게임 속 중간보스의 하수인으로 플레이어에게 죽는 단역.\n\n[선택하지 않은 특성이 있습니다.]\n\n운명을 벗어나 반드시 살아남겠다.','QmUFmvCj7NyYPyK98GTwfgyqf581teDWDVbTGt4SEQCBNy','https://bangle.s3.ap-northeast-2.amazonaws.com/d9f7f8b7-a514-475a-b24e-0d91e57c7619.png','SF','EULER TOUR TECHNIQUE'),(0,5,1,200,10,9,'2023-10-05 04:12:24.417122',NULL,'살인마에게 부모를 잃고 할머니와 둘이 살던 작은 아이.\n부모의 죽음에 대한 진실을 알고 경찰이 되었지만\n파출소 순경의 삶은 꿈 꿨던 형사의 삶과 달리 고단하기만 하다.\n매일 판타지 소설처럼 전설의 형사들이 꿈에 나타나\n자신을 가르쳐 주길 바라는 허황된 꿈만 꾸던 하준의 앞에 나타난 것은\n전설의 살인마들?\n아니 거기서 당신들이 왜 나와!!!?','QmPPtrN8Hz7TcScZdYG8Aj2ajdUUDJnobWkC7PwRr4UTye','https://bangle.s3.ap-northeast-2.amazonaws.com/0eb6a15b-2c78-42c6-b800-5d0da52b4d54.png','SF','판타스틱 월드'),(0,6,1,200,6,10,'2023-10-05 04:13:14.272122',NULL,'\'\"헌터 아카데미? 조선에요?\"\n\n율곡 이이가 설립한 헌터 아카데미, 율곡검원.\n세계 최강 소리를 들었던 S급 헌터가 율곡검원의 신입 생도가 되었다.\n\n‘아…… 내가 여기서 아카데미 중고딩들이랑 대련이나 하고 있다니…….’\n\n22세기 헌터학 마스터인 주인공이 16세기 조선 헌터 아카데미에 떨어져 벌어지는 좌충우돌 이야기!\n\n‘나 혼자 천재 DNA’ 작가의 기대 신작! <율곡검원의 소드마스터>','QmSZezMr2bbSPVGCq3LcNTXfyjMkBB5d8ysWDNAk2HYo8d','https://bangle.s3.ap-northeast-2.amazonaws.com/ebbed014-89c6-4434-ab9d-71d347baa347.png','SF','LAZY PROPAGATION'),(0,7,1,200,6,11,'2023-10-05 04:14:06.128654',NULL,'현실이 게임처럼 변하고,\n나는 만렙 게임 캐릭터의 인벤토리를 그대로 물려받았다.\n\n이제 모두가 원하는, 모든 것들이\n내 인벤토리에서 무궁무진하게 펼쳐진다.\n\n당신만 알고 있기를 바란다.\n내 인벤토리가... 이상하다.','QmNn3P9e6uwSJ2Uh8QCMMQBJ7Xb5CW48u7ezURbqu3ogd3','https://bangle.s3.ap-northeast-2.amazonaws.com/0d405e9d-c930-459a-9ca5-7414bc20fd9d.png','SF','회전 미로 탐색'),(0,5,1,200,6,12,'2023-10-05 04:15:21.344643',NULL,'『의천도룡기』는 대만에서 천만 부 이상, 중국에서 1억 부 이상 판매 기록을 세운, 중국작가 김용의 1961년작으로 『사조삼부곡』의 완결판이다. 『사조영웅전』『신조협려』『의천도룡기』 3편으로 이루어진 『사조삼부곡』은 남송 시기부터 원을 거쳐 명의 건국 이전까지의 긴 역사적 시간을 배경으로 한다. 이 시기 중국에서는 대륙을 놓고 한족과 거란족, 몽고족 등 이민족 간에 치열한 대결이 펼쳐졌다.\n\n『의천도룡기』에서는 \'의천검\'과 \'도룡도\'의 행방을 둘러싼 무림 고수들의 혈투, 혼원벽력수 성곤에게 원수를 갚기 위한 금모사왕의 분투, 명교인들과 육대문파(소림, 무당, 아미, 곤륜, 공동, 화산) 간의 오래된 은원관계, 장무기가 조민, 주지약, 아소, 은리 등과 펼치는 로맨스 등의 큰 사건들과, 그 사건들을 이어주는 다양한 인물과 애끓는 사연이 서로 복잡하게 뒤얽히면서 강호를 수놓는다. 김용은 〈구양진경〉을 통해 소림과 무당 사이의 연원관계를 구성하고, 의천검과 도룡도의 연원과 탄생을 〈구음진경〉과 〈무목유서〉의 행방과 연결시키고, 이로써 장무기를 곽정과 황용, 양과의 계승자로 만들면서 강호에 역사와 생명력을 부여한다.','QmP9qkoWr9p7JLvmBFRXpJ7N4M7eSZnH4vfaubFxvrQagi','https://bangle.s3.ap-northeast-2.amazonaws.com/9d4dbc79-31e3-446c-8fc7-bf01f832c1ce.png','SF','HEAVY LIGHT DECOMPOSITION'),(0,6,1,200,10,13,'2023-10-05 04:16:09.559256',NULL,'『의천도룡기』는 대만에서 천만 부 이상, 중국에서 1억 부 이상 판매 기록을 세운, 중국작가 김용의 1961년작으로 『사조삼부곡』의 완결판이다. 『사조영웅전』『신조협려』『의천도룡기』 3편으로 이루어진 『사조삼부곡』은 남송 시기부터 원을 거쳐 명의 건국 이전까지의 긴 역사적 시간을 배경으로 한다. 이 시기 중국에서는 대륙을 놓고 한족과 거란족, 몽고족 등 이민족 간에 치열한 대결이 펼쳐졌다.\n\n『의천도룡기』에서는 \'의천검\'과 \'도룡도\'의 행방을 둘러싼 무림 고수들의 혈투, 혼원벽력수 성곤에게 원수를 갚기 위한 금모사왕의 분투, 명교인들과 육대문파(소림, 무당, 아미, 곤륜, 공동, 화산) 간의 오래된 은원관계, 장무기가 조민, 주지약, 아소, 은리 등과 펼치는 로맨스 등의 큰 사건들과, 그 사건들을 이어주는 다양한 인물과 애끓는 사연이 서로 복잡하게 뒤얽히면서 강호를 수놓는다. 김용은 〈구양진경〉을 통해 소림과 무당 사이의 연원관계를 구성하고, 의천검과 도룡도의 연원과 탄생을 〈구음진경〉과 〈무목유서〉의 행방과 연결시키고, 이로써 장무기를 곽정과 황용, 양과의 계승자로 만들면서 강호에 역사와 생명력을 부여한다.','QmcmY7PgRQuCdpstotskeMpvwdpx7Qa6hB5kvnZo9wwqYg','https://bangle.s3.ap-northeast-2.amazonaws.com/63636a51-1444-45b5-aff1-69a15f9b5bff.png','SF','하늘에서 떨어지는 1, 2, ... , N개의 별'),(0,7,1,200,6,14,'2023-10-05 04:16:36.703184',NULL,'『의천도룡기』는 대만에서 천만 부 이상, 중국에서 1억 부 이상 판매 기록을 세운, 중국작가 김용의 1961년작으로 『사조삼부곡』의 완결판이다. 『사조영웅전』『신조협려』『의천도룡기』 3편으로 이루어진 『사조삼부곡』은 남송 시기부터 원을 거쳐 명의 건국 이전까지의 긴 역사적 시간을 배경으로 한다. 이 시기 중국에서는 대륙을 놓고 한족과 거란족, 몽고족 등 이민족 간에 치열한 대결이 펼쳐졌다.\n\n『의천도룡기』에서는 \'의천검\'과 \'도룡도\'의 행방을 둘러싼 무림 고수들의 혈투, 혼원벽력수 성곤에게 원수를 갚기 위한 금모사왕의 분투, 명교인들과 육대문파(소림, 무당, 아미, 곤륜, 공동, 화산) 간의 오래된 은원관계, 장무기가 조민, 주지약, 아소, 은리 등과 펼치는 로맨스 등의 큰 사건들과, 그 사건들을 이어주는 다양한 인물과 애끓는 사연이 서로 복잡하게 뒤얽히면서 강호를 수놓는다. 김용은 〈구양진경〉을 통해 소림과 무당 사이의 연원관계를 구성하고, 의천검과 도룡도의 연원과 탄생을 〈구음진경〉과 〈무목유서〉의 행방과 연결시키고, 이로써 장무기를 곽정과 황용, 양과의 계승자로 만들면서 강호에 역사와 생명력을 부여한다.','QmeYEwYPimjSohZnmP9qRK2fQgm4vgNE1TL33N1PAHGDJP','https://bangle.s3.ap-northeast-2.amazonaws.com/9c7c0825-87ee-4f8b-9322-b857def37aec.png','SF','주식회사 승범이네'),(0,5,1,200,10,15,'2023-10-05 04:17:21.795267',NULL,'‘중국문화사의 일대 기적’이라는 극찬과 함께, 전 세계 3억 부 이상 판매를 기록하며 중국문학의 금자탑, 중국의 셰익스피어, 중국의 톨긴 등으로 불리는 신필 김용. 그의 수많은 작품 가운데 “방대한 지식과 인문학적 소양을 바탕으로 새로운 역사 판타지”를 창조했다는 찬사를 받는《천룡팔부》(전10권)의 국내 정식 출간 완역본이다.\n\n북송과 요나라의 분쟁기를 배경으로 단예, 허죽, 소봉(교봉)이라는 세 영웅의 모험과 격정, 의리와 기개, 사랑과 증오가 넘나드는 인간애의 대장정이 광활한 스케일과 유장한 호흡 속에 펼쳐진다. 인간세상의 희로애락을 유불선 사상으로 오롯이 녹여낸 신필 김용 문학의 시원이다.','Qmbkx9AJSUeQzhmNRCU9UV4wShaz8Q8RZndsjXxdHW384T','https://bangle.s3.ap-northeast-2.amazonaws.com/b486766a-a4d2-4867-b666-4124936eb0d1.png','SF','우주는 죽지 않는다'),(0,6,1,200,5,16,'2023-10-05 04:19:18.003845',NULL,'월랑 신무협 장편소설 『무명무사』\n\n비열한 협잡과 암투에 휘말린 인생도, 부스러기 같은 과거의 잔재마저도 모두 청산한 채 가족의 품으로 가고자 했던 사내, 백소운.\n\n그렇게 고대하던 고향으로 돌아왔건만 상황은 악화일로.\n아버지는 돌아가셨고, 가업인 표국은 허물어질 판에다 동생들은 원망 어린 시선을 던질 뿐이다.\n\n점입가경, 가문은 들이닥치는 위기와 음모에 휩쓸리는데….','QmP8Xb1DDBzdQaPNGMEe7iUcPs2wKSu82UPQ4hthmmdbyk','https://bangle.s3.ap-northeast-2.amazonaws.com/c918a0e4-0165-4219-bee9-baead39cbd3f.png','SF','수열과 쿼리'),(0,7,1,200,14,17,'2023-10-05 04:32:23.331868',NULL,'책에 들어갈 실험 데이터를 확보하는 데만 약 4년이 걸렸다. 책에 사용된 사진은 500장이 넘는다. 그렇게 완성된 400페이지 속에는 식물을 선택하고, 돌보고, 함께 살아가다가, 자연으로 돌려보내는 이야기가 담겼다.\n\n빛, 물, 흙, 온도, 바람, 벌레 등 자칫 어려울 수 있는 식물학에 관한 이야기까지 다소 포함되어 있지만, 쉽게 풀어 쓰려는 노력과 편지 형식을 빌린 친절한 어조가 이를 중화시킨다. 그렇게 세상에서 가장 친절하고 다정한 가드닝 실용서가 완성되었다.','QmPPtrN8Hz7TcScZdYG8Aj2ajdUUDJnobWkC7PwRr4UTye','https://bangle.s3.ap-northeast-2.amazonaws.com/e1c83523-88d0-4487-b163-5f435a99f136.png','건강','바르게 걷기'),(0,5,1,200,5,18,'2023-10-05 04:34:17.956184',NULL,'‘덕업일치’를 이룬 야구광, 늘 야구장을 향하고 야구장에서 일해서 행복하다는 사람이 있다. 벌써 13년이란 시간을 스포츠 기자로 살아온 현 《스포츠서울》 기자 윤세호다. 2011년부터 2023년 현재까지 수도권 최고 인기 구단 LG 트윈스의 진솔한 이야기를 담아 팬들에게 보내는 첫 번째 에세이 《승리의 함성을 다 같이 외쳐라》를 펴냈다.\n\nLG 트윈스의 마지막 우승은 1994년. 2000년대 들어서는 2002년 준우승을 마지막으로 한국시리즈에 올라가지 못했다. 그런 LG가 2023시즌 내내 안정적인 1위를 유지하며 페넌트레이스 우승, 마침내 한국시리즈 진출을 확정했다. 신바람 연승 질주 끝에 정규 시즌 우승을 이룬 LG 트윈스의 지난 경기들과 그 속에서 팬들은 알지 못하는 이야기들, 저자의 객관적인 시선 등을 담았다. 일상이 야구가 된, 야구가 일상이 된 저자는 13년의 세월과 희로애락을 이 책에 켜켜이 쌓았다.','QmYSpZWpMnYyNWc7pZMVTBvkVCKJ1uiDXLHhm3z9kxU5oJ','https://bangle.s3.ap-northeast-2.amazonaws.com/d460ea7b-edb4-477a-9c5a-dc1ad29d3d0a.png','건강','기적의 하루'),(0,6,1,200,5,19,'2023-10-05 04:35:08.382989',NULL,'유튜브 5천만 뷰를 돌파하고 건강분야 40주 연속 1위를 차지한 <채소과일식>의 저자 조승우 원장이 새 책을 냈다. 비만과 질병의 원인을 세계 석학들의 명저들을 인용하며, 초등학생도 이해할 수 있을 정도의 쉬운 말로 분석하고 증명해낸다.','QmSZezMr2bbSPVGCq3LcNTXfyjMkBB5d8ysWDNAk2HYo8d','https://bangle.s3.ap-northeast-2.amazonaws.com/d58c0b99-17db-4ac2-9269-3ec5878a1535.png','건강','오래 살기'),(0,7,1,200,6,20,'2023-10-05 04:35:42.199237',NULL,'유튜브 5천만 뷰를 돌파하고 건강분야 40주 연속 1위를 차지한 <채소과일식>의 저자 조승우 원장이 새 책을 냈다. 비만과 질병의 원인을 세계 석학들의 명저들을 인용하며, 초등학생도 이해할 수 있을 정도의 쉬운 말로 분석하고 증명해낸다.','QmShZ3rxqZP5nWVuufX27ayoSCNRK5MMqV7vWFEy6h1qhu','https://bangle.s3.ap-northeast-2.amazonaws.com/f383c2e3-24a6-4f4c-8f69-8b00de0578c1.png','건강','병원의 진실'),(0,5,1,200,4,21,'2023-10-05 04:36:27.699293',NULL,'한약사가 알려주는 채소·과일식 해독법. 다이어트 보좌관이자 피토테라피스트 한약사 조승우가 《건강과 다이어트를 동시에 잡는 채소·과일식》을 세상에 내놓는다. 다이어트의 핵심은 독소 청소인데, 이를 위해 단순하면서 자연스러운 가장 효과적인 식단인 채소·과일식을 소개한다. 이 책은 가공식품과 화학첨가제의 진실을 알려준다. 또한 채소·과일식을 손쉽게 할 수 있는 방법부터 3주 프로그램을 통해 식단관리하는 방법까지 담겨 있다. 저자는 채소·과일식을 70%, 가공식품을 30%로 식단관리를 하도록 권한다. 여러분의 건강하고 행복한 삶을 기원한다.','QmSZezMr2bbSPVGCq3LcNTXfyjMkBB5d8ysWDNAk2HYo8d','https://bangle.s3.ap-northeast-2.amazonaws.com/3328632a-1c22-4ddd-b2a5-9ab44ccbe352.png','건강','THE HEALTH'),(5,6,1,200,5,22,'2023-10-05 04:37:08.376794',NULL,'한약사가 알려주는 채소·과일식 해독법. 다이어트 보좌관이자 피토테라피스트 한약사 조승우가 《건강과 다이어트를 동시에 잡는 채소·과일식》을 세상에 내놓는다. 다이어트의 핵심은 독소 청소인데, 이를 위해 단순하면서 자연스러운 가장 효과적인 식단인 채소·과일식을 소개한다. 이 책은 가공식품과 화학첨가제의 진실을 알려준다. 또한 채소·과일식을 손쉽게 할 수 있는 방법부터 3주 프로그램을 통해 식단관리하는 방법까지 담겨 있다. 저자는 채소·과일식을 70%, 가공식품을 30%로 식단관리를 하도록 권한다. 여러분의 건강하고 행복한 삶을 기원한다.','QmShZ3rxqZP5nWVuufX27ayoSCNRK5MMqV7vWFEy6h1qhu','https://bangle.s3.ap-northeast-2.amazonaws.com/d4f108cd-4338-4fda-809f-d062d4f2e50d.png','건강','식단의 중요성'),(0,7,1,200,5,23,'2023-10-05 04:37:44.590016',NULL,'전 세계적으로 손꼽히는 마스터 조향사이자 프랑스의 유명 브랜드 에르메스의 수석 조향사였던 장 클로드 엘레나. 그가 ‘향수 식물학’이라는 새로운 테마로 우리 곁에 찾아왔다. 향수와 식물이라니, 이름만으로도 설레고 기대되는 조합이다.\n\n이번 《향수가 된 식물들》은 조향계의 살아 있는 전설로 통하는 장 클로드 엘레나가 40여 가지 향기로운 식물들을 엄선해 그 식물들이 향수에 어떤 영감을 주고 어떻게 향수로 변신하는지를 소개한 책이다. 그가 직접 조향한 에르메스의 ‘운 자르뎅 수르닐’, ‘떼르 데르메스’, 시슬리의 ‘오 드 깡뺘뉴’, 까르띠에의 ‘데클라라시옹’, 프레데릭 말의 ‘로 디베’ 등 유명 향수는 물론 디올, 샤넬, 겔랑 등 70여 가지 향수들이 어떤 식물의 향에서 시작되었는지, 식물과 향에 얽힌 추억이나 향수 탄생 과정의 에피소드는 어디에서도 들을 수 없던 흥미로운 내용들이다.\n\n특히 책에 등장하는 식물을 가장 아름답고 우아하게 표현한 40여 컷의 일러스트는 품격을 한층 더 높여준다. 보고 있으면 실제 식물의 향이 풍기는 듯한 착각을 불러일으킬 정도다. <보그닷컴>에서는 이미 ‘2022 선물하기 좋은 최고의 책’으로 선정된 바 있으며, 60년 동안 조향사로 활동한 저자가 쓴 가장 매력적인 향 입문서라 할 만하다.','QmP9qkoWr9p7JLvmBFRXpJ7N4M7eSZnH4vfaubFxvrQagi','https://bangle.s3.ap-northeast-2.amazonaws.com/83728651-2883-46cf-b5cc-86409b53d11f.png','건강','느리게 갱신되는 나이'),(0,5,1,200,10,24,'2023-10-05 04:38:25.989975',NULL,'데이비드 D. 번즈의 전작 《필링 굿》은 미국 정신 건강 전문가들이 우울증 환자를 위한 최고의 책으로 꼽는 등 우울과 불안을 극복하기 위한 최고의 치료법으로 인정받았다. 한 연구에서는 《필링 굿》을 읽은 우울증 환자 65퍼센트가 4주 만에 다른 치료 없이 회복되거나 상당한 호전을 보인다고 보고했다. 3년간의 후속 연구는 이들이 이후에도 여타의 심리 치료나 약물 복용 없이 회복된 상태를 유지했다고 밝혔다.\n\n하지만 데이비드 D. 번즈는 만족하지 않았다. 《필링 굿》을 읽고도 회복되지 않은 35퍼센트의 환자들은 어떻게 할 것인지 고민했기 때문이다. 《필링 그레이트》는 이 고민의 결과물이다. 《필링 굿》과 마찬가지로 자세하고 친절한 설명으로 독자를 초대하고, 독자 스스로 증상을 호전할 수 있도록 적극적인 참여를 독려한다. 책의 두께에 겁먹을 필요는 없다. 자신에게 딱 맞는 기법이 설명된 부분을 찾아 힘들 때마다 그 부분을 반복해서 읽으며 좋은 기분을 유지하면 된다.\n\n더불어 《필링 그레이트》는 정신 건강 전문가들을 위해 쓴 책이기도 하다. 지금까지 5만 명이 넘는 의사와 치료사가 번즈 박사의 훈련 프로그램에 참석해 인지행동치료 기법을 학습했다는 데서 알 수 있듯, 번즈 박사는 정신 건강 전문가를 양성하는 일에도 관심이 많다. 그가 우울과 불안으로 고통받는 환자뿐 아니라 더 나은 우울과 불안 치료법을 고민하는 정신 건강 전문가에게도 도움을 주고자 하는 마음으로 이 책을 썼다고 밝힌 것은 이 때문이다. 일주일 중 닷새는 행복하고 이틀은 형편없는 평범한 일상을 갈망하는 모두에게 이 책에 따뜻하고도 실용적인 위로로 다가가길 바란다.','Qmcn28bf9ihg1mPmVyeiXWGjR6FYU3tCcPagKs7gu9K1Q3','https://bangle.s3.ap-northeast-2.amazonaws.com/d9b60422-b80f-46e2-9a4a-5e5a6208e09a.png','건강','8주 기적의 다이어트'),(0,6,1,200,10,25,'2023-10-05 04:38:56.979899',NULL,'〈털실타래〉는 현재 전 세계에서 큰 사랑을 받고 있는 최고의 뜨개 & 핸드메이드 잡지입니다. 뜨개 전문기업 일본보그사에서 매 계절(봄, 여름, 가을, 겨울)마다 발간해온 수예 전문지로, 2022년 가을호부터 한국어판이 공식 출간되어 1주년을 맞이했다. 이번에 출간되는 <털실타래 Vol.5>의 주제는 영국의 건지섬에서 시작된 ‘건지 니트’로, 아름다운 가을 옷과 아이템을 소개한\n\n제주의 뜨개 역사를 고스란히 담은 ‘한림수직’ 이야기, 일본의 유명 뜨개 브랜드 ‘아미리수’ 대표들의 내한 트렁크 쇼, 제주에서 만날 수 있는 수예 숍 소개를 한국어판 기획 기사로 실었다. 그밖에도 여러 실을 겹쳐 아름다운 편물을 만드는 ‘합사’ 추천 실과 뜨개 과정을 더 즐겁게 해주는 다양한 뜨개 부자재 소개도 만날 수 있다.','QmcmY7PgRQuCdpstotskeMpvwdpx7Qa6hB5kvnZo9wwqYg','https://bangle.s3.ap-northeast-2.amazonaws.com/78be8d7e-9a9b-4b2a-abc3-d6ba4a916320.png','건강','맨발의 석봉이'),(0,7,1,200,5,26,'2023-10-05 04:39:39.169872',NULL,'피할 수는 없지만 늦출 수는 있다! 서울아산병원 노년내과 정희원 교수가 한국사회에 가속노화가 도래했음을 경고하고 노화의 속도를 정상화해줄 네 가지 기둥과 그에 따른 습관들을 담아 책으로 펴냈다. 한국의 통계를 보면, 신체질량지수나 음주를 비롯한 젊은 성인의 건강지표가 지난 몇 년 동안 눈에 띄게 나빠지고 있다. 실제로 이곳저곳 아프지 않은 곳이 없는 30대 여성, 치매가 생긴 것 같다는 40대 남성, 원인 모를 쇠약감 때문에 이 병원 저 병원을 전전하던 50대 남성 등 진료실을 찾는 젊은 환자들도 생겨나고 있다.\n노인의학자들은 우리가 77세까지 경제활동을 해야 한다고 생각한다.\n\n통상적으로 노년층이라고 일컬어지는 60대에는 경제적으로 정신적으로 은퇴가 힘든 것이다. 정희원 교수는 이러한 사회적 필요에 의해 본인의 진료경험뿐 아니라 임상연구, 과학, 인문학, 경제학 등을 넘나들며 지속 가능하게 나이 들기 위한 4M 건강법을 구축했다. 신체기능을 되돌려주는 ‘이동성’, 인지기능의 회복탄력성을 높이는 ‘마음건강’, 건강에 대해 잘못 알려진 사실을 바로잡아주는 ‘건강과 질병’, 사회적 고립을 예방하는 ‘나에게 중요한 것’ 등 건강하고 성공적인 나이 듦을 결정하는 중요한 네 가지 요소를 축으로 한다. 특별한 재능이 필요한 건강법은 아니며, 그 개선 속도는 며칠 내로 나타날 정도로 빠르고, 얻을 수 있는 수명 연장의 폭이 최소한 12년 이상일 정도로 효과는 극적이다. 현재 한국사회의 인구구조 및 복지제도를 살펴봤을 때 건강은 최고의 재테크다. 늦었다고 생각하지 마라. 지금이 가장 이른 때다.','QmdZsEEE8VbQvSGZbAqeUzqj6qRgdtHgJ2yEnUrUnTjLXY','https://bangle.s3.ap-northeast-2.amazonaws.com/fe4538ce-7a62-4b6b-b022-d7fcd0afd406.png','건강','올바른 채식주의'),(0,5,1,200,10,27,'2023-10-05 04:40:08.645204',NULL,'서울대 의대 재활의학과 정선근 교수의 스테디셀러인 백년허리1 진단편에 이은 실제적인 치료 방법을 제시하고 있는 백년허리2 치료편이다. 치료편에서 저자는 허리 통증에서 벗어날 수 있는 방법을 정확히, 구체적으로, 누구나 따라할 수 있도록 설명하고 있다. 일상생활, 운동, 작업 등 허리 아픈 사람이 겪게 되는 모든 상황에서 허리를 어떻게 사용하는 것이 옳은지를 알려준다.','QmP9qkoWr9p7JLvmBFRXpJ7N4M7eSZnH4vfaubFxvrQagi','https://bangle.s3.ap-northeast-2.amazonaws.com/55c08b89-919a-4e7e-be5e-92c1f8f21133.png','건강','마지막 하나에서 성취감을 느끼다'),(0,6,1,200,4,28,'2023-10-05 04:40:38.380172',NULL,'베스트셀러 《NEW 미꽃체 손글씨 노트》《맬맬책이랑 손글씨 연습》을 통해 손글씨를 소개해온 ‘시원북스’에서 이번에는 ‘영어 필기체 손글씨’를 선보인다. 일생에 한번은 제대로 써보고 싶었지만 배울 기회가 없던 필기체. 시원북스 신간 《이토록 멋진 영어 필기체 손글씨》라면 누구든 쉽고 재밌게 필기체의 세계에 빠져들 수 있다.\n\n이 책을 쓴 ‘잉크잉크’는 의사이자 만년필 유튜버로, 자신의 필기체 쓰는 법을 소개한 유튜브 영상으로 사람들의 필기체 로망을 자극하며 화제가 되었다. 어린 시절 어머니로부터 배운 필기체와 자신의 노하우를 결합해 만든 필기체 손글씨 ‘잉크체’는 깔끔하고 우아한 모양이 특징이다. 잉크잉크와 함께 ‘이토록 멋진 영어 필기체 손글씨’의 매력에 빠져보자.','QmP8Xb1DDBzdQaPNGMEe7iUcPs2wKSu82UPQ4hthmmdbyk','https://bangle.s3.ap-northeast-2.amazonaws.com/265af7da-99ed-4799-956e-cf4d0f724ef8.png','건강','명상의 비결'),(0,7,1,200,5,29,'2023-10-05 04:41:17.551282',NULL,'지금 자본주의는 기로에 놓여 있다. 이대로 갈 것인가, 새로운 길을 모색할 것인가. 약 250년에 걸쳐 우리 사회를 지배했으며 현재 위기를 겪고 있는 ‘자본주의’를 쉽게 풀어낸 방송, [EBS 다큐프라임 <자본주의> 5부작]이 책으로 출간됐다.\n\n이 책에는 5부작 방송에서 미처 다 보여주지 못한 내용들이 심층적으로 보완되고 정리되었다. ‘은행에 빚을 갚는다’는 것이 개인에게는 속박과 굴레를 벗어남을 뜻하지만 국가 경제로 보면 경제 규모의 축소를 의미한다든지, 뉴스에서 나오는 ‘서브프라임 모기지’는 대체 무엇이고 왜 문제가 생겼는지, 저축은행 사태는 왜 일어났는지, 마트에 가면 왜 나도 모르게 많이 사게 되는지 등 자본주의 사회의 숨은 진실과 무서움에 관해 책은 경고한다.\n\n그리고 무의식중에 우리를 나락으로 빠뜨리는 자본주의의 유혹과 위협 속에서 어떻게 살아남을 것인지 알려준다. 현재의 자본주의 시장 경제를 처음으로 묘사했던 1776년 아담 스미스의 『국부론』으로 거슬러 올라가 스미스와 마르크스의 관점에서 지금의 자본주의를 바라보기도 하고, 케인스와 하이에크의 ‘시장’이냐 ‘정부’냐 논쟁에서 벗어나 결국엔 ‘사람’이 가장 중요하다는 결론을 내린다.','Qmbkx9AJSUeQzhmNRCU9UV4wShaz8Q8RZndsjXxdHW384T','https://bangle.s3.ap-northeast-2.amazonaws.com/6d410890-8931-48d3-b37a-a19378c4ec80.png','경제','투자의 왕'),(0,5,1,200,5,30,'2023-10-05 04:41:51.031945',NULL,'“거인의 어깨에서 보는 세계”, “메르의 혜안은 1%가 아니라 0.01%다”, “경제에 무관심했던 사람들조차 탐독하게 만드는 글”이라는 찬사를 받는 블로그가 있다. 매일 0시 10분 새로운 글을 올려 1년여 만에 구독자가 10만 명 이상이 되었고, 글을 올릴 때마다 최다 조회수를 경신하며 폭발적인 관심을 받고 있다.\n\n저자 메르는 삼성그룹과 GE 등 글로벌 기업에서 위험관리 전문가로 일하면서 축적한 노하우와 금융사 4곳에서 임원으로 활동하면서 누적 30조 원 이상의 국내외 부동산 투자, NPL 펀드, 리츠 등에 대한 투융자를 최종 검토하고 승인했던 실전 경험을 바탕으로, 가장 쉽고 흥미롭게 경제 흐름을 이해하고 그 속에서 기회를 발견하는 방법을 소개한다.\n\n투자를 하다 보면 긴 터널을 걷고 있는 듯한 느낌이 들 때가 있다. 어디로 나아가야 하는지, 더 나아가야 하는지 멈춰야 하는지 도무지 방향이 보이지 않을 때 이런 물음들이 생긴다. ‘최고의 투자자들은 무엇을 지표로 삼을까?’, ‘시장을 보는 눈은 어떻게 키워야 할까?’, ‘매일 쏟아지는 뉴스를 어떻게 선별하고 적용해야 할까?’ 이 책은 이 질문들에 대한 답을 찾는 데 유용한 힌트가 될 것이다.\n','QmShZ3rxqZP5nWVuufX27ayoSCNRK5MMqV7vWFEy6h1qhu','https://bangle.s3.ap-northeast-2.amazonaws.com/9601d984-f783-4efd-ade8-38c160d3fde4.png','경제','30살에 경제적 자유'),(0,6,1,200,6,31,'2023-10-05 04:42:22.911972',NULL,'달러 투자의 신 박성현 저자와 길벗의 무작정 따라하기가 만났다. 달러 투자를 위한 기초 지식부터 투자 원리, 매수 타이밍의 기준이 되는 데이터 보는 법, 세븐 스플릿하는 법 등 무작정 따라하기 코너를 통해 단계별로 하나씩 따라 하다 보면, 그리고 예제를 풀어가다 보면 달러 투자에 대해 완벽하게 이해할 수 있을 것이다. 또한 달러 투자를 역이용한 원화 투자와 엔저 현상으로 뜨거운 엔화 투자까지 이 책 한 권으로 세 가지의 투자법을 마스터할 수 있도록 특별 구성하였다.','QmP9qkoWr9p7JLvmBFRXpJ7N4M7eSZnH4vfaubFxvrQagi','https://bangle.s3.ap-northeast-2.amazonaws.com/e8b3f26d-8788-46f3-9bd7-2e5194742779.png','경제','올바르게 저축하는 법'),(5,7,1,200,1,32,'2023-10-05 04:42:52.828630',NULL,'초판 발행 후, 경제경영 필도서로 자리매김한 『돈의 속성』 300쇄 기념 개정증보판이다. 300쇄에 맞춰 코로나19로 바뀐 경제상황과 돈에 관한 김승호 회장의 추가 메시지를 담았다.\n\n『돈의 속성』은 3년 전 어느 극장 하나를 빌려 대중에게 강의했던 내용을 기반으로 집필됐다. 강연은 방송을 통해 전파되며 유튜브와 셀럽들에 의해 공유와 전파를 거듭했다. 그리고 이내 1,100만 명에게 전달되기에 이르렀다. 하지만 여러 사람을 통해 생산 및 재생산되는 과정에서 어떤 의미는 그 뜻이 정확히 전달되지 않았거나 의미가 왜곡되는 일이 있었다.\n\n몇 권을 저술한 저자지만 여전히 책 쓰기가 가장 어렵다는 그는 이런 상황에서 다시 한 번 펜을 잡기로 결정했다. 그것은 그의 내면에 깃든 사람에 대한 애정 때문이었다. 모두에게 정말 필요하고 중요하지만 아무도 말하지 않는 진짜 돈 버는 방법, 진짜 돈을 벌어본 사람은 그 누구도 방법을 공유하지 않기에 이 일이 저자 자신에게 주어진 것이라 받아들였다. 젊은 날의 자신의 모습이 투영되기에.\n\n어떤 횡재나 일명 대박주식 없이 말 그대로 맨손에서 만들어낸 종잣돈으로 돈 버는 방법을 알려준다. 부모에게 받은 유산은커녕, 30대 후반까지 낡은 자동차에 그날 판매할 과일을 싣고 다니던 어느 가난한 이민 가장이 이룬 진짜 부에 대한 모든 방법이 담겼다. 종잣돈 천만 원을 만들고 그 돈을 1억 원, 10억 원, 100억 원, 수천억 원이 될 때까지 돈을 관리하며 터득한 ‘돈’이 가진 속성을 정리한 안내서다. ‘진짜 부자’가 된 실제 인물이 말해주는 ‘진짜 돈’만들기에 대한 책이다.','QmcmY7PgRQuCdpstotskeMpvwdpx7Qa6hB5kvnZo9wwqYg','https://bangle.s3.ap-northeast-2.amazonaws.com/9a694745-facb-4fcb-be49-07d8e2613fb5.png','경제','코인은 사기다'),(0,5,1,200,5,33,'2023-10-05 04:43:22.838421',NULL,'2015년 출간 이후, 수많은 독자로부터 꼭 읽어야 할 최고의 ‘부자학 입문서’로 꼽혀온 『부자의 그릇』이 양장 개정판으로 새롭게 출간됐다. 이 책은 김봉진 우아한형제들 의장, 청울림 유대열 대표, 하정우 배우 등이 강력 추천하고, 40곳이 넘는 유튜브 채널에서 소개되며, 수많은 젊은 부자와 독자로부터 실제 삶에 적용할 수 있는 최고의 ‘부자학 입문서’로 꼽혀왔다. 대체 이 책에 어떤 비결이 숨어 있기에, 이토록 꾸준히 사랑받으며 스테디셀러로 자리매김한 걸까?\n\n『부자의 그릇』은 일생을 ‘돈의 교양’을 알리는 데 바쳐온 일본 최고의 경제금융 교육 전문가 이즈미 마사토가 소설 형식으로 쓴 경제경영 교양서다. 한때 연 매출 12억의 주먹밥 가게 사장이었다가 도산해 3억 원의 빚을 지고 공원을 방황하던 한 젊은 사업가가 수수께끼 노인을 만나 장장 7시간에 걸쳐 돈의 본질과 돈을 다루는 능력을 키우는 법을 배우는 과정을 다루고 있다.\n\n이 책은 부자가 되는 방법이 돈을 좇는 데 있지 않고 신용을 쌓는 일이라고 말한다. 남을 위해 돈을 쓰고, 다른 사람의 기대에 부응하며, 약속을 철저히 지키는 일들이 어떻게 돈을 불러 모으는지, ‘돈과 신용의 원리’에 관해 누구나 쉽게 이해할 수 있도록 흥미로운 스토리텔링을 통해 전달한다.\n\n돈에 대한 명쾌한 통찰을 담고 있어서, ‘연봉이 적어서, 빚이 있어서, 운이 나빠서, 불황이라서, 이율이 낮아서, 세상이 불공평해서’ 돈이 모이지 않는다며 좌절한 이들에게 다시 도전할 수 있는 용기와 돈을 장악하는 힘을 불어넣어 준다.','QmZRhDdyecSvZYkPeWTTUZUSYn77yMzitTPDU6gPunT9ZD','https://bangle.s3.ap-northeast-2.amazonaws.com/d0e524ff-7a7f-4d0c-a1ac-5bcc97ef0e51.png','경제','행운의 1달러'),(0,6,1,200,4,34,'2023-10-05 04:43:51.817713',NULL,'돈을 대하는 태도와 올바른 투자관을 알려주며, 세계와 한국 경제 속 돈의 흐름을 생생히 짚어주고자 기획된 머니 트렌드 시리즈가 2022년에 이어 두 번째로 출간되었다. 『머니 트렌드 2024』는 경제 전반, 부동산, 주식, 테크, 인구, 사회 이슈 그리고 올해 새롭게 문화 트렌드 분야까지 더하여 각 분야의 전문가들이 돈의 흐름을 전망하고 이를 57가지 키워드로 정리해 한층 더 탄탄해진 내용으로 부의 노하우와 전략을 소개한다.\n\n누적 조회수 7억 뷰, 300만 명의 구독자가 믿고 보는 유튜브 채널 김작가TV의 김도윤, 부동산 읽어주는 남자의 정태익은 경제 흐름을 한눈에 파악하고 이를 현실적으로 내 삶에 적용할 수 있는 방법을 소개하고자 국내 최고의 경제경영 전문가들을 모아 2024년 꼭 알아야 할 부의 인사이트를 이 책에 담았다.\n\n『머니 트렌드 2024』는 지금처럼 경기 침체와 자산시장의 회복세가 번갈아 드러나는 혼돈의 시기에 부를 얻기 위한 올바른 방향성과 투자 원칙을 제시하고, 돈의 트렌드를 재테크와 연결하는 방법을 알려준다. 위기에 대비하고 판도의 변화에도 흔들림 없이 자산을 늘리고 싶다면 반드시 이 책을 공부하길 바란다. 읽는 것만으로도 돈의 흐름과 부를 얻을 아이디어가 손에 잡히는 것은 물론, 누구보다 빠르게 부자가 될 기회를 선점할 수 있을 것이다.','QmP3TtKFHHuyTmJ2irN4zMNcY1dYdg72Dos3pqRhQJm5C5','https://bangle.s3.ap-northeast-2.amazonaws.com/56a1a5b2-c987-4c97-a583-21528dfe60ed.png','경제','오늘도 잃었다'),(0,7,1,200,5,35,'2023-10-05 04:44:20.898630',NULL,'인생과 투자는 문제은행 방식으로 움직이지 않는다. 세상에 똑같은 순간은 단 1초도 없는 것처럼, 투자는 절대 반복되지 않는다. 앵무새처럼 외워서는 이길 수 없는 게임이 투자의 세계다. 어제의 정답이 오늘은 틀린 이유를 스스로 찾아야 성공할 수 있다. 매사를 전략적으로 생각하고 천천히 움직여야 한다.\n\n우석의 이야기는 한결같다. 그래서 읽을 때마다 새롭다. 이 작은 역설이 성공투자의 비결이다. 날마다 새롭게 새기는 흔들리지 않는 철학이야말로 성공의 열쇠이기 때문이다.\n\n이 책은 성공한 투자가이며 관련 분야의 독보적인 논객인 우석의 인생철학을 담고 있다. 경제적 자유를 얻는 방법뿐만 아니라 직장 생활은 어떤 마인드로 해야 하는지, 불행을 피하고 행복하게 살기 위해서는 어떻게 해야 하는지, 자녀를 어떤 마음으로 키워야 하는지 등 평소 그가 갖고 있던 생각을 그대로 담았다. 그는 학교에서 가르쳐주지는 않지만 인생에서 꼭 필요하고 생각하는 것에 대해 자신이 깨달은 바를 나누고 싶다고 밝히고 있다. 투자에 성공하기 위해 장착해야 할 삶의 철학을 잔잔한 호흡으로 풀어가고 있다.','QmPPtrN8Hz7TcScZdYG8Aj2ajdUUDJnobWkC7PwRr4UTye','https://bangle.s3.ap-northeast-2.amazonaws.com/734e1d90-d9f6-4b18-96a9-46f1ca86190c.png','경제','주식 차트 읽기'),(0,5,1,200,4,36,'2023-10-05 04:44:54.200708',NULL,'기술적 분석은 해당 주식의 과거 가격동향을 토대로 미래의 주가 움직임을 예측해 내는 것을 목적으로 한다. 가격의 변동요인을 투자자가 모두 아는 것은 불가능하다. 스스로가 얻어낸 정보를 근원으로 투자하는 것에 한계가 있다면, 시장의 다른 구성원들의 움직임과 해당 주식의 과거 누적 가격을 보고 미래를 예측하는 방법을 생각해 볼 수 있다. 이것이 기술적 분석의 기본이다.\n\n주식시장에는 많은 전문가가 있고, 그들은 각기 자신만의 노하우를 가지고 있다. 저마다 수백에서 수천 퍼센트에 이르는 수익률을 가진 모든 기술적 분석 전문가들의 투자전략의 뿌리에는 엘리엇 파동이론, 갠의 시간분석이론, 다우이론 등이 존재한다.\n\n이 책은 기술적 분석의 배경철학이 되는 주요이론과 분석의 도구가 되는 각종 차트를 읽는 법이 담겨 있다. 기술적 분석 개념에 대한 설명과 이의 선물시장 작용방법에 있어 가장 종합적이면서 쉬운 안내서라고 할 수 있다.\n\n이 책에서는 시스템 개방에 따른 고도화된 기술적 지표들, 마켓 프로파일과 같은 새로운 그래프의 광범위한 활용법, 그리고 그래프 작성의 모든 기업을 소개하고 있을 뿐만 아니라 여러 시장들간의 긴밀한 상관관계에 대해서도 밝히고 있다. 이에 미국 연방준비은행은 기술분석적 접근법을 평가하는 연구에서 이 책을 인용하였으며, 8개 국어로 번역되어 출판되었다. 주식시장에서 일하는 많은 사람에게 기술적 분석의 바이블이라 불리는 책이다.','QmSZezMr2bbSPVGCq3LcNTXfyjMkBB5d8ysWDNAk2HYo8d','https://bangle.s3.ap-northeast-2.amazonaws.com/3edad9e5-4a0a-4c83-86d1-f60bb45cac92.png','경제','돈의 특성'),(0,6,1,200,4,37,'2023-10-05 04:45:21.886382',NULL,'‘볼린저 밴드’의 창시자 존 볼린저가 직접 저술한 원작을 완역하여 펴낸 책이다. 볼린저 밴드를 알고자 하는 투자자라면 원작자의 볼린저 밴드 개발 아이디어부터 승률을 높이기 위한 최적의 설정 방법, 원작자로부터 지표 선택 방법을 직접 들을 수 있다.\n\n훌륭한 발명품이 대개 그렇듯이 볼린저 밴드 역시 단순함이라는 장점을 갖고 있다. 특히 볼린저가 제공하는 세 가지 핵심 매매기법은 누구라도 쉽게 이해하고 활용할 수 있기 때문에 투자자들에게 유익한 정보가 될 것이다.','QmPPtrN8Hz7TcScZdYG8Aj2ajdUUDJnobWkC7PwRr4UTye','https://bangle.s3.ap-northeast-2.amazonaws.com/8781bb63-fda9-4fa9-9458-9caec0a5b2da.png','경제','시간이 돈을 번다'),(0,7,1,200,1,38,'2023-10-05 04:45:50.206604',NULL,'한국과 미국, 전 세계를 오가며 ‘사장을 가르치는 사장’으로 알려진 『돈의 속성』의 저자 김승호 회장의 신간이다. 평생 사장으로 살아온 그의 경영철학 모두를 10여 년에 걸쳐 정리해 온 그는, 이번 『사장학개론』 책을 통해 120가지 주제로 그 내용을 모두 담아 완성했다.\n\n지난 7년간 3천 명의 사장 제자들을 만나 <사장학 수업>을 진행하며 현실에서 겪는 다양한 문제에 대해, 사장들이 묻는 공통적인 어려움이 존재했으며 그 문제들을 목차로 구성해 방향제시를 더했다.\n\n한국KCA사장학교에 합격하고 저자를 기다리고 있는 사장들을 만나기 위해 미국에 거주하는 기업인인 저자는 일 년에 두 번, 한국을 방문해왔다. 하지만 한정된 기회와 한정된 인원으로 제한되는 상황이 지속돼 <사장학 수업> 내용 전체를 담아 『사장학개론』 책으로 출판을 결정하게 되었다.','QmP3TtKFHHuyTmJ2irN4zMNcY1dYdg72Dos3pqRhQJm5C5','https://bangle.s3.ap-northeast-2.amazonaws.com/76ad205d-50ee-4dcd-a228-59ea8f2cab7a.png','경제','달러 투자 배우기'),(0,5,1,200,10,39,'2023-10-05 04:46:16.037999',NULL,'경제 분석가 버나드 보몰은 최신 글로벌 및 미국 지표와 데이터를 반영하여 자신의 베스트셀러를 완전히 업데이트했다. 보몰은 신흥경제 변화 속 강력하게 등장한 새로운 지표를 파악하고, 예측 가치를 상실한 지표를 제외하였으며, 의미 있고 직관적인 시각 자료들을 활용해 핵심 포인트를 제시한다.\n','QmYSpZWpMnYyNWc7pZMVTBvkVCKJ1uiDXLHhm3z9kxU5oJ','https://bangle.s3.ap-northeast-2.amazonaws.com/f3b38a46-9d02-48ac-bdd5-0cc877365f42.png','경제','일하는 돈'),(0,6,1,200,5,40,'2023-10-05 04:46:43.095418',NULL,'부자 되기 방식의 패러다임을 바꾼 <부의 추월차선>이 독자들의 사랑과 지지 속에 한국 출간 10주년을 맞이했다. 이 책은 죽도록 일하며 수십 년 간 아끼고 모아서 휠체어에 탈 때쯤 부자 되는 40년짜리 플랜을 비웃으며 한 살이라도 젊을 때 부자가 되어 은퇴하는 방법을 구체적으로 제시하고 있다.\n\n‘추월차선’을 알고 난 뒤 부의 지도를 다시 그린 사람들은 하나같이 입을 모은다. “추월차선 법칙을 알게 된 뒤 나는 내가 돈에 쪼들리며 사는 이유를 알게 되었고, 그런 인생으로부터 벗어나기로 결심했다. 4년 후 나는 자산을 4배로 불릴 수 있었다.”, “이제 나는 부자가 되는 데 돈 많은 부모님도, 운도 필요 없다는 사실을 알게 되었다. 돈을 버는 방법에 대한 지식만이 필요할 뿐이다. 그리고 추월차선이 내게 그 지식을 주었다.”\n\n휠체어 탄 백만장자는 부럽지 않다. 젊은 나이에 일과 돈에서 해방되어 인생을 즐겨라. 일주일에 5일을 노예처럼 일하고 다시 노예처럼 일하기 위해 2일을 쉬는 당신, 30대 억만장자가 알려 주는 가장 빠른 부자의 길 “부의 추월차선”으로 옮겨 타라.','QmYSpZWpMnYyNWc7pZMVTBvkVCKJ1uiDXLHhm3z9kxU5oJ','https://bangle.s3.ap-northeast-2.amazonaws.com/41c70527-7385-485a-a0bd-bd2e27674468.png','경제','돈의 흐름'),(0,7,1,200,6,41,'2023-10-05 04:47:33.994454',NULL,'어렸을 때 고아가 되어, 이모부인 코넬 후작에 의해 수녀원에 맡겨져 자란 세실리아.\n그러던 어느 날, 세실리아는 난데없이 코넬 후작에게 납치되어 터무니없는 요구를 당하게 된다.\n황제와 결혼이 예정되어 있는 코넬 후작의 딸 비앙카가 갑작스러운 사고로 쓰러진 상황이니,\n비앙카가 정신을 차리고 깨어날 때까지 비앙카 대신 황후 역할을 해야 한다는 것.\n\n“이 일을 잘해 내야, 네가 죽지 않을 거거든.”\n\n이모부의 협박에 못 이겨, 울며 겨자 먹기로 황제와 결혼해 황궁에 들어가게 된 세실리아는,\n황제든 이모부든 둘 중 하나의 손에 죽게 될 것만 같아 어떻게든 몰래 도망치려 한다.\n그러나 첫 번째 탈출 시도 때, 세실리아는 마침 암행을 나왔던 황제의 눈에 띄고 만다.\n젊고 아름다운 황제 칼리온은 자신이 소문으로만 듣던 비앙카의 오만방자함이라고는 전혀 찾아볼 수 없는 세실리아의 행동을 목격하고, 그녀를 주의 깊게 살피기 시작하는데.....\n\n“이제부터 황후는 진짜 내 아내로서 살아야 한단 얘기요.”\n나, 나 이름뿐인 황후랬는데?','Qmc9c87Ze2GEJSZ3FyyuYfJVPCRAYZC4fDVKLddiGcYR8t','https://bangle.s3.ap-northeast-2.amazonaws.com/16c0552a-2071-4104-b84b-79f7c19b0166.png','로맨스','해피 엔딩의 고백'),(0,5,1,200,1,42,'2023-10-05 04:48:24.971009',NULL,'뛰어난 검술 실력으로 황제의 자리까지 거머쥐었던 단테 레나투스는,\n500년 후 페레스카 공작의 딸 ‘헬레나’로 환생한다.\n\n원하지 않았던 2회 차 인생.\n전생에서 누릴 거 다 누렸고, 해 볼 거 다 해 봤다.\n다시 태어나 봐야 뭘 해도 귀찮고 무료할 뿐이다.\n\n그러던 중, 세력 다툼을 피해 황자 카이사르가 공작저를 방문하게 되고,\n카이사르의 재능을 알아본 헬레나는 그의 검술 스승이 되기로 결심한다.\n\n“내가 널 황제로 만들어 줄게.”\n\n그저 무료한 인생을 달래기 위해\n전생의 특기를 살려 후학 양성이나 해 볼까 하고 시작한 일이었는데......\n\n“난 스승님을 위해서라면, 이 세계도 멸망시킬 수 있어.”\n\n어쩐지 내 제자가 나를 좋아해도 너무 좋아하는 것 같은데?','QmYSpZWpMnYyNWc7pZMVTBvkVCKJ1uiDXLHhm3z9kxU5oJ','https://bangle.s3.ap-northeast-2.amazonaws.com/31e1dc82-e4ab-4f4a-84cd-3fe3aab83344.png','로맨스','한여름 밤의 불꽃놀이'),(0,6,1,200,14,43,'2023-10-05 04:48:47.746692',NULL,'뛰어난 검술 실력으로 황제의 자리까지 거머쥐었던 단테 레나투스는,\n500년 후 페레스카 공작의 딸 ‘헬레나’로 환생한다.\n\n원하지 않았던 2회 차 인생.\n전생에서 누릴 거 다 누렸고, 해 볼 거 다 해 봤다.\n다시 태어나 봐야 뭘 해도 귀찮고 무료할 뿐이다.\n\n그러던 중, 세력 다툼을 피해 황자 카이사르가 공작저를 방문하게 되고,\n카이사르의 재능을 알아본 헬레나는 그의 검술 스승이 되기로 결심한다.\n\n“내가 널 황제로 만들어 줄게.”\n\n그저 무료한 인생을 달래기 위해\n전생의 특기를 살려 후학 양성이나 해 볼까 하고 시작한 일이었는데......\n\n“난 스승님을 위해서라면, 이 세계도 멸망시킬 수 있어.”\n\n어쩐지 내 제자가 나를 좋아해도 너무 좋아하는 것 같은데?','QmSZezMr2bbSPVGCq3LcNTXfyjMkBB5d8ysWDNAk2HYo8d','https://bangle.s3.ap-northeast-2.amazonaws.com/d63cebf0-2083-407e-83ae-9299c2f8ea26.png','로맨스','우리의 순간'),(0,7,1,200,1,44,'2023-10-05 04:49:18.952956',NULL,'방송작가 4년차! 막내도 4년차! 서브작가로 입봉 할 날을 코앞에 두고, 이 악물며 일하는 담화의 앞에 그야말로 ‘진상 오브 진상’ 대한민국 대표 톱배우 호현이 나타난다. 첫 만남부터 얽히고설키더니 사사건건 시비 거는 이 남자. 잘생기면 다냐?! 싶다가도 그 잘생긴 얼굴로 곤란할 때마다 눈앞에 짠하고 나타나니... 이거야 말로 그녀는 퍽 곤란하다. 괴롭히든 잘해주든 둘 중 하나만 하란 말이다! 그런 담화의 눈앞에 믿을 수 없는 광경이 펼쳐지는데... “하나, 둘, 여덟, 아홉? 아호옵...?!” 호현의 등 뒤에 있는 것은 크고 아름다운 꼬리. 한두 개도 아닌 무려, 아홉 개의 꼬리!...지만! 그게 뭐 어때서? 구미호 조련에 재능을 보이는 보통 아닌 여자, 담화와 보통 아닌 남자 구미호, 호현의 본격 현실감각 무뎌지는 로맨스','QmYSpZWpMnYyNWc7pZMVTBvkVCKJ1uiDXLHhm3z9kxU5oJ','https://bangle.s3.ap-northeast-2.amazonaws.com/be282d55-668d-4b4b-bae4-656ca13644b5.png','로맨스','눈 밑의 점'),(0,5,1,200,5,45,'2023-10-05 04:49:42.955779',NULL,'방송작가 4년차! 막내도 4년차! 서브작가로 입봉 할 날을 코앞에 두고, 이 악물며 일하는 담화의 앞에 그야말로 ‘진상 오브 진상’ 대한민국 대표 톱배우 호현이 나타난다. 첫 만남부터 얽히고설키더니 사사건건 시비 거는 이 남자. 잘생기면 다냐?! 싶다가도 그 잘생긴 얼굴로 곤란할 때마다 눈앞에 짠하고 나타나니... 이거야 말로 그녀는 퍽 곤란하다. 괴롭히든 잘해주든 둘 중 하나만 하란 말이다! 그런 담화의 눈앞에 믿을 수 없는 광경이 펼쳐지는데... “하나, 둘, 여덟, 아홉? 아호옵...?!” 호현의 등 뒤에 있는 것은 크고 아름다운 꼬리. 한두 개도 아닌 무려, 아홉 개의 꼬리!...지만! 그게 뭐 어때서? 구미호 조련에 재능을 보이는 보통 아닌 여자, 담화와 보통 아닌 남자 구미호, 호현의 본격 현실감각 무뎌지는 로맨스','QmP9qkoWr9p7JLvmBFRXpJ7N4M7eSZnH4vfaubFxvrQagi','https://bangle.s3.ap-northeast-2.amazonaws.com/dc26578d-6b4c-431e-888f-138a3d04031e.png','로맨스','별빛 아래 우리'),(0,6,1,200,1,46,'2023-10-05 04:50:13.698075',NULL,'저와 파혼한 다음 약혼할 황자를 추천한 카자르의 얼굴은 마치 세상의 멸망을 코앞에 둔 사람 같았다. 그 비장미 넘치는 얼굴을 마주하며 엘루아나가 픽 웃었다.\n“바보. 내가 약속했잖아. 네 머리 위에 황관을 씌워주겠다고.”\n카자르의 눈동자에 의문이 어렸다. 미약한 가능성이라도 있다면 포기하지 않았을 것이다. 지금의 카자르에게는 어떠한 가능성도 남아있지 않았다.\n그런데도 엘루아나는 약속을 이야기했다.\n“내 약속은 싸구려가 아니야.”\n선언하듯이 말하는 엘루아나를 바라보는 카자르의 심장은 야속할 정도로 거세게 뛰었다. 또다시 엘루아나에게 속절없이 말려들고 있었다.\n엘루아나가 말을 이었다.\n“우리의 약속은 지켜질 거야.”','QmPPtrN8Hz7TcScZdYG8Aj2ajdUUDJnobWkC7PwRr4UTye','https://bangle.s3.ap-northeast-2.amazonaws.com/f710bef1-17e3-4d7b-9a1b-67a082137186.png','로맨스','2019년 1월 29일'),(0,7,1,200,1,47,'2023-10-05 04:50:33.790143',NULL,'저와 파혼한 다음 약혼할 황자를 추천한 카자르의 얼굴은 마치 세상의 멸망을 코앞에 둔 사람 같았다. 그 비장미 넘치는 얼굴을 마주하며 엘루아나가 픽 웃었다.\n“바보. 내가 약속했잖아. 네 머리 위에 황관을 씌워주겠다고.”\n카자르의 눈동자에 의문이 어렸다. 미약한 가능성이라도 있다면 포기하지 않았을 것이다. 지금의 카자르에게는 어떠한 가능성도 남아있지 않았다.\n그런데도 엘루아나는 약속을 이야기했다.\n“내 약속은 싸구려가 아니야.”\n선언하듯이 말하는 엘루아나를 바라보는 카자르의 심장은 야속할 정도로 거세게 뛰었다. 또다시 엘루아나에게 속절없이 말려들고 있었다.\n엘루아나가 말을 이었다.\n“우리의 약속은 지켜질 거야.”','QmSZezMr2bbSPVGCq3LcNTXfyjMkBB5d8ysWDNAk2HYo8d','https://bangle.s3.ap-northeast-2.amazonaws.com/5bf92c38-e95a-4df5-8329-86b0a61b19d4.png','로맨스','커피와 연인들의 이야기'),(0,5,1,200,1,48,'2023-10-05 04:50:58.195543',NULL,'저와 파혼한 다음 약혼할 황자를 추천한 카자르의 얼굴은 마치 세상의 멸망을 코앞에 둔 사람 같았다. 그 비장미 넘치는 얼굴을 마주하며 엘루아나가 픽 웃었다.\n“바보. 내가 약속했잖아. 네 머리 위에 황관을 씌워주겠다고.”\n카자르의 눈동자에 의문이 어렸다. 미약한 가능성이라도 있다면 포기하지 않았을 것이다. 지금의 카자르에게는 어떠한 가능성도 남아있지 않았다.\n그런데도 엘루아나는 약속을 이야기했다.\n“내 약속은 싸구려가 아니야.”\n선언하듯이 말하는 엘루아나를 바라보는 카자르의 심장은 야속할 정도로 거세게 뛰었다. 또다시 엘루아나에게 속절없이 말려들고 있었다.\n엘루아나가 말을 이었다.\n“우리의 약속은 지켜질 거야.”','Qmbkx9AJSUeQzhmNRCU9UV4wShaz8Q8RZndsjXxdHW384T','https://bangle.s3.ap-northeast-2.amazonaws.com/7479d13a-e54c-4e69-804a-50e1dcc81bea.png','로맨스','저 주먹 낼게요'),(5,6,1,200,4,49,'2023-10-05 04:51:28.007013',NULL,'결혼한 지 어느덧 1년.\n이제는 때가 되었다.\n그를 보내줄 때가.\n\n-\n\n가문이 몰락하고, 아버지마저 행방불명된 후 갈 곳을 잃은 아니타.\n란슬로는 그런 아니타의 오랜 친구이자 유일한 구원이었다.\n\n“거절하지 마, 아니타. 나와의 결혼이 네 신분을 보장받을 수 있는 유일한 길이니까.”\n\n나름대로 행복한 부부 생활이었다고 생각한다.\n\n“아이는… 사랑하는 여자와 갖는 게 좋다고 생각해.”\n“그러지.”\n\n서로를 배려하고.\n\n“그 연회에는 내가 빠지는 게 좋지 않을까? 남들이 흉을 볼 텐데.”\n“부인께서 원하시는 대로.”\n\n또 이해하려 했으니까.\n돌이키면 돌이킬수록 란슬로에게 참 많은 은혜를 입었다.\n그러니 이제는 아니타가 물러날 차례였다.\n\n란슬로와, 그의 새로운 연인을 위해서.','QmShZ3rxqZP5nWVuufX27ayoSCNRK5MMqV7vWFEy6h1qhu','https://bangle.s3.ap-northeast-2.amazonaws.com/5e87abc5-63e1-4d9c-880b-1e485793601f.png','로맨스','미친 사랑'),(0,7,1,200,1,50,'2023-10-05 04:51:52.232908',NULL,'결혼한 지 어느덧 1년.\n이제는 때가 되었다.\n그를 보내줄 때가.\n\n-\n\n가문이 몰락하고, 아버지마저 행방불명된 후 갈 곳을 잃은 아니타.\n란슬로는 그런 아니타의 오랜 친구이자 유일한 구원이었다.\n\n“거절하지 마, 아니타. 나와의 결혼이 네 신분을 보장받을 수 있는 유일한 길이니까.”\n\n나름대로 행복한 부부 생활이었다고 생각한다.\n\n“아이는… 사랑하는 여자와 갖는 게 좋다고 생각해.”\n“그러지.”\n\n서로를 배려하고.\n\n“그 연회에는 내가 빠지는 게 좋지 않을까? 남들이 흉을 볼 텐데.”\n“부인께서 원하시는 대로.”\n\n또 이해하려 했으니까.\n돌이키면 돌이킬수록 란슬로에게 참 많은 은혜를 입었다.\n그러니 이제는 아니타가 물러날 차례였다.\n\n란슬로와, 그의 새로운 연인을 위해서.','QmP9qkoWr9p7JLvmBFRXpJ7N4M7eSZnH4vfaubFxvrQagi','https://bangle.s3.ap-northeast-2.amazonaws.com/6cf95855-6ca1-48c4-9210-b2a6f6d8c61e.png','로맨스','신경 쓰이는 사람'),(0,5,1,200,10,51,'2023-10-05 04:52:12.539411',NULL,'결혼한 지 어느덧 1년.\n이제는 때가 되었다.\n그를 보내줄 때가.\n\n-\n\n가문이 몰락하고, 아버지마저 행방불명된 후 갈 곳을 잃은 아니타.\n란슬로는 그런 아니타의 오랜 친구이자 유일한 구원이었다.\n\n“거절하지 마, 아니타. 나와의 결혼이 네 신분을 보장받을 수 있는 유일한 길이니까.”\n\n나름대로 행복한 부부 생활이었다고 생각한다.\n\n“아이는… 사랑하는 여자와 갖는 게 좋다고 생각해.”\n“그러지.”\n\n서로를 배려하고.\n\n“그 연회에는 내가 빠지는 게 좋지 않을까? 남들이 흉을 볼 텐데.”\n“부인께서 원하시는 대로.”\n\n또 이해하려 했으니까.\n돌이키면 돌이킬수록 란슬로에게 참 많은 은혜를 입었다.\n그러니 이제는 아니타가 물러날 차례였다.\n\n란슬로와, 그의 새로운 연인을 위해서.','QmfPjA5rBquz8fe2x2GG6Sc8LKtUNy48eZ1uFh1ztkVYNK','https://bangle.s3.ap-northeast-2.amazonaws.com/debecc93-6cb5-4f62-8c6c-81f92fc303b7.png','로맨스','닿을 듯 말 듯'),(0,6,1,200,10,52,'2023-10-05 04:52:39.785071',NULL,'결혼한 지 어느덧 1년.\n이제는 때가 되었다.\n그를 보내줄 때가.\n\n-\n\n가문이 몰락하고, 아버지마저 행방불명된 후 갈 곳을 잃은 아니타.\n란슬로는 그런 아니타의 오랜 친구이자 유일한 구원이었다.\n\n“거절하지 마, 아니타. 나와의 결혼이 네 신분을 보장받을 수 있는 유일한 길이니까.”\n\n나름대로 행복한 부부 생활이었다고 생각한다.\n\n“아이는… 사랑하는 여자와 갖는 게 좋다고 생각해.”\n“그러지.”\n\n서로를 배려하고.\n\n“그 연회에는 내가 빠지는 게 좋지 않을까? 남들이 흉을 볼 텐데.”\n“부인께서 원하시는 대로.”\n\n또 이해하려 했으니까.\n돌이키면 돌이킬수록 란슬로에게 참 많은 은혜를 입었다.\n그러니 이제는 아니타가 물러날 차례였다.\n\n란슬로와, 그의 새로운 연인을 위해서.','QmPvW3YcsZ6qTWbtuvzFKwEuKLbiATRQ9v5YTex6vMhWd6','https://bangle.s3.ap-northeast-2.amazonaws.com/a9cf01e1-02d8-473c-adbe-5026a8b09a8e.png','로맨스','역삼역 1번 출구'),(0,7,1,200,6,53,'2023-10-05 04:53:28.060475',NULL,'무라카미 하루키의 신작 장편소설 『도시와 그 불확실한 벽』은 집필과 출간에 얽힌 이야기가 특별하다. 1979년 데뷔 이래, 하루키는 각종 문예지에 소설을 비롯한 다양한 글을 발표했고, 대부분 그 글들을 책으로 엮어 공식 출간했다. 그중 유일하게 단행본으로 출간되지 않아 팬들 사이에서도 오랜 미스터리로 남은 작품이 문예지 <문학계>에 발표했던 중편소설 「도시와, 그 불확실한 벽」(1980)이었다.\n\n코로나19로 사람들 사이에 벽이 세워지기 시작한 2020년, 그는 사십 년간 묻어두었던 작품을 새로 다듬어 완성할 수 있겠다고 생각했다. 그리고 삼 년간의 집필 끝에 총 3부 구성의 장편소설 『도시와 그 불확실한 벽』을 세상에 내놓았다. 매 작품을 발표할 때마다 ‘하루키 신드롬’을 일으키며 전 세계 독자들의 사랑을 받고 있는 70대의 작가가 청년 시절에 그렸던 세계를 43년 만에 마침내 완성한 것이다.\n\n『도시와 그 불확실한 벽』은 무라카미 하루키에게 자신의 작가 인생과 작품세계를 수확하는 뜻깊은 완성이자 하나의 매듭이며, 이후의 하루키를 기대하게 하는 또다른 시작을 의미한다. 현실과 비현실을 다채롭게 넘나드는 하루키적 상상력을 더욱 원숙한 세계로 만나볼 수 있는 이번 장편은 그의 신작을 기다려온 팬들에게 ‘하루키 세계를 집약한 결정적 작품’으로, 이제 막 무라카미 하루키라는 작가를 접하는 독자들에게는 ‘하루키 세계로 들어가는 완벽한 입문작’으로 자리매김할 것이다.','QmUFmvCj7NyYPyK98GTwfgyqf581teDWDVbTGt4SEQCBNy','https://bangle.s3.ap-northeast-2.amazonaws.com/b22197cf-9f50-4816-9a4b-62ce11764b34.png','소설','인간의 대지'),(0,5,1,200,10,54,'2023-10-05 04:54:27.745662',NULL,'2023년 이상문학상 수상 작가는 최진영이었다. 2006년 <실천문학>으로 작품 활동을 시작한 이래 2010년 첫 장편소설 《당신 옆을 스쳐간 그 소녀의 이름은》으로 한겨레문학상을 받으며 이름을 알린 지 10여 년. 지독한 비관의 세계에서 시작한 그는 “등단 이후 10여 년간 한결같은 걸음걸이로 걸어온 작가의 작품 세계가 마침내 새로운 경지로 들어섰음을 보여준다. 눈이 부시다”(소설가 윤대녕)라는 평을 받기에 이른다.\n\n불멸하는 사랑의 가치를 탁월하게 담아낸 《구의 증명》, 정체 모를 바이러스가 전 세계를 뒤덮은 혼란의 시기를 배경으로 한 아포칼립스 소설 《해가 지는 곳으로》, 성폭력 피해생존자의 내밀한 의식과 현실을 정면으로 주파한 《이제야 언니에게》 등 발표하는 작품마다 거침없는 서사와 긴 여운을 남기는 서정으로 그만의 세계를 공고히 했다.\n\n상실을 경험한 여성, 학대 가정에서 자라난 소녀, 비정규직 청년 등 폭력과 고통의 어두운 현실을 직시하면서도 따스한 진심을 담으려 한 그의 이야기는 내내 주목받고 신뢰받았다. 그럼에도 어떠한 동요 없이 어떠한 소비 없이 묵묵히 쓰기를 계속해온 작가. “쓰다 보면 견딜 수 있다”라는 그의 말은 “최진영은 끝까지 우리 삶의 전부를 써낼 것이다”(소설가 황현진)라는 말로 통한다.\n\n이런 그가 2년여 만에 발표하는 장편소설 《단 한 사람》으로 한발 더 나아갔다. 지구에서 가장 키가 크고 오래 사는 생물, 수천 년 무성한 나무의 생 가운데 이파리 한 장만큼을 빌려 죽을 위기에 처한 단 한 명만 살릴 수 있는, 나무와 인간 사이 ‘수명 중개인’의 이야기다.','QmPPtrN8Hz7TcScZdYG8Aj2ajdUUDJnobWkC7PwRr4UTye','https://bangle.s3.ap-northeast-2.amazonaws.com/56cd04eb-caeb-4c73-8c9e-ba033535ba50.png','소설','글래스 마스크'),(0,6,1,200,14,55,'2023-10-05 04:54:46.408733',NULL,'2023년 이상문학상 수상 작가는 최진영이었다. 2006년 <실천문학>으로 작품 활동을 시작한 이래 2010년 첫 장편소설 《당신 옆을 스쳐간 그 소녀의 이름은》으로 한겨레문학상을 받으며 이름을 알린 지 10여 년. 지독한 비관의 세계에서 시작한 그는 “등단 이후 10여 년간 한결같은 걸음걸이로 걸어온 작가의 작품 세계가 마침내 새로운 경지로 들어섰음을 보여준다. 눈이 부시다”(소설가 윤대녕)라는 평을 받기에 이른다.\n\n불멸하는 사랑의 가치를 탁월하게 담아낸 《구의 증명》, 정체 모를 바이러스가 전 세계를 뒤덮은 혼란의 시기를 배경으로 한 아포칼립스 소설 《해가 지는 곳으로》, 성폭력 피해생존자의 내밀한 의식과 현실을 정면으로 주파한 《이제야 언니에게》 등 발표하는 작품마다 거침없는 서사와 긴 여운을 남기는 서정으로 그만의 세계를 공고히 했다.\n\n상실을 경험한 여성, 학대 가정에서 자라난 소녀, 비정규직 청년 등 폭력과 고통의 어두운 현실을 직시하면서도 따스한 진심을 담으려 한 그의 이야기는 내내 주목받고 신뢰받았다. 그럼에도 어떠한 동요 없이 어떠한 소비 없이 묵묵히 쓰기를 계속해온 작가. “쓰다 보면 견딜 수 있다”라는 그의 말은 “최진영은 끝까지 우리 삶의 전부를 써낼 것이다”(소설가 황현진)라는 말로 통한다.\n\n이런 그가 2년여 만에 발표하는 장편소설 《단 한 사람》으로 한발 더 나아갔다. 지구에서 가장 키가 크고 오래 사는 생물, 수천 년 무성한 나무의 생 가운데 이파리 한 장만큼을 빌려 죽을 위기에 처한 단 한 명만 살릴 수 있는, 나무와 인간 사이 ‘수명 중개인’의 이야기다.','QmP3TtKFHHuyTmJ2irN4zMNcY1dYdg72Dos3pqRhQJm5C5','https://bangle.s3.ap-northeast-2.amazonaws.com/a7e52afe-e5d8-43b0-8e49-e9d115b8fbf4.png','소설','낯선 하루'),(0,7,1,200,4,56,'2023-10-05 04:55:13.695058',NULL,'2022년 부커상 수상작. 1990년 스리랑카 콜롬보, 자신의 미스터리한 죽음을 파헤치는 사진작가와 억울한 유령들이 펼치는 ‘이상한’ 이야기를 담은 《말리의 일곱 개의 달》은 영국의 작은 출판사에서 출간되었고, 수많은 스리랑카의 목소리들이 그랬듯 조용히 묻힐 수도 있었다. 그러나 이변이 일어났다. 영미권 주요 언론이 이 책을 ‘2022년 읽어야 할 가장 중요한 소설’로 꼽으며 ‘올해의 책’으로 선정한 것.\n\n영국에서 베스트셀러가 되고, 주요 언어권에서 순차적으로 번역 출판 계약된 이 책은 부커상 수상과 함께 더욱 유명해질 준비를 마친 상태다. 25년 넘게 이어진 내전과 독재로 얼룩진 스리랑카의 어둠이, 목소리를 빼앗긴 채 사라진 억울한 유령들의 외침이 드디어 세상 밖으로 터져 나온 것이다.\n\n인플루엔셜에서 출간한 한국어판 《말리의 일곱 개의 달》에는 작가 셰한 카루나틸라카가 대한민국 독자들에게 보내는 서문이 특별 수록되었다. 아름다운 자연과 더불어 선한 사람들이 살아가는 땅, 그러나 외세의 침략과 내전, 독재를 두루 겪어내야 했던 두 나라에 대한 작가의 역사 인식을 읽을 수 있고, 그럼에도 끝끝내 품을 수밖에 없는 아픈 희망도 엿볼 수 있다.','Qma5hpFtM3Bun4ou6sqCcb117RTK4vmdufCWSL8338PLNh','https://bangle.s3.ap-northeast-2.amazonaws.com/56a1b85f-02ab-4e00-97de-c29f82940500.png','소설','젊은 베르테르의 슬픔'),(0,5,1,200,4,57,'2023-10-05 04:55:43.669743',NULL,'‘함께 성장해나가는 우리 세대의 소설가’를 갖는 드문 경험을 선사하며 동료 작가와 평론가, 독자 모두에게 특별한 이름으로 자리매김한 최은영의 세번째 소설집 『아주 희미한 빛으로도』가 출간되었다.\n\n2023년 데뷔 10년을 맞이하는 최은영은 그간 만남과 헤어짐을 거듭하는 인물의 내밀하고 미세한 감정을 투명하게 비추며 우리의 사적인 관계 맺기가 어떻게 사회적인 맥락을 얻는지를 고찰하고(『쇼코의 미소』, 2016), 지난 시절을 끈질기게 떠올리는 인물을 통해 기억을 마주하는 일이 어떻게 재생과 회복의 과정이 될 수 있는지를 살피며(『내게 무해한 사람』, 2018), 4대에 걸친 인물들의 삶의 궤적을 따라감으로써 과거에서 현재를 향해 쓰이는 종적인 연대기(年代記)가 어떻게 인물들을 수평적 관계에 위치시키며 횡적인 연대기(連帶記)로 나아가는지를 그려왔다(『밝은 밤』, 2021).\n\n이전 작품들에 담긴 문제의식을 한층 더 깊고 날카로운 시선으로 이어나가는 이번 소설집은 작가가 처음 작품활동을 시작했을 때 품은 마음이 지금의 관점에서 어떻게 이어지는지 보여줌으로써 “깊어지는 것과 넓어지는 것이 문학에서는 서로 다른 말이 아니라는 것”(한국일보문학상 심사평)을 감동적으로 증명해낸다.','QmUrdAmHfVjHsUiNNdSGrhp1g7RpNkPn1SN8VjwNUNXdiv','https://bangle.s3.ap-northeast-2.amazonaws.com/03de1721-921c-42c4-8349-1970e9dab519.png','소설','변신'),(0,6,1,200,4,58,'2023-10-05 04:56:08.352610',NULL,'시인 김소연의 여섯번째 시집 『촉진하는 밤』이 문학과지성사 시인선 589번째로 출간되었다. 전작 『i에게』 이후 5년 만에 펴내는 시집이자 1993년 『현대시사상』에 「우리는 찬양한다」 등을 발표하며 작품 활동을 시작한 시인의 데뷔 30주년에 나오는 시집이라 특별함을 더한다.\n\n전작에서 극에 달한 내면 풍경을 첨예하게 보여준 소문자 i가 또 한번 등장하는 이번 시집은 이 극단이 끝이 아님을, 이 내면의 풍경이 끝나지 않는 도정 속에 놓여 있음을 보여준다. 그리고 그 핵심 이미지로 나타나는 것이 ‘밤’이다.','QmNn3P9e6uwSJ2Uh8QCMMQBJ7Xb5CW48u7ezURbqu3ogd3','https://bangle.s3.ap-northeast-2.amazonaws.com/39aa7a76-6ed3-4a9a-807c-b3fca1e162d0.png','소설','위대한 개츠비'),(0,7,1,200,10,59,'2023-10-05 04:56:44.102430',NULL,'불행을 파는 대신 원하는 행복을 살 수 있는 가게가 있다면? 듣기만 해도 방문하고 싶어지는, 비가 오면 열리는 수상한 상점에 초대된 여고생 세린이 안내묘 잇샤, 사람의 마음을 훔치는 도깨비들과 함께 펼치는 감동 모험 판타지.\n\n『비가 오면 열리는 상점』은 출간 전부터 많은 독자에게 입소문이 자자했던 작품이다. 처음 텀블벅에서 소개됐을 때부터 2000만 원에 가까운 후원금을 모금하며, 베스트셀러 『달러구트 꿈 백화점』과 『죽고 싶지만 떡볶이는 먹고 싶어』의 금액을 넘어섰다.\n\n무엇보다 2023년 4월에 열린 런던도서전에서도 화제가 되면서, 출간 전부터 해외 6개국(폴란드, 포르투갈, 이탈리아, 일본, 대만, 러시아)에 판권을 먼저 수출하는 놀라운 성과를 거두었다. 국내 출판 역사상 최초의 일로, 그야말로 ‘괴물 신인 작가’의 탄생이라 할 수 있다. 도대체 이 소설에 어떤 매력이 있기에 국적과 언어를 초월해 큰 기대를 받는 것일까?\n\n“해리포터 시리즈와 지브리 애니메이션이 만났다.” “더 열심히 살아갈 용기와 위로를 얻었다.” “놀랄 정도로 잘 읽힌다.” “너무 감동적인 이야기라 여운이 오래 남을 것 같다.” 작품을 먼저 읽은 독자들의 말처럼, 이 소설이 재미와 감동 그리고 의미를 모두 잡았기 때문이다. 마치 영상을 보는 것과 같은 생생한 묘사와 속도감 있는 문체, 판타지와 성장소설의 결합, 무엇보다 따스한 시선으로 희망과 용기를 건네는 작가의 진정성과 작품의 메시지가 언어와 문화를 훌쩍 뛰어넘은 것이다.','QmcmY7PgRQuCdpstotskeMpvwdpx7Qa6hB5kvnZo9wwqYg','https://bangle.s3.ap-northeast-2.amazonaws.com/7cfbc69d-e296-482f-9a38-fe787048213c.png','소설','어느날 우리집으로 방글이 들어왔다'),(0,5,1,200,10,60,'2023-10-05 04:57:11.479658',NULL,'헤르만 헤세의 ‘영혼의 전기’로 소개되는 《데미안》은 깊이 있는 정신분석과 자기 탐구로 가시밭 같은 자아 성찰의 길을 섬세하게 그려낸 그의 대표작이다. 이 책을 1919년 오리지널 초판본의 우아한 표지로 다시 만나보자.\n\n평화와 질서가 있는 밝은 세계에 살던 싱클레어는 불량소년 프란츠 크로머에게 거짓말을 했다가 지속해서 돈을 빼앗기고 괴롭힘 당한다. 자신이 금지된 어두운 세계에 발을 들인 것에 괴로워하는 싱클레어를 신비로운 전학생 막스 데미안이 구해주고, 카인과 아벨, 선과 악, 빛과 어둠 등 지금까지 의심 없이 받아들였던 이원적인 종교관을 새롭게 해석하도록 이끌어준다. 이후 라틴어 학교를 졸업하고 데미안과 헤어져, 다시 어두운 세계를 방황하는 싱클레어에게 어느 날 ‘아브락사스’라는 신의 이름이 담긴 데미안의 기묘한 쪽지가 도착하는데….','QmPPtrN8Hz7TcScZdYG8Aj2ajdUUDJnobWkC7PwRr4UTye','https://bangle.s3.ap-northeast-2.amazonaws.com/034319d6-229c-4e78-9759-93bff41c89d8.png','소설','쭈리'),(0,6,1,200,5,61,'2023-10-05 04:57:42.435618',NULL,'<무궁화꽃이 피었습니다> 김진명 작가 집필 30주년 기념작. 우크라이나 키이우 북쪽의 도시 부차. 미하일은 생일을 맞아 가족과 저녁 식사를 하던 중 갑자기 나타난 러시아군의 칼에 찔려 의식을 잃고, 아내와 딸을 잃는다. 슬픔을 못 이기고 자살을 시도하지만 그조차 실패한 미하일은 어느 날 마을에서 자취를 감춰버린다.\n\n미국 대통령 바이든이 이끄는 극비 오퍼레이션 ‘네버어게인’의 일원인 스토니. 그는 러시아인 여성 구호 활동가 구출 명령을 받고, 도움을 청하기 위해 미 해군사관학교 시절 동기 케빈 한을 찾아간다. 에티오피아 산골 마을에서 주민들을 도우며 살고 있던 케빈 한은 기상천외한 계책으로 구출 작전을 도운 공을 인정받아 ‘네버어게인’에 영입된다.\n\n부차에서 사라졌던 미하일은 바흐무트 공방전에서 죽음을 불사하고 싸워 전쟁영웅이 되지만, 세 발의 총상을 입고 통합병원으로 후송된다. 몸과 마음의 고통에 몸부림 치던 그에게 한 환자가 말을 걸어온다. 바로 케빈 한이다. 미하일과 우정을 쌓아가던 케빈 한은 그에게 친러 성향의 무기 암거래상이 갖고 있는 전설의 다이아몬드를 훔치러 가자고 제안한다. 그것을 판 돈으로 우크라이나 난민들을 돕자는 계획이었다. 그들은 우크라이나인 범죄자들을 모으기 시작한다.\n\n한편 러시아 대통령 푸틴은 서방 국가를 상대로 내건 그 어떤 휴전 조건도 받아들여지지 않자 고뇌하기 시작한다. 이대로 물러나면 자신의 권력도 종말을 맞을 것이다. 그는 절치부심 끝에 상황을 타개하기 위해서는 어떤 수단이든 가리지 않겠다고 결심한다.\n\n미국 잠수함사령부는 핵탄두 288개를 탑재한 전략핵잠수함 로드아일랜드를 흑해에 잠항시키는 작전을 실행한다. 그러나 로드아일랜드는 러시아 측의 추적을 받다 사고를 당하고 마는데…….\n','Qmcn28bf9ihg1mPmVyeiXWGjR6FYU3tCcPagKs7gu9K1Q3','https://bangle.s3.ap-northeast-2.amazonaws.com/73db11ef-7100-4a44-b68e-707e9b1f4742.png','소설','파블로바'),(0,7,1,200,10,62,'2023-10-05 04:58:22.607013',NULL,'매해 노벨 문학상 후보 목록에 오르는 작가인 동시에 인터뷰나 대외 활동을 자제하고 은둔을 자처하는 작가. 체코 출신으로 \'프라하의 봄\'을 직접 경험하고 집필 및 판매 금지 등 정치적 박해를 피해 프랑스로 망명한 작가. 현재에서 멀지 않은 20세기 작가이지만 이미 살아 있는 신화가 된 작가. 밀란 쿤데라.\n\n쿤데라 작품을 독점 계약, 출판하고 있는 민음사가 밀란 쿤데라 국내 소개 30주년을 맞아 선보이는 <참을 수 없는 존재의 가벼움> 리뉴얼 판이다. <참을 수 없는 존재의 가벼움>은 1988년 계간 「세계의 문학」 가을호에 전재되면서 우리나라에 처음 소개되었고, 발표 직후 1988년 11월 20일 단행본으로 출간되었다.\n\n당시에는 독문학자 송동준 교수가 독일어 판본을 옮겨 펴냈으나, 1999년 2월에 불문학자 이재룡 교수의 변역으로 다시 펴냈다. 이는 원저자인 밀란 쿤데라의 요청에 따른 것으로, 쿤데라는 프랑스어 판본을 옮기는 것이 자신의 원작에 가장 충실한 것이라고 밝힌 바 있다.\n\n새롭게 리뉴얼해 선보이는 <참을 수 없는 존재의 가벼움>은 그간 출간된 세계문학전집 및 작가 전집 버전과 달리 밀란 쿤데라가 직접 그린 일러스트를 바탕으로 디자인한 신선한 표지와 장정으로 21세기를 살아 나가는 젊은 독자들의 눈을 다시금 사로잡을 예정이다.\n','QmPvW3YcsZ6qTWbtuvzFKwEuKLbiATRQ9v5YTex6vMhWd6','https://bangle.s3.ap-northeast-2.amazonaws.com/44aac03f-2a4c-4102-914f-137e74a7cf78.png','소설','어느 가을 바람이 불던 날, 출근 길 낙엽을 숨김'),(0,5,1,200,14,63,'2023-10-05 04:58:44.782656',NULL,'매해 노벨 문학상 후보 목록에 오르는 작가인 동시에 인터뷰나 대외 활동을 자제하고 은둔을 자처하는 작가. 체코 출신으로 \'프라하의 봄\'을 직접 경험하고 집필 및 판매 금지 등 정치적 박해를 피해 프랑스로 망명한 작가. 현재에서 멀지 않은 20세기 작가이지만 이미 살아 있는 신화가 된 작가. 밀란 쿤데라.\n\n쿤데라 작품을 독점 계약, 출판하고 있는 민음사가 밀란 쿤데라 국내 소개 30주년을 맞아 선보이는 <참을 수 없는 존재의 가벼움> 리뉴얼 판이다. <참을 수 없는 존재의 가벼움>은 1988년 계간 「세계의 문학」 가을호에 전재되면서 우리나라에 처음 소개되었고, 발표 직후 1988년 11월 20일 단행본으로 출간되었다.\n\n당시에는 독문학자 송동준 교수가 독일어 판본을 옮겨 펴냈으나, 1999년 2월에 불문학자 이재룡 교수의 변역으로 다시 펴냈다. 이는 원저자인 밀란 쿤데라의 요청에 따른 것으로, 쿤데라는 프랑스어 판본을 옮기는 것이 자신의 원작에 가장 충실한 것이라고 밝힌 바 있다.\n\n새롭게 리뉴얼해 선보이는 <참을 수 없는 존재의 가벼움>은 그간 출간된 세계문학전집 및 작가 전집 버전과 달리 밀란 쿤데라가 직접 그린 일러스트를 바탕으로 디자인한 신선한 표지와 장정으로 21세기를 살아 나가는 젊은 독자들의 눈을 다시금 사로잡을 예정이다.\n','QmP3TtKFHHuyTmJ2irN4zMNcY1dYdg72Dos3pqRhQJm5C5','https://bangle.s3.ap-northeast-2.amazonaws.com/6199cb55-5352-4292-ae36-8f25c88a69da.png','소설','수퍼마켓'),(0,6,1,200,10,64,'2023-10-05 04:59:29.495222',NULL,'정기시험 기출문제 7세트와 ETS 토익 예상문제 3세트가 수록되어 있다. 시험에 나온 토익 문제로 실전 감각을 키우고, 동일한 난이도의 예상문제로 시험에 확실하게 대비할 수 있다.','QmShZ3rxqZP5nWVuufX27ayoSCNRK5MMqV7vWFEy6h1qhu','https://bangle.s3.ap-northeast-2.amazonaws.com/96552892-9070-4771-b466-884d04f9f338.png','어학','쉽게 배우는 독일어'),(0,7,1,200,14,65,'2023-10-05 04:59:56.768122',NULL,'정기시험 기출문제 7세트와 ETS 예상문제 3세트가 수록되어 있다. 시험에 나온 토익 문제로 실전 감각을 키우고, 동일한 난이도의 예상문제로 시험에 확실하게 대비할 수 있다.','QmNn3P9e6uwSJ2Uh8QCMMQBJ7Xb5CW48u7ezURbqu3ogd3','https://bangle.s3.ap-northeast-2.amazonaws.com/418eff87-5635-46ac-8810-f35c02ee1c9c.png','어학','오늘도 영어를 포기했다'),(0,5,1,200,5,66,'2023-10-05 05:00:17.657295',NULL,'정기시험 기출문제 7세트와 ETS 예상문제 3세트가 수록되어 있다. 시험에 나온 토익 문제로 실전 감각을 키우고, 동일한 난이도의 예상문제로 시험에 확실하게 대비할 수 있다.','Qma5hpFtM3Bun4ou6sqCcb117RTK4vmdufCWSL8338PLNh','https://bangle.s3.ap-northeast-2.amazonaws.com/e77dd304-3deb-4288-8e9e-deaa481171a3.png','어학','재밌게 배우는 영어'),(0,6,1,200,5,67,'2023-10-05 05:00:45.998961',NULL,'토익 기초 단어부터 고난도 어휘까지 모든 난이도의 단어를 수록했다. 토익 빈출 주제 30개에 맞춰 단어를 수록하여 주제별로 묶어서 쉽게 암기가 가능하다. 단어 MP3를 바로 들을 수 있는 QR코드를 각 Day 시작 페이지에 삽입하여 편리하게 학습이 가능하다.','QmPvW3YcsZ6qTWbtuvzFKwEuKLbiATRQ9v5YTex6vMhWd6','https://bangle.s3.ap-northeast-2.amazonaws.com/02b16e1c-76b0-4a9f-9e12-1902537ae90a.png','어학','쉽게 배우는 흑인 영어'),(0,7,1,200,4,68,'2023-10-05 05:01:04.917810',NULL,'토익 기초 단어부터 고난도 어휘까지 모든 난이도의 단어를 수록했다. 토익 빈출 주제 30개에 맞춰 단어를 수록하여 주제별로 묶어서 쉽게 암기가 가능하다. 단어 MP3를 바로 들을 수 있는 QR코드를 각 Day 시작 페이지에 삽입하여 편리하게 학습이 가능하다.','QmNn3P9e6uwSJ2Uh8QCMMQBJ7Xb5CW48u7ezURbqu3ogd3','https://bangle.s3.ap-northeast-2.amazonaws.com/86617183-c915-4a5a-93a0-22e53f711154.png','어학','뜨억'),(0,5,1,200,10,69,'2023-10-05 05:01:36.378127',NULL,'단 한 번도 영미권 국가에서 생활해 본 적 없이 순수 국내에서만 공부하고도 원어민이 놀라는 영어 실력을 구사하는 김재우 선생님의 20여 년간에 걸쳐 다듬어 온 영어 콘텐츠의 정수를 담은 책이다. 무엇보다 대한민국의 영어 학습자들이 직면하는 \'고비용 저효율 영어 학습\'의 악순환을 끊고, 성공적인 영어 학습 스토리를 만들어가려는 저자의 의지와 열망이 담겨 있다.\n\n대한민국 영어 학습자가 직면하는 주요 문제들을 해결하기 위한 실질적인 해결책을 제시하며, 저자 자신의 경험과 성공적인 영어 습득 사례를 바탕으로 영어 회화 실력 향상을 위해 중요한 요소들을 집중적으로 다루었다. 원어민이 입에 달고 사는 패턴과 표현을 최대한 농축함으로써 100일이라는 기간 동안 학습 효과를 극대화할 수 있도록 구성되어 있다.','QmP3TtKFHHuyTmJ2irN4zMNcY1dYdg72Dos3pqRhQJm5C5','https://bangle.s3.ap-northeast-2.amazonaws.com/2c6b0e38-aaaf-4683-a72c-2312438ad737.png','어학','못생긴걸 두고보기 쉽지 않아요'),(0,6,1,200,4,70,'2023-10-05 05:02:04.111449',NULL,'단 한 번도 영미권 국가에서 생활해 본 적 없이 순수 국내에서만 공부하고도 원어민이 놀라는 영어 실력을 구사하는 김재우 선생님의 20여 년간에 걸쳐 다듬어 온 영어 콘텐츠의 정수를 담은 책이다. 무엇보다 대한민국의 영어 학습자들이 직면하는 \'고비용 저효율 영어 학습\'의 악순환을 끊고, 성공적인 영어 학습 스토리를 만들어가려는 저자의 의지와 열망이 담겨 있다.\n\n대한민국 영어 학습자가 직면하는 주요 문제들을 해결하기 위한 실질적인 해결책을 제시하며, 저자 자신의 경험과 성공적인 영어 습득 사례를 바탕으로 영어 회화 실력 향상을 위해 중요한 요소들을 집중적으로 다루었다. 원어민이 입에 달고 사는 패턴과 표현을 최대한 농축함으로써 100일이라는 기간 동안 학습 효과를 극대화할 수 있도록 구성되어 있다.','QmShZ3rxqZP5nWVuufX27ayoSCNRK5MMqV7vWFEy6h1qhu','https://bangle.s3.ap-northeast-2.amazonaws.com/995fb86f-52a1-4b58-929b-dbf20dc6e51b.png','어학','영어회화 잘하기'),(0,7,1,200,14,71,'2023-10-05 05:02:33.743464',NULL,'여행 가서 하는 일본어를 무작정 해 보는 책이다. 출국 전 보는 <미리 보는 책>과 현지에 도착해서 필요한 내용을 담은 <가서 보는 책> 두 권으로 구성되어 있다. 출국 2주 전부터 <미리 보는 책>을 보고 출국할 때 <가서 보는 책>을 간편하게 쏙 빼서 가방에 넣어가면 된다.','QmQ7jYny9aiyLCGXMTe1sDe8qgqCywoDHKmVorkSnpi3YA','https://bangle.s3.ap-northeast-2.amazonaws.com/1a0d2d69-2cf5-4e16-a0f0-9de0e3e162c5.png','어학','쉽게 배우는 영작문'),(0,5,1,200,14,72,'2023-10-05 05:02:52.551379',NULL,'여행 가서 하는 일본어를 무작정 해 보는 책이다. 출국 전 보는 <미리 보는 책>과 현지에 도착해서 필요한 내용을 담은 <가서 보는 책> 두 권으로 구성되어 있다. 출국 2주 전부터 <미리 보는 책>을 보고 출국할 때 <가서 보는 책>을 간편하게 쏙 빼서 가방에 넣어가면 된다.','QmdDLTooiN5bXqKwRE1XEdfpR9Rb6tweW2mqGqVkNa6Mgg','https://bangle.s3.ap-northeast-2.amazonaws.com/ace0ecbc-a17f-4662-a6fb-f16485da4e0f.png','어학','매일 하는 영어'),(0,6,1,200,6,73,'2023-10-05 05:03:18.162653',NULL,'여행 가서 하는 일본어를 무작정 해 보는 책이다. 출국 전 보는 <미리 보는 책>과 현지에 도착해서 필요한 내용을 담은 <가서 보는 책> 두 권으로 구성되어 있다. 출국 2주 전부터 <미리 보는 책>을 보고 출국할 때 <가서 보는 책>을 간편하게 쏙 빼서 가방에 넣어가면 된다.\n','QmcmY7PgRQuCdpstotskeMpvwdpx7Qa6hB5kvnZo9wwqYg','https://bangle.s3.ap-northeast-2.amazonaws.com/46660c43-358a-4f3d-bd4f-abfc722a5465.png','어학','영어 작문'),(0,7,1,200,14,74,'2023-10-05 05:03:41.195054',NULL,'여행 가서 하는 일본어를 무작정 해 보는 책이다. 출국 전 보는 <미리 보는 책>과 현지에 도착해서 필요한 내용을 담은 <가서 보는 책> 두 권으로 구성되어 있다. 출국 2주 전부터 <미리 보는 책>을 보고 출국할 때 <가서 보는 책>을 간편하게 쏙 빼서 가방에 넣어가면 된다.\n','QmW6ByEJTaokaSCEzh2MrjhhzS4N4uV7LYkZEwAxCGoN9m','https://bangle.s3.ap-northeast-2.amazonaws.com/ea19740f-d1ef-4f9d-a66d-e7657f4cc0a9.png','어학','LISTEN AND REPEAT'),(0,5,1,200,14,75,'2023-10-05 05:04:03.094015',NULL,'여행 가서 하는 일본어를 무작정 해 보는 책이다. 출국 전 보는 <미리 보는 책>과 현지에 도착해서 필요한 내용을 담은 <가서 보는 책> 두 권으로 구성되어 있다. 출국 2주 전부터 <미리 보는 책>을 보고 출국할 때 <가서 보는 책>을 간편하게 쏙 빼서 가방에 넣어가면 된다.\n','QmViSVh6LCcQtZPfhCFmVtGhnabXfQWeo7F8gN8EVDiYcc','https://bangle.s3.ap-northeast-2.amazonaws.com/a5600ddd-d545-4635-b8d1-5054d4c61a4e.png','어학','쉽게 배우는 한국어'),(0,6,1,200,4,76,'2023-10-05 05:04:49.453233',NULL,'코로나19 이후 해외관광객 급증에 따라 바뀐 여행법, 2023년 4월부터 인상된 교통 요금과 관광지 입장료, 공항-오사카 간 신설 노선, 오사카·교토·고베·나라의 핫한 명소와 쇼핑 스폿, 맛집 260여 곳의 생생한 현지 사정을 신속하게 반영했고, 국내 일본 여행서 중 가장 압도적으로 자세한 교통 정보와 패스 활용법, 일정 짜는 고민을 덜어주는 테마별 추천 코스에 더해 IC 카드와 환전, 모바일 페이 활용법 등 스마트한 최신 여행 정보를 업그레이드했다. 출간 이래 꾸준히 독자들의 호평을 받아온 휴대용 분리형 맵북과 오사카 지하철 노선도까지 빠짐없이 갖췄다.','QmUFmvCj7NyYPyK98GTwfgyqf581teDWDVbTGt4SEQCBNy','https://bangle.s3.ap-northeast-2.amazonaws.com/c0c3ac54-714b-4627-9165-66a053a236e1.png','여행','나의 해방일지'),(0,7,1,200,4,77,'2023-10-05 05:07:17.338768',NULL,'작가 김영하가 처음 여행을 떠났던 순간부터 최근의 여행까지, 오랜 시간 여행을 하면서 느끼고 생각했던 것들을 아홉 개의 이야기로 풀어낸 산문이다. 여행지에서 겪은 경험을 풀어낸 여행담이기보다는, 여행을 중심으로 인간과 글쓰기, 타자와 삶의 의미로 주제가 확장되어가는 사유의 여행에 가깝다.\n\n작품에 담긴 소설가이자 여행자로서 바라본 인간과 세상에 대한 이야기들은 놀랄 만큼 매혹적이다. 누구나 한번쯤은 떠올렸을 법한, 그러나 제대로 정리하지 못한 채 남겨두었던 상념의 자락들을 끄집어내 생기를 불어넣는 김영하 작가 특유의 (인)문학적 사유의 성찬이 담겼다.\n\n<알아두면 쓸데없는 신비한 잡학사전>에 출연하면서 하게 된 독특한 여행에 대한 글 「알아두면 쓸데없는 신비한 여행」에서는 김영하 작가의 감각적 사유와 화법이 유감없이 발휘된다. 즐겁고 유쾌하게만 보이는 예능 프로그램 <알쓸신잡>에 대한 색다른 인문학적 통찰이 흥미진진할 뿐 아니라, 예측할 수 없는 방향으로 이야기를 풀어가는 김영하 스토리텔링의 힘을 느낄 수 있다.','Qmcn28bf9ihg1mPmVyeiXWGjR6FYU3tCcPagKs7gu9K1Q3','https://bangle.s3.ap-northeast-2.amazonaws.com/fa5efba5-54ec-49da-8f94-fa64f83c23a5.png','여행','골목식당'),(0,5,1,200,14,78,'2023-10-05 05:07:38.161832',NULL,'빵순이, 빵돌이들의 고요한 삼시세빵 일본 빵지순례 바이블. 일본 현지에서만 맛볼 수 있는 거의 모든 빵들을 모았다. 일본 전역 158개 빵집 또는 빵 제조업체에서 만드는 264종의 빵이다. 빵마다 기원과 성분, 맛의 특징, 소비자의 반응을, 빵집마다 역사와 개성, 주요 메뉴를 명쾌하고 재치 있게 소개했다.\n\n1부에서는 특정 지역에서만 맛볼 수 있는 ‘소울 빵’을 선보인다. 나가노의 우유빵, 고치의 모자빵, 이시카와의 화이트샌드, 가나가와의 감자칩빵 등이다. 2부는 전국 어디에나 있을 법한 빵이지만 지역에 따라 맛과 모양이 전혀 다른 빵들이 나온다. 이를테면, 같은 카스텔라라도 니가타에서는 나카가와제빵소의 카스텔라샌드가 유명하고, 이와테에서는 오리온베이커리의 삼각카스텔라가 대표 주자다.\n\n일본 전국 각지에서 사랑받는 동네 빵집은 3부에서 집중 조명한다. 1932년에 창업한 나가노의 고후루이과자점, 지바현 조시시의 초록색 지붕의 베이커리 & 카페 빨간 머리 앤, 창업 당시의 레트로한 인테리어가 남아 있는 나라의 마루쓰베이커리 등이 그 예인데, 도쿄의 빵집은 아예 미니 특집으로 꾸렸다. 마지막 4부에서는 일본의 대표 빵들을 모았다. 단팥빵, 야키소바빵, 카레빵, 잼빵 등 전국 각지에 있는 같은 이름과 종류의 빵을 소개한다.','QmShZ3rxqZP5nWVuufX27ayoSCNRK5MMqV7vWFEy6h1qhu','https://bangle.s3.ap-northeast-2.amazonaws.com/b30d00fa-cad0-4af5-ab77-750e2e168916.png','여행','혼자 하는 배낭여행'),(0,6,1,200,14,79,'2023-10-05 05:07:55.923595',NULL,'《대도시의 사랑법》이 부커상 인터내셔널 부문과 더블린문학상 후보에 오르며 한국을 넘어 세계에서도 주목하는 소설가이자 에세이스트 박상영이 3년 만에 신작 에세이를 선보인다. ‘잘나가는 소설가’의 일상을 들려줄 법도 하건만, 뜻밖에도 번아웃과 휴식에 대한 이야기다.\n\n첫 에세이 《오늘 밤은 굶고 자야지》에서 직장인의 애환과 피할 수 없는 삶의 허기에 대해 솔직담백하게 토로해 많은 공감을 얻었던 그가 이번에는 “내일은 아무것도 안 하고 누워만 있어야지” 결심하게 된 사연은 무엇일까? ‘여행을 그다지 좋아하지 않는’ 그가 지친 와중에도 유일한 안전지대인 방을 박차고 나와야만 했던 이유는? 이 책은 박상영 작가가 데뷔 후 지난 몇 년간 여러 매체에 실었던 글 가운데 휴식과 여행을 테마로 한 글들을 모으고, 다듬고, 더한 것이다.','QmVPFnpmd76TQPUifBVRDX5UQKF5nSi1T2ek4v7rbxHutU','https://bangle.s3.ap-northeast-2.amazonaws.com/09e52e05-9ca3-4562-8e7a-9c9dc28efc2f.png','여행','노을이 아름다운 곳'),(0,7,1,200,5,80,'2023-10-05 05:08:14.622540',NULL,'단순한 도쿄 관광 안내서가 아닌 특별한 경험을 제안하는 새로운 여행책이다. 먹거리와 쇼핑 명소 정보를 넘어서, 일본의 역사가 보여주는 빛과 그림자를 만나게 하고, 문화의 품격에 공감하며, 미래의 모습을 그려볼 수는 흥미로운 여행을 제안한다.\n\n도쿄 여행에서 만날 수 있는 43개의 크고 작은 뮤지엄은 각각 그들만의 독특한 이야기와 경험을 이야기한다. 젊고 생동감 넘치는 일러스트를 통해, 우리는 관람을 넘어 다채로운 문화를 직접 체험하게 된다. 시간에 쫓기는 사람들을 위해 하루를 즐길 수 있는 뮤지엄이 있는가 하면, 미술·건축·패션과 같은 문화의 색채를 느낄 수 있는 뮤지엄, 예술가의 생애와 작품을 조명하는 뮤지엄, 먹거리의 역사와 함께 하는 맛있는 뮤지엄 등 형형색색의 박물관과 미술관, 기념관들이 소개된다.','QmYvk2UMNACh3BWL2NRF2k1YsXP3HrCnWpvrhipjH136jj','https://bangle.s3.ap-northeast-2.amazonaws.com/d5ac45c0-dfcd-4074-bfa1-1cfc2285d0cd.png','여행','나의 필리핀 여행기'),(0,5,1,200,14,81,'2023-10-05 05:08:30.238296',NULL,'운동과는 거리가 멀어도 너무 먼 워킹맘으로 책상 앞에만 앉아 있던 저자는 우연히 알게 된 자전거 국토종주에 푹 빠져버렸다. 고작 한강공원에서 자전거 몇 바퀴 돌아본 것이 전부였는데 가능할까? 고민만 하다 우물쭈물 없었던 일이 되어 버릴까 중학생의 큰아들과 초등학교 6학년의 쌍둥이 아들을 설득해 함께 떠나보기로 했다.\n\n이렇게 시작된 자전거 초보들의 자전거 국토종주 그랜드슬램 정복기! 35도의 땡볕에 시작된 인천-부산 국토종주를 시작으로 이들은 시간이 허락될 때마다 우리나라 인증 자전거길 12개 코스를 모두 완주하는 데 성공하였다.\n\n“남들처럼 꼭 자전거를 잘 탈 필요는 없다. 남들의 속도가 아닌 우리만의 방식과 속도로 길을 달리다 보니 어느새 최종 목적지에 도달해 있었다. 더불어 꼭 자전거가 아니라도 자신이 꿈꿔왔던 일이 있다면 망설이지 말고 바로 도전하라”고 저자는 말한다. 승리는 항상 포기하지 않고 끈질기게 버티는 사람들에게 돌아간다고 말이다.','QmSZezMr2bbSPVGCq3LcNTXfyjMkBB5d8ysWDNAk2HYo8d','https://bangle.s3.ap-northeast-2.amazonaws.com/c18721af-a6d7-4512-aba1-17f5b937fb3d.png','여행','나는 바다가 좋아요'),(0,6,1,200,4,82,'2023-10-05 05:08:47.510097',NULL,'여기, 대한민국 최초로 전국의 모든 시군을 취재한 사람이 있다. 태원준 여행작가다. 그는 3년 가까이 ‘대한민국 100% 취재 프로젝트’를 진행했다. 강원도 고성에서 제주도까지, 서해 홍도에서 대한민국 동쪽 끝 독도까지 161개 시군을 모두 취재했다. 1,000일 동안 발로 뛰고, 손 카메라와 드론으로 촬영하고, 취재 노트에 꼼꼼하게 기록했다. <대한민국 완전정복 가이드북>은 ‘대한민국 100% 취재 프로젝트’의 결과물이다.\n\n1,000일 동안 취재한 명소·맛집·카페 2,500곳을 다 담았다. 핫스폿, 해변, 계곡, 사찰, 섬, 수목원, 박물관, 전통시장, 걷기 코스, 꽃 명소, 액티비티, 드라이브, 야경 명소……. 지역이 어디든, 테마가 무엇이든 <대한민국 완전정복 가이드북>이 그곳으로 안내한다.','QmfPjA5rBquz8fe2x2GG6Sc8LKtUNy48eZ1uFh1ztkVYNK','https://bangle.s3.ap-northeast-2.amazonaws.com/f5d68988-ed0e-4b22-82f0-fd7d0890f0aa.png','여행','덤벼라 세상아'),(0,7,1,200,6,83,'2023-10-05 05:09:04.389730',NULL,'쉽고 새로운 여행을 제안하는 ‘우리들의 여행’ 시리즈 첫 권. 그 첫 여행지는 신들의 섬, 인도네시아 발리다. 여행이 가장 필요한 순간은 언제일까. 간신히 맞춰놓은 몸과 마음의 균형이 삐거덕거리기 시작할 때 우리는 여행을 꿈꾼다. 발리는 우리 삶의 균형을 되찾기 위한 최고의 여행지다. 자연에서의 휴식, 산과 강과 바다에서의 모험, 쇼핑과 식도락의 재미, 리조트나 고요한 숙소에서의 휴양, 발리에선 이 모든 것이 가능하다.\n\n여행 가이드북은 쉬워야 한다. 잡지를 읽듯 쓱쓱 이 책의 페이지를 넘겨보자. 여행 준비부터 입국, 시내 교통, 지역별 테마 여행, 출국까지 발리 여행이 간결하게 머릿속에 그려진다. 우붓, 꾸따, 스미냑, 짱구 그리고 울루와뚜, 사누르, 누사두아 같은 낯선 지역명과도 친숙해진다. 여행이 편해지는 최신 정보, ‘발리 그 자체’인 여행 전문가가 직접 검증한 스폿 큐레이션, 현지 응급 상황 대처법 등을 정성껏 담은 『우리들의 발리 여행』과 함께 한결 가볍게 발리로 떠나보자.','QmUFmvCj7NyYPyK98GTwfgyqf581teDWDVbTGt4SEQCBNy','https://bangle.s3.ap-northeast-2.amazonaws.com/57adb584-8bc3-43c4-832f-c746970dae19.png','여행','두바이'),(0,5,1,200,6,84,'2023-10-05 05:09:30.403709',NULL,'에이든 여행지도가 지난 수년간 업데이트 하며 제작한 결과물로 지금까지 만들어진 ‘오사카와 간사이 지역’을 여행하기 위한 최고 완성 버전이다. A1사이즈의 방수종이에 앞면은 ‘오사카 주요지역’, 뒷면은 ‘간사이지역으로 고베, 나라, 교토 지도 등’로 매우 상세히 표시되어 있다. 또한 휴대하기 편리하도록 맵북도 포함하고 있으며 ‘오사카/간사이’ 여행 계획에 도움이 되시라고 트래블노트도 포함되어 있다.','QmYSpZWpMnYyNWc7pZMVTBvkVCKJ1uiDXLHhm3z9kxU5oJ','https://bangle.s3.ap-northeast-2.amazonaws.com/2ac06c17-d8a0-48c1-b154-a541ca77267c.png','여행','세계 여행'),(0,6,1,200,14,85,'2023-10-05 05:09:53.605675',NULL,'목욕탕 지배인이 된 건축가가 그림으로 소개하는 목욕탕 가이드북이다. 도쿄를 비롯해 사이타마, 지바, 교토, 미에, 아이치, 도쿠시마 등 도쿄 근방의 개성만점 목욕탕 24채를 엄선해 소개한다. 맥주 마이스터 공인을 받은 사이토유, 봄이면 벚꽃 잎이 떨어지는 사쿠라칸, 도쿄 스카이타워에서 영감을 받아 초록, 파랑, 보라, 하양 순으로 온수 색깔이 바뀌는 야쿠시유 등 어느 하나 빼놓을 수 없는 각양각색의 매력을 가진 목욕탕들이다.\n\n특히 저자는 건축가였던 전공을 살려 높은 곳에서 특정한 각도로 내려다보는 투시도법으로 목욕탕 내부를 그렸다. 덕분에 그림을 보는 것만으로도 목욕탕 전체 구조를 한눈에 파악할 수 있을 뿐만 아니라 마치 실제 목욕탕에 들어선 것 같은 느낌을 받는다. 또한 숨은그림찾기를 하듯 구석구석의 디테일을 구경하는 재미도 쏠쏠하다.\n\n상세하고 치밀한 설계, 목욕탕의 온기가 느껴지는 다정다감한 그림체, 솔직담백한 에세이까지 목욕탕을 향한 각별한 애정을 아낌없이 펼쳐내는 저자의 목욕탕 이야기를 듣다 보면 이내 참을 수 없이 목욕탕에 가고 싶어진다. 목욕탕을 사랑하는 사람이라면, 사라져가는 일본의 목욕탕 문화를 경험해보고 싶은 사람이라면, 일본을 더 가까이에서 느껴보고 싶은 여행자라면 이 책을 통해 따스한 온기와 매력으로 가득한 목욕탕의 세계에 퐁당 빠져보길 권한다.','QmShZ3rxqZP5nWVuufX27ayoSCNRK5MMqV7vWFEy6h1qhu','https://bangle.s3.ap-northeast-2.amazonaws.com/fbade723-c5ff-4413-a4f7-a36150474526.png','여행','암벽 등반'),(0,7,1,200,10,86,'2023-10-05 05:10:11.904792',NULL,'‘믿고 보는 여행 가이드북’이라는 캐치프레이즈와 함께 최신 정보 수록은 물론, 드넓은 자연의 아름다움과 도시의 여유로움을 제대로 즐길 수 있는 방법을 속속 담았다. 호주를 잘 알고 있는 두 작가가『호주 셀프트래블』의 완성도를 높이고자 힘을 합쳤다. 잠깐 머물던 여행자라면 쉽게 지나칠 수 있는 정보들이 아닌, 20년간 호주에 거주한 여행 전문가들이 소개하는 이 책은 단언컨대 믿음직한 여행서가 될 것이다.\n\n『호주 셀프트래블』에는 하나의 나라이자 대륙인 호주의 주요 도시 10곳의 볼거리, 즐길 거리, 먹을거리 등이 완벽하게 분석되어 있다. 또한 이 책은 ‘죽기 전에 꼭 가봐야 할 명소’로 선정된 그레이트 오션 로드, 남녀노소 모두가 행복한 골드코스트의 테마파크, 시드니에서 즐기는 낭만적인 크루즈 여행, 호주인들의 열정이 가득한 멜버른의 스포츠 경기장 등 호주를 제대로 느낄 수 있는 각종 테마 여행도 빠짐없이 다루었다. 각 도시마다 추천 교통편, 평균기온과 옷차림 등 세부 정보는 물론이고 시내를 둘러볼 때 유용한 추천 코스까지 제시해 여행자들이 조금 더 편리하고 즐겁게 여행할 수 있도록 구성했다.\n','QmYSpZWpMnYyNWc7pZMVTBvkVCKJ1uiDXLHhm3z9kxU5oJ','https://bangle.s3.ap-northeast-2.amazonaws.com/9687442b-b03e-4b76-a2bd-e2a0722e3420.png','여행','갈림길 앞에서'),(0,5,1,200,5,87,'2023-10-05 05:10:28.104184',NULL,'‘믿고 보는 여행 가이드북’이라는 캐치프레이즈와 함께 최신 정보 수록은 물론, 드넓은 자연의 아름다움과 도시의 여유로움을 제대로 즐길 수 있는 방법을 속속 담았다. 호주를 잘 알고 있는 두 작가가『호주 셀프트래블』의 완성도를 높이고자 힘을 합쳤다. 잠깐 머물던 여행자라면 쉽게 지나칠 수 있는 정보들이 아닌, 20년간 호주에 거주한 여행 전문가들이 소개하는 이 책은 단언컨대 믿음직한 여행서가 될 것이다.\n\n『호주 셀프트래블』에는 하나의 나라이자 대륙인 호주의 주요 도시 10곳의 볼거리, 즐길 거리, 먹을거리 등이 완벽하게 분석되어 있다. 또한 이 책은 ‘죽기 전에 꼭 가봐야 할 명소’로 선정된 그레이트 오션 로드, 남녀노소 모두가 행복한 골드코스트의 테마파크, 시드니에서 즐기는 낭만적인 크루즈 여행, 호주인들의 열정이 가득한 멜버른의 스포츠 경기장 등 호주를 제대로 느낄 수 있는 각종 테마 여행도 빠짐없이 다루었다. 각 도시마다 추천 교통편, 평균기온과 옷차림 등 세부 정보는 물론이고 시내를 둘러볼 때 유용한 추천 코스까지 제시해 여행자들이 조금 더 편리하고 즐겁게 여행할 수 있도록 구성했다.\n','QmSZezMr2bbSPVGCq3LcNTXfyjMkBB5d8ysWDNAk2HYo8d','https://bangle.s3.ap-northeast-2.amazonaws.com/45658e92-247c-48cf-8bdf-2e7381852b4f.png','여행','유럽여행 일기'),(0,6,1,200,4,88,'2023-10-05 05:12:51.361388',NULL,'우리는 집중하지 못하고 산만해지는 것이 흔히 스마트폰과 같은 디지털 기기에 대해 자제력을 발휘하지 못하는 개인의 실패라고 생각한다. 그러나 그렇지 않다. 저자는 현재 우리가 겪고 있는 집중력 문제가 현대 사회의 비만율의 증가와 유사하다고 설명한다. 정크푸드를 중심으로 한 식품 공급 체계와 생활 방식의 변화가 비만율 증가를 만든 것처럼, 집중력 위기의 광범위한 증가도 현대 사회 시스템이 만들어낸 유행병과 같다는 것이다.\n\n이 과정에서 저자는 인간의 주의력을 빼앗는 꼼수를 발견한 실리콘밸리의 반체제 인사, 강아지에게 ADHD를 진단한 수의사, 심각한 집중력 위기에 빠진 리우의 빈민가, 놀라운 방식으로 노동자들의 집중력을 회복한 뉴질랜드의 한 회사까지 종횡무진한다. 그리고 이러한 광범위한 집중력 위기에 수면의 부족, 독서의 붕괴, 테크 기업들의 주의력 조종과 약탈 등 12가지 원인이 작용한다는 것을 발견한다.','QmPPtrN8Hz7TcScZdYG8Aj2ajdUUDJnobWkC7PwRr4UTye','https://bangle.s3.ap-northeast-2.amazonaws.com/4ba8dc22-4cf5-4a69-ae25-b26ee93e2f37.png','인문','웃으면 복이 와요'),(0,7,1,200,6,89,'2023-10-05 05:13:03.806209',NULL,'우리는 집중하지 못하고 산만해지는 것이 흔히 스마트폰과 같은 디지털 기기에 대해 자제력을 발휘하지 못하는 개인의 실패라고 생각한다. 그러나 그렇지 않다. 저자는 현재 우리가 겪고 있는 집중력 문제가 현대 사회의 비만율의 증가와 유사하다고 설명한다. 정크푸드를 중심으로 한 식품 공급 체계와 생활 방식의 변화가 비만율 증가를 만든 것처럼, 집중력 위기의 광범위한 증가도 현대 사회 시스템이 만들어낸 유행병과 같다는 것이다.\n\n이 과정에서 저자는 인간의 주의력을 빼앗는 꼼수를 발견한 실리콘밸리의 반체제 인사, 강아지에게 ADHD를 진단한 수의사, 심각한 집중력 위기에 빠진 리우의 빈민가, 놀라운 방식으로 노동자들의 집중력을 회복한 뉴질랜드의 한 회사까지 종횡무진한다. 그리고 이러한 광범위한 집중력 위기에 수면의 부족, 독서의 붕괴, 테크 기업들의 주의력 조종과 약탈 등 12가지 원인이 작용한다는 것을 발견한다.','Qmcn28bf9ihg1mPmVyeiXWGjR6FYU3tCcPagKs7gu9K1Q3','https://bangle.s3.ap-northeast-2.amazonaws.com/ec150aaa-6398-4e99-9971-1a08709915cd.png','인문','우리의 사랑 우리의 인연 그영원한 약속들이'),(0,5,1,200,5,90,'2023-10-05 05:13:21.591936',NULL,'역사ㆍ정치ㆍ경제ㆍ글쓰기ㆍ여행 등 인문학 분야의 글을 써온 작가 유시민이 과학을 소재로 쓴 첫 책이다. 유시민에게 “지적 자극과 정서적 감동을 준 과학이론, 인간과 사회와 역사에 대한 생각을 교정해준 정보를 골라 새롭게 해석”했다. 과학과 인문학이 교차ㆍ통섭하는 이야기가 흥미진진하다.\n\n저자는 과학 책을 읽으며 인문학 공부로 배우지 못한 지식과 정보를 얻고, 과학의 토대 위에서 다양하게 사유할 수 있었다. 그리하여 온전한 공부를 하기 위해 인문학과 함께 과학 공부를 해야 한다고, 회한의 감정을 실어 말한다. “다시 스무 살로 돌아간다면 인문학과 함께 과학도 공부하고 싶다.” 그리고 현재 인문학이 맞닥뜨린 위기와 한계를 뚫고 나아가려면 과학의 성취를 받아들여야 한다고 조언한다. 인문학은 과학으로 정확해지고, 과학은 인문학으로 깊어진다.','QmPPtrN8Hz7TcScZdYG8Aj2ajdUUDJnobWkC7PwRr4UTye','https://bangle.s3.ap-northeast-2.amazonaws.com/0dbdda96-d76d-4fef-9c9d-f5230b5d08e4.png','인문','나의 사랑 나의 신부'),(0,6,1,200,5,91,'2023-10-05 05:13:31.812746',NULL,'역사ㆍ정치ㆍ경제ㆍ글쓰기ㆍ여행 등 인문학 분야의 글을 써온 작가 유시민이 과학을 소재로 쓴 첫 책이다. 유시민에게 “지적 자극과 정서적 감동을 준 과학이론, 인간과 사회와 역사에 대한 생각을 교정해준 정보를 골라 새롭게 해석”했다. 과학과 인문학이 교차ㆍ통섭하는 이야기가 흥미진진하다.\n\n저자는 과학 책을 읽으며 인문학 공부로 배우지 못한 지식과 정보를 얻고, 과학의 토대 위에서 다양하게 사유할 수 있었다. 그리하여 온전한 공부를 하기 위해 인문학과 함께 과학 공부를 해야 한다고, 회한의 감정을 실어 말한다. “다시 스무 살로 돌아간다면 인문학과 함께 과학도 공부하고 싶다.” 그리고 현재 인문학이 맞닥뜨린 위기와 한계를 뚫고 나아가려면 과학의 성취를 받아들여야 한다고 조언한다. 인문학은 과학으로 정확해지고, 과학은 인문학으로 깊어진다.','QmYSpZWpMnYyNWc7pZMVTBvkVCKJ1uiDXLHhm3z9kxU5oJ','https://bangle.s3.ap-northeast-2.amazonaws.com/04927d45-aaca-4e25-92b4-d85b1e08457f.png','인문','비움의 미학'),(0,7,1,200,14,92,'2023-10-05 05:13:48.702130',NULL,'『피로사회』로 한국 사회를 뜨겁게 달궜던 재독 철학자 한병철이, 이번에는 빠르게 나타났다 사라지는 이슈만 좇느라 정작 자기의 생각으로부터 멀어져 버린 스토리 중독 사회를 고발한다. 『피로사회』 이후 10여 년 만에 새로운 화두를 던지는 이 책의 핵심 키워드는 ‘서사’와 ‘스토리’다. 나만의 생각과 맥락이 서사라면, 반짝하고 사라져 버리는 뉴스와 정보들은 스토리다.\n\n한병철은 우리가 억압도, 저항도 없는 스마트한 지배체계에서 자기 삶을 SNS에 게시하며 정보화하도록 조종당하고 있다고 지적한다. 아름다운 꽃을 봐도 감동을 온전히 느끼며 내면으로 파고드는 것이 아니라 재빨리 스마트폰으로 사진을 찍어 인스타그램 스토리에 올리는 데 그치며 자신만의 서사를 만들지 못한다는 것이다. 고유한 이야기를 잃은 사회, 내 생각과 느낌을 말하지 못하고 입력한 정보를 앵무새처럼 내뱉는 사회의 끝은 서사 없는 ‘텅 빈 삶’이다.','QmYSpZWpMnYyNWc7pZMVTBvkVCKJ1uiDXLHhm3z9kxU5oJ','https://bangle.s3.ap-northeast-2.amazonaws.com/108a0343-043d-4921-8859-7dffcd4104bf.png','인문','가짜 친구'),(0,5,1,200,14,93,'2023-10-05 05:13:56.521051',NULL,'『피로사회』로 한국 사회를 뜨겁게 달궜던 재독 철학자 한병철이, 이번에는 빠르게 나타났다 사라지는 이슈만 좇느라 정작 자기의 생각으로부터 멀어져 버린 스토리 중독 사회를 고발한다. 『피로사회』 이후 10여 년 만에 새로운 화두를 던지는 이 책의 핵심 키워드는 ‘서사’와 ‘스토리’다. 나만의 생각과 맥락이 서사라면, 반짝하고 사라져 버리는 뉴스와 정보들은 스토리다.\n\n한병철은 우리가 억압도, 저항도 없는 스마트한 지배체계에서 자기 삶을 SNS에 게시하며 정보화하도록 조종당하고 있다고 지적한다. 아름다운 꽃을 봐도 감동을 온전히 느끼며 내면으로 파고드는 것이 아니라 재빨리 스마트폰으로 사진을 찍어 인스타그램 스토리에 올리는 데 그치며 자신만의 서사를 만들지 못한다는 것이다. 고유한 이야기를 잃은 사회, 내 생각과 느낌을 말하지 못하고 입력한 정보를 앵무새처럼 내뱉는 사회의 끝은 서사 없는 ‘텅 빈 삶’이다.','QmUFmvCj7NyYPyK98GTwfgyqf581teDWDVbTGt4SEQCBNy','https://bangle.s3.ap-northeast-2.amazonaws.com/c25d9e20-bd58-4cac-9226-ebd57616a43b.png','인문','친절이 필요해'),(0,6,1,200,10,94,'2023-10-05 05:14:18.766447',NULL,'쭈리의 코딩 일지\n쭈리가 간다\n','QmShZ3rxqZP5nWVuufX27ayoSCNRK5MMqV7vWFEy6h1qhu','https://bangle.s3.ap-northeast-2.amazonaws.com/5e7f8ece-4289-4878-a25a-de032eaadd0b.png','인문','괜찮아, 코딩할 일은 매일 있어'),(0,7,1,200,14,95,'2023-10-05 05:14:33.138177',NULL,'『피로사회』로 한국 사회를 뜨겁게 달궜던 재독 철학자 한병철이, 이번에는 빠르게 나타났다 사라지는 이슈만 좇느라 정작 자기의 생각으로부터 멀어져 버린 스토리 중독 사회를 고발한다. 『피로사회』 이후 10여 년 만에 새로운 화두를 던지는 이 책의 핵심 키워드는 ‘서사’와 ‘스토리’다. 나만의 생각과 맥락이 서사라면, 반짝하고 사라져 버리는 뉴스와 정보들은 스토리다.\n\n한병철은 우리가 억압도, 저항도 없는 스마트한 지배체계에서 자기 삶을 SNS에 게시하며 정보화하도록 조종당하고 있다고 지적한다. 아름다운 꽃을 봐도 감동을 온전히 느끼며 내면으로 파고드는 것이 아니라 재빨리 스마트폰으로 사진을 찍어 인스타그램 스토리에 올리는 데 그치며 자신만의 서사를 만들지 못한다는 것이다. 고유한 이야기를 잃은 사회, 내 생각과 느낌을 말하지 못하고 입력한 정보를 앵무새처럼 내뱉는 사회의 끝은 서사 없는 ‘텅 빈 삶’이다.','QmNn3P9e6uwSJ2Uh8QCMMQBJ7Xb5CW48u7ezURbqu3ogd3','https://bangle.s3.ap-northeast-2.amazonaws.com/2cf0dedf-d0d3-4044-b55d-dc3208feb885.png','인문','웃으면 복이와요'),(0,5,1,200,14,96,'2023-10-05 05:14:49.614901',NULL,'엄마이자 의사인 저자가 정신질환을 앓는 딸을 보살피고, 가족으로서 삶을 함께 살아내고자 겪어온 숨 가쁜 여정의 기록이다. 한치 앞이 보이지 않는 밤바다를 헤엄치는 심정으로 딸과 함께해왔던 지난 7년간의 투병 과정을 담담하게 회고하며 정신질환자와 그 가족, 그리고 마음의 문제로 고생하는 모든 이들에게 공감과 위안을 전한다.\n\n더불어 딸의 아픔을 헤아리기 위해 섭렵한 수많은 연구와 기록을 소개하며 정신질환에 대한 사회적·과학적 이해를 넓히고, 정신질환을 앓는 가족과 대화하는 법, 자해·자살 시도를 마주했을 때 대처하는 자세, 병원을 선택할 때의 유의사항 등 환자 가족으로서 실제 겪은 바에서 우러나온 생생한 조언을 담았다. 정서적으로 불안한 가족을 둔 이는 물론, 정신질환에 대한 이해를 넓히고 싶은 독자에게 두루 권한다.','QmQzcp8uaahwdwYGud4w8FsYbBro17NCqQomsk56Wfhz7e','https://bangle.s3.ap-northeast-2.amazonaws.com/a5b1716a-870e-46fc-814e-5a0e17d958c6.png','인문','두 손을 모아'),(0,6,1,200,14,97,'2023-10-05 05:14:56.993426',NULL,'엄마이자 의사인 저자가 정신질환을 앓는 딸을 보살피고, 가족으로서 삶을 함께 살아내고자 겪어온 숨 가쁜 여정의 기록이다. 한치 앞이 보이지 않는 밤바다를 헤엄치는 심정으로 딸과 함께해왔던 지난 7년간의 투병 과정을 담담하게 회고하며 정신질환자와 그 가족, 그리고 마음의 문제로 고생하는 모든 이들에게 공감과 위안을 전한다.\n\n더불어 딸의 아픔을 헤아리기 위해 섭렵한 수많은 연구와 기록을 소개하며 정신질환에 대한 사회적·과학적 이해를 넓히고, 정신질환을 앓는 가족과 대화하는 법, 자해·자살 시도를 마주했을 때 대처하는 자세, 병원을 선택할 때의 유의사항 등 환자 가족으로서 실제 겪은 바에서 우러나온 생생한 조언을 담았다. 정서적으로 불안한 가족을 둔 이는 물론, 정신질환에 대한 이해를 넓히고 싶은 독자에게 두루 권한다.','QmP3TtKFHHuyTmJ2irN4zMNcY1dYdg72Dos3pqRhQJm5C5','https://bangle.s3.ap-northeast-2.amazonaws.com/626c7a1c-c91a-4141-8af0-67f740289d6e.png','인문','거짓 사랑'),(0,7,1,200,14,98,'2023-10-05 05:15:16.085270',NULL,'자기 서사의 거장, 작가들의 작가로 불리는 비비언 고닉의 ‘자전적 글쓰기’에 대한 사유와 통찰을 담았다. 고닉은 에세이와 회고록, 비평 등에서 독보적인 세계를 구축한 작가이자 오랫동안 논픽션 강좌를 이끈 글쓰기 선생이다. 그가 글쓰기를 가르치는 건 불가능에 가깝다고, 대신 읽는 법을 가르칠 수는 있다고, 경험을 이해하고 나를 발견하는 길을 안내할 수는 있다고 말한다. 이 배움의 여정에서 특히 중요한 것은 “누가, 무엇을 말하고 있는가, 둘 사이의 관계는 어떠한가”를 묻는 ‘방법’이다. 제대로 묻기 위해 고닉은 여러 작가들의 에세이와 회고록을 아름다운 문장과 통렬한 사유로 분석한다.\n\n이 탐구가 고닉이 생각하는 자전적 글쓰기의 핵심으로 나아간다. 진실한 서술자(페르소나)를 만들어야 하며, ‘상황’에서 ‘이야기’를 떼어내야 한다는 것. 내 이야기를 쓰고 싶다면 이렇게 물어야 한다. 서술자는 충분히 거리 두기를 하고 있는가? 신뢰할 만한가? 작가는 핵심 통찰로 이야기를 구조화하고 있는가? 독자를 사로잡을 만한 탐구가 글에 담겨 있는가? 서술자는 글쓰기를 통해 자신의 어떤 점을 발견하고 폭로하는가? 독자와 함께 묻고 답을 찾으며 이 책은 자전적 글쓰기 안내서, 자기 서사의 본질을 조명하는 해설서, 우아하고 예리한 문학비평 에세이를 오간다. 조지 오웰, 조앤 디디온, 나탈리아 긴츠부르그, 장 아메리, 마르그리트 뒤라스, W. G. 제발트… 고닉을 사로잡은 작가들의 빛나는 글은 또 하나의 선물이다.','QmcmY7PgRQuCdpstotskeMpvwdpx7Qa6hB5kvnZo9wwqYg','https://bangle.s3.ap-northeast-2.amazonaws.com/b0e19007-3c0c-4ef5-a261-916f53a8b0ca.png','인문','아름다운 세상'),(0,5,1,200,4,99,'2023-10-05 05:15:25.151129',NULL,'자기 서사의 거장, 작가들의 작가로 불리는 비비언 고닉의 ‘자전적 글쓰기’에 대한 사유와 통찰을 담았다. 고닉은 에세이와 회고록, 비평 등에서 독보적인 세계를 구축한 작가이자 오랫동안 논픽션 강좌를 이끈 글쓰기 선생이다. 그가 글쓰기를 가르치는 건 불가능에 가깝다고, 대신 읽는 법을 가르칠 수는 있다고, 경험을 이해하고 나를 발견하는 길을 안내할 수는 있다고 말한다. 이 배움의 여정에서 특히 중요한 것은 “누가, 무엇을 말하고 있는가, 둘 사이의 관계는 어떠한가”를 묻는 ‘방법’이다. 제대로 묻기 위해 고닉은 여러 작가들의 에세이와 회고록을 아름다운 문장과 통렬한 사유로 분석한다.\n\n이 탐구가 고닉이 생각하는 자전적 글쓰기의 핵심으로 나아간다. 진실한 서술자(페르소나)를 만들어야 하며, ‘상황’에서 ‘이야기’를 떼어내야 한다는 것. 내 이야기를 쓰고 싶다면 이렇게 물어야 한다. 서술자는 충분히 거리 두기를 하고 있는가? 신뢰할 만한가? 작가는 핵심 통찰로 이야기를 구조화하고 있는가? 독자를 사로잡을 만한 탐구가 글에 담겨 있는가? 서술자는 글쓰기를 통해 자신의 어떤 점을 발견하고 폭로하는가? 독자와 함께 묻고 답을 찾으며 이 책은 자전적 글쓰기 안내서, 자기 서사의 본질을 조명하는 해설서, 우아하고 예리한 문학비평 에세이를 오간다. 조지 오웰, 조앤 디디온, 나탈리아 긴츠부르그, 장 아메리, 마르그리트 뒤라스, W. G. 제발트… 고닉을 사로잡은 작가들의 빛나는 글은 또 하나의 선물이다.','QmcxqtiKjv5tnMorpbjbsHYzsCbg9cqG2czzp7deK3jZin','https://bangle.s3.ap-northeast-2.amazonaws.com/1111e411-087a-46e1-8732-0ca38e28dd67.png','인문','삐뚤어질까요?'),(0,6,1,200,1,100,'2023-10-05 05:18:13.587437',NULL,'살 날이 얼마 남지 않은 ‘미래의 내’가 현재로 시간 여행을 왔다고 상상해보자. ‘현재의 나’는 해야 할 일은 미뤄둔 채 소파에 누워 핸드폰을 보느라 시간 가는 줄 모른다. 당장 사고 싶은 것, 먹고 싶은 것에 생각 없이 돈을 쓰고, ‘다음 달의 나’에게 결제를 미룬다. 자극적이고 간편한 정크 푸드를 즐겨 먹으며 건강은 생각하지 않는다. 어린 자녀와 눈을 맞추고 시간을 보내기보다 잔소리와 고성이 오가는 전쟁 같은 하루하루를 보낸다. 이 모습을 본 ‘미래의 나’는 과연 어떤 말을 하고 싶을까? 혹시 지금의 내 모습과 크게 다르지 않다고 생각하는가? 미래의 모습이 그려지지 않는다면, 현재의 내가 좀 더 나은 모습이기를 원한다면 이 책이 해답을 제시해줄 것이다.\n\n‘미래의 나는 어떤 모습일까?’라는 질문은 우리가 인생에서 쉽게 놓치는 중요한 진실에 이르게 한다. 즉, 미래의 나와 연결될수록 현재 더 나은 삶을 살게 된다는 것이다. 이 책은 미래의 내가 어떤 모습일지 깊이 생각해보고, 지금 그 사람이 되는 방법을 구체적으로 알려주는 인생 지침서이다. 상상한 미래 자아는 현실에서 원동력이 되어 목표와 우선순위가 달라지고, 이에 맞게 행동하게 만든다. 그렇기에 우리가 다시 예전 모습으로 돌아가려 하거나 의지가 약해질 때마다, 혹은 작은 성취를 맛본 후 다음 목표를 정해야 할 때 이 책을 옆에 두고 수시로 꺼내 보기를 권한다.','Qmc9c87Ze2GEJSZ3FyyuYfJVPCRAYZC4fDVKLddiGcYR8t','https://bangle.s3.ap-northeast-2.amazonaws.com/a38f4b1e-c20f-44ef-a9c6-03dc0926cf80.png','자기계발','퓨처 셀프'),(0,7,1,200,6,101,'2023-10-05 05:18:27.008974',NULL,'살 날이 얼마 남지 않은 ‘미래의 내’가 현재로 시간 여행을 왔다고 상상해보자. ‘현재의 나’는 해야 할 일은 미뤄둔 채 소파에 누워 핸드폰을 보느라 시간 가는 줄 모른다. 당장 사고 싶은 것, 먹고 싶은 것에 생각 없이 돈을 쓰고, ‘다음 달의 나’에게 결제를 미룬다. 자극적이고 간편한 정크 푸드를 즐겨 먹으며 건강은 생각하지 않는다. 어린 자녀와 눈을 맞추고 시간을 보내기보다 잔소리와 고성이 오가는 전쟁 같은 하루하루를 보낸다. 이 모습을 본 ‘미래의 나’는 과연 어떤 말을 하고 싶을까? 혹시 지금의 내 모습과 크게 다르지 않다고 생각하는가? 미래의 모습이 그려지지 않는다면, 현재의 내가 좀 더 나은 모습이기를 원한다면 이 책이 해답을 제시해줄 것이다.\n\n‘미래의 나는 어떤 모습일까?’라는 질문은 우리가 인생에서 쉽게 놓치는 중요한 진실에 이르게 한다. 즉, 미래의 나와 연결될수록 현재 더 나은 삶을 살게 된다는 것이다. 이 책은 미래의 내가 어떤 모습일지 깊이 생각해보고, 지금 그 사람이 되는 방법을 구체적으로 알려주는 인생 지침서이다. 상상한 미래 자아는 현실에서 원동력이 되어 목표와 우선순위가 달라지고, 이에 맞게 행동하게 만든다. 그렇기에 우리가 다시 예전 모습으로 돌아가려 하거나 의지가 약해질 때마다, 혹은 작은 성취를 맛본 후 다음 목표를 정해야 할 때 이 책을 옆에 두고 수시로 꺼내 보기를 권한다.','QmNn3P9e6uwSJ2Uh8QCMMQBJ7Xb5CW48u7ezURbqu3ogd3','https://bangle.s3.ap-northeast-2.amazonaws.com/d8c81738-9f42-47b9-9338-62ac7fc7d869.png','자기계발','오늘의 점심'),(0,5,1,200,5,102,'2023-10-05 05:18:48.976649',NULL,'2000년부터 발표된 그의 주옥같은 글들. 독자들이 자발적으로 만든 제본서는 물론, 전자책과 앱까지 나왔던 《세이노의 가르침》이 드디어 전국 서점에서 독자들을 마주한다. 여러 판본을 모으고 저자의 확인을 거쳐 최근 생각을 추가로 수록하였다. 정식 출간본에만 추가로 수록된 글들은 목차와 본문에 별도 표시하였다.','QmSZezMr2bbSPVGCq3LcNTXfyjMkBB5d8ysWDNAk2HYo8d','https://bangle.s3.ap-northeast-2.amazonaws.com/ba7781ee-9f14-44e6-8f1d-6151f08ad060.png','자기계발','세이노의 가르침'),(0,6,1,200,14,103,'2023-10-05 05:19:00.685217',NULL,'2000년부터 발표된 그의 주옥같은 글들. 독자들이 자발적으로 만든 제본서는 물론, 전자책과 앱까지 나왔던 《세이노의 가르침》이 드디어 전국 서점에서 독자들을 마주한다. 여러 판본을 모으고 저자의 확인을 거쳐 최근 생각을 추가로 수록하였다. 정식 출간본에만 추가로 수록된 글들은 목차와 본문에 별도 표시하였다.','QmYSpZWpMnYyNWc7pZMVTBvkVCKJ1uiDXLHhm3z9kxU5oJ','https://bangle.s3.ap-northeast-2.amazonaws.com/c4aaece5-e24b-491b-b361-b9c5e68774bb.png','자기계발','애쓰지 않는 기술'),(0,7,1,200,14,104,'2023-10-05 05:19:25.788010',NULL,'95퍼센트의 인간은 타고난 유전자와 본성의 꼭두각시로 살아간다. 이들은 평생 돈, 시간, 운명에게 속박되어, 평범함을 벗어나지 못하고 불행하게 사는 ‘순리자’다. 그러나 5퍼센트의 인간은 다르다. 이들은 타고난 유전자의 본성을 역행해 돈, 시간, 운명으로부터 완전한 자유를 얻는다. 본성을 거슬러 행복을 쟁취하는 이들이 바로 ‘역행자’다.\n\n운명과 본능의 지배에서 벗어나 경제적 자유와 행복을 쟁취하는 라이프해킹의 비밀을 담은 책, 『역행자』가 2022년 출간된 지 1년 만에 확장판으로 다시 돌아왔다. ‘무자본 연쇄창업마’로서 30대 초반에 자동화 수익을 완성한 자청, 그가 10년 동안 시행착오를 겪으며 찾아낸 ‘역행자 7단계’ 모델을 담은 『역행자』는 2022년 출간 즉시 ‘전 서점 종합 베스트셀러 1위 달성’, ‘1년 만에 40만 부 판매’라는 대기록을 세우며 대한민국에 ‘역행자 신드롬’을 불러일으켰다.\n\n『역행자』 확장판은 더욱 묵직해진 팩트 폭격과 뼈 때리는 사례들, 저자의 비밀 노하우인 ‘무자본 창업 7단계 공식’ 등을 수록하며 초판에 비해 무려 100페이지 가량의 분량이 추가되었다. 저자의 생생한 육성을 그대로 담았을 뿐만 아니라 『역행자』를 만나 완전히 다른 인생을 살고 있는 독자들의 생생한 경험담을 수록하여 독자들로 하여금 역행자가 되지 않고는 버틸 수 없게 만든다. 한층 더 강력해진 『역행자』 확장판만 있다면, 당신도 저자와 함께 ‘돈, 시간, 운명’으로부터 완전한 자유를 얻게 될 것이다.','QmPPtrN8Hz7TcScZdYG8Aj2ajdUUDJnobWkC7PwRr4UTye','https://bangle.s3.ap-northeast-2.amazonaws.com/24ce8bd0-1040-4208-8419-ac59cad1c13d.png','자기계발','죽고싶지만 웰치스는 먹고싶어'),(0,5,1,200,1,105,'2023-10-05 05:19:37.512552',NULL,'95퍼센트의 인간은 타고난 유전자와 본성의 꼭두각시로 살아간다. 이들은 평생 돈, 시간, 운명에게 속박되어, 평범함을 벗어나지 못하고 불행하게 사는 ‘순리자’다. 그러나 5퍼센트의 인간은 다르다. 이들은 타고난 유전자의 본성을 역행해 돈, 시간, 운명으로부터 완전한 자유를 얻는다. 본성을 거슬러 행복을 쟁취하는 이들이 바로 ‘역행자’다.\n\n운명과 본능의 지배에서 벗어나 경제적 자유와 행복을 쟁취하는 라이프해킹의 비밀을 담은 책, 『역행자』가 2022년 출간된 지 1년 만에 확장판으로 다시 돌아왔다. ‘무자본 연쇄창업마’로서 30대 초반에 자동화 수익을 완성한 자청, 그가 10년 동안 시행착오를 겪으며 찾아낸 ‘역행자 7단계’ 모델을 담은 『역행자』는 2022년 출간 즉시 ‘전 서점 종합 베스트셀러 1위 달성’, ‘1년 만에 40만 부 판매’라는 대기록을 세우며 대한민국에 ‘역행자 신드롬’을 불러일으켰다.\n\n『역행자』 확장판은 더욱 묵직해진 팩트 폭격과 뼈 때리는 사례들, 저자의 비밀 노하우인 ‘무자본 창업 7단계 공식’ 등을 수록하며 초판에 비해 무려 100페이지 가량의 분량이 추가되었다. 저자의 생생한 육성을 그대로 담았을 뿐만 아니라 『역행자』를 만나 완전히 다른 인생을 살고 있는 독자들의 생생한 경험담을 수록하여 독자들로 하여금 역행자가 되지 않고는 버틸 수 없게 만든다. 한층 더 강력해진 『역행자』 확장판만 있다면, 당신도 저자와 함께 ‘돈, 시간, 운명’으로부터 완전한 자유를 얻게 될 것이다.','QmYSpZWpMnYyNWc7pZMVTBvkVCKJ1uiDXLHhm3z9kxU5oJ','https://bangle.s3.ap-northeast-2.amazonaws.com/109f68cd-8302-4883-84c9-46b5c70c0d38.png','자기계발','지나간 것은 지나간 대로'),(0,6,1,200,6,106,'2023-10-05 05:20:05.386912',NULL,'일평생 돈 걱정 하면서 살고 싶은 사람이 어디 있을까? 하지만 다들 부자의 삶을 꿈꾸면서도 체념해버린다. 금수저도, 천재도 아니므로 애초에 글렀다는 식이다. 진정 99%의 평범한 사람들은 부자가 될 수 없나? 그렇지 않다. 주위를 둘러보라. 한 달에 수천만 원을 벌어들이며 수십억 원의 자산을 쌓은 사람들이 지하철 한두 칸에 한 명씩은 있다. 이 책의 저자 주언규는 이렇듯 평범함의 범주 안에서 앞서나가는 사람들을 ‘슈퍼노멀’이라고 부른다.\n\n물론 그 역시 슈퍼노멀에 속한다. 렌털 스튜디오, 스마스스토어, 유튜브 채널 ‘신사임당’ 등 하는 일마다 폭발적인 성과를 만들어내고 100억대의 자산을 쌓았으니까. 그러나 불과 10년 전까지도 그가 월급 160만 원을 받던 평범한 ‘노멀’이었다는 사실을 잊지 말자. 그는 딱히 천재나 영재가 아니었고, ‘부자 아빠’도 없었다. 그가 지금껏 만난 수많은 자수성가한 부자들도 마찬가지였다. 도대체 평범한 사람이 어떻게 성공했을까? 그는 그간의 경험과 관찰, 연구를 통해 성공을 향한 프로세스, 즉 ‘슈퍼노멀 5단계 법칙’을 도출해냈다. 그리고 이 책 한 권에 그 모든 부의 비밀을 담았다.\n\n그는 자신 있게 말한다. 슈퍼노멀 법칙은 누구나 따라 할 수 있을 정도로 매우 단순하며, 이를 따른다면 당신도 ‘슈퍼노멀’로 거듭날 수 있다고. 아주 보통의 사람이 수천억 원의 부를 쌓기는 쉽지 않지만, 적어도 ‘월 천만 원’ 이나 ‘수십억’ 정도는 벌어들일 수 있다고 말이다. 그 정도의 부를 손에 쥐어보고 싶은 사람이라면, 그리고 아무리 생각해도 스스로 평범하다고 생각하는 사람이라면 환영한다. 당신은 ‘슈퍼노멀 법칙’의 효과를 제대로 누릴 수 있는 사람이다. ‘나는 특별하지 않다’라며 자포자기하는 대신, 이 책의 첫 페이지를 넘기며 ‘노멀’의 반격을 시작해보자. 당신은 능히 해낼 수 있는 사람이다.','QmNn3P9e6uwSJ2Uh8QCMMQBJ7Xb5CW48u7ezURbqu3ogd3','https://bangle.s3.ap-northeast-2.amazonaws.com/6c2ef303-4c1d-4bce-9ab4-dcac71054c42.png','자기계발','누구와 함께 일할 것인가'),(0,7,1,200,4,107,'2023-10-05 05:20:15.246003',NULL,'일평생 돈 걱정 하면서 살고 싶은 사람이 어디 있을까? 하지만 다들 부자의 삶을 꿈꾸면서도 체념해버린다. 금수저도, 천재도 아니므로 애초에 글렀다는 식이다. 진정 99%의 평범한 사람들은 부자가 될 수 없나? 그렇지 않다. 주위를 둘러보라. 한 달에 수천만 원을 벌어들이며 수십억 원의 자산을 쌓은 사람들이 지하철 한두 칸에 한 명씩은 있다. 이 책의 저자 주언규는 이렇듯 평범함의 범주 안에서 앞서나가는 사람들을 ‘슈퍼노멀’이라고 부른다.\n\n물론 그 역시 슈퍼노멀에 속한다. 렌털 스튜디오, 스마스스토어, 유튜브 채널 ‘신사임당’ 등 하는 일마다 폭발적인 성과를 만들어내고 100억대의 자산을 쌓았으니까. 그러나 불과 10년 전까지도 그가 월급 160만 원을 받던 평범한 ‘노멀’이었다는 사실을 잊지 말자. 그는 딱히 천재나 영재가 아니었고, ‘부자 아빠’도 없었다. 그가 지금껏 만난 수많은 자수성가한 부자들도 마찬가지였다. 도대체 평범한 사람이 어떻게 성공했을까? 그는 그간의 경험과 관찰, 연구를 통해 성공을 향한 프로세스, 즉 ‘슈퍼노멀 5단계 법칙’을 도출해냈다. 그리고 이 책 한 권에 그 모든 부의 비밀을 담았다.\n\n그는 자신 있게 말한다. 슈퍼노멀 법칙은 누구나 따라 할 수 있을 정도로 매우 단순하며, 이를 따른다면 당신도 ‘슈퍼노멀’로 거듭날 수 있다고. 아주 보통의 사람이 수천억 원의 부를 쌓기는 쉽지 않지만, 적어도 ‘월 천만 원’ 이나 ‘수십억’ 정도는 벌어들일 수 있다고 말이다. 그 정도의 부를 손에 쥐어보고 싶은 사람이라면, 그리고 아무리 생각해도 스스로 평범하다고 생각하는 사람이라면 환영한다. 당신은 ‘슈퍼노멀 법칙’의 효과를 제대로 누릴 수 있는 사람이다. ‘나는 특별하지 않다’라며 자포자기하는 대신, 이 책의 첫 페이지를 넘기며 ‘노멀’의 반격을 시작해보자. 당신은 능히 해낼 수 있는 사람이다.','QmSZezMr2bbSPVGCq3LcNTXfyjMkBB5d8ysWDNAk2HYo8d','https://bangle.s3.ap-northeast-2.amazonaws.com/6475cdf0-c7cf-4396-a5c1-6c0f018e4614.png','자기계발','비위 맞추기 멈춰'),(0,5,1,200,14,108,'2023-10-05 05:20:34.305524',NULL,'“말하기에 자신이 생기면 인생이 바뀝니다!” 명확하고 똑 부러진 말투로 KBS 간판 아나운서로서 활약했던 한석준 아나운서의 스피치 책이 출간되었다. 수천 명의 수강생이 열광한 스피치 코치이자 24년 차 아나운서로 맹활약 중인 그는 “처음부터 말을 잘하는 사람은 없다”면서, 일상에서 말을 잘하고 싶은 일반 대중을 위한 스피치 노하우가 담긴 《한석준의 말하기 수업》을 펴냈다.\n\n중요한 면접부터 회사에서 본인의 성과를 드러내야 할 때, 동료들과 의견을 나누면서 일을 추진해나가야 할 때, 처음 만난 사람에게 나를 소개할 때 등 다양한 상황에서 곧바로 적용할 수 있는 노하우를 이 책에서 낱낱이 소개한다.','Qmcn28bf9ihg1mPmVyeiXWGjR6FYU3tCcPagKs7gu9K1Q3','https://bangle.s3.ap-northeast-2.amazonaws.com/073a987c-c849-4e56-96d0-bdb9039401f7.png','자기계발','강철 멘탈'),(0,6,1,200,10,109,'2023-10-05 05:20:44.834925',NULL,'“말하기에 자신이 생기면 인생이 바뀝니다!” 명확하고 똑 부러진 말투로 KBS 간판 아나운서로서 활약했던 한석준 아나운서의 스피치 책이 출간되었다. 수천 명의 수강생이 열광한 스피치 코치이자 24년 차 아나운서로 맹활약 중인 그는 “처음부터 말을 잘하는 사람은 없다”면서, 일상에서 말을 잘하고 싶은 일반 대중을 위한 스피치 노하우가 담긴 《한석준의 말하기 수업》을 펴냈다.\n\n중요한 면접부터 회사에서 본인의 성과를 드러내야 할 때, 동료들과 의견을 나누면서 일을 추진해나가야 할 때, 처음 만난 사람에게 나를 소개할 때 등 다양한 상황에서 곧바로 적용할 수 있는 노하우를 이 책에서 낱낱이 소개한다.','QmcxqtiKjv5tnMorpbjbsHYzsCbg9cqG2czzp7deK3jZin','https://bangle.s3.ap-northeast-2.amazonaws.com/72218916-b02f-4b56-9523-4639a2be2958.png','자기계발','단독자'),(0,7,1,200,1,110,'2023-10-05 05:21:02.699755',NULL,'이 시대 최고의 카운슬러이자 행동변화 전문가인 토니 로빈스. 금연, 다이어트에서부터 자기 혁신과 사회적 성공까지. 삶의 주체가 되어 분명한 목표를 세우고 성공 신화를 창조하는 근본적인 방법을 배울 수 있다.','QmSZezMr2bbSPVGCq3LcNTXfyjMkBB5d8ysWDNAk2HYo8d','https://bangle.s3.ap-northeast-2.amazonaws.com/155372bf-f299-4b88-8a5d-94b06b569edb.png','자기계발','미라클 모닝 도전기'),(0,5,1,200,10,111,'2023-10-05 05:21:24.160560',NULL,'쭈리의 싸피탈출 이야기\n좌충우돌 쭈리가 간다\n','Qmcn28bf9ihg1mPmVyeiXWGjR6FYU3tCcPagKs7gu9K1Q3','https://bangle.s3.ap-northeast-2.amazonaws.com/d793b950-ae60-4c8e-863d-becc2c93a11c.png','자기계발','안녕히 계세요 여러분'),(0,6,1,200,14,112,'2023-10-05 05:24:13.987366',NULL,'그림을 전혀 그려보지 않은 ‘완전 초보’들이 믿고 수강한 그 강의. 쉽고 자세한 설명으로 클래스101의 드로잉 대표 클래스로 자리매김한 ‘리니의 펜 드로잉’이 책으로 출간됐다. 저자인 리니(이채린) 작가는, 펜과 종이만 있으면 누구나 혼자서 가볍게 시작할 수 있는 펜 드로잉을 더 많은 사람이 쉽고 재미있게 시작하기 바라는 마음을 담아 이 책을 집필했다.\n\n특히 이 책은 평소 열심히 그린 그림들이 어딘가 모르게 어색하다고 느꼈던 분에게 강력 추천한다. 그림이 어색해지는 이유는 대부분 드로잉 기초를 모르고 그렸기 때문인 경우가 많은데, 이 책에는 평면·입체 도형화, 비율과 기울기 잡기, 빛과 그림자, 투시법 등 그림 그릴 때 알아둬야 할 꼭 필요한 드로잉 기초 이론이 자세하지만 이해하기 쉽게 소개되어 있다. 리니가 알려주는 드로잉 기초 이론만 알면 누구나 사물, 풍경, 인체 그 무엇이든 더 자연스럽게 그릴 수 있을 것이다.\n\n<리니의 펜 드로잉 클래스>는 완전 기초부터 난도 높은 풍경 드로잉까지 하나하나 배울 수 있게 도와주는 가장 친절한 어반 드로잉 입문서다. 어반 드로잉을 처음 시작하는 초심자는 물론이고 수준을 높이고 싶은 중급자에게 꼭 필요한 노하우를 알차게 담았다.\n\n리니 만의 섬세한 펜 드로잉 스타일을 살린 어반 드로잉 소재(자연물, 창문, 가로등, 건물, 자동차, 인물 등)와 장면 및 풍경 표현법 50여 가지가 수록되어 있으며, 과정도 매우 상세히 실어 초보자도 부담 없이 그대로 따라 하면 완성할 수 있도록 했다. 이 책을 통해 그동안 잊고 지냈던, 혹은 수백 번 도전하려고 마음만 먹었던 ‘그림 그리기’를 차근차근 시작해 보자.','QmYvk2UMNACh3BWL2NRF2k1YsXP3HrCnWpvrhipjH136jj','https://bangle.s3.ap-northeast-2.amazonaws.com/087bb1c3-566a-4db7-bab5-f46a8e0261d1.png','취미','혼자 공부하는 공구 사용법'),(0,7,1,200,14,113,'2023-10-05 05:24:35.922004',NULL,'공항, 크루즈, 박물관, 경찰서 등 유럽 곳곳에서 의문의 사건이 발생했다. 뭔가 미심쩍은 자살부터 불운한 사고, 기묘한 미스터리까지 각기 다른 12개의 사건 현장이 당신을 기다린다. 천재 크리에이터 모데스토 가르시아가 기획한 이 책은 독특한 창의성과 놀라운 상상력으로 독자들을 추리 소설의 주인공으로 만든다.\n\n이제 당신은 직접 현장을 조사하면서 상상을 뛰어넘는 반전과 막장이 숨겨진 사건의 진실을 파헤쳐야 한다. 어쩌면 가장 사소해 보이는 것이 가장 중요한 단서일 수도 있다. 오직 눈으로 관찰하고 치열한 두뇌 추론으로 스스로 이야기를 풀어나가자.','QmYSpZWpMnYyNWc7pZMVTBvkVCKJ1uiDXLHhm3z9kxU5oJ','https://bangle.s3.ap-northeast-2.amazonaws.com/6af2149a-64dc-4a94-9f85-09c450e9af1c.png','취미','페인트 칠하기'),(0,5,1,200,6,114,'2023-10-05 05:24:52.475958',NULL,'공항, 크루즈, 박물관, 경찰서 등 유럽 곳곳에서 의문의 사건이 발생했다. 뭔가 미심쩍은 자살부터 불운한 사고, 기묘한 미스터리까지 각기 다른 12개의 사건 현장이 당신을 기다린다. 천재 크리에이터 모데스토 가르시아가 기획한 이 책은 독특한 창의성과 놀라운 상상력으로 독자들을 추리 소설의 주인공으로 만든다.\n\n이제 당신은 직접 현장을 조사하면서 상상을 뛰어넘는 반전과 막장이 숨겨진 사건의 진실을 파헤쳐야 한다. 어쩌면 가장 사소해 보이는 것이 가장 중요한 단서일 수도 있다. 오직 눈으로 관찰하고 치열한 두뇌 추론으로 스스로 이야기를 풀어나가자.','QmShZ3rxqZP5nWVuufX27ayoSCNRK5MMqV7vWFEy6h1qhu','https://bangle.s3.ap-northeast-2.amazonaws.com/45b54f21-67e8-4820-b439-728a4e6308f9.png','취미','사진 잘찍기'),(0,6,1,200,10,115,'2023-10-05 05:25:12.355780',NULL,'경험들 시리즈 1권. 베르가못, 시더우드, 화이트 머스크. 이런 용어를 향조 또는 노트라고 한다. 하나의 향수에 들어간 여러 향을 구분해서 지칭하는 표현이다. 조 말론의 ‘라임 바질 앤 만다린’에는 만다린, 바질, 그리고 앰버우드 노트가 들어있다. 시트러스, 우디, 애니멀릭, 플로럴 등 대중적이고 향조가 다양한 계열부터 시프레, 마린, 구어망드 등 비교적 낯설게 느껴지실 계열까지 차근차근 살펴본다.','QmShZ3rxqZP5nWVuufX27ayoSCNRK5MMqV7vWFEy6h1qhu','https://bangle.s3.ap-northeast-2.amazonaws.com/c70723a7-0e8b-4172-bf1e-6adce02ffdc2.png','취미','나는 인생을 낚는다'),(0,7,1,200,4,116,'2023-10-05 05:25:24.676564',NULL,'경험들 시리즈 1권. 베르가못, 시더우드, 화이트 머스크. 이런 용어를 향조 또는 노트라고 한다. 하나의 향수에 들어간 여러 향을 구분해서 지칭하는 표현이다. 조 말론의 ‘라임 바질 앤 만다린’에는 만다린, 바질, 그리고 앰버우드 노트가 들어있다. 시트러스, 우디, 애니멀릭, 플로럴 등 대중적이고 향조가 다양한 계열부터 시프레, 마린, 구어망드 등 비교적 낯설게 느껴지실 계열까지 차근차근 살펴본다.','QmUrdAmHfVjHsUiNNdSGrhp1g7RpNkPn1SN8VjwNUNXdiv','https://bangle.s3.ap-northeast-2.amazonaws.com/a9cf3956-798c-4bc8-a629-2df12ab46781.png','취미','배낭 여행'),(0,5,1,200,5,117,'2023-10-05 05:25:46.108208',NULL,'책을 기획하고 디자인하는 과정부터 인쇄, 판매로 이어지는 유통 과정까지 다 담았다. 가장 먼저 책 디자인의 콘셉트를 잡고 레이아웃을 구성해 보는 실습과 함께 판형, 서체, 배색 등 편집 디자인의 기본 원리를 소개한다. 이어서 에세이, 소설과 같이 글 중심의 내지 디자인과 실용서, 그림책 등 이미지 중심의 내지 디자인을 장르별로 만들어 보고, 책의 분위기에 맞으면서 독자의 눈을 사로잡을 수 있는 표지 디자인도 따라 만들어 볼 수 있다.\n\n저자가 된 자신의 모습을 상상하며 명함을 만들어 보는 방법도 준비했다. 디자인한 파일을 실물 책으로 변환해서 인쇄를 넘기는 과정도 소개한다. 책을 인쇄할 용지와 후가공의 종류, 제본 정보 등을 안내하고 인쇄 사고를 방지하기 위한 체크리스트를 정리해 두었다. 이뿐만 아니라 전자책으로 출간하려면 어떤 것을 고려하고 수정하는 것이 좋은지까지 알려 준다.\n','QmPPtrN8Hz7TcScZdYG8Aj2ajdUUDJnobWkC7PwRr4UTye','https://bangle.s3.ap-northeast-2.amazonaws.com/0f7a7d83-ecfa-4b29-89df-e82f102bed6e.png','취미','뜨개질 배우기'),(0,6,1,200,6,118,'2023-10-05 05:25:59.337128',NULL,'책을 기획하고 디자인하는 과정부터 인쇄, 판매로 이어지는 유통 과정까지 다 담았다. 가장 먼저 책 디자인의 콘셉트를 잡고 레이아웃을 구성해 보는 실습과 함께 판형, 서체, 배색 등 편집 디자인의 기본 원리를 소개한다. 이어서 에세이, 소설과 같이 글 중심의 내지 디자인과 실용서, 그림책 등 이미지 중심의 내지 디자인을 장르별로 만들어 보고, 책의 분위기에 맞으면서 독자의 눈을 사로잡을 수 있는 표지 디자인도 따라 만들어 볼 수 있다.\n\n저자가 된 자신의 모습을 상상하며 명함을 만들어 보는 방법도 준비했다. 디자인한 파일을 실물 책으로 변환해서 인쇄를 넘기는 과정도 소개한다. 책을 인쇄할 용지와 후가공의 종류, 제본 정보 등을 안내하고 인쇄 사고를 방지하기 위한 체크리스트를 정리해 두었다. 이뿐만 아니라 전자책으로 출간하려면 어떤 것을 고려하고 수정하는 것이 좋은지까지 알려 준다.\n','QmfPjA5rBquz8fe2x2GG6Sc8LKtUNy48eZ1uFh1ztkVYNK','https://bangle.s3.ap-northeast-2.amazonaws.com/37afc200-3521-45b4-a9ed-b871311e57f2.png','취미','순간의 기쁨을 담아드립니다'),(0,7,1,200,14,119,'2023-10-05 05:26:19.318673',NULL,'크툴루의 부름은 H.P. 러브크래프트의 세계를 다루는 테이블 롤플레잉 게임이다. 크툴루의 부름에는 비밀, 수수께끼, 공포가 가득하다. 여러분은 용감한 탐사자가 되어 기이하고 위험한 곳들을 가고, 흉악한 음모를 밝혀내고, 크툴루 신화의 공포들에 맞선다.\n\n이 책은 핵심 룰, 배경 정보, 지침, 주문, 괴물이 담긴 수호자 룰북이다. 다른 플레이어들에게 모험을 제시할 비밀지식의 수호자 (수호자)가 사용하게 되어 있다. 이 책이 적어도 한 권은 있어야 크툴루의 부름을 플레이할 수 있다. 다른 플레이어들, 즉 탐사자들은 탐사자 핸드북을 한 권 이상 갖고 있을 것을 권한다. 탐사자 핸드북에는 캐릭터 제작, 기능, 직업, 장비 등등에 관한 추가 자료가 포함되어 있다.','QmfPjA5rBquz8fe2x2GG6Sc8LKtUNy48eZ1uFh1ztkVYNK','https://bangle.s3.ap-northeast-2.amazonaws.com/6e72270d-671d-4fb9-9e85-77bc3ff685ee.png','취미','등등'),(5,5,1,200,14,120,'2023-10-05 05:26:37.664768',NULL,'대한민국 최정상 타로마스터이자 한국소울타로협회 회장인 정회도 타로마스터가 자신의 업력과 내공을 오롯이 담아 집필한 타로카드 입문서이다. 타로카드에 문외한인 사람도 이 책의 내용을 따라 읽다 보면 자연스레 타로카드의 원리를 이해할 수 있도록 체계적으로 구성됐다.\n\n타로카드의 역사에서부터 78장의 메이저카드와 마이너카드가 지닌 의미, 카드 배열법과 해석 예시 등 가장 기초적인 지식부터 심화 해석 비법에 이르는 정보들이 꼼꼼하게 정리되어 있다. 이 책을 처음부터 끝까지 정독한 후 저자의 조언에 따라 상담 연습을 꾸준히 하다 보면 어느 순간 자신의 운명을 스스로 볼 줄 알게 되는 수준을 넘어 다른 사람의 운명도 봐줄 수 있는 안목과 혜안이 생길 것이다.','QmQ7jYny9aiyLCGXMTe1sDe8qgqCywoDHKmVorkSnpi3YA','https://bangle.s3.ap-northeast-2.amazonaws.com/145b3cbc-882e-4998-86a7-9d27bdf8f5bd.png','취미','오리발 착용법'),(0,7,1,200,5,122,'2023-10-05 05:27:13.107200',NULL,'탐사자 역할을 맡은 플레이어들을 위한 책. 플레이어 캐릭터를 만드는 확장 룰이 들어 있다. 100가지가 넘는 직업, 기능 설명, 플레이에서 최대한 많은 것을 얻는 방법 등이 나와 있다. 탐사자들이 속할 수 있는 조직에 관한 설명, 크툴루의 부름의 기본 배경인 1920년대 미국에 관한 상세 정보, 현대와 20년대의 장비와 무기에 관한 자료도 들어 있다. 또한 선배 탐사자들이 보내는 팁과 조언도 마련되어 있다.','QmUVBAVTpWHJJwY9SAnM3dfnbRdgntNg3UScCW1hc6Ss6g','https://bangle.s3.ap-northeast-2.amazonaws.com/3daa2cfc-9f71-4092-aacb-0586c5cbb2ec.png','취미','뜨개질도 한 걸음 부터'),(0,5,1,200,14,123,'2023-10-05 05:27:35.859461',NULL,'10권의 책을 펴낸 작가, 출판 편집자이자, 1000여 명의 수강생을 만난 글쓰기 강사로 지내며 쌓은 글쓰기 노하우 집합서이다. 작가의 삶을 바탕으로 오래 쓰기 위해서는 무엇이 필요한지, 편집자의 시선으로 잘 읽히는 글은 무엇인지, 강사의 경험으로 글을 쓸 때 겪는 실제적인 어려움은 무엇인지. 끊임없는 물음을 던지며 해답을 찾아갔다.\n\n에세이를 처음 쓰기로 결심한 이들을 위해 에세이란 무엇인지, 에세이를 쓰는 하나의 흐름, 쓰고 난 후 점검할 사항 등을 담았다. 더 나아가 취미 혹은 직업으로 글을 쓰고 있는 이들의 안전하고 즐거운 쓰기 생활을 위해 슬럼프를 안전하게 다루는 방법과 쓰는 삶에 대한 진솔한 이야기를 담았다.','QmUFmvCj7NyYPyK98GTwfgyqf581teDWDVbTGt4SEQCBNy','https://bangle.s3.ap-northeast-2.amazonaws.com/39bdc214-76ea-41d9-8bf2-57eba886fa55.png','취미','설산의 꼭대기에서 활강하는 방법'),(0,5,1,200,4,124,'2023-10-05 08:23:56.559937',NULL,'우리는 집중하지 못하고 산만해지는 것이 흔히 스마트폰과 같은 디지털 기기에 대해 자제력을 발휘하지 못하는 개인의 실패라고 생각한다. 그러나 그렇지 않다. 저자는 현재 우리가 겪고 있는 집중력 문제가 현대 사회의 비만율의 증가와 유사하다고 설명한다. 정크푸드를 중심으로 한 식품 공급 체계와 생활 방식의 변화가 비만율 증가를 만든 것처럼, 집중력 위기의 광범위한 증가도 현대 사회 시스템이 만들어낸 유행병과 같다는 것이다.\n\n이 과정에서 저자는 인간의 주의력을 빼앗는 꼼수를 발견한 실리콘밸리의 반체제 인사, 강아지에게 ADHD를 진단한 수의사, 심각한 집중력 위기에 빠진 리우의 빈민가, 놀라운 방식으로 노동자들의 집중력을 회복한 뉴질랜드의 한 회사까지 종횡무진한다. 그리고 이러한 광범위한 집중력 위기에 수면의 부족, 독서의 붕괴, 테크 기업들의 주의력 조종과 약탈 등 12가지 원인이 작용한다는 것을 발견한다.','QmQUGaTaEnQT9sJbh2eBPbEx1Vb6B94GqTiPCu2f9GUfVA','https://bangle.s3.ap-northeast-2.amazonaws.com/09bcc480-8e07-4655-ae5f-0980238575b8.png','일반','인문학 산책'),(0,5,1,200,4,125,'2023-10-05 08:28:03.304393',NULL,'우리는 집중하지 못하고 산만해지는 것이 흔히 스마트폰과 같은 디지털 기기에 대해 자제력을 발휘하지 못하는 개인의 실패라고 생각한다. 그러나 그렇지 않다. 저자는 현재 우리가 겪고 있는 집중력 문제가 현대 사회의 비만율의 증가와 유사하다고 설명한다. 정크푸드를 중심으로 한 식품 공급 체계와 생활 방식의 변화가 비만율 증가를 만든 것처럼, 집중력 위기의 광범위한 증가도 현대 사회 시스템이 만들어낸 유행병과 같다는 것이다.\n\n이 과정에서 저자는 인간의 주의력을 빼앗는 꼼수를 발견한 실리콘밸리의 반체제 인사, 강아지에게 ADHD를 진단한 수의사, 심각한 집중력 위기에 빠진 리우의 빈민가, 놀라운 방식으로 노동자들의 집중력을 회복한 뉴질랜드의 한 회사까지 종횡무진한다. 그리고 이러한 광범위한 집중력 위기에 수면의 부족, 독서의 붕괴, 테크 기업들의 주의력 조종과 약탈 등 12가지 원인이 작용한다는 것을 발견한다.','QmQUGaTaEnQT9sJbh2eBPbEx1Vb6B94GqTiPCu2f9GUfVA','https://bangle.s3.ap-northeast-2.amazonaws.com/f5dfedd7-e4d1-4239-8b80-09bace23d25f.png','건강','내 안에 거인이 있다'),(0,0,0,200,6,126,'2023-10-05 08:39:56.548863',NULL,'1','QmepvD5W7BoHfyvR1s4zSMk97U6gSDghcCGbQxyYi2QhZs','https://bangle.s3.ap-northeast-2.amazonaws.com/135546be-1559-46cf-a612-af871d9284a2.png','일반','123');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookmark`
--

DROP TABLE IF EXISTS `bookmark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookmark` (
  `page` int NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `order_book_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpats1pfio9ecmgg1ktqf4evdv` (`order_book_id`),
  CONSTRAINT `FKpats1pfio9ecmgg1ktqf4evdv` FOREIGN KEY (`order_book_id`) REFERENCES `order_book` (`order_book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookmark`
--

LOCK TABLES `bookmark` WRITE;
/*!40000 ALTER TABLE `bookmark` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookmark` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookshelf`
--

DROP TABLE IF EXISTS `bookshelf`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookshelf` (
  `read_pages` int DEFAULT NULL,
  `book_id` bigint DEFAULT NULL,
  `bookshelf_id` bigint NOT NULL AUTO_INCREMENT,
  `created_time` datetime(6) DEFAULT NULL,
  `latest_time` datetime(6) DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `order_status` enum('BUY','RENT') DEFAULT NULL,
  `epub_cfi` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`bookshelf_id`),
  KEY `FKg9fjuh3yp4mdxxp6dga60gorv` (`book_id`),
  KEY `FKo5unf2diy86jonydekqc2au1l` (`member_id`),
  CONSTRAINT `FKg9fjuh3yp4mdxxp6dga60gorv` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `FKo5unf2diy86jonydekqc2au1l` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookshelf`
--

LOCK TABLES `bookshelf` WRITE;
/*!40000 ALTER TABLE `bookshelf` DISABLE KEYS */;
INSERT INTO `bookshelf` VALUES (0,2,2,'2023-10-04 03:58:38.303957','2023-10-05 08:14:02.599846',6,'QmU65x18YSNT5NAEoSyhYFTwuGdrB7G6WZw2nZLB1PNV2T','BUY',NULL),(0,1,3,'2023-10-04 04:14:56.465538','2023-10-04 04:14:56.465543',6,'QmXCHh2ppem7oZCYp2CuxxBzB6pkcg2YdhrVMrhzymZbD9','BUY',NULL),(608,1,4,'2023-10-04 06:38:57.888969','2023-10-05 13:53:58.543083',1,'QmaJVBxw5CRFqieHhe4EUdt3FutiH154gNh3C5yRMxZuRY','BUY','epubcfi(/6/278!/4/2/104/1:178)'),(0,5,6,'2023-10-05 06:07:01.030033','2023-10-05 06:07:01.030037',11,'Qmb9BdcPGFVhqsohUo6gMfgC73dcV3gLNd7tEircKKfXfQ','BUY',NULL),(0,1,7,'2023-10-05 06:10:19.816260','2023-10-05 06:10:19.816262',11,'QmQpDmVXhBfer3oNeuTEqPeGo75TEiNQQ59SSM5cerXPhh','BUY',NULL),(0,123,8,'2023-10-05 06:48:20.589702','2023-10-05 15:47:24.844041',5,'QmUwDorqRYuHyLBdvqcNubq6R74dkagKWuPWaGjP8P5cAy','BUY',NULL),(0,4,9,'2023-10-05 07:09:44.858458','2023-10-05 07:09:44.858465',3,'QmaYze7BfyxdgGk8Xp3A8QpFn8VERcwyYmfLxG82LFCprY','BUY',NULL),(0,5,10,'2023-10-05 07:44:05.441833','2023-10-05 07:44:05.441838',3,'QmNp9djZB6sESmq5KWPBYJB9XTWMvVXV5SFcUUGCBV1kbT','BUY',NULL),(86,20,11,'2023-10-05 08:09:10.684245','2023-10-05 14:21:31.142259',1,'QmcnAtFsvweWBiqc1KtLvmmZ7Xiu5dkmKpjPeNmhscD2Pq','BUY','epubcfi(/6/14!/4/36/1:496)'),(154,30,12,'2023-10-05 08:25:01.336611','2023-10-05 14:20:00.050036',1,'QmcnAtFsvweWBiqc1KtLvmmZ7Xiu5dkmKpjPeNmhscD2Pq','BUY','epubcfi(/6/48!/4/76/1:166)'),(0,6,14,'2023-10-05 08:37:27.477112','2023-10-05 08:37:27.477117',3,'QmaaSGZXAdoPVTwAzjeGWpRbssjitP8S7Xpj3iChJojgrm','BUY',NULL),(0,5,15,'2023-10-05 08:37:41.731562','2023-10-05 08:37:41.731567',6,'Qmb4fc2E3sSRpitwebDR4iKGwfBWJRgsXh4bJG69YVE2bV','BUY',NULL),(0,7,16,'2023-10-05 08:40:32.676888','2023-10-05 08:40:32.676894',6,'QmRJicTX53z5KxaBs4SNFiwsnNn2L8w5mPxCASZMDpZrpU','BUY',NULL),(0,15,17,'2023-10-05 09:03:45.093913','2023-10-05 09:03:45.093918',11,'QmUFLqCNfRtXyFgPnQEFc4Zbc9uec9kxqNeRtpyakNsrVz','BUY',NULL),(0,4,18,'2023-10-05 11:11:17.406268','2023-10-05 11:11:17.406273',6,'QmXCHh2ppem7oZCYp2CuxxBzB6pkcg2YdhrVMrhzymZbD9','BUY',NULL),(0,6,19,'2023-10-05 11:14:10.740953','2023-10-05 11:14:10.740959',6,'QmVrQXTM8RnFAmiR14M6hHqHjr42kLnGErXiy2NEA9FnBq','BUY',NULL),(0,9,20,'2023-10-05 11:18:52.622746','2023-10-05 11:18:52.622752',6,'QmTdmmgBGmGGBqasoCYhKJrtXKN1fk8axhFmdsczmyZnqU','BUY',NULL),(0,13,21,'2023-10-05 11:28:33.346435','2023-10-05 11:28:33.346441',6,'QmZCzbsF8TV9tcw2KWG1Yry1sPnKofxAJdVpCoXeVKgnCZ','BUY',NULL),(0,19,22,'2023-10-05 11:29:49.632925','2023-10-05 11:29:49.632927',6,'QmWJ31egwnerhEGSgdLrNef5a58BkH7qYinxYjmzgmJj1J','BUY',NULL),(0,12,23,'2023-10-05 13:32:52.001406','2023-10-05 13:32:52.001414',3,'QmUbGyisSFDJSk5AUpBDzgsSWjVpQoGdwohwm9U6jYUncS','BUY',NULL),(84,10,24,'2023-10-05 14:02:46.867225','2023-10-05 14:21:15.245313',1,'QmS8NtTyARCX3TZTJrueujL3DRSA2Dn8GMBaTYdGeWjYwS','BUY','epubcfi(/6/6!/4/540/1:78)'),(0,29,25,'2023-10-05 14:17:51.266944','2023-10-05 14:17:51.266949',6,'QmfVuZrLoiZvqX9jQ3dAnWcUVXCmtLzUP3H4W341gWRV3L','BUY',NULL),(0,86,27,'2023-10-05 14:23:10.738568','2023-10-05 14:23:10.738572',11,'QmYoHQgfAPnpfeMQjW6kHuZk9GhYwy6V9Bid1cFPC7ss7r','BUY',NULL),(0,86,28,'2023-10-05 14:25:15.717855','2023-10-05 14:25:15.717863',11,'QmYoHQgfAPnpfeMQjW6kHuZk9GhYwy6V9Bid1cFPC7ss7r','BUY',NULL),(0,99,29,'2023-10-05 14:42:36.225364','2023-10-05 14:42:36.225427',11,'QmdLVSQwNS3SPbYUWDkt1qHmAxDChQENtLxAhFrywcXmTF','BUY',NULL),(34,94,30,'2023-10-05 14:42:55.953994','2023-10-05 15:47:19.222982',11,'Qmd4gpGbey9kiTZoiURUHakrAq5oVDcyh2dQXYSu8kktXX','BUY','epubcfi(/6/10!/4/60/1:733)'),(0,120,31,'2023-10-05 14:48:50.574241','2023-10-05 14:48:50.574243',1,'QmU4xJsJTUAFwCV8JqntAgR7XUco9dDkn2Fkujp865SqGi','BUY',NULL),(110,106,32,'2023-10-05 14:53:59.427414','2023-10-06 00:34:35.479755',16,'QmfZstEgahBumCoWNBy6DNZpaFJdi2JNrA9GFj8Mk6MaSs','BUY','epubcfi(/6/42!/4/34/1:498)'),(0,110,33,'2023-10-05 14:59:13.812954','2023-10-05 14:59:22.422569',16,'QmUAQNJwPNkuYM6zXEfmFJiBmmB7tPYzPgSeBFYhJ5sdzY','BUY',NULL),(0,32,34,'2023-10-05 15:05:59.163234','2023-10-05 15:05:59.163241',1,'Qmb9H5qT5FW8jAXxYwGKS4bH2JV9NpRzD69CSSDjKw3WXN','BUY',NULL),(0,32,35,'2023-10-05 15:07:04.838855','2023-10-05 16:10:51.553991',5,'Qmd6b4uvBwmNQrBs2FEhc5uZEQnxdwuGUBabDH1SfiYhvK','BUY','epubcfi(/6/4!/4/100/1:26)'),(22,32,36,'2023-10-05 15:07:08.864462','2023-10-05 15:46:54.395129',16,'Qmcxu7Xjh7Atu2M9VhzuQERp8dpWpvMgG86KuWDYaU3dwh','BUY','epubcfi(/6/12!/4/12/1:416)'),(0,93,37,'2023-10-05 15:21:02.442590','2023-10-05 15:21:02.442595',16,'QmR511b6YXSwsiYiK8YwXbaYYcaPrCjEmqZW253sH2uu1e','BUY',NULL),(0,1,38,'2023-10-05 15:40:41.487740','2023-10-05 15:40:41.487744',16,'QmTJDXFMxt4RvvofSoNhiTU1UHwHLim35he6PzgZm2Rfzo','BUY',NULL),(0,33,49,'2023-10-05 15:42:03.440616','2023-10-05 15:42:03.440620',16,'QmQE5h52BFn4P7t3yq8Rdtg1A9gjZa9V4LvTM6kKHgxD3P','BUY',NULL),(106,26,60,'2023-10-05 15:44:39.612268','2023-10-05 17:06:52.533834',16,'QmRN5gdtknS7LmTHLSohgdCV8E3XEd3jBzDundz9DCk7pE','BUY','epubcfi(/6/48!/4/2[chapter-16]/4[chapter-16-text]/122/1:148)'),(0,31,65,'2023-10-05 15:48:40.005539','2023-10-05 15:48:40.005545',1,'QmYWwhpX2SHwBkmwpqQZUzvRGSL2HQcXJBaEXAETp8BZHR','BUY',NULL),(32,109,68,'2023-10-05 15:50:49.050050','2023-10-05 15:54:02.142923',17,'QmTk87PJakTR1eLyhqfWmf7qEp9vcWZFs2haLCDV5rwou7','BUY','epubcfi(/6/10!/4/104/1:360)'),(500,111,77,'2023-10-05 15:56:18.488902','2023-10-05 15:58:16.263857',17,'QmX7jhKGERbddgzhsLbanLAyapHd3PUHz98z8x8S349HGB','BUY','epubcfi(/6/10!/4/3296/1:74)'),(0,8,78,'2023-10-05 16:03:36.353999','2023-10-05 16:03:36.354004',6,'QmUkL4gt6vKpNKfXAeZ67YWZmDtbrHvtu5QjpVAaEpEEv2','BUY',NULL),(0,18,79,'2023-10-05 16:03:36.363203','2023-10-05 16:03:36.363207',6,'QmcT1PmHGacKXX7biicHuur2kVTTHzB1fS1yhDHNfEYhQs','BUY',NULL),(0,20,80,'2023-10-05 16:04:03.929249','2023-10-05 16:04:03.929252',6,'QmVGeoXJ3HL5kJAVnrD1NoPRjECWA4vdwAzMsJ1wetyZ2u','BUY',NULL),(0,14,81,'2023-10-05 16:04:18.875461','2023-10-05 16:04:18.875466',6,'QmZgi3XmsXKLdf49vwZ55EuWZ8F8wT8YM1i9Sv3aDS2AkD','BUY',NULL),(86,63,82,'2023-10-05 16:04:18.880291','2023-10-05 16:10:24.432069',6,'QmPQYcMfzY2M1A8QnYgQd165cWsVFCJ9M6nqWMJumiDuct','BUY','epubcfi(/6/6!/4/26/1:233)'),(2,68,83,'2023-10-05 16:04:59.136339','2023-10-05 16:06:43.029856',17,'QmTPvnoXZQGMYuutPa7YbDjCdJT9h4rdsEFny6mbZC5g2d','BUY','epubcfi(/6/4!/4/4/1:19)'),(0,110,84,'2023-10-05 16:04:59.141162','2023-10-05 16:04:59.141167',17,'QmdtoG4cS3L29pJT2YgkU8Jpd8E6pHvLss7rCGdrcPaWTE','BUY',NULL),(0,34,85,'2023-10-05 16:06:27.892631','2023-10-05 16:06:27.892635',16,'QmX7rs96mjCJmQtgQveYedXC36EYHXDYpQEQU2dDUmumB2','BUY',NULL),(50,41,86,'2023-10-05 16:06:27.897036','2023-10-05 17:06:22.564626',16,'QmRmQu2aYyD1taTjmhWPgXbUnbTAiHGcMwi2PE2ptm8L1Y','BUY','epubcfi(/6/4!/4/1874/1:84)'),(96,94,87,'2023-10-05 16:06:27.900938','2023-10-05 17:06:39.577752',16,'Qmb2UjzKYdRMtYYZBfNUkfDaHQKxocUKRnt7E1rT9PmnnC','BUY','epubcfi(/6/36!/4/20/1:245)'),(0,45,88,'2023-10-05 16:06:52.218091','2023-10-05 16:06:52.218096',16,'QmcJYohW6UyDG1ZqGqyyipRE3ziEVr8Y1Xuhu5dd1Y7uig','BUY',NULL),(68,107,89,'2023-10-05 16:06:52.222446','2023-10-05 17:05:27.020678',16,'QmUAQNJwPNkuYM6zXEfmFJiBmmB7tPYzPgSeBFYhJ5sdzY','BUY','epubcfi(/6/6!/4/64/3:27)'),(0,15,90,'2023-10-05 16:46:58.698503','2023-10-05 16:46:58.698515',6,'QmfVuZrLoiZvqX9jQ3dAnWcUVXCmtLzUP3H4W341gWRV3L','BUY',NULL),(4,22,91,'2023-10-05 17:04:48.413482','2023-10-05 17:10:08.306243',16,'Qmb2UjzKYdRMtYYZBfNUkfDaHQKxocUKRnt7E1rT9PmnnC','BUY','epubcfi(/6/6!/4/28/1:467)'),(0,5,92,'2023-10-06 00:30:58.065996','2023-10-06 00:30:58.066001',1,'QmbY8yxEWkhBDmHaEg71qg5cc81jSB7rWd8LmzSGj7pYtn','BUY',NULL),(0,4,93,'2023-10-06 00:33:24.698223','2023-10-06 00:33:24.698228',16,'QmTJDXFMxt4RvvofSoNhiTU1UHwHLim35he6PzgZm2Rfzo','RENT',NULL),(20,12,94,'2023-10-06 00:48:19.505801','2023-10-06 00:49:03.225915',12,'QmPouNnMgqUA9mWihaAfDD415bcAohYyyBq6Zfuh6gt5GG','BUY','epubcfi(/6/6!/4/46/1:191)'),(200,49,95,'2023-10-06 01:37:26.718637','2023-10-06 01:43:58.749323',18,'QmdFwRsQ3iZar5pcbH6aCdzm9TDmQZR3qE9ejA3vgQ28WV','BUY','epubcfi(/6/52!/4/110/1:536)'),(0,36,96,'2023-10-06 01:38:17.159243','2023-10-06 01:38:17.159248',18,'QmQ2vwgjweeQ7JL6gmaxgYmJ1z7nnu2mpivstWvTWa78ng','BUY',NULL),(0,99,97,'2023-10-06 01:47:07.174609','2023-10-06 01:47:07.174615',16,'QmPtUg4PpmUasgEHaS6LukFBYmaRXye2VbeuiAFqazwzoV','BUY',NULL);
/*!40000 ALTER TABLE `bookshelf` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-09-26 06:18:32.736496'),(2,'auth','0001_initial','2023-09-26 06:18:33.649645'),(3,'admin','0001_initial','2023-09-26 06:18:33.862602'),(4,'admin','0002_logentry_remove_auto_add','2023-09-26 06:18:33.886995'),(5,'admin','0003_logentry_add_action_flag_choices','2023-09-26 06:18:33.911007'),(6,'contenttypes','0002_remove_content_type_name','2023-09-26 06:18:34.068590'),(7,'auth','0002_alter_permission_name_max_length','2023-09-26 06:18:34.164289'),(8,'auth','0003_alter_user_email_max_length','2023-09-26 06:18:34.222083'),(9,'auth','0004_alter_user_username_opts','2023-09-26 06:18:34.261737'),(10,'auth','0005_alter_user_last_login_null','2023-09-26 06:18:34.364806'),(11,'auth','0006_require_contenttypes_0002','2023-09-26 06:18:34.391476'),(12,'auth','0007_alter_validators_add_error_messages','2023-09-26 06:18:34.416042'),(13,'auth','0008_alter_user_username_max_length','2023-09-26 06:18:34.520028'),(14,'auth','0009_alter_user_last_name_max_length','2023-09-26 06:18:34.607966'),(15,'auth','0010_alter_group_name_max_length','2023-09-26 06:18:34.654965'),(16,'auth','0011_update_proxy_permissions','2023-09-26 06:18:34.698668'),(17,'auth','0012_alter_user_first_name_max_length','2023-09-26 06:18:34.786686'),(18,'sessions','0001_initial','2023-09-26 06:18:34.871533');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follow` (
  `delete_follow` tinyint(1) NOT NULL,
  `author_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcr2qyg8ul7bdsg6d2wlqeu8bi` (`author_id`),
  KEY `FKla8lvflaauks5sw7s0u44q6x0` (`member_id`),
  CONSTRAINT `FKcr2qyg8ul7bdsg6d2wlqeu8bi` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  CONSTRAINT `FKla8lvflaauks5sw7s0u44q6x0` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (0,1,2,1),(0,4,4,1),(0,4,9,11),(0,10,11,16),(0,6,12,5),(1,14,13,16),(0,4,14,16),(0,4,15,18),(0,1,16,16);
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interest`
--

DROP TABLE IF EXISTS `interest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interest` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `interest` varchar(255) DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_user_id` (`member_id`),
  CONSTRAINT `FKmejotk04k93xwh9v101agbduv` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interest`
--

LOCK TABLES `interest` WRITE;
/*!40000 ALTER TABLE `interest` DISABLE KEYS */;
INSERT INTO `interest` VALUES (1,'로맨스',6),(2,'소설',6),(3,'취미',11),(4,'소설',11),(5,'인문',11),(6,'SF',12),(7,'자기계발',13),(8,'자기계발',3),(9,'경제',3),(10,'SF',3),(14,'SF',5),(15,'취미',5),(16,'자기계발',5),(17,'인문',16),(18,'자기계발',16),(19,'로맨스',16),(20,'경제',17),(21,'자기계발',17),(22,'취미',17),(23,'어학',17),(24,'인문',18),(25,'자기계발',18),(26,'로맨스',18),(27,'소설',18),(28,'여행',18),(29,'어학',18),(30,'취미',18),(31,'경제',18),(32,'건강',18),(33,'SF',18);
/*!40000 ALTER TABLE `interest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `dust` int NOT NULL,
  `member_id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `public_key` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`member_id`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_nickname` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (259,1,'hunn000@gmail.com','김동훈','KAKAO','eef1b01f3633c35187dc97eb1fe01f9a2484ec1f5c1eff1b7e8f037d5d143295ce932924a76ca2fcbd1e1233ecae15e2cd2304908f3be1bb056cb89912860633','ROLE_AUTHOR','3010222304'),(1123,3,'jegonschiele@kakao.com','홍재연','KAKAO','ba76c9275d206f27c6f5c192c04702d6b3279e627b65a4f7d616d10f3ea6709ee2a61218ba3827a87aa4236f0228cad98a8b0813ce246b18c0566fbf908c1363','ROLE_AUTHOR','3019442403'),(2000,5,'dbsdbxkrzz@naver.com','윤유탁','KAKAO','b2c779278c8852969cf7d01a72680c48e442ae4a6303fc0465912224520bff85c347c62d1f8fbf04fc91cd463cad0ee91326f83d9739e5503caccb6175640b3c','ROLE_AUTHOR','3028115990'),(34,6,'gsl0505@naver.com','지상일','KAKAO','2df8506c1331eeb0850a0e359e27509ece3615ee106c79bb191ad18a3e1a485f9a95115a6363a62afcf25454e2a36989d03fddadfab7562d04caac4be0fcc4c7','ROLE_AUTHOR','3007342459'),(361,7,NULL,'섭섭','KAKAO','86844f4b9e4549e82d23ccaf974d2c6a612bacfcb19717413cf6f314370f95ad4f079caa27a57762608d5105ca10b5a3f8c82c75e000d0c2d2dfa184735bc461','ROLE_AUTHOR','3048950815'),(621,8,NULL,'감자칩냠','KAKAO','0972dc5ee496abee2578ecffd471409c412f628383c43a8057d3628b9f7a328539a8451dd78917dd137f422a6bcce94a3ae111fddea799710c4af59f6d491bfb','ROLE_USER','3029037112'),(999,9,NULL,'이거어디까지쓸수있는거에요','KAKAO','6ee5129ac8f208a53a81a2ab7d7148b5f4c99cdb4230026bf65522354f6535d856c7f4f11d5f9fceed839be1ec0ca70d21710c5f54abdf31f47a61bf0a027f4e','ROLE_AUTHOR','3032585952'),(5,11,'dnjswn9178@hanmail.net','조원주','KAKAO','16f6e7b680681e7fb787d2842ce430a1b7fc790d57525f33546cb6236d13a2fd52a8c6133cc5b933d18bf9d77415cfce41b1bc45eb8fe798814b3df7852e6523','ROLE_AUTHOR','3029550228'),(126,12,'yung5487@naver.com','싱글방글','KAKAO','9a2adebbced5479fa92de43ff0756d4af407a4e151d422efc9284eefc0d4ccad541eb86a0bb29945729dd12f309a5e9b43da4f5f4d63d5de976a5c20813f8a6a','ROLE_AUTHOR','3036367817'),(30,13,'crumbled@nate.com','1','KAKAO','4bb0466c8ea80719dc54f3153f92aa4692b4a4f74bbf3fbbce5e6aa13aa5e004068f3c67553442ff141fb46b2fdbbf8648d8058f0f571f5bfa35646fbd7fa622','ROLE_AUTHOR','3050606039'),(0,14,'aspire51@naver.com','권지훈','KAKAO',NULL,'ROLE_USER','3050606415'),(120,15,'prairial6@gmail.com','라프라스','KAKAO','6083a315b4a41b9f03bb9d1d484822ee31852d2c1b12c47779001de5b5cbcac59d1ef132143856360c210850674e9c973accf83221c1960508ac633f0ebb46ed','ROLE_AUTHOR','3050607235'),(52,16,'kys981207@naver.com','김영서','KAKAO','ae1585e7913b5830a13c4d786928cf6f9eaa4694da2ddb0559408fbcf49ae29d49177ce0f4d53a8fe6d8a8ad0232cba359d62c7d6c4730d002a608dbf842f057','ROLE_AUTHOR','3009984184'),(9,17,'dbsdbxkrz@daum.net','유탁탁','KAKAO','3af7ea2aeed777a4437955ed147e9bd948aa42d6f59e9563a5cc7e43fee3db3456793507985f8cd5bb0d611301cd0068b044801436b5c72087314882bedd1b34','ROLE_AUTHOR','3014809927'),(154,18,NULL,'강알리든킨도나쓰','KAKAO','c7bb97d2fed2a02b75ff39f50357d93c9549771b77ce0037c7ef5fd59dfdccaf55f03bae0bb31230efa24dad508d77d2a5cb058698e8350003c1cfcbbf4c34ea','ROLE_USER','3052117674');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nft_address`
--

DROP TABLE IF EXISTS `nft_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nft_address` (
  `book_id` bigint DEFAULT NULL,
  `nft_address_id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nft_address_id`),
  KEY `FKrau0l00p59j3vsjt2n3ljfxs3` (`book_id`),
  CONSTRAINT `FKrau0l00p59j3vsjt2n3ljfxs3` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nft_address`
--

LOCK TABLES `nft_address` WRITE;
/*!40000 ALTER TABLE `nft_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `nft_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_book`
--

DROP TABLE IF EXISTS `order_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_book` (
  `book_id` bigint DEFAULT NULL,
  `order_book_id` bigint NOT NULL AUTO_INCREMENT,
  `order_id` bigint DEFAULT NULL,
  `order_status` enum('BUY','RENT') DEFAULT NULL,
  PRIMARY KEY (`order_book_id`),
  KEY `FK9yvsui1wgflf4dy9q77rsl280` (`book_id`),
  KEY `FKpci06ofdi2x6lbcan47nlhe2y` (`order_id`),
  CONSTRAINT `FK9yvsui1wgflf4dy9q77rsl280` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `FKpci06ofdi2x6lbcan47nlhe2y` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_book`
--

LOCK TABLES `order_book` WRITE;
/*!40000 ALTER TABLE `order_book` DISABLE KEYS */;
INSERT INTO `order_book` VALUES (1,1,1,'BUY'),(2,2,2,'BUY'),(1,3,3,'BUY'),(1,4,4,'BUY'),(5,6,6,'BUY'),(1,7,7,'BUY'),(123,8,8,'BUY'),(4,9,9,'BUY'),(5,10,10,'BUY'),(20,11,11,'BUY'),(30,12,12,'BUY'),(6,14,14,'BUY'),(5,15,15,'BUY'),(7,16,16,'BUY'),(15,17,17,'BUY'),(4,18,18,'BUY'),(6,19,19,'BUY'),(9,20,20,'BUY'),(13,21,21,'BUY'),(19,22,22,'BUY'),(12,23,23,'BUY'),(10,24,24,'BUY'),(29,25,25,'BUY'),(86,27,27,'BUY'),(86,28,28,'BUY'),(99,29,29,'BUY'),(94,30,30,'BUY'),(120,31,31,'BUY'),(106,32,32,'BUY'),(110,33,33,'BUY'),(32,34,34,'BUY'),(32,35,35,'BUY'),(32,36,36,'BUY'),(93,37,37,'BUY'),(1,38,38,'BUY'),(33,49,44,'BUY'),(26,60,50,'BUY'),(31,65,53,'BUY'),(109,68,55,'BUY'),(111,77,60,'BUY'),(8,78,61,'BUY'),(18,79,61,'BUY'),(20,80,62,'BUY'),(14,81,63,'BUY'),(63,82,63,'BUY'),(68,83,64,'BUY'),(110,84,64,'BUY'),(34,85,65,'BUY'),(41,86,65,'BUY'),(94,87,65,'BUY'),(45,88,66,'BUY'),(107,89,66,'BUY'),(15,90,67,'BUY'),(22,91,68,'BUY'),(5,92,69,'BUY'),(4,93,70,'RENT'),(12,94,71,'BUY'),(49,95,72,'BUY'),(36,96,73,'BUY'),(99,97,74,'BUY');
/*!40000 ALTER TABLE `order_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `member_id` bigint DEFAULT NULL,
  `order_id` bigint NOT NULL AUTO_INCREMENT,
  `order_time` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `FKpktxwhj3x9m4gth5ff6bkqgeb` (`member_id`),
  CONSTRAINT `FKpktxwhj3x9m4gth5ff6bkqgeb` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'2023-10-04 01:32:43.795432'),(6,2,'2023-10-04 03:58:38.309813'),(6,3,'2023-10-04 04:14:56.469148'),(1,4,'2023-10-04 06:38:57.897024'),(11,6,'2023-10-05 06:07:01.036321'),(11,7,'2023-10-05 06:10:19.817916'),(5,8,'2023-10-05 06:48:20.599500'),(3,9,'2023-10-05 07:09:44.871795'),(3,10,'2023-10-05 07:44:05.444871'),(1,11,'2023-10-05 08:09:10.692239'),(1,12,'2023-10-05 08:25:01.340009'),(3,14,'2023-10-05 08:37:27.479629'),(6,15,'2023-10-05 08:37:41.734212'),(6,16,'2023-10-05 08:40:32.679092'),(11,17,'2023-10-05 09:03:45.096164'),(6,18,'2023-10-05 11:11:17.408510'),(6,19,'2023-10-05 11:14:10.743494'),(6,20,'2023-10-05 11:18:52.624501'),(6,21,'2023-10-05 11:28:33.976801'),(6,22,'2023-10-05 11:29:49.638599'),(3,23,'2023-10-05 13:32:52.008765'),(1,24,'2023-10-05 14:02:46.874178'),(6,25,'2023-10-05 14:17:51.269794'),(11,27,'2023-10-05 14:23:10.741107'),(11,28,'2023-10-05 14:25:15.720378'),(11,29,'2023-10-05 14:42:36.228068'),(11,30,'2023-10-05 14:42:55.956026'),(1,31,'2023-10-05 14:48:50.576353'),(16,32,'2023-10-05 14:53:59.429626'),(16,33,'2023-10-05 14:59:13.815049'),(1,34,'2023-10-05 15:05:59.947174'),(5,35,'2023-10-05 15:07:04.843308'),(16,36,'2023-10-05 15:07:08.868152'),(16,37,'2023-10-05 15:21:02.445470'),(16,38,'2023-10-05 15:40:41.490525'),(16,44,'2023-10-05 15:42:03.442813'),(16,50,'2023-10-05 15:44:39.614480'),(1,53,'2023-10-05 15:48:40.007682'),(17,55,'2023-10-05 15:50:49.052152'),(17,60,'2023-10-05 15:56:18.491009'),(6,61,'2023-10-05 16:03:36.368881'),(6,62,'2023-10-05 16:04:03.934582'),(6,63,'2023-10-05 16:04:18.884603'),(17,64,'2023-10-05 16:04:59.145133'),(16,65,'2023-10-05 16:06:27.906003'),(16,66,'2023-10-05 16:06:52.226146'),(6,67,'2023-10-05 16:46:58.707510'),(16,68,'2023-10-05 17:04:48.416335'),(1,69,'2023-10-06 00:30:58.073148'),(16,70,'2023-10-06 00:33:24.701428'),(12,71,'2023-10-06 00:48:19.509015'),(18,72,'2023-10-06 01:37:26.721834'),(18,73,'2023-10-06 01:38:17.161433'),(16,74,'2023-10-06 01:47:07.176719');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `amount` int NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  `payment_id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`payment_id`),
  KEY `FK4pswry4r5sx6j57cdeulh1hx8` (`member_id`),
  CONSTRAINT `FK4pswry4r5sx6j57cdeulh1hx8` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (10,'2023-10-04 00:45:50.286000',1,3),(10,'2023-10-04 00:45:52.145000',1,4),(10,'2023-10-04 00:45:56.882000',1,5),(1,'2023-10-04 01:28:45.455000',7,23),(10,'2023-10-04 01:28:48.957000',7,24),(20,'2023-10-04 01:28:51.208000',7,25),(55,'2023-10-04 01:28:53.861000',7,26),(110,'2023-10-04 01:28:55.905000',7,27),(55,'2023-10-04 01:28:57.633000',7,28),(110,'2023-10-04 01:28:59.534000',7,29),(20,'2023-10-04 01:45:25.663000',6,30),(20,'2023-10-04 01:45:28.164000',6,31),(20,'2023-10-04 01:45:30.719000',6,32),(20,'2023-10-04 11:03:18.913000',5,33),(20,'2023-10-04 11:03:21.591000',5,34),(10,'2023-10-04 11:03:25.957000',5,35),(5,'2023-10-04 11:03:27.859000',5,36),(1,'2023-10-04 11:04:41.500000',5,37),(55,'2023-10-04 11:04:47.002000',5,38),(110,'2023-10-04 11:04:49.595000',5,39),(1,'2023-10-04 02:08:14.084000',6,40),(1,'2023-10-04 02:11:50.087000',8,41),(20,'2023-10-04 02:11:52.646000',8,42),(20,'2023-10-04 02:11:53.790000',8,43),(20,'2023-10-04 02:11:54.115000',8,44),(20,'2023-10-04 02:11:54.405000',8,45),(20,'2023-10-04 02:11:54.642000',8,46),(20,'2023-10-04 02:11:54.946000',8,47),(20,'2023-10-04 02:11:59.031000',8,48),(20,'2023-10-04 02:11:59.347000',8,49),(20,'2023-10-04 02:11:59.660000',8,50),(110,'2023-10-04 02:12:24.360000',8,51),(110,'2023-10-04 02:12:27.362000',8,52),(110,'2023-10-04 02:12:28.670000',8,53),(110,'2023-10-04 02:12:29.384000',8,54),(55,'2023-10-04 03:32:08.552000',9,55),(55,'2023-10-04 03:32:18.716000',9,56),(55,'2023-10-04 03:32:45.090000',9,57),(55,'2023-10-04 03:34:09.588000',9,58),(55,'2023-10-04 03:34:12.727000',9,59),(55,'2023-10-04 03:34:24.068000',9,60),(55,'2023-10-04 03:35:40.512000',9,61),(55,'2023-10-04 03:36:05.300000',9,62),(55,'2023-10-04 03:36:43.708000',9,63),(1,'2023-10-04 12:37:40.432000',3,64),(55,'2023-10-04 03:37:51.618000',9,65),(20,'2023-10-04 12:39:02.350000',3,66),(110,'2023-10-04 06:53:16.178000',9,68),(110,'2023-10-04 06:53:18.946000',9,69),(110,'2023-10-04 06:53:19.953000',9,70),(110,'2023-10-04 06:53:20.995000',9,71),(5,'2023-10-04 06:53:23.444000',9,72),(1,'2023-10-04 06:53:25.105000',9,73),(1,'2023-10-04 06:53:25.725000',9,74),(1,'2023-10-04 06:53:26.458000',9,75),(1,'2023-10-04 06:53:27.192000',9,76),(1,'2023-10-04 23:59:25.663000',6,79),(1,'2023-10-05 01:34:53.283000',6,80),(5,'2023-10-05 01:45:47.211000',13,81),(20,'2023-10-05 01:45:47.261000',13,84),(5,'2023-10-05 01:45:47.264000',13,85),(10,'2023-10-05 01:45:47.280000',13,86),(20,'2023-10-05 01:45:47.293000',13,88),(55,'2023-10-05 01:46:23.320000',15,89),(10,'2023-10-05 01:47:23.704000',15,90),(55,'2023-10-05 01:48:39.989000',15,91),(55,'2023-10-05 11:13:01.493000',3,92),(1,'2023-10-05 11:21:27.451000',3,93),(1,'2023-10-05 11:21:28.314000',3,94),(5,'2023-10-05 11:21:28.939000',3,95),(55,'2023-10-05 11:21:29.734000',3,96),(110,'2023-10-05 11:21:31.031000',3,97),(1,'2023-10-05 11:21:34.771000',3,98),(5,'2023-10-05 11:21:35.180000',3,99),(10,'2023-10-05 11:21:35.577000',3,100),(20,'2023-10-05 11:21:35.916000',3,101),(1,'2023-10-05 11:22:11.662000',3,102),(55,'2023-10-05 11:22:12.300000',3,103),(55,'2023-10-05 11:22:12.470000',3,104),(110,'2023-10-05 11:22:13.337000',3,105),(55,'2023-10-05 11:22:13.691000',3,106),(1,'2023-10-05 11:22:15.757000',3,107),(55,'2023-10-05 11:22:44.496000',3,108),(55,'2023-10-05 11:23:38.384000',3,109),(1,'2023-10-05 04:07:36.160000',5,110),(7,'2023-10-05 06:06:57.775000',11,111),(5,'2023-10-05 06:10:18.102000',11,112),(5,'2023-10-05 08:23:45.113000',5,113),(5,'2023-10-05 17:46:28.263000',11,114),(55,'2023-10-05 08:58:49.299000',1,120),(110,'2023-10-05 10:56:58.874000',1,121),(55,'2023-10-05 10:58:38.486000',1,122),(110,'2023-10-05 11:59:02.686000',6,123),(55,'2023-10-05 21:48:18.830000',3,124),(55,'2023-10-05 14:03:52.603000',1,125),(1,'2023-10-05 14:04:16.244000',1,126),(1,'2023-10-05 14:04:24.217000',1,127),(55,'2023-10-05 23:16:28.303000',3,128),(7,'2023-10-05 23:23:07.472000',11,129),(7,'2023-10-05 23:25:12.967000',11,130),(55,'2023-10-05 23:42:08.288000',3,131),(5,'2023-10-05 14:42:34.053000',11,132),(6,'2023-10-05 14:42:54.152000',11,133),(20,'2023-10-05 14:53:49.794000',16,134),(110,'2023-10-05 14:53:52.658000',16,135),(55,'2023-10-06 00:23:43.230000',3,136),(1,'2023-10-06 00:23:46.691000',3,137),(20,'2023-10-05 15:50:37.005000',17,138),(14,'2023-10-05 16:04:52.922000',17,139),(5,'2023-10-05 17:11:33.158000',16,140),(5,'2023-10-05 17:12:34.544000',16,141),(55,'2023-10-06 09:06:34.652000',3,142),(55,'2023-10-06 09:06:34.772000',3,143),(55,'2023-10-06 09:08:06.382000',3,144),(55,'2023-10-06 09:08:13.152000',3,145),(1,'2023-10-06 09:13:56.664000',3,146),(1,'2023-10-06 09:13:59.887000',3,147),(1,'2023-10-06 09:14:21.928000',3,148),(1,'2023-10-06 09:14:33.947000',3,149),(1,'2023-10-06 09:14:40.267000',3,150),(1,'2023-10-06 09:15:30.087000',3,151),(5,'2023-10-06 09:15:51.240000',3,152),(5,'2023-10-06 09:15:54.456000',3,153),(1,'2023-10-06 09:24:07.399000',3,154),(55,'2023-10-06 09:24:08.684000',3,155),(1,'2023-10-06 00:47:44.969000',12,156),(20,'2023-10-06 00:47:49.714000',12,157),(110,'2023-10-06 00:47:53.672000',12,158),(55,'2023-10-06 01:37:02.585000',18,159),(110,'2023-10-06 01:37:04.673000',18,160);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `score` float NOT NULL,
  `book_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `member_id` bigint DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `created_time` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK70yrt09r4r54tcgkrwbeqenbs` (`book_id`),
  KEY `FKk0ccx5i4ci2wd70vegug074w1` (`member_id`),
  CONSTRAINT `FK70yrt09r4r54tcgkrwbeqenbs` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `FKk0ccx5i4ci2wd70vegug074w1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (5,120,4,1,'이 책을 읽고 오리발을 착용할 수 있게 되었습니다.','https://bangle.s3.ap-northeast-2.amazonaws.com/0e7adf1b-e2f1-465e-b53e-f32be4355412.png','2023-10-06 09:12:43.000000'),(5,120,5,1,'이 책은 진짜입니다.','https://bangle.s3.ap-northeast-2.amazonaws.com/4587ab59-9660-4be5-9328-76c66733b0d5.png','2023-10-06 09:12:43.000000'),(5,32,6,1,'DOGE COIN IS REAL','https://bangle.s3.ap-northeast-2.amazonaws.com/f2088056-17bb-4371-b30c-7d3c3b55a1ce.png','2023-10-06 09:12:43.000000'),(5,22,7,16,'유용한 책입니다','https://bangle.s3.ap-northeast-2.amazonaws.com/0d659f2c-28c7-44af-b3bc-63ba396d6873.png','2023-10-06 09:12:43.000000'),(5,120,8,1,'오리발은 정말 최고입니다.','https://bangle.s3.ap-northeast-2.amazonaws.com/e2dc7314-ec6a-4782-ac2b-470afd3220ae.png','2023-10-06 00:36:14.238113'),(5,49,9,18,'감동적이네요...','https://bangle.s3.ap-northeast-2.amazonaws.com/9dfedd39-4a18-4f3d-8f7b-b85cd9e98486.png','2023-10-06 01:45:08.598903');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wish_list`
--

DROP TABLE IF EXISTS `wish_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wish_list` (
  `delete_wish` tinyint(1) NOT NULL,
  `book_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKmka6dxp0u27ltib75sxvy01ms` (`book_id`),
  KEY `FK8rt1tquybk69qkn942joirym1` (`member_id`),
  CONSTRAINT `FK8rt1tquybk69qkn942joirym1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `FKmka6dxp0u27ltib75sxvy01ms` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wish_list`
--

LOCK TABLES `wish_list` WRITE;
/*!40000 ALTER TABLE `wish_list` DISABLE KEYS */;
INSERT INTO `wish_list` VALUES (0,2,2,3),(0,1,4,6),(0,62,7,11),(0,1,8,1),(0,94,9,11),(0,120,10,1);
/*!40000 ALTER TABLE `wish_list` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-06 10:50:53
