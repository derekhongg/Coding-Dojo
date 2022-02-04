#from winreg import QueryInfoKey
from flask_app.config.mysqlconnection import connectToMySQL

class People:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO people (first_name, last_name, age, houses_id) VALUES (%(first_name)s, %(last_name)s, %(age)s, %(houses_id)s);"
        return connectToMySQL('people_houses').query_db(query, data)