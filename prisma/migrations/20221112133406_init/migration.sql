/*
  Warnings:

  - You are about to drop the column `product_size_id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Product` table. All the data in the column will be lost.
  - Added the required column `name` to the `ProductSize` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `ProductSize` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_product_size_id_fkey`;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `product_size_id`,
    DROP COLUMN `quantity`;

-- AlterTable
ALTER TABLE `ProductSize` ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `_ProductToProductSize` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ProductToProductSize_AB_unique`(`A`, `B`),
    INDEX `_ProductToProductSize_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ProductToProductSize` ADD CONSTRAINT `_ProductToProductSize_A_fkey` FOREIGN KEY (`A`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductToProductSize` ADD CONSTRAINT `_ProductToProductSize_B_fkey` FOREIGN KEY (`B`) REFERENCES `ProductSize`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
