from flask import Flask, render_template

app = Flask(__name__)    

@app.route('/')          
def index():
    return render_template("index.html")

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/say/<string:name>')
def say_hi(name):
    return "Hi, " + name.capitalize() + "!"

@app.route('/hello/<string:name>/<int:num>')
def hello(name, num):
    return render_template("hello.html", name = name, num = num)

@app.route('/repeat/<int:num>/<string:word>')
def repeat(num, word):
    return f"{num * word}"

if __name__=="__main__":    
    app.run(debug=True)    