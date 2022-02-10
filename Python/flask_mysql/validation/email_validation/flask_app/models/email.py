from unittest import result
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
        return connectToMySQL('email_validation').query_db(query,data)
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM emails;"
        results = connectToMySQL('email_validation').query_db(query)
        emails = []
        for row in results:
            emails.append(cls(row))
        return emails

    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM emails WHERE id = %(id)s"
        return connectToMySQL('email_validation').query_db(query, data)
    
    @staticmethod
    def validate_email(email):
        is_valid = True
        # test whether a field matches the pattern
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