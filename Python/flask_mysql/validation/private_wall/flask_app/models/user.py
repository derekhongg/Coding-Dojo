from unittest import result
from flask_app.config.mysqlconnection import connectToMySQL
import re	# the regex module
# create a regular expression object that we'll use later   
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
from flask import flash


class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['created_at']

    @classmethod
    def save(cls, data):
        query = "INSERT into users (first_name, last_name, email, password, age, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, %(age)s, NOW(), NOW())"
        return connectToMySQL('private_wall').query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL('private_wall').query_db(query)
        users = []
        for row in results:
            users.append(cls(row))
        print(results)
        return users
    
    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL('private_wall').query_db(query,data)
        if len(results) < 1:
            return False
        return User(results[0])
    
    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL('private_wall').query_db(query,data)
        if len(results) < 1:
            return False
        return cls(results[0])

    @staticmethod
    def validate_register(user):
        is_valid = True
        SpecialSym =['$', '@', '#', '%', '^', "&", "!"]
        query = "SELECT * FROM users WHERE email = %(email)s"
        results = connectToMySQL ('private_wall').query_db(query, user)
        if len(results) >= 1:
            flash("Email already registered.", "register") #connects with "register, check html
            is_valid = False
        if not EMAIL_REGEX.match(user['email']):
            flash("Invalid Email Address.", "register")
            is_valid = False
        if len(user['first_name']) < 1:
            flash("Please enter your first name.", "register")
            is_valid = False
        if len(user['last_name']) < 1:
            flash("Please enter your last name.", "register")
            is_valid = False
        if len(user['age']) < 1:
            flash("Please enter your age.", "register")
            is_valid = False
        elif int(user['age']) < 13:
            flash("Must be at least 13 years old to register.", "register")
            is_valid = False
        elif int(user['age']) > 160:
            flash("Please enter a valid age.", "register")
            is_valid = False
        if len(user['email']) < 1:
            flash("Please enter an email address.", "register")
            is_valid = False
        if len(user['password']) < 8:
            flash("Password must have at least 8 or more characters.", "register")
            is_valid = False
        if user['password'] != user['confirm']:
            flash("Passwords does not match, please enter again.", "register")
        if not any(char.isupper() for char in user['password']):
            flash('Password should have at least one uppercase letter', "register")
            is_valid = False
        if not any(char in SpecialSym for char in user['password']):
            flash('Password should have at least one of the symbols $, @, #, ^, &, !', "register")
            is_valid = False
        return is_valid