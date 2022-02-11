from unittest import result
#from winreg import QueryInfoKey
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class Email:
    def __init__(self, data):
        self.id = data['id']
        self.address = data['address']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls,data):
        query = "INSERT into emails (address) VALUES (%(address)s);"
        print(query)
        return connectToMySQL('email_validation').query_db(query,data)
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM emails;"
        results = connectToMySQL('email_validation').query_db(query)
        emails = []
        for row in results:
            emails.append(cls(row))
        print("--------------")
        print(results)
        return emails

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM emails WHERE id = %(id)s;"
        result = connectToMySQL('email_validation').query_db(query, data)
        return cls(result[0])

    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM emails WHERE id = %(id)s"
        return connectToMySQL('email_validation').query_db(query, data)
    
    @classmethod
    def update(cls, data):
        query = "UPDATE emails SET address = %(address)s WHERE id = %(id)s;"
        result = connectToMySQL('email_validation').query_db(query, data)
        print("----------")
        print(result)
        return result
    
    @staticmethod
    def validate_email(email):
        is_valid = True
        # test whether a field matches the patern
        query = "SELECT * FROM emails WHERE address = %(address)s;"
        results = connectToMySQL('email_validation').query_db(query, email)
        if len(results) >= 1:
            flash("Email already in use.")
            is_valid = False
        if not EMAIL_REGEX.match(email['address']):
            flash("Invalid Email Address.")
            is_valid=False
        if len(email['address']) < 1:
            is_valid = False
            flash("Please Enter an Email Address.")
        return is_valid