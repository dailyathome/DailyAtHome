use DailyAtHomeDB

Go

Create table categories
(
	id int Primary Key Identity,
	categoty nvarchar(50)
)

Go

CREATE TABLE subcategories (
    id int NOT NULL PRIMARY KEY Identity,
    subcategory nvarchar(50) NOT NULL,
    categoryid int FOREIGN KEY REFERENCES categories(id)
)

 