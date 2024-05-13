import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="password",
  database="file_filtering"
)

mycursor = mydb.cursor()

directoryPath = input("enter the path of directory:")
fileName = input("enter filename:")
fileExtension = input("enter file extension:")
size = int(input("enter size of file:"))

# directoryPath = "/home/abhishek-verma/Desktop/Training/"
# fileName = "testfile1"
# fileExtension = "txt"
# size = 78


extensions = ["txt","pdf","csv","doc"]


# f = open("Python/practice/testfile.txt","r")
# print(f.read())
# f.close()

if fileExtension not in extensions:
    print("invalid extension")

if  size < 0: 
    print("invalid size")
    

sql = f"select id,file_name,directory,extension from files where (file_name like \"%{fileName}%\" or directory = \"{directoryPath}\" or extension = \"{fileExtension}\" or size = {size}) and is_deleted = 0"

mycursor.execute(sql)
result = mycursor.fetchall()

def fileHandling():
    edit = input("you want to edit file ? (Y/N)")
    if edit == "Y" or edit == "y" :
        action = input("action (copy/move/delete):")
        id = int(input("enter id of file:"))
        # id = 1
        if(action == "delete"):
            mycursor.execute(f"update files set is_deleted = 1 where id = {id}")
            mydb.commit()
            print("file deleted successfully")
        elif(action == "move"):
            newPath = input("enter file path:")
            # newPath = "/home/abhishek-verma/Desktop/Training/Python/practice/"
            mycursor.execute(f"update files set directory = \"{newPath}\" where id = {id}")
            mydb.commit()
            print("file updated successfully")
        elif(action == "copy"):
            global copiedPath
            copiedPath = directoryPath
            print("file copied")
        else:
            print("no such action possible")
    
        
    
if len(result)==0:
    print("no such file exists")
else:
    print(result)
    fileHandling()
    
# print(copiedPath)








    
