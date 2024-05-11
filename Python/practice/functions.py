a = 9;
b = -8.4;
str = "hello"
list = [3,21,312,4,6]
list1 = [3,21,312,4,6,False]
list3 = ["dsd","dfgr","fdsf","khjes"]

# *==== built in functions ====

# print(abs(a))
# print(abs(b))
# print(all(list))
# print(all(list1))
# print(bin(a))
# print(dict(c=10,d=12))
# print(eval("a+b"))

# alphabets = ['a', 'b', 'd', 'e', 'i', 'j', 'o']
# def filterVowels(alphabet):
#     vowels = ['a', 'e', 'i', 'o', 'u']
#     if(alphabet in vowels):
#         return True
#     else:
#         return False
# filteredVowels = filter(filterVowels, alphabets)
# for vowel in filteredVowels:
#     print(vowel)

# class Person:
#     name="abhi"
#     year = 2024

# print(getattr(Person,"name"))
# print(Person.name)

# print(len(list3))
# print(max(list))
# print(min(list))
# print(pow(a,b))
# print(sum(list))
# print(sum(list,10))

# *==== lambda functions ====

# lambdaFun = lambda x:x*4
# print(lambdaFun(10))

# *==== user defined functions ====


def reverse(str):
    ans = ''
    for i in range(0,len(str)):
        if(str[i] != str[len(str)-1-i]):
            return False
    return True

# print(reverse("mnm"))

# *==== return and parameter annotation ====

# def add(num1: int, num2: int) -> int:
#     return num1 + num2

# num1, num2 = 5, 15
# print(add(num1,num2))

# *==== keyword only and postional only args ====

# def function(x,/):
#     print(x)
    
# function(4)

# def function(*,x):
#     print(x)

# function(x=5)

# def my_function(a, b, /, *, c, d):
#   print(a + b + c + d)

# my_function(5, 6, c = 7, d = 8) 

# *==== variable arguments ====

# def newFun(*argv):
#     for arg in argv:
#         print(arg)

# newFun("hello","to","the",1)

# def newFun(**kwargv):
#     for arg in kwargv:
#         print(arg)

# newFun(hello ="hello",to="to",the="the",var = 1)