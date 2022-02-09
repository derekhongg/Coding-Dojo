from flask import render_template, redirect, request
from flask_app import app
from ..models.author import Author
from ..models.book import Book

@app.route('/')
def index():
    return redirect('/authors')

@app.route('/authors')
def authors():
    authors = Author.get_all()
    return render_template("authors.html", all_authors = authors)

@app.route('/create/author', methods = ['POST'])
def create_authors():
    Author.save(request.form)
    return redirect('/authors')

@app.route('/authors/<int:id>')
def show_author(id):
    data = {
        "id":id
    }
    return render_template("show_author.html", author = Author.get_author_with_books(data), unfavorited_books = Book.unfavorited_books(data))

@app.route('/join/book',methods=['POST'])
def join_book():
    data = {
        'author_id': request.form['author_id'],
        'book_id': request.form['book_id']
    }
    Author.add_favorite(data)
    return redirect(f"/authors/{request.form['author_id']}")