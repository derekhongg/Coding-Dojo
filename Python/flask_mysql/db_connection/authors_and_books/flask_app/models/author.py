from sqlite3 import connect
from unittest import result
from flask_app.config.mysqlconnection import connectToMySQL
#from .book import Book - circular import
from flask_app.models import book

class Author: 
    def __init__(self, data):
        self.id  = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.favorites = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors"
        result = connectToMySQL("authors_and_books").query_db(query)
        return result
        authors = []

        for authors in results:
            authors.append( cls(houses) )
        return authors

    @classmethod
    def save(cls, data):
        query = "INSERT INTO authors (name) VALUES (%(name)s)"
        result = connectToMySQL("authors_and_books").query_db(query, data)
        return result
    
    @classmethod
    def get_author_with_books(cls, data):
        query = "SELECT * FROM authors LEFT JOIN favorites ON authors.id = favorites.author_id LEFT JOIN books ON books.id = favorites.book_id WHERE authors.id = %(id)s;"
        results = connectToMySQL('authors_and_books').query_db(query, data)
        author = cls(results[0])
        for row_from_db in results:
            book_data = {
                "id": row_from_db['books.id'],
                "title": row_from_db['title'],
                "num_of_pages": row_from_db['num_of_pages'],
                "created_at": row_from_db['books.created_at'],
                "updated_at": row_from_db['books.updated_at']
            }
            author.favorites.append( book.Book( book_data ))
        return author
    
    @classmethod
    def add_favorite(cls,data):
        query = "INSERT INTO authors_and_books.favorites (author_id, book_id) VALUES (%(author_id)s, %(book_id)s);"
        return connectToMySQL('authors_and_books').query_db(query,data)

    @classmethod
    def unfavorited_authors(cls,data):
        query = "SELECT * FROM authors WHERE authors.id NOT IN ( SELECT author_id FROM favorites WHERE book_id = %(id)s );"
        authors = []
        results = connectToMySQL('authors_and_books').query_db(query,data)
        for row in results:
            authors.append(cls(row))
        print(authors)
        return authors
