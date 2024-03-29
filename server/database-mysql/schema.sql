-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mvp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mvp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mvp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mvp` ;

-- -----------------------------------------------------
-- Table `mvp`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mvp`.`cv`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`cv` (
  `idcv` INT NOT NULL AUTO_INCREMENT,
  `fullname` VARCHAR(45) NOT NULL,
  `mobile` VARCHAR(45) NOT NULL,
  `dateofbirth` DATE NOT NULL,
  `description` LONGTEXT NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `education` LONGTEXT NOT NULL,
  `skills` LONGTEXT NOT NULL,
  `languages` VARCHAR(255) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`idcv`),
  UNIQUE INDEX `fullname_UNIQUE` (`fullname` ASC) VISIBLE,
  UNIQUE INDEX `mobile_UNIQUE` (`mobile` ASC) VISIBLE,
  INDEX `fk_cv_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_cv_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mvp`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mvp`.`education`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`education` (
  `ideducation` INT NOT NULL AUTO_INCREMENT,
  `school` VARCHAR(255) NULL,
  `diploma` VARCHAR(255) NULL,
  `cv_idcv` INT NOT NULL,
  PRIMARY KEY (`ideducation`),
  INDEX `fk_education_cv1_idx` (`cv_idcv` ASC) VISIBLE,
  CONSTRAINT `fk_education_cv1`
    FOREIGN KEY (`cv_idcv`)
    REFERENCES `mvp`.`cv` (`idcv`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/