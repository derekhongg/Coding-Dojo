from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "secret key"
# our index route will handle rendering our form
@app.route('/')
def index():
    if "count" not in session:
        session['count'] = 0
    else:
        session['count'] += 1
    return render_template("index.html")

@app.route('/test')
def text():
    return "Working!"

@app.route('/destroy_session')
def reset():
    session.clear()
    return redirect('/')

@app.route('/add_two')
def add_two():
    session['count'] += 1
    return redirect('/')

@app.route('/add_any_number')
def add_any_number():
    session['count'] += 4
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True, port = 5001)