import json
x = '{"city":"ahmedabad","state":"gujarat"}'
y = json.loads(x)
print(y)
print(y["city"])
print(y["state"])

v =  {
  "name": "John",
  "age": 30,
  "city": "New York"
}


z = json.dumps(v)
print(z)