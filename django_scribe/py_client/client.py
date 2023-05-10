import requests

endpoint = "http://localhost:8000/book"
endpoint2 = "http://localhost:8000/author"

response= requests.get(endpoint) 
response2 = requests.get(endpoint2)
print(response.json())
print(response2.json())