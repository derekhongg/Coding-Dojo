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
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def save(cls,data):
        query = "INSERT into users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        return connectToMySQL('login_registration').query_db(query,data)
    
    @classmethod
    def get_all(cls): #get all the emails from database
        query = "SELECT * FROM users;"
        results = connectToMySQL('login_registration').query_db(query)
        users = []
        for row in results:
            users.append(cls(row))
        print(results)
        return users

    @classmethod
    def get_by_email(cls, data): #get email by matching
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL('login_registration').query_db(query, data)
        print(results)
        if len(results) < 1:
            return False
        return cls(results[0])
    
    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL('login_registration').query_db(query, data)
        return cls(results[0])    

    @staticmethod
    def validate_register(user): #validate registration
        is_valid = True
        # test whether a field matches the patern
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL('login_registration').query_db(query, user)
        print(results)
        if len(results) >= 1:
            flash("Email already taken.","register")
            is_valid = False
        if not EMAIL_REGEX.match(user['email']):
            flash("Invalid Email Address.", "register")
            is_valid = False
        if len(user['email']) < 1:
            is_valid = False
            flash("Please Enter an Email Address.")
        if len(user['first_name']) < 2:
            flash("First Name must be at least 2 characters" "register")
            is_valid = False
        if len(user['last_name']) < 2:
            flash("Last Name must be at least 2 characters" "register")
            is_valid = False
        if len(user['password']) < 8:
            flash("Password must be at least 8 characters" "register")
            is_valid = False
        if user['password'] != user['confirm']:
            flash("Password does not match.", "register")
            is_valid = False
        return is_valid
    
    # @staticmethod
    # def validate_login(user): #validate from the login side
    #     is_valid = True
    #     query = "SELECT * FROM users WHERE email = %(email)s;"
    #     results = connectToMySQL('email_validation').query_db(query, user)
    #     return is_valid
    # This is not needed because we are running it on get_by_email class