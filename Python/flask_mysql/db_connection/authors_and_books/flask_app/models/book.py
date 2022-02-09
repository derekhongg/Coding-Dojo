from sqlite3 import connect
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import author


class Book: 
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        #enter authors later
        self.authors = []
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books"
        result = connectToMySQL("authors_and_books").query_db(query)
        return result
        authors = []

    @classmethod
    def save(cls, data):
        query = "INSERT INTO books(title, num_of_pages) VALUES (%(title)s, %(num_of_pages)s);"
        return connectToMySQL('authors_and_books').query_db(query, data)

    @classmethod
    def get_books_by_id(cls, data):
        query = "SELECT * FROM books LEFT JOIN favorites ON books.id = favorites.book_id LEFT JOIN authors ON authors.id = favorites.author_id WHERE books.id = %(id)s;"
        results = connectToMySQL('authors_and_books').query_db(query, data)
        book = cls(results[0])
        for row_from_db in results:
            author_data = {
                "id": row_from_db["authors.id"],
                "name": row_from_db["name"],
                "created_at": row_from_db["authors.created_at"],
                "updated_at": row_from_db["authors.updated_at"]
            }
            book.authors.append ( author.Author( author_data ) )
        return book
    
    @classmethod
    def unfavorited_books(cls,data):
        query = "SELECT * FROM authors WHERE authors.id NOT IN ( SELECT author_id FROM favorites WHERE book_id = %(id)s );"
        results = connectToMySQL('authors_and_books').query_db(query,data)
        books = []
        for row in results:
            books.append(author.Author(row))
        print(books)
        return books
