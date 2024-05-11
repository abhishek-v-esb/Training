import random

# a = "world"
# x,y,z = 1,"hello",["dff",34,'sdads',a]
# print(x,"|",y,"|",z)
# print(a+y)
# print(x+z[1])
# # print(x + "*" + y + "*" + z)

# *==== Global Var =====

# def test1():
#     global x
#     x = "global variable"
#     y = "local variable"
    
# test1()
# print(x)
# print(y)

# *===== Data Types =====

string = "hello"
number = 45
floatingPoint = 8.9
complex = 4j
list = [3,5,"dfsd","1231"]
tuple = (3,5,"dfsd","1231")
rangeDataset = range(5)
set = {"sdf","fgh","kuy"}
frozen = frozenset({"kjsd","sfsdf","dsf"})
dict = {"name":"abhi","language":"python"}
bool = True
bytes = b"hello"
byteArray = bytearray(6)
memory = memoryview(bytes)
none = None

# print(type(string)) 
# print(type(number)) 
# print(type(floatingPoint)) 
# print(type(complex)) 
# print(type(list)) 
# print(type(rangeDataset)) 
# print(type(set)) 
# print(type(frozen)) 
# print(type(bool)) 
# print(type(bytes)) 
# print(type(byteArray)) 
# print(type(memory)) 
# print(type(none)) 

# *===== type casting =====

toFloat = float(number)
toInt = int(floatingPoint)
toStr = str(floatingPoint)

# print(type(toFloat),toFloat)
# print(type(toInt),toInt)
# print(type(toStr),toStr)

# print(random.randrange(1,10)) # print random number


# *==== inputs ====

inp1 = input("enter:")
print(inp1)
inp2 = int(input("enter a number:"))
print(inp2)
