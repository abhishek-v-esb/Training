# try:
#     print(x)
# except:
#     print("variable is not defined")

# try:
#     print(x)
# except NameError:
#     print("variable is not defined")

# try:
#     print("hello")
# except:
#     print("variable is not defined")
# else:
#     print("no error,hello printed")

x = -1
if x < 0:
    raise Exception("negative number")