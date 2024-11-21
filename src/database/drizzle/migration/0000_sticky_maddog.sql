CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userName` varchar(50) NOT NULL,
	`email` varchar(200) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
