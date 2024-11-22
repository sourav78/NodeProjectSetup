/*
  Warnings:

  - Added the required column `productId` to the `product_ratings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product_ratings` ADD COLUMN `productId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `product_ratings` ADD CONSTRAINT `product_ratings_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
