from turtle import color
from flask import Flask, render_template
app = Flask(__name__)    
app.secret_key = "2"

@app.route('/')          
def index():
    return render_template("index.html", row = 8, col = 8, color_one = 'red', color_two = 'black')

@app.route('/<int:x>')
def row(x):
    return render_template("index.html", row = x, col = 8, color_one = 'red', color_two = 'black')

@app.route('/<int:x>/<int:y>')
def row_column(x, y):
    return render_template("index.html", row = x, col = y, color_one = 'red', color_two = 'black')

@app.route('/<int:x>/<int:y>/<string:color_one>')
def add_color(x, y, color_one):
    return render_template("index.html", row = x, col = y, color_one = color_one, color_two = 'black')

@app.route('/<int:x>/<int:y>/<string:color_one>/<string:color_two>')
def add_color_two(x, y, color_one, color_two):
    return render_template("index.html", row = x, col = y, color_one = color_one, color_two = color_two)


@app.route('/test')
def test():
    return "Working!"

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run( debug = True, port = 5001)    # Run the app in debug mode.