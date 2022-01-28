from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "secret key"
# our index route will handle rendering our form
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['favorite'] = request.form['favorite']
    session['comments'] = request.form['comments']
    return redirect("/result")

@app.route('/result')
def show_info():
    return render_template("results.html")

if __name__ == "__main__":
    app.run(debug=True, port = 5001)