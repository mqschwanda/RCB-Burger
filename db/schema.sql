/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0  ; */
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS  ; */
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS  ; */
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0  ; */
/*!40101 SET NAMES utf8  ; */
/*!40101 SET SQL_MODE='' ; */
/*!40101 SET SQL_MODE=@OLD_SQL_MODE  ; */
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO'  ; */
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES  ; */
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0  ; */

-- Create the `burgers_db` only if it does not already exist
CREATE DATABASE /*!32312*/ IF NOT EXISTS `zqll9x4qb9f0n9lv` /*!40100 DEFAULT CHARACTER SET latin1 */;
-- Use the the `burgers_db` database
USE `zqll9x4qb9f0n9lv`;
-- The `burgers` table will be deleted is it already exists in the `burgers_db` database.
DROP TABLE IF EXISTS `burgers`;
-- Table structure for table `burgers` --
CREATE TABLE `burgers` (
  `id` INT(10) NOT NULL AUTO_INCREMENT, -- an auto incrementing int that serves as the primary key.
  `burger_name` VARCHAR(255) DEFAULT 'Burger', -- a string.
  `devoured` TINYINT(1) DEFAULT '0', -- a boolean.
  `date` DATETIME DEFAULT CURRENT_TIMESTAMP, -- a TIMESTAMP.
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
