import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="password",
  database="file_filtering"
)

mycursor = mydb.cursor()

# mycursor.execute("create database file_filtering")

# mycursor.execute("create table files(id int auto_increment primary key, file_name varchar(50),directory varchar(1000),size int,extension varchar(50),is_deleted tinyint NOT NULL DEFAULT '0') ")
sql = ("insert into files (file_name,directory,size,extension) values (%s,%s,%s,%s)")
val = ["testfile3","/home/abhishek-verma/Desktop/Training/","1","pdf"]
mycursor.execute(sql,val)
mydb.commit()