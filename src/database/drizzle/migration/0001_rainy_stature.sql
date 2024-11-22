ALTER TABLE `users` MODIFY COLUMN `email` varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `password` varchar(200) NOT NULL;