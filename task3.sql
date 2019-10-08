#Напишите запрос создания таблицы "книги" с полями:
CREATE TABLE books
(
  ISBN VARCHAR(15),
  name VARCHAR(255),
  title TEXT,
  year YEAR,
  pub_id INT
);

#Напишите запрос создания таблицы "издатели"
CREATE TABLE publishers
(
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  name VARCHAR(255)
);

#Напишите запрос на внесение следующих значений в таблицу "книги"
INSERT INTO books VALUES
('1234567890123', 'Book 1', 'Good book with great plot', 1989, 1),
('1234567190124', 'Book 2', 'Good book with great', 2014, 2),
('1234567290125', 'Book 3', 'Good book with', 2001, 3),
('1234567390126', 'Book 4', 'Good book', 1995, 1),
('1234567890127', 'Book 5', 'Good', 2018, 2);

#Напишите запрос на внесение следующих значений в таблицу "издатели":
INSERT INTO publishers (name) VALUES
('Pub1'), ('Pub2'), ('Pub3');

#Напишите запрос выборки полей "название" и "год издания" из таблицы "книги" всех записей, где год издания между значениями 2000 и 2015;
SELECT name, year from books where year BETWEEN 2000 AND 2015;

#Напишите запрос выборки полей "название" и "описание" из таблицы "книги" всех записей, где описание больше 20 символов;
SELECT name, title from books where CHAR_LENGTH(title)>20;

#Напишите запрос выборки полей "название" и "isbn" из таблицы "книги" всех записей, где isbn содержит символ "8";
SELECT name, ISBN from books where ISBN like "%8%";

#Напишите запрос выборки полей "название книги" и "название издателя" из таблиц "книги" и "издатели", где название издателя равно "Pub2";
SELECT b.name, p.name FROM books as b
LEFT JOIN publishers as p ON b.pub_id = p.id
where p.name = "Pub2";