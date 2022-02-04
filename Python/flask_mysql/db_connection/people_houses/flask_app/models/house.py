from sqlite3 import connect
from flask_app.config.mysqlconnection import connectToMySQL
from .people import People

class House:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.people = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM houses;"
        result = connectToMySQL("people_houses").query_db(query)
        return result
        houses = []

        for houses in results:
            houses.append( cls(houses) )
        return houses
    
    @classmethod
    def save(cls, data):
        query = "INSERT INTO houses (name), VALUES (%(name)s)"
        result = connectToMySQL("people_houses").query_db(query, data)
        return result
    
    @classmethod
    def get_people_in_houses(cls, data):
        query = "SELECT * from houses LEFT JOIN people on houses.id = people.houses_id WHERE houses.id = %(id)s"
        results = connectToMySQL("people_houses").query_db(query, data)
        house = cls(results[0])
        for row in results:
            p = {
                'id': row['people.id'],
                'first_name': row['first_name'],
                'last_name': row['last_name'],
                'age': row['age']
            }
            house.people.append( People(p) )
        return house
    
    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM people WHERE id = %(id)s"
        return connectToMySQL('people_houses').query_db(query,data)