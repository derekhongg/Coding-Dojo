from flask import render_template, redirect, request
from flask_app import app
from ..models.author import Author
from ..models.book import Book

@app.route('/books')
def books():
    books = Book.get_all()
    return render_template('books.html', all_books = books)

@app.route('/create/book', methods = ['POST'])
def create_book():
    Book.save(request.form)
    return redirect('/books')

@app.route('/books/<int:id>')
def show_book(id):
    data = {
        "id":id
    }
    return render_template("show_book.html", book = Book.get_books_by_id(data), unfavorited_books = Book.unfavorited_books(data))

@app.route('/join/author', methods = ['POST'])
def join_author():
    data = {
        'author_id': request.form['author_id'],
        'book_id': request.form['book_id']
    }
    Author.add_favorite(data)
    return redirect(f"/authors/{request.form['book_id']}")