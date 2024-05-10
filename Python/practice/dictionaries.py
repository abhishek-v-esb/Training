dict1 = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

dict2 = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964,
  "colors":["red","yellow","green"]
}

dict3 = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
} 

x = ('key1', 'key2', 'key3')
y = 0


# *==== update items ====

# print(dict1["brand"])
# dict1["year"] = 2032
# print(dict1)

# *==== dict methods ====

# print(dict.fromkeys(x,y))
# print(dict3.get("child1"))
# print(dict1.items())
# print(dict1.keys())
# print(dict1.pop("model"))
# print(dict1.popitem())
# print(dict1.setdefault("color","white"))
# dict1.update({"color":"white"})
# print(dict1)
# print(dict1.values())