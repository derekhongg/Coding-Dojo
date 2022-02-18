from datetime import datetime
from sqlite3 import connect
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from datetime import datetime

class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description =  data['description']
        self.instructions = data['instructions']
        self.under30 = data['under30']
        self.date_made = data['date_made']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = "INSERT into recipes (name, description, instructions, under30, date_made, user_id) VALUES (%(name)s, %(description)s, %(instructions)s ,%(under30)s, %(date_made)s, %(user_id)s);"
        results = connectToMySQL('recipes').query_db(query, data)
        return results
    
    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM recipes WHERE recipes.id = %(id)s"
        results = connectToMySQL('recipes').query_db(query, data)
        return results
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes"
        results = connectToMySQL('recipes').query_db(query)
        recipes = []
        for recipe in results:
            recipes.append( cls(recipe) )
        return recipes
    
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM recipes WHERE id = %(id)s"
        results = connectToMySQL('recipes').query_db(query, data)
        print (results)
        return cls(results[0]) #remember with cls, data to return cls(results[0])
    
    @classmethod
    def update(cls, data):
        query = "UPDATE recipes SET name=%(name)s, description=%(description)s, instructions=%(instructions)s, under30=%(under30)s, date_made=%(date_made)s, updated_at = NOW() WHERE id = %(id)s"
        results = connectToMySQL('recipes').query_db(query, data)
        #print(results)
        return results
    
    @staticmethod
    def validate_recipe(recipe):
        is_valid = True
        if len(recipe['name']) < 1:
            flash("Please enter a name for the recipe.", "recipe")
            is_valid = False
        if len(recipe['instructions']) < 5:
            flash("Please enter 5 characters for the instructions.", "recipe")
            is_valid = False
        if len(recipe['description']) < 5:
            flash("Please enter 5 characters for the description", "recipe")
            is_valid = False
        if recipe['date_made'] == "":
            flash("Please enter a date made for the recipe.", "recipe")
            is_valid = False
        return is_valid