tuple1 = ("apple", "banana", "cherry")
tuple2 = ("apple", "banana", "cherry","mango","orange")

# *==== update tuples ====

# temp = list(tuple1)
# temp[1] = "mango"
# tuple1 = tuple(temp)
# print(tuple1)

# temp = ("mango",)
# tuple1 = tuple1 + temp
# print(tuple1)

# del tuple1
# print(tuple1)

# *==== unpack tuples ====

# (one,two,three) = tuple1
# (one,two,*three) = tuple2

# print(one)
# print(two)
# print(three)

# *==== tuple methods ====

# print(tuple2.count("mango"))
# print(tuple2.index("mango"))