# ==== write or create file ====

# f = open("testfile.txt","w")
# f.write("new file created")
# f.close()

# *==== read ====

f = open("testfile.txt","r")
print(f.read())
f.close()

# *==== append ====

# f = open("testfile.txt","a")
# f.write("\nnew line added")
# f.close()

# *==== w+ ====

# f = open("testfile2.txt","w+")
# print(f.read())
# f.write("\nnew line added")
# f.close()

# *==== r+ ====

# f = open("testfile2.txt","r+")
# print(f.read())
# f.write("\nnew line added")
# f.close()

# *==== a+ ====

# f = open("testfile2.txt","a+")
# print(f.read())
# f.write("\nnew line added")
# f.close()

# *Program to show various ways to read and
# write data in a text file.

file = open("myfile.txt","w")
L = ["This is Lagos \n","This is Python \n","This is Fcc \n"]

#i assigned ["This is Lagos \n","This is Python \n","This is Fcc \n"]
#to variable L
  
#The \n is placed to indicate End of Line

file.write("Hello There \n")
file.writelines(L)
file.close()
# use the close() to change file access modes



file = open("myfile.txt","r+") 
print("Output of the Read function is ")
print(file.read())
print()
  
# The seek(n) takes the file handle to the nth
# byte from the start.
file.seek(0) 
  
print( "The output of the Readline function is ")
print(file.readline()) 
print()
  
file.seek(0)
  
# To show difference between read and readline

print("Output of Read(12) function is ") 
print(file.read(12))
print()

file.seek(0)
  
print("Output of Readline(8) function is ") 
print(file.readline(8))
  
file.seek(0)
# readlines function
print("Output of Readlines function is ") 
print(file.readlines()) 
print()
file.close()





