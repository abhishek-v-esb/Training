import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="password",
  database="online_auction"
)

# print(mydb) 

mycursor = mydb.cursor()

# *==== db ====

# mycursor.execute("create database pythondb")

# mycursor.execute("show databases")

# for x in mycursor:
#   print(x)


# *==== create and insert ====

# mycursor.execute("create table students(id int auto_increment primary key, first_name varchar(50),last_name varchar(50))")
sql = "insert into students (first_name,last_name) values (%s,%s)"
val = ("abhishek","verma")
# val = [
#   ("ritesh","kumar"),
#   ("jil","patel"),
#   ("shivam","limbachiya")
# ]

# mycursor.executemany(sql,val)
# mycursor.execute(sql,val)
# mydb.commit()
# print(mycursor.rowcount,"record inserted.")
# print("record ID: ",mycursor.lastrowid)

# *==== select ====

# mycursor.execute("select * from auctions")

mycursor.execute("select auctions.id as auction_id,auctions.status_id as status_id,auctions.description as auction_description,starting_time,ending_time,starting_price,winning_bid,title,image as auction_image,image_url \
  from products inner join auctions on products.auction_id = auctions.id inner join product_images on products.id = product_images.product_id \
    where products.status = 'unsold' AND auctions.id=59 ")


result = mycursor.fetchall()
# result = mycursor.fetchone()

# print(result)

for i in result:
  print(i)

