use DailyAtHomeDB

Go

Create table users
(
	ID int Primary Key Identity,
	emailid nvarchar(100),
	pwd nvarchar(100)
)