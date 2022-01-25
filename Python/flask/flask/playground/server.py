from turtle import color
from flask import Flask, render_template
app = Flask(__name__)    
app.secret_key = "2"

@app.route('/')          
def index():
    return render_template("index.html")

@app.route('/play')
def play():
    return render_template("play.html", num = 3, color = "blue")

@app.route('/play/<int:num>')
def level_two(num):
    return render_template("play.html", num = num, color = "blue")

@app.route('/play/<int:num>/<string:color>')
def level_three(num, color):
    return render_template("play.html", num = num , color = color)

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run( debug = True, port = 5001)    # Run the app in debug mode.
    