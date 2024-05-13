import os

# directoryPath = input("enter the path of directory:")
# fileName = input("enter filename:")
# fileExtension = input("enter file extension:")
# size = int(input("enter size of file:"))

directoryPath = "/home/abhishek-verma/Desktop/Training/Python/practice/"
fileName = "testfile"
fileExtension = "txt"
size = 78


extensions = ["txt","pdf","csv","doc"]

if fileExtension not in extensions:
    print("invalid extension")

if  size < 0: 
    print("invalid size")
    
f = open(f"{directoryPath}{fileName}.{fileExtension}","r")
fileData = f.read()
print(fileData)

edit = input("you want to edit file ? (Y/N)")
if edit == "Y" or edit == "y" :
    action = input("action (copy/move/delete):")
    if action == "copy":
        fcopy = open(f"{directoryPath}{fileName}_copy.{fileExtension}","w")
        fcopy.write(fileData)
    elif action == "move":
        newPath = input("enter file path:")
        fmove = open(f"{newPath}{fileName}.{fileExtension}","w")
        fmove.write(fileData)
        os.remove(f"{directoryPath}{fileName}.{fileExtension}")
    elif action == "delete":
        os.remove(f"{directoryPath}{fileName}.{fileExtension}")
    else:
        print("no such action possible")
f.close()
